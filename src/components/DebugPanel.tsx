'use client';

import {
  Bug,
  ChevronDown,
  ChevronRight,
  Copy,
  Eye,
  EyeOff,
  Monitor,
  Smartphone,
  Tablet,
} from 'lucide-react';
import React, {useState } from 'react';

import { useToggle } from '@/lib/hooks/useToggle';
import { useWindowSize } from '@/lib/hooks/useWindowSize';
import { cn } from '@/lib/utils';

interface DebugItem {
  label: string;
  value: any;
  type?: 'object' | 'array' | 'function' | 'primitive';
}

interface DebugPanelProps {
  data?: Record<string, any>;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  defaultOpen?: boolean;
  showWindowInfo?: boolean;
  showPerformance?: boolean;
  className?: string;
}

/**
 * Development Debug Panel Component
 *
 * Features:
 * - Displays component state and props
 * - Shows window/viewport information
 * - Performance monitoring
 * - JSON tree viewer with collapsible objects
 * - Copy data to clipboard
 * - Responsive design indicator
 * - Only visible in development mode
 */
const DebugPanel: React.FC<DebugPanelProps> = ({
  data = {},
  position = 'bottom-right',
  defaultOpen = false,
  showWindowInfo = true,
  showPerformance: _showPerformance = false,
  className,
}) => {
  const [isOpen, { toggle: toggleOpen }] = useToggle(defaultOpen);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [copied, setCopied] = useState<string | null>(null);
  const windowSize = useWindowSize();

  // Don't render in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  const toggleExpanded = (key: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  const copyToClipboard = async (value: any, label: string) => {
    try {
      const text = typeof value === 'string' ? value : JSON.stringify(value, null, 2);
      await navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  const formatValue = (value: any): string => {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    if (typeof value === 'function') return `ƒ ${value.name || 'anonymous'}()`;
    if (typeof value === 'object') return Array.isArray(value) ? `Array(${value.length})` : 'Object';
    if (typeof value === 'string') return `"${value}"`;
    return String(value);
  };

  const getValueType = (value: any): DebugItem['type'] => {
    if (typeof value === 'function') return 'function';
    if (Array.isArray(value)) return 'array';
    if (typeof value === 'object' && value !== null) return 'object';
    return 'primitive';
  };

  const renderValue = (value: any, key: string, depth = 0): React.ReactNode => {
    const type = getValueType(value);
    const isExpanded = expandedItems.has(key);
    const canExpand = type === 'object' || type === 'array';

    if (type === 'primitive' || type === 'function') {
      return (
        <div className="flex items-center gap-2 group">
          <span className={cn(
            'font-mono text-xs',
            type === 'function' && 'text-purple-600 dark:text-purple-400',
            typeof value === 'string' && 'text-green-600 dark:text-green-400',
            typeof value === 'number' && 'text-blue-600 dark:text-blue-400',
            typeof value === 'boolean' && 'text-orange-600 dark:text-orange-400',
            (value === null || value === undefined) && 'text-gray-500 dark:text-gray-400'
          )}>
            {formatValue(value)}
          </span>
          <button
            onClick={() => copyToClipboard(value, key)}
            className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
          >
            <Copy className="w-3 h-3" />
          </button>
        </div>
      );
    }

    return (
      <div>
        <div className="flex items-center gap-2 group">
          {canExpand && (
            <button
              onClick={() => toggleExpanded(key)}
              className="flex items-center gap-1 text-xs font-mono hover:bg-gray-100 dark:hover:bg-gray-700 px-1 rounded"
            >
              {isExpanded ? (
                <ChevronDown className="w-3 h-3" />
              ) : (
                <ChevronRight className="w-3 h-3" />
              )}
              <span className="text-gray-600 dark:text-gray-400">
                {formatValue(value)}
              </span>
            </button>
          )}
          <button
            onClick={() => copyToClipboard(value, key)}
            className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
          >
            <Copy className="w-3 h-3" />
          </button>
        </div>

        {isExpanded && (
          <div className="ml-4 mt-1 border-l border-gray-200 dark:border-gray-700 pl-2">
            {type === 'array' ? (
              value.map((item: any, index: number) => (
                <div key={index} className="mb-1">
                  <span className="text-xs font-mono text-gray-500 dark:text-gray-400 mr-2">
                    [{index}]:
                  </span>
                  {renderValue(item, `${key}[${index}]`, depth + 1)}
                </div>
              ))
            ) : (
              Object.entries(value).map(([subKey, subValue]) => (
                <div key={subKey} className="mb-1">
                  <span className="text-xs font-mono text-gray-600 dark:text-gray-400 mr-2">
                    {subKey}:
                  </span>
                  {renderValue(subValue, `${key}.${subKey}`, depth + 1)}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    );
  };

  const getBreakpointInfo = () => {
    if (!windowSize.width) return null;

    if (windowSize.width < 640) return { name: 'Mobile', icon: Smartphone, color: 'text-red-500' };
    if (windowSize.width < 768) return { name: 'SM', icon: Tablet, color: 'text-orange-500' };
    if (windowSize.width < 1024) return { name: 'MD', icon: Tablet, color: 'text-yellow-500' };
    if (windowSize.width < 1280) return { name: 'LG', icon: Monitor, color: 'text-green-500' };
    return { name: 'XL+', icon: Monitor, color: 'text-blue-500' };
  };

  const positionClasses = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
  };

  const breakpointInfo = getBreakpointInfo();

  return (
    <div className={cn(
      'fixed z-[9999] max-w-sm',
      positionClasses[position],
      className
    )}>
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-2 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center gap-2">
            <Bug className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Debug Panel
            </span>
            {breakpointInfo && (
              <div className="flex items-center gap-1 px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs">
                <breakpointInfo.icon className={cn('w-3 h-3', breakpointInfo.color)} />
                <span className="text-gray-700 dark:text-gray-300">
                  {breakpointInfo.name}
                </span>
              </div>
            )}
          </div>
          <button
            onClick={toggleOpen}
            className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors"
          >
            {isOpen ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Content */}
        {isOpen && (
          <div className="max-h-96 overflow-y-auto">
            <div className="p-3 space-y-3">
              {/* Window Information */}
              {showWindowInfo && (
                <div>
                  <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Window Info
                  </h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Width:</span>
                      <span className="font-mono">{windowSize.width}px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Height:</span>
                      <span className="font-mono">{windowSize.height}px</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Custom Data */}
              {Object.keys(data).length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Debug Data
                  </h4>
                  <div className="space-y-2">
                    {Object.entries(data).map(([key, value]) => (
                      <div key={key} className="text-xs">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-gray-700 dark:text-gray-300">
                            {key}:
                          </span>
                          {copied === key && (
                            <span className="text-green-600 dark:text-green-400 text-xs">
                              Copied!
                            </span>
                          )}
                        </div>
                        <div className="ml-2">
                          {renderValue(value, key)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DebugPanel;