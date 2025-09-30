'use client';

import { Monitor, Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { Theme } from '@/lib/hooks/useTheme';
import { cn } from '@/lib/utils';

import { useThemeContext } from './ThemeProvider';

const themeOptions: Array<{
  value: Theme;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}> = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Monitor },
];
export const ThemeToggle = () => {
  const { theme, setTheme, mounted } = useThemeContext();

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <Button
        variant='ghost'
        size='icon'
        className={cn(
          'h-9 w-9 rounded-md',
          'text-muted-foreground hover:text-foreground',
          'hover:bg-accent focus-visible:bg-accent',
          'border-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        )}
        disabled
        aria-label='Loading theme toggle'
      >
        <Sun className='h-4 w-4 transition-all' />
        <span className='sr-only'>Loading theme toggle</span>
      </Button>
    );
  }

  const currentOption =
    themeOptions.find((option) => option.value === theme) ?? themeOptions[0];
  const CurrentIcon = currentOption?.icon ?? Sun;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className={cn(
            'h-9 w-9 rounded-md',
            'text-muted-foreground hover:text-foreground',
            'hover:bg-accent focus-visible:bg-accent',
            'border-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          )}
          aria-label={`Current theme: ${currentOption?.label ?? 'Unknown'}. Click to change theme.`}
        >
          <CurrentIcon className='h-4 w-4 transition-all' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-40'>
        {themeOptions.map((option) => {
          const OptionIcon = option.icon;
          const isSelected = option.value === theme;

          return (
            <DropdownMenuItem
              key={option.value}
              onClick={() => setTheme(option.value)}
              className={cn(
                'flex items-center gap-2 cursor-pointer',
                isSelected && 'bg-accent text-accent-foreground',
              )}
            >
              <OptionIcon className='h-4 w-4' />
              <span className='flex-1'>{option.label}</span>
              {isSelected && (
                <div className='h-2 w-2 rounded-full bg-primary' />
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
