'use client';

import { Minus, Plus, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { remark } from 'remark';
import { toast } from 'sonner';
import stripMarkdown from 'strip-markdown';

import { useCart } from '@/components/cart-provider';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { getProductCardLabels } from '@/data/productCard/labels';
import type { Product, ProductLanguage } from '@/types/product';

/**
 * Extracts the first paragraph from markdown and strips formatting
 * Uses remark + strip-markdown for proper parsing
 */
function extractFirstParagraph(markdown: string): string {
  // Split by double newlines to get paragraphs
  const paragraphs = markdown.trim().split('\n\n');

  // Get first non-heading paragraph
  let firstParagraph = paragraphs[0] || '';
  if (firstParagraph.startsWith('#')) {
    firstParagraph = paragraphs[1] || '';
  }

  // Strip markdown formatting using remark
  try {
    const processed = remark().use(stripMarkdown).processSync(firstParagraph);

    return processed.toString().trim();
  } catch {
    // Fallback to original if processing fails
    return firstParagraph;
  }
}

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'compact';
  showAddToCart?: boolean;
}

export function ProductCard({
  product,
  variant = 'default',
  showAddToCart = true,
}: ProductCardProps) {
  const { language: contextLang } = useLanguage();
  // Product only supports 'en' and 'ur', fallback to 'en' for other languages
  const language: ProductLanguage = (
    contextLang === 'ur' ? 'ur' : 'en'
  ) as ProductLanguage;
  const [labels, setLabels] = useState(getProductCardLabels('en'));
  const { addItem, updateQuantity, removeItem, items } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  // Check if product is in cart and get quantity
  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem?.quantity || 0;

  useEffect(() => {
    setLabels(getProductCardLabels(language));
  }, [language]);

  // Extract minimum price from range for cart (e.g., "15,000 - 25,000" → 15000)
  const getMinimumPrice = (priceRange: string): number => {
    const match = priceRange.match(/[\d,]+/);
    if (match) {
      return parseInt(match[0].replace(/,/g, ''), 10);
    }
    return 0;
  };

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsAdding(true);
    addItem({
      id: product.id,
      name: product.name[language],
      price: getMinimumPrice(product.priceRange),
      image: product.image,
      category: product.category[language],
    });

    // Show toast notification
    toast.success(labels.toastTitle, {
      description: labels.toastDescription.replace(
        '{productName}',
        product.name[language],
      ),
    });

    setTimeout(() => setIsAdding(false), 500);
  };

  const handleIncrement = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (quantity === 1) {
      // Remove from cart with toast
      removeItem(product.id);
      toast.info(labels.toastRemoved, {
        description: labels.toastRemovedDescription.replace(
          '{productName}',
          product.name[language],
        ),
      });
    } else {
      updateQuantity(product.id, quantity - 1);
    }
  };

  if (variant === 'compact') {
    return (
      <Card className='group overflow-hidden hover:shadow-2xl transition-all duration-300 border-primary-200 hover:border-primary-400 hover:-translate-y-1'>
        <CardHeader className='p-0'>
          <Link href={`/products/${product.slug}`}>
            <div className='relative overflow-hidden aspect-[4/3] bg-primary-50'>
              <Image
                src={product.image}
                alt={product.name[language]}
                fill
                sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                className='object-cover group-hover:scale-110 transition-transform duration-500'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              <Badge className='absolute top-3 left-3 bg-primary-600/90 hover:bg-primary-700 backdrop-blur-sm border-0 shadow-lg'>
                {product.category[language]}
              </Badge>
              {product.featured && (
                <Badge className='absolute top-3 right-3 bg-secondary-600 hover:bg-secondary-700 text-white border-0 shadow-lg'>
                  Featured
                </Badge>
              )}
            </div>
          </Link>
        </CardHeader>
        <CardContent className='p-5'>
          <div className='space-y-4'>
            <Link href={`/products/${product.slug}`}>
              <div className='space-y-2'>
                <CardTitle className='text-lg font-bold text-primary-900 group-hover:text-primary-600 transition-colors line-clamp-2'>
                  {product.name[language]}
                </CardTitle>
                <p className='text-sm text-primary-700 line-clamp-2 leading-relaxed'>
                  {extractFirstParagraph(product.description[language])}
                </p>
              </div>
            </Link>

            <div className='space-y-1'>
              {product.priceRange !== '0' && (
                <>
                  <div className='text-xs font-semibold text-primary-500 uppercase tracking-wide'>
                    Price Range
                  </div>
                  <div className='text-2xl font-bold text-primary-700'>
                    PKR {product.priceRange}
                  </div>
                  <p className='text-xs text-primary-500 italic'>
                    *Contact for exact pricing
                  </p>
                </>
              )}
            </div>

            <div className='flex gap-2 pt-2'>
              {showAddToCart && quantity > 0 ? (
                <div className='flex items-center justify-center gap-1 bg-white rounded-md border border-primary-300 px-1 w-full shadow-sm'>
                  <Button
                    onClick={handleDecrement}
                    size='sm'
                    variant='ghost'
                    className='h-8 w-8 p-0 hover:bg-primary-50 text-primary-700 cursor-pointer'
                  >
                    <Minus className='h-3.5 w-3.5' />
                  </Button>
                  <span className='min-w-8 text-center text-sm font-semibold text-primary-900'>
                    {quantity}
                  </span>
                  <Button
                    onClick={handleIncrement}
                    size='sm'
                    variant='ghost'
                    className='h-8 w-8 p-0 hover:bg-primary-50 text-primary-700 cursor-pointer'
                  >
                    <Plus className='h-3.5 w-3.5' />
                  </Button>
                </div>
              ) : (
                <>
                  <Button
                    asChild
                    variant='outline'
                    size='sm'
                    className='flex-1 border-primary-300 text-primary-700 hover:bg-primary-50 hover:border-primary-400'
                  >
                    <Link href={`/products/${product.slug}`}>
                      {labels.details}
                    </Link>
                  </Button>
                  {showAddToCart && (
                    <Button
                      onClick={handleAddToCart}
                      size='sm'
                      className='flex-1 bg-secondary-600 hover:bg-secondary-700 shadow-sm text-white cursor-pointer'
                      disabled={isAdding}
                    >
                      <ShoppingCart className='h-4 w-4 mr-1.5' />
                      {isAdding ? labels.adding : labels.add}
                    </Button>
                  )}
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Default variant - for home page
  return (
    <Card className='group border-primary-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300'>
      <CardHeader className='p-0'>
        <div className='relative overflow-hidden rounded-t-lg'>
          <Link href={`/products/${product.slug}`}>
            <Image
              src={product.image}
              alt={product.name[language]}
              width={400}
              height={300}
              className='w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300'
            />
          </Link>
          <Badge
            className='absolute top-4 left-4 bg-primary-500 text-white hover:bg-primary-600'
            variant='secondary'
          >
            {product.category[language]}
          </Badge>
          {product.featured && (
            <Badge className='absolute top-4 right-4 bg-secondary-500 text-white'>
              Featured
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className='p-6'>
        <div className='space-y-4'>
          <div>
            <Link href={`/products/${product.slug}`}>
              <CardTitle className='text-xl mb-2 text-primary-900 hover:text-primary-600 transition-colors'>
                {product.name[language]}
              </CardTitle>
            </Link>
            <div className='mt-3 space-y-1'>
              {product.priceRange !== '0' && (
                <>
                  <div className='text-xs font-semibold text-primary-500 uppercase tracking-wide'>
                    Price Range
                  </div>
                  <div className='text-2xl font-bold text-primary-600'>
                    PKR {product.priceRange}
                  </div>
                  <p className='text-xs text-primary-500 italic'>
                    *Final price varies by model & requirements
                  </p>
                </>
              )}
            </div>
          </div>
          <div className='flex gap-2 pt-2'>
            {showAddToCart && quantity > 0 ? (
              <div className='flex items-center justify-center gap-2 bg-white rounded-md border border-primary-300 px-2 py-1 w-full shadow-sm'>
                <Button
                  onClick={handleDecrement}
                  size='sm'
                  variant='ghost'
                  className='h-9 w-9 p-0 hover:bg-primary-50 text-primary-700 cursor-pointer'
                >
                  <Minus className='h-4 w-4' />
                </Button>
                <span className='min-w-10 text-center text-base font-semibold text-primary-900'>
                  {quantity}
                </span>
                <Button
                  onClick={handleIncrement}
                  size='sm'
                  variant='ghost'
                  className='h-9 w-9 p-0 hover:bg-primary-50 text-primary-700 cursor-pointer'
                >
                  <Plus className='h-4 w-4' />
                </Button>
              </div>
            ) : (
              <>
                <Button
                  asChild
                  variant='outline'
                  className='flex-1 border-primary-300 text-primary-700 hover:bg-primary-50 hover:border-primary-400'
                >
                  <Link href={`/products/${product.slug}`}>
                    {labels.viewDetails}
                  </Link>
                </Button>
                {showAddToCart && (
                  <Button
                    onClick={handleAddToCart}
                    className='flex-1 bg-secondary-600 hover:bg-secondary-700 shadow-sm text-white cursor-pointer'
                    disabled={isAdding}
                  >
                    <ShoppingCart className='h-4 w-4 mr-2' />
                    {isAdding ? labels.adding : labels.addToCart}
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
