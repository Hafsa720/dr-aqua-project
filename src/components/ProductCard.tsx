'use client';

import { CheckCircle, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import { useCart } from '@/components/cart-provider';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { getProductCardLabels } from '@/data/productCard/labels';
import type { Product, ProductLanguage } from '@/types/product';

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
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    setLabels(getProductCardLabels(language));
  }, [language]);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsAdding(true);
    addItem({
      id: product.id,
      name: product.name[language],
      price: product.price,
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

  if (variant === 'compact') {
    return (
      <Card className='group overflow-hidden hover:shadow-2xl transition-all duration-300 border-primary-200 hover:border-primary-400 hover:-translate-y-1'>
        <CardHeader className='p-0'>
          <Link href={`/products/${product.id}`}>
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
              {product.originalPrice &&
                product.originalPrice > product.price && (
                  <Badge className='absolute top-3 right-3 bg-secondary-600 hover:bg-secondary-700 text-white border-0 shadow-lg'>
                    {labels.save} ${product.originalPrice - product.price}
                  </Badge>
                )}
            </div>
          </Link>
        </CardHeader>
        <CardContent className='p-5'>
          <div className='space-y-4'>
            <Link href={`/products/${product.id}`}>
              <div className='space-y-2'>
                <CardTitle className='text-lg font-bold text-primary-900 group-hover:text-primary-600 transition-colors line-clamp-2'>
                  {product.name[language]}
                </CardTitle>
                <p className='text-sm text-primary-700 line-clamp-2 leading-relaxed'>
                  {product.shortDescription[language]}
                </p>
              </div>
            </Link>

            <div className='flex items-baseline gap-2'>
              <span className='text-2xl font-bold text-primary-700'>
                ${product.price}
              </span>
              {product.originalPrice &&
                product.originalPrice > product.price && (
                  <span className='text-base text-primary-400 line-through'>
                    ${product.originalPrice}
                  </span>
                )}
            </div>

            <div className='flex gap-2 pt-2'>
              <Button
                asChild
                variant='outline'
                size='sm'
                className='flex-1 border-primary-300 text-primary-700 hover:bg-primary-50 hover:border-primary-400'
              >
                <Link href={`/products/${product.id}`}>{labels.details}</Link>
              </Button>
              {showAddToCart && (
                <Button
                  onClick={handleAddToCart}
                  size='sm'
                  className='flex-1 bg-secondary-600 hover:bg-secondary-700 shadow-sm text-white'
                  disabled={isAdding}
                >
                  <ShoppingCart className='h-4 w-4 mr-1.5' />
                  {isAdding ? labels.adding : labels.add}
                </Button>
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
          <Link href={`/products/${product.id}`}>
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
          {product.originalPrice && product.originalPrice > product.price && (
            <Badge className='absolute top-4 right-4 bg-secondary-500 text-white'>
              {labels.save} ${product.originalPrice - product.price}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className='p-6'>
        <div className='space-y-4'>
          <div>
            <Link href={`/products/${product.id}`}>
              <CardTitle className='text-xl mb-2 text-primary-900 hover:text-primary-600 transition-colors'>
                {product.name[language]}
              </CardTitle>
            </Link>
            <div className='flex items-center gap-2 mt-3'>
              <span className='text-2xl font-bold text-primary-600'>
                ${product.price}
              </span>
              {product.originalPrice &&
                product.originalPrice > product.price && (
                  <span className='text-lg text-primary-400 line-through'>
                    ${product.originalPrice}
                  </span>
                )}
            </div>
          </div>
          {product.features && product.features.length > 0 && (
            <div className='space-y-2'>
              {product.features.map((feature, index) => (
                <div
                  key={index}
                  className='flex items-center gap-2 text-sm text-primary-700'
                >
                  <CheckCircle className='h-4 w-4 text-secondary-500' />
                  <span>{feature[language]}</span>
                </div>
              ))}
            </div>
          )}
          <div className='flex gap-2 pt-2'>
            <Button
              asChild
              variant='outline'
              className='flex-1 border-primary-300 text-primary-700 hover:bg-primary-50 hover:border-primary-400'
            >
              <Link href={`/products/${product.id}`}>{labels.viewDetails}</Link>
            </Button>
            {showAddToCart && (
              <Button
                onClick={handleAddToCart}
                className='flex-1 bg-secondary-600 hover:bg-secondary-700 shadow-sm text-white'
                disabled={isAdding}
              >
                <ShoppingCart className='h-4 w-4 mr-2' />
                {isAdding ? labels.adding : labels.addToCart}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
