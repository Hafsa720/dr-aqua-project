'use client';

import Link from 'next/link';
import {
  ArrowRight,
  MessageCircle,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart, type CartItem } from '@/components/cart-provider';

export default function CartPage() {
  const { items, getTotalPrice, updateQuantity, removeItem, clearCart } =
    useCart();
  const total = getTotalPrice();

  const generateWhatsAppMessage = () => {
    const companyName = 'Dr. Aqua';
    const companyPhone = '+923497415390'; // Your WhatsApp business number

    let message = `السلام علیکم! 🌊\n\n`;
    message += `I hope you're doing well. I'm interested in purchasing water filtration systems from *${companyName}* and would like to place an order.\n\n`;
    message += `💧 *My Selected Items:*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

    items.forEach((item: CartItem, index: number) => {
      const quantity = item.quantity || 1;
      message += `${index + 1}. 🔹 *${item.name}*\n`;
      message += `   💰 Price: $${item.price}\n`;
      message += `   📦 Quantity: ${quantity}\n`;
      message += `   💵 Subtotal: $${(item.price * quantity).toFixed(2)}\n\n`;
    });

    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `💎 *Total Amount: $${total.toFixed(2)}*\n\n`;
    message += `📞 Could you please provide me with:\n`;
    message += `• Payment options available\n`;
    message += `• Delivery timeframe\n`;
    message += `• Installation services (if available)\n`;
    message += `• Any current promotions or discounts\n\n`;
    message += `I'm ready to proceed with this order. Please let me know the next steps.\n\n`;
    message += `Thank you for your time! 🙏\n`;
    message += `Looking forward to your response.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${companyPhone}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className='container mx-auto px-4 py-16'>
        <Card className='max-w-md mx-auto text-center border-primary-200'>
          <CardContent className='pt-12 pb-12'>
            <ShoppingBag className='h-16 w-16 text-primary-400 mx-auto mb-4' />
            <h2 className='text-2xl font-bold mb-2 text-primary-900'>
              Your Cart is Empty
            </h2>
            <p className='text-primary-700 mb-6'>
              Looks like you haven't added any water filtration systems to your
              cart yet.
            </p>
            <Button
              asChild
              size='lg'
              className='bg-primary-500 hover:bg-primary-600'
            >
              <Link href='/shop'>
                Start Shopping <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='space-y-8'>
        {/* Header */}
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-bold text-primary-900'>Shopping Cart</h1>
          <Button
            variant='outline'
            onClick={clearCart}
            className='bg-transparent border-primary-300 text-primary-700 hover:bg-primary-50'
          >
            <Trash2 className='h-4 w-4 mr-2' />
            Clear Cart
          </Button>
        </div>

        <div className='grid lg:grid-cols-3 gap-8'>
          {/* Cart Items */}
          <div className='lg:col-span-2 space-y-4'>
            {items.map((item: CartItem) => {
              const quantity = item.quantity || 1;
              return (
                <Card
                  key={item.id}
                  className='border-primary-200 hover:border-primary-300 transition-colors'
                >
                  <CardContent className='p-6'>
                    <div className='flex gap-6'>
                      {/* Product Image */}
                      <div className='flex-shrink-0'>
                        <img
                          src={item.image || '/placeholder.svg'}
                          alt={item.name}
                          className='w-24 h-24 object-cover rounded-lg border border-primary-200'
                        />
                      </div>

                      {/* Product Details */}
                      <div className='flex-1 space-y-2'>
                        <div className='flex justify-between items-start'>
                          <div>
                            <h3 className='font-semibold text-lg text-primary-900'>
                              {item.name}
                            </h3>
                            <p className='text-sm text-primary-600'>
                              {item.category}
                            </p>
                          </div>
                          <Button
                            variant='ghost'
                            size='sm'
                            onClick={() => removeItem(item.id)}
                            className='text-secondary-500 hover:text-secondary-600 hover:bg-secondary-50'
                          >
                            <Trash2 className='h-4 w-4' />
                          </Button>
                        </div>

                        <div className='flex items-center justify-between'>
                          {/* Quantity Controls */}
                          <div className='flex items-center gap-2'>
                            <Button
                              variant='outline'
                              size='sm'
                              onClick={() =>
                                updateQuantity(item.id, quantity - 1)
                              }
                              disabled={quantity <= 1}
                              className='border-primary-300 text-primary-700 hover:bg-primary-50'
                            >
                              <Minus className='h-3 w-3' />
                            </Button>
                            <span className='w-12 text-center font-medium text-primary-800'>
                              {quantity}
                            </span>
                            <Button
                              variant='outline'
                              size='sm'
                              onClick={() =>
                                updateQuantity(item.id, quantity + 1)
                              }
                              className='border-primary-300 text-primary-700 hover:bg-primary-50'
                            >
                              <Plus className='h-3 w-3' />
                            </Button>
                          </div>

                          {/* Price */}
                          <div className='text-right'>
                            <div className='font-bold text-lg text-primary-600'>
                              ${item.price * quantity}
                            </div>
                            <div className='text-sm text-primary-500'>
                              ${item.price} each
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className='lg:col-span-1'>
            <Card className='sticky top-24 border-primary-200'>
              <CardHeader>
                <CardTitle className='text-primary-900'>
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='space-y-2'>
                  <div className='flex justify-between text-sm'>
                    <span className='text-primary-600'>Subtotal</span>
                    <span className='font-medium text-primary-800'>
                      ${total.toFixed(2)}
                    </span>
                  </div>
                  <div className='flex justify-between text-sm'>
                    <span className='text-primary-600'>Shipping</span>
                    <span className='font-medium text-secondary-500'>Free</span>
                  </div>
                  <div className='flex justify-between text-sm'>
                    <span className='text-primary-600'>Tax (estimated)</span>
                    <span className='font-medium text-primary-800'>
                      ${(total * 0.08).toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className='h-px bg-primary-200'></div>

                <div className='flex justify-between text-lg font-bold'>
                  <span className='text-primary-900'>Total</span>
                  <span className='text-primary-600'>
                    ${(total * 1.08).toFixed(2)}
                  </span>
                </div>

                <div className='space-y-2 pt-2'>
                  <Button
                    asChild
                    className='w-full bg-primary-500 hover:bg-primary-600'
                    size='lg'
                  >
                    <Link href='/checkout'>
                      Proceed to Checkout{' '}
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </Link>
                  </Button>
                  <Button
                    onClick={generateWhatsAppMessage}
                    className='w-full bg-green-600 hover:bg-green-700'
                    size='lg'
                  >
                    <MessageCircle className='mr-2 h-4 w-4' />
                    Order via WhatsApp
                  </Button>
                  <Button
                    asChild
                    variant='outline'
                    className='w-full bg-transparent border-primary-300 text-primary-700 hover:bg-primary-50'
                  >
                    <Link href='/shop'>Continue Shopping</Link>
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className='pt-4 space-y-2 text-sm text-primary-600'>
                  <div className='flex items-center gap-2'>
                    <svg
                      className='h-4 w-4 text-secondary-500'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <span>Free shipping on all orders</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <svg
                      className='h-4 w-4 text-secondary-500'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <span>30-day money-back guarantee</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <svg
                      className='h-4 w-4 text-secondary-500'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <span>Secure checkout</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
