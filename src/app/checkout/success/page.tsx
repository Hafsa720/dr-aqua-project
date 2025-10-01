import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function CheckoutSuccessPage() {
  return (
    <div className='container mx-auto px-4 py-16'>
      <Card className='max-w-md mx-auto text-center'>
        <CardContent className='pt-12 pb-12'>
          <div className='w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6'>
            <CheckCircle className='h-10 w-10 text-secondary' />
          </div>
          <h1 className='text-3xl font-bold mb-2'>Order Confirmed!</h1>
          <p className='text-muted-foreground mb-2'>
            Thank you for your purchase
          </p>
          <p className='text-sm text-muted-foreground mb-8'>
            We've sent a confirmation email with your order details. Your water
            filtration system will be shipped within 2-3 business days.
          </p>
          <div className='space-y-3'>
            <Button asChild size='lg' className='w-full'>
              <Link href='/shop'>Continue Shopping</Link>
            </Button>
            <Button
              asChild
              variant='outline'
              size='lg'
              className='w-full bg-transparent'
            >
              <Link href='/'>Back to Home</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
