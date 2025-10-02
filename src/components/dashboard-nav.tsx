import Link from 'next/link';

import { Button } from '@/components/ui/button';

export function DashboardNav() {
  return (
    <nav className='border-b border-primary-200 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center space-x-8'>
            <Link
              href='/dashboard'
              className='text-xl font-bold text-primary-900'
            >
              Dr. Aqua Dashboard
            </Link>
            <div className='flex space-x-4'>
              <Link
                href='/dashboard'
                className='text-primary-700 hover:text-primary-900'
              >
                Overview
              </Link>
              <Link
                href='/dashboard/products'
                className='text-primary-700 hover:text-primary-900'
              >
                Products
              </Link>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <Button asChild variant='outline'>
              <Link href='/'>Back to Site</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
