'use client';

import {
  ArrowRight,
  Mail,
  MessageCircle,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { type CartItem, useCart } from '@/components/cart-provider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { getCartLabels } from '@/data/cart/labels';
import { getProductById } from '@/data/products';

export default function CartPage() {
  const { language } = useLanguage();
  const [labels, setLabels] = useState(getCartLabels('en'));
  const { items, getTotalPrice, updateQuantity, removeItem, clearCart } =
    useCart();
  const total = getTotalPrice();

  // Normalize language to product language keys ('en' | 'ur')
  const langKey: 'en' | 'ur' = language === 'ur' ? 'ur' : 'en';

  const formatPKR = (value: number | string) => {
    if (typeof value === 'number') {
      return new Intl.NumberFormat('en-PK', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value);
    }
    return value;
  };

  useEffect(() => {
    setLabels(getCartLabels(language));
  }, [language]);

  const generateWhatsAppMessage = () => {
    const companyName = 'Dr. Aqua';
    const companyPhone = ' +92 334 7071759';
    let message = labels.whatsappGreeting;
    message += labels.whatsappIntro.replace('{companyName}', companyName);
    message += labels.whatsappItemsHeader;
    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

    items.forEach((item: CartItem, index: number) => {
      const quantity = item.quantity || 1;
      const product = getProductById(item.id);
      const productName = product ? product.name[langKey] : item.name;
      const unitPriceLabel = product
        ? product.priceRange === '0'
          ? 'Consult'
          : `PKR ${product.priceRange}`
        : `PKR ${formatPKR(item.price)}`;
      const subtotal = item.price * quantity;

      message += `${index + 1}. 🔹 *${productName}*\n`;
      message += `   ${labels.whatsappPrice}: ${unitPriceLabel}\n`;
      message += `   ${labels.whatsappQuantity}: ${quantity}\n`;
      message += `   ${labels.whatsappSubtotal}: PKR ${formatPKR(subtotal)}\n\n`;
    });

    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += labels.whatsappTotal.replace(
      '${total}',
      `PKR ${formatPKR(total)}`,
    );
    message += labels.whatsappQuestions;
    message += labels.whatsappReady;
    //message += labels.whatsappThanks;
    //message += labels.whatsappLookingForward;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${companyPhone}?text=${encodedMessage}`;

    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank');
    }
  };

  const generateEmailMessage = () => {
    const companyEmail = 'info@draqua.com';
    const subject = encodeURIComponent(labels.emailSubject);
    let body = labels.emailGreeting;
    body += labels.emailIntro;
    body += labels.emailItemsHeader;
    body += `━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

    items.forEach((item: CartItem, index: number) => {
      const quantity = item.quantity || 1;
      const product = getProductById(item.id);
      const productName = product ? product.name[langKey] : item.name;
      const unitPriceLabel = product
        ? product.priceRange === '0'
          ? 'Consult'
          : `PKR ${product.priceRange}`
        : `PKR ${formatPKR(item.price)}`;
      const subtotal = item.price * quantity;

      body += `${index + 1}. ${productName}\n`;
      body += `   ${labels.emailPrice}: ${unitPriceLabel}\n`;
      body += `   ${labels.emailQuantity}: ${quantity}\n`;
      body += `   ${labels.emailSubtotal}: PKR ${formatPKR(subtotal)}\n\n`;
    });

    body += `━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    body += labels.emailTotal.replace('${total}', `PKR ${formatPKR(total)}`);
    body += labels.emailQuestions;
    body += labels.emailReady;
    body += labels.emailThanks;
    body += labels.emailLookingForward;

    const encodedBody = encodeURIComponent(body);
    const mailtoUrl = `mailto:${companyEmail}?subject=${subject}&body=${encodedBody}`;

    if (typeof window !== 'undefined') {
      window.location.href = mailtoUrl;
    }
  };

  if (items.length === 0) {
    return (
      <div className='container mx-auto px-4 py-16'>
        <Card className='max-w-md mx-auto text-center border-primary-200'>
          <CardContent className='pt-12 pb-12'>
            <ShoppingBag className='h-16 w-16 text-primary-400 mx-auto mb-4' />
            <h2 className='text-2xl font-bold mb-2 text-primary-900'>
              {labels.emptyCartTitle}
            </h2>
            <p className='text-primary-700 mb-6'>
              {labels.emptyCartDescription}
            </p>
            <Button
              asChild
              size='lg'
              className='bg-secondary-600 hover:bg-secondary-700 text-white cursor-pointer'
            >
              <Link href='/products'>
                {labels.startShopping} <ArrowRight className='ml-2 h-4 w-4' />
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
          <h1 className='text-3xl font-bold text-primary-900'>
            {labels.pageTitle}
          </h1>
          <Button
            variant='outline'
            onClick={clearCart}
            className='bg-transparent border-primary-300 text-primary-700 hover:bg-primary-50 cursor-pointer'
          >
            <Trash2 className='h-4 w-4 mr-2' />
            {labels.clearCart}
          </Button>
        </div>

        <div className='grid lg:grid-cols-3 gap-8'>
          {/* Cart Items */}
          <div className='lg:col-span-2 space-y-4'>
            {items.map((item: CartItem) => {
              const quantity = item.quantity || 1;
              const product = getProductById(item.id);
              const displayName = product ? product.name[langKey] : item.name;
              const displayCategory = product
                ? product.category[langKey]
                : item.category;
              const displayImage = product
                ? product.image
                : item.image || '/placeholder.svg';

              return (
                <Card
                  key={item.id}
                  className='border-primary-200 hover:border-primary-300 transition-colors'
                >
                  <CardContent className='p-6'>
                    <div className='flex gap-6'>
                      {/* Product Image */}
                      <div className='shrink-0'>
                        <Image
                          src={displayImage}
                          alt={displayName}
                          width={96}
                          height={96}
                          className='w-24 h-24 object-cover rounded-lg border border-primary-200'
                        />
                      </div>

                      {/* Product Details */}
                      <div className='flex-1 space-y-2'>
                        <div className='flex justify-between items-start'>
                          <div>
                            <h3 className='font-semibold text-lg text-primary-900'>
                              {displayName}
                            </h3>
                            <p className='text-sm text-primary-600'>
                              {displayCategory}
                            </p>
                          </div>
                          <Button
                            variant='ghost'
                            size='sm'
                            onClick={() => removeItem(item.id)}
                            className='text-secondary-500 hover:text-secondary-600 hover:bg-secondary-50 cursor-pointer'
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
                              className='border-primary-300 text-primary-700 hover:bg-primary-50 cursor-pointer'
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
                              className='border-primary-300 text-primary-700 hover:bg-primary-50 cursor-pointer'
                            >
                              <Plus className='h-3 w-3' />
                            </Button>
                          </div>

                          {/* Price */}
                          <div className='text-right'>
                            {item.price === 0 ? (
                              <a
                                href='https://wa.me/923347071759'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='font-bold text-lg text-primary-600 underline hover:text-primary-700 focus:outline-none cursor-pointer'
                                aria-label='Consult us on WhatsApp'
                              >
                                Consult us
                              </a>
                            ) : (
                              <>
                                <div className='font-bold text-lg text-primary-600'>
                                  PKR {item.price * quantity}
                                </div>
                                <div className='text-sm text-primary-500'>
                                  PKR {item.price} {labels.each}
                                </div>
                              </>
                            )}
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
                  {labels.orderSummary}
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                {total > 0 && (
                  <>
                    <div className='space-y-2'>
                      <div className='flex justify-between text-sm'>
                        <span className='text-primary-600'>
                          {labels.subtotal}
                        </span>
                        <span className='font-medium text-primary-800'>
                          PKR {total.toFixed(2)}
                        </span>
                      </div>
                      <div className='flex justify-between text-sm'>
                        <span className='text-primary-600'>
                          {labels.shipping}
                        </span>
                        <span className='font-medium text-secondary-600'>
                          {labels.free}
                        </span>
                      </div>
                    </div>

                    <div className='h-px bg-primary-200'></div>

                    <div className='flex justify-between text-lg font-bold'>
                      <span className='text-primary-900'>{labels.total}</span>
                      <span className='text-primary-600'>
                        PKR {total.toFixed(2)}
                      </span>
                    </div>
                  </>
                )}

                <div className='space-y-3 pt-4'>
                  <p className='text-sm text-primary-600 text-center'>
                    {labels.contactToComplete}
                  </p>
                  <Button
                    onClick={generateWhatsAppMessage}
                    className='w-full bg-green-600 hover:bg-green-700 text-white cursor-pointer'
                    size='lg'
                  >
                    <MessageCircle className='mr-2 h-5 w-5' />
                    {labels.orderViaWhatsApp}
                  </Button>
                  <Button
                    onClick={generateEmailMessage}
                    variant='outline'
                    className='w-full border-primary-300 text-primary-700 hover:bg-primary-50 cursor-pointer'
                    size='lg'
                  >
                    <Mail className='mr-2 h-5 w-5' />
                    {labels.orderViaEmail}
                  </Button>
                  <Button
                    asChild
                    variant='outline'
                    className='w-full border-primary-300 text-primary-700 hover:bg-primary-50 cursor-pointer'
                  >
                    <Link href='/products'>{labels.continueShopping}</Link>
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
                    <span>{labels.freeShipping}</span>
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
                    <span>{labels.moneyBackGuarantee}</span>
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
                    <span>{labels.secureCheckout}</span>
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
