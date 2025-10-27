'use client';

import {
  ArrowLeft,
  CheckCircle,
  Phone,
  Shield,
  ShoppingCart,
  Truck,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import { useCart } from '@/components/cart-provider';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';
import { getProductBySlug } from '@/data/products';
import { getProductDetailLabels } from '@/data/products/labels';
import type { ProductLanguage } from '@/types/product';

export default function ProductDetailPage() {
  const params = useParams();
  const productSlug = params.slug as string;
  const { language: contextLang } = useLanguage();
  // Product only supports 'en' and 'ur', fallback to 'en' for other languages
  const language: ProductLanguage = (
    contextLang === 'ur' ? 'ur' : 'en'
  ) as ProductLanguage;
  const [labels, setLabels] = useState(getProductDetailLabels('en'));
  const product = getProductBySlug(productSlug);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  useEffect(() => {
    setLabels(getProductDetailLabels(language));
  }, [language]);

  if (!product) {
    return (
      <div className='container mx-auto px-4 py-8'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold mb-4'>{labels.productNotFound}</h1>
          <Button asChild>
            <Link href='/products'>{labels.backToShop}</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Extract minimum price from range for cart (e.g., "15,000 - 25,000" → 15000)
  const getMinimumPrice = (priceRange: string): number => {
    const match = priceRange.match(/[\d,]+/);
    if (match) {
      return parseInt(match[0].replace(/,/g, ''), 10);
    }
    return 0;
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name[language],
        price: getMinimumPrice(product.priceRange),
        image: product.image,
        category: product.category[language],
      });
    }
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='space-y-8'>
        {/* Breadcrumb */}
        <div className='flex items-center gap-2 text-sm text-muted-foreground'>
          <Link
            href='/products'
            className='hover:text-primary flex items-center gap-1'
          >
            <ArrowLeft className='h-4 w-4' />
            {labels.backToShop}
          </Link>
        </div>

        {/* Product Details */}
        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Product Image */}
          <div className='space-y-4'>
            <div className='relative overflow-hidden rounded-lg aspect-square bg-primary-50'>
              <Image
                src={product.image}
                alt={product.name[language]}
                fill
                sizes='(max-width: 1024px) 100vw, 50vw'
                className='object-cover hover:scale-105 transition-transform duration-500'
                priority
              />
              {product.featured && (
                <Badge className='absolute top-4 right-4 bg-secondary-600 hover:bg-secondary-700 text-white shadow-lg'>
                  Featured
                </Badge>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className='space-y-6'>
            <div>
              <Badge variant='secondary' className='mb-2'>
                {product.category[language]}
              </Badge>
              <h1 className='text-3xl font-bold mb-4'>
                {product.name[language]}
              </h1>
              <div className='text-lg text-muted-foreground prose prose-lg max-w-none'>
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => (
                      <h2 className='text-xl font-semibold mt-4 mb-2 text-primary-900'>
                        {children}
                      </h2>
                    ),
                    ul: ({ children }) => (
                      <ul className='list-disc list-inside space-y-1 ml-4 mt-2'>
                        {children}
                      </ul>
                    ),
                    li: ({ children }) => (
                      <li className='text-primary-700'>{children}</li>
                    ),
                    strong: ({ children }) => (
                      <strong className='text-primary-900 font-semibold'>
                        {children}
                      </strong>
                    ),
                    p: ({ children }) => (
                      <p className='text-muted-foreground leading-relaxed'>
                        {children}
                      </p>
                    ),
                  }}
                >
                  {product.description[language]}
                </ReactMarkdown>
              </div>
            </div>

            <div className='space-y-4'>
              <div className='space-y-2'>
                <div className='text-xs font-semibold text-primary-500 uppercase tracking-wide'>
                  Price Range
                </div>
                <div className='text-3xl font-bold text-primary-600'>
                  PKR {product.priceRange}
                </div>
                <p className='text-xs text-primary-500 italic'>
                  *Final price varies by model & requirements
                </p>
              </div>

              <div className='flex items-center gap-2'>
                <CheckCircle className='h-5 w-5 text-secondary' />
                <span className='text-sm font-medium'>
                  {product.inStock ? labels.inStock : labels.outOfStock}
                </span>
              </div>
            </div>

            {/* Add to Cart */}
            <div className='space-y-4'>
              <div className='flex items-center gap-4'>
                <label
                  htmlFor='quantity'
                  className='font-medium text-primary-900'
                >
                  {labels.quantity}
                </label>
                <Select
                  value={quantity.toString()}
                  onValueChange={(value) => setQuantity(Number(value))}
                >
                  <SelectTrigger className='w-24 border-primary-300 hover:border-primary-400'>
                    <SelectValue placeholder='1' />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className='flex gap-4'>
                <Button
                  onClick={handleAddToCart}
                  size='lg'
                  className='flex-1 bg-secondary-600 hover:bg-secondary-700 text-white'
                  disabled={!product.inStock}
                >
                  <ShoppingCart className='h-5 w-5 mr-2' />
                  {labels.addToCart}
                </Button>
                <Button
                  asChild
                  variant='outline'
                  size='lg'
                  className='border-primary-300 text-primary-700 hover:bg-primary-50'
                >
                  <Link href='/contact'>{labels.getQuote}</Link>
                </Button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className='flex items-center gap-6 pt-4 border-t'>
              <div className='flex items-center gap-2 text-sm'>
                <Shield className='h-4 w-4 text-secondary' />
                <span>{labels.warranty}</span>
              </div>
              <div className='flex items-center gap-2 text-sm'>
                <Truck className='h-4 w-4 text-secondary' />
                <span>{labels.freeShipping}</span>
              </div>
              <div className='flex items-center gap-2 text-sm'>
                <Phone className='h-4 w-4 text-secondary' />
                <span>{labels.support247}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue='specifications' className='w-full'>
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='specifications'>
              {labels.specifications}
            </TabsTrigger>
            <TabsTrigger value='installation'>
              {labels.installation}
            </TabsTrigger>
          </TabsList>

          <TabsContent value='specifications' className='space-y-4'>
            <Card className='border-primary-200'>
              <CardHeader>
                <CardTitle className='text-primary-900'>
                  {labels.technicalSpecs}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className='flex justify-between py-3 border-b border-primary-100 last:border-0'
                      >
                        <span className='font-semibold text-primary-900'>
                          {key}:
                        </span>
                        <span className='text-primary-700'>
                          {value[language]}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='installation' className='space-y-4'>
            <Card className='border-primary-200'>
              <CardHeader>
                <CardTitle className='text-primary-900'>
                  {labels.installationInfo}
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div>
                  <h4 className='font-semibold mb-2 text-primary-900'>
                    {labels.professionalInstallation}
                  </h4>
                  <p className='text-primary-700'>
                    {labels.professionalInstallationDesc}
                  </p>
                </div>
                <Separator className='bg-primary-200' />
                <div>
                  <h4 className='font-semibold mb-2 text-primary-900'>
                    {labels.diyInstallation}
                  </h4>
                  <p className='text-primary-700'>
                    {labels.diyInstallationDesc}
                  </p>
                </div>
                <div className='pt-4'>
                  <Button
                    asChild
                    className='bg-secondary-600 hover:bg-secondary-700 text-white'
                  >
                    <Link href='/services'>{labels.bookInstallation}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
