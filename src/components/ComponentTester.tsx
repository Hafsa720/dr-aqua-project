'use client';

import { Code, Copy, Download, Eye, RotateCcw, Settings } from 'lucide-react';
import React, { useCallback, useState } from 'react';

import { useToggle } from '@/lib/hooks/useToggle';
import { cn } from '@/lib/utils';

export interface PropControl {
  type: 'text' | 'number' | 'boolean' | 'select' | 'color' | 'range';
  label: string;
  defaultValue?: any;
  options?: Array<{ label: string; value: any }>;
  min?: number;
  max?: number;
  step?: number;
}

export interface ComponentTesterProps {
  component: React.ComponentType<any>;
  componentName: string;
  description?: string;
  propControls?: Record<string, PropControl>;
  defaultProps?: Record<string, any>;
  variants?: Array<{
    name: string;
    props: Record<string, any>;
    description?: string;
  }>;
  className?: string;
}

/**
 * Component Testing Playground
 *
 * Features:
 * - Interactive prop controls
 * - Predefined variants
 * - Code generation
 * - Export/import configurations
 * - Visual testing modes
 * - Props history
 * - Only visible in development
 */
const ComponentTester: React.FC<ComponentTesterProps> = ({
  component: Component,
  componentName,
  description,
  propControls = {},
  defaultProps = {},
  variants = [],
  className,
}) => {
  const [currentProps, setCurrentProps] = useState(defaultProps);
  const [showControls, { toggle: toggleControls }] = useToggle(true);
  const [showCode, { toggle: _toggleCode }] = useToggle(false);
  const [viewMode, setViewMode] = useState<'preview' | 'code' | 'both'>(
    'preview',
  );
  const [_propsHistory, setPropsHistory] = useState<
    Array<{ timestamp: Date; props: any }>
  >([]);

  const updateProp = useCallback((key: string, value: any) => {
    setCurrentProps((prev) => {
      const newProps = { ...prev, [key]: value };
      setPropsHistory((history) => [
        ...history.slice(-9), // Keep last 10 entries
        { timestamp: new Date(), props: newProps },
      ]);
      return newProps;
    });
  }, []);

  const resetProps = useCallback(() => {
    setCurrentProps(defaultProps);
  }, [defaultProps]);

  const loadVariant = useCallback(
    (variantProps: Record<string, any>) => {
      setCurrentProps({ ...defaultProps, ...variantProps });
    },
    [defaultProps],
  );

  const generateCode = useCallback(() => {
    const propsString = Object.entries(currentProps)
      .map(([key, value]) => {
        if (typeof value === 'string') {
          return `  ${key}="${value}"`;
        }
        if (typeof value === 'boolean') {
          return value ? `  ${key}` : `  ${key}={false}`;
        }
        return `  ${key}={${JSON.stringify(value)}}`;
      })
      .join('\n');

    return `<${componentName}${propsString ? '\n' + propsString + '\n' : ''}>
  {/* Add children here */}
</${componentName}>`;
  }, [componentName, currentProps]);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(generateCode());
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const exportConfig = () => {
    const config = {
      componentName,
      props: currentProps,
      timestamp: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(config, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${componentName}-config.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const renderPropControl = (key: string, control: PropControl) => {
    const value = currentProps[key] ?? control.defaultValue;

    switch (control.type) {
      case 'text':
        return (
          <input
            type='text'
            value={value || ''}
            onChange={(e) => updateProp(key, e.target.value)}
            className='w-full px-2 py-1 text-xs border border-gray-300 rounded bg-white'
          />
        );

      case 'number':
        return (
          <input
            type='number'
            value={value || 0}
            min={control.min}
            max={control.max}
            step={control.step}
            onChange={(e) => updateProp(key, Number(e.target.value))}
            className='w-full px-2 py-1 text-xs border border-gray-300 rounded bg-white'
          />
        );

      case 'boolean':
        return (
          <label className='flex items-center gap-2 cursor-pointer'>
            <input
              type='checkbox'
              checked={!!value}
              onChange={(e) => updateProp(key, e.target.checked)}
              className='rounded'
            />
            <span className='text-xs'>{value ? 'true' : 'false'}</span>
          </label>
        );

      case 'select':
        return (
          <select
            value={value}
            onChange={(e) => {
              const option = control.options?.find(
                (o) => String(o.value) === e.target.value,
              );
              updateProp(key, option?.value);
            }}
            className='w-full px-2 py-1 text-xs border border-gray-300 rounded bg-white'
          >
            {control.options?.map((option) => (
              <option key={String(option.value)} value={String(option.value)}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'color':
        return (
          <div className='flex gap-2'>
            <input
              type='color'
              value={value || '#000000'}
              onChange={(e) => updateProp(key, e.target.value)}
              className='w-8 h-6 border border-gray-300 rounded'
            />
            <input
              type='text'
              value={value || ''}
              onChange={(e) => updateProp(key, e.target.value)}
              className='flex-1 px-2 py-1 text-xs border border-gray-300 rounded bg-white'
            />
          </div>
        );

      case 'range':
        return (
          <div className='space-y-1'>
            <input
              type='range'
              min={control.min || 0}
              max={control.max || 100}
              step={control.step || 1}
              value={value || control.min || 0}
              onChange={(e) => updateProp(key, Number(e.target.value))}
              className='w-full'
            />
            <div className='text-xs text-gray-500 text-center'>{value}</div>
          </div>
        );

      default:
        return null;
    }
  };

  // Don't render in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div
      className={cn(
        'bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden',
        className,
      )}
    >
      {/* Header */}
      <div className='px-4 py-3 bg-gray-50 border-b border-gray-200'>
        <div className='flex items-center justify-between'>
          <div>
            <h3 className='text-lg font-semibold text-gray-900'>
              {componentName}
            </h3>
            {description && (
              <p className='text-sm text-gray-600 mt-1'>{description}</p>
            )}
          </div>
          <div className='flex items-center gap-2'>
            <button
              onClick={toggleControls}
              className='p-2 hover:bg-gray-200 rounded transition-colors'
              title='Toggle Controls'
            >
              <Settings className='w-4 h-4' />
            </button>
            <button
              onClick={() =>
                setViewMode(viewMode === 'preview' ? 'code' : 'preview')
              }
              className='p-2 hover:bg-gray-200 rounded transition-colors'
              title='Toggle View Mode'
            >
              {viewMode === 'preview' ? (
                <Code className='w-4 h-4' />
              ) : (
                <Eye className='w-4 h-4' />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className='flex'>
        {/* Controls Panel */}
        {showControls && (
          <div className='w-80 border-r border-gray-200 bg-gray-50'>
            <div className='p-4 space-y-4 max-h-96 overflow-y-auto'>
              {/* Variants */}
              {variants.length > 0 && (
                <div>
                  <h4 className='text-sm font-semibold text-gray-700 mb-2'>
                    Variants
                  </h4>
                  <div className='space-y-1'>
                    {variants.map((variant, index) => (
                      <button
                        key={index}
                        onClick={() => loadVariant(variant.props)}
                        className='w-full text-left px-3 py-2 text-xs bg-white border border-gray-200 rounded hover:bg-gray-100 transition-colors'
                      >
                        <div className='font-medium'>{variant.name}</div>
                        {variant.description && (
                          <div className='text-gray-500 mt-1'>
                            {variant.description}
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Prop Controls */}
              {Object.keys(propControls).length > 0 && (
                <div>
                  <h4 className='text-sm font-semibold text-gray-700 mb-2'>
                    Props
                  </h4>
                  <div className='space-y-3'>
                    {Object.entries(propControls).map(([key, control]) => (
                      <div key={key}>
                        <label className='block text-xs font-medium text-gray-700 mb-1'>
                          {control.label}
                        </label>
                        {renderPropControl(key, control)}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className='flex gap-2 pt-2 border-t border-gray-200'>
                <button
                  onClick={resetProps}
                  className='flex items-center gap-1 px-2 py-1 text-xs bg-gray-200 hover:bg-gray-300 rounded transition-colors'
                >
                  <RotateCcw className='w-3 h-3' />
                  Reset
                </button>
                <button
                  onClick={copyCode}
                  className='flex items-center gap-1 px-2 py-1 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors'
                >
                  <Copy className='w-3 h-3' />
                  Copy
                </button>
                <button
                  onClick={exportConfig}
                  className='flex items-center gap-1 px-2 py-1 text-xs bg-green-600 hover:bg-green-700 text-white rounded transition-colors'
                >
                  <Download className='w-3 h-3' />
                  Export
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Preview/Code Area */}
        <div className='flex-1'>
          {viewMode === 'preview' && (
            <div className='p-6'>
              <div className='border border-dashed border-gray-300 rounded-lg p-4 min-h-32 flex items-center justify-center'>
                <Component {...currentProps} />
              </div>
            </div>
          )}

          {viewMode === 'code' && (
            <div className='p-4'>
              <pre className='bg-gray-100 p-4 rounded text-sm overflow-x-auto'>
                <code>{generateCode()}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComponentTester;
