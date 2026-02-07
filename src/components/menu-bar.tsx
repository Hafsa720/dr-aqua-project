'use client';

import { Bell, Home, Settings, User } from 'lucide-react';
import type * as React from 'react';

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  gradient: string;
  iconColor: string;
}

const menuItems: MenuItem[] = [
  {
    icon: <Home className='h-5 w-5' />,
    label: 'Home',
    href: '#',
    gradient:
      'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)',
    iconColor: 'text-blue-500',
  },
  {
    icon: <Bell className='h-5 w-5' />,
    label: 'Notifications',
    href: '#',
    gradient:
      'radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)',
    iconColor: 'text-orange-500',
  },
  {
    icon: <Settings className='h-5 w-5' />,
    label: 'Settings',
    href: '#',
    gradient:
      'radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)',
    iconColor: 'text-green-500',
  },
  {
    icon: <User className='h-5 w-5' />,
    label: 'Profile',
    href: '#',
    gradient:
      'radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)',
    iconColor: 'text-red-500',
  },
];

export function MenuBar() {
  return (
    <nav className='p-2 rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-border/40 shadow-lg relative overflow-hidden group'>
      <div className='absolute -inset-2 bg-gradient-radial from-transparent via-blue-400/20 to-transparent rounded-3xl z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
      <ul className='flex items-center gap-2 relative z-10'>
        {menuItems.map((item) => (
          <li key={item.label} className='relative'>
            <div className='block rounded-xl overflow-visible group/item relative perspective-600'>
              <div
                className='absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/item:opacity-100 group-hover/item:scale-200 transition-all duration-500'
                style={{
                  background: item.gradient,
                  borderRadius: '16px',
                }}
              />
              <a
                href={item.href}
                className='flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent text-muted-foreground group-hover/item:text-foreground transition-all duration-300 rounded-xl hover:scale-105 active:scale-95'
              >
                <span
                  className={`transition-colors duration-300 group-hover/item:${item.iconColor} text-foreground`}
                >
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
