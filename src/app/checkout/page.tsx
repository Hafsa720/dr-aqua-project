'use client';

import { CreditCard, Lock } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import type React from 'react';
import { useState } from 'react';

import { useCart } from '@/components/cart-provider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/contexts/LanguageContext';
import { getProductById } from '@/data/products';

export default function CheckoutPage() {
  const { items, clearCart, getTotalPrice } = useCart();
  const total = getTotalPrice();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const { language } = useLanguage();
  const langKey: 'en' | 'ur' = language === 'ur' ? 'ur' : 'en';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    clearCart();
    router.push('/checkout/success');
  };

  if (items.length === 0) {
    router.push('/cart');
    return null;
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-5xl mx-auto space-y-8'>
        <div className='text-center space-y-2'>
          <h1 className='text-3xl font-bold'>Checkout</h1>
          <p className='text-muted-foreground'>Complete your order securely</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='grid lg:grid-cols-3 gap-8'>
            {/* Checkout Form */}
            <div className='lg:col-span-2 space-y-6'>
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <div className='grid md:grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='firstName'>First Name</Label>
                      <Input id='firstName' required />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='lastName'>Last Name</Label>
                      <Input id='lastName' required />
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='email'>Email</Label>
                    <Input id='email' type='email' required />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='phone'>Phone Number</Label>
                    <Input id='phone' type='tel' required />
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Address */}
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Address</CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <div className='space-y-2'>
                    <Label htmlFor='address'>Street Address</Label>
                    <Input id='address' required />
                  </div>
                  <div className='grid md:grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='city'>City</Label>
                      <Input id='city' required />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='state'>State</Label>
                      <Input id='state' required />
                    </div>
                  </div>
                  <div className='grid md:grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='zip'>ZIP Code</Label>
                      <Input id='zip' required />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='country'>Country</Label>
                      <Input
                        id='country'
                        defaultValue='United States'
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Information */}
              <Card>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <CreditCard className='h-5 w-5' />
                    Payment Information
                  </CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <div className='space-y-2'>
                    <Label htmlFor='cardNumber'>Card Number</Label>
                    <Input
                      id='cardNumber'
                      placeholder='1234 5678 9012 3456'
                      required
                    />
                  </div>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='expiry'>Expiry Date</Label>
                      <Input id='expiry' placeholder='MM/YY' required />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='cvv'>CVV</Label>
                      <Input id='cvv' placeholder='123' required />
                    </div>
                  </div>
                  <div className='flex items-center gap-2 text-sm text-muted-foreground pt-2'>
                    <Lock className='h-4 w-4' />
                    <span>
                      Your payment information is secure and encrypted
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className='lg:col-span-1'>
              <Card className='sticky top-24'>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  {/* Items */}
                  <div className='space-y-3'>
                    {items.map((item) => {
                      const product = getProductById(item.id);
                      const displayName = product
                        ? product.name[langKey]
                        : item.name;
                      const displayImage = product
                        ? product.image
                        : item.image || '/placeholder.svg';
                      return (
                        <div key={item.id} className='flex gap-3'>
                          <Image
                            src={displayImage}
                            alt={displayName}
                            width={64}
                            height={64}
                            className='w-16 h-16 object-cover rounded'
                          />
                          <div className='flex-1 min-w-0'>
                            <p className='text-sm font-medium truncate'>
                              {displayName}
                            </p>
                            <p className='text-xs text-muted-foreground'>
                              Qty: {item.quantity || 1}
                            </p>
                            <p className='text-sm font-semibold text-primary'>
                              ${item.price * (item.quantity || 1)}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <Separator />

                  {/* Totals */}
                  <div className='space-y-2'>
                    <div className='flex justify-between text-sm'>
                      <span className='text-muted-foreground'>Subtotal</span>
                      <span className='font-medium'>${total.toFixed(2)}</span>
                    </div>
                    <div className='flex justify-between text-sm'>
                      <span className='text-muted-foreground'>Shipping</span>
                      <span className='font-medium text-secondary'>Free</span>
                    </div>
                    <div className='flex justify-between text-sm'>
                      <span className='text-muted-foreground'>Tax</span>
                      <span className='font-medium'>
                        ${(total * 0.08).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <Separator />

                  <div className='flex justify-between text-lg font-bold'>
                    <span>Total</span>
                    <span className='text-primary'>
                      ${(total * 1.08).toFixed(2)}
                    </span>
                  </div>

                  <Button
                    type='submit'
                    className='w-full'
                    size='lg'
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Processing...' : 'Complete Order'}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
