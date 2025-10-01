'use client';

import {
  ArrowLeft,
  CheckCircle,
  Phone,
  Shield,
  ShoppingCart,
  Star,
  Truck,
} from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

import { useCart } from '@/components/cart-provider';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const products = [
  {
    id: '1',
    name: 'AquaPure Pro 5-Stage Filter',
    price: 299,
    originalPrice: 399,
    image: '/modern-water-filter.png',
    rating: 4.8,
    reviews: 124,
    category: 'Residential',
    brand: 'AquaPure',
    description:
      'Advanced 5-stage filtration system with UV sterilization and smart monitoring capabilities.',
    features: [
      '5-Stage Filtration',
      'UV Sterilization',
      'Smart Monitoring',
      '2-Year Warranty',
    ],
    specifications: {
      'Flow Rate': '2.5 GPM',
      'Filter Life': '12 months',
      Dimensions: '15" x 8" x 20"',
      Weight: '25 lbs',
      Installation: 'Under-sink',
      Certifications: 'NSF/ANSI 42, 53, 58',
    },
    inStock: true,
  },
  {
    id: '2',
    name: 'CrystalFlow Commercial Unit',
    price: 899,
    originalPrice: 1199,
    image: '/commercial-water-filtration-unit.jpg',
    rating: 4.9,
    reviews: 87,
    category: 'Commercial',
    brand: 'CrystalFlow',
    description:
      'High-capacity commercial water filtration system with auto-cleaning and remote control.',
    features: [
      'High Capacity',
      'Auto-Cleaning',
      'Remote Control',
      '5-Year Warranty',
    ],
    specifications: {
      'Flow Rate': '10 GPM',
      'Filter Life': '24 months',
      Dimensions: '24" x 12" x 36"',
      Weight: '85 lbs',
      Installation: 'Floor-standing',
      Certifications: 'NSF/ANSI 42, 53, 61',
    },
    inStock: true,
  },
  {
    id: '3',
    name: 'EcoFilter Compact Home',
    price: 149,
    originalPrice: 199,
    image: '/compact-home-water-filter.jpg',
    rating: 4.7,
    reviews: 203,
    category: 'Residential',
    brand: 'EcoFilter',
    description:
      'Space-saving home water filter with easy installation and long-lasting performance.',
    features: [
      'Space Saving',
      'Easy Install',
      'Long Lasting',
      '1-Year Warranty',
    ],
    specifications: {
      'Flow Rate': '1.5 GPM',
      'Filter Life': '6 months',
      Dimensions: '10" x 6" x 12"',
      Weight: '8 lbs',
      Installation: 'Countertop',
      Certifications: 'NSF/ANSI 42, 53',
    },
    inStock: true,
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = products.find((p) => p.id === productId);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className='container mx-auto px-4 py-8'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold mb-4'>Product Not Found</h1>
          <Button asChild>
            <Link href='/shop'>Back to Shop</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
      });
    }
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='space-y-8'>
        {/* Breadcrumb */}
        <div className='flex items-center gap-2 text-sm text-muted-foreground'>
          <Link
            href='/shop'
            className='hover:text-primary flex items-center gap-1'
          >
            <ArrowLeft className='h-4 w-4' />
            Back to Shop
          </Link>
        </div>

        {/* Product Details */}
        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Product Image */}
          <div className='space-y-4'>
            <div className='relative overflow-hidden rounded-lg'>
              <img
                src={product.image || '/placeholder.svg'}
                alt={product.name}
                className='w-full h-96 object-cover'
              />
              {product.originalPrice > product.price && (
                <Badge className='absolute top-4 right-4' variant='destructive'>
                  Save ${product.originalPrice - product.price}
                </Badge>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className='space-y-6'>
            <div>
              <Badge variant='secondary' className='mb-2'>
                {product.category}
              </Badge>
              <h1 className='text-3xl font-bold mb-2'>{product.name}</h1>
              <div className='flex items-center gap-2 mb-4'>
                <div className='flex items-center'>
                  <Star className='h-5 w-5 fill-yellow-400 text-yellow-400' />
                  <span className='ml-1 font-medium'>{product.rating}</span>
                </div>
                <span className='text-muted-foreground'>
                  ({product.reviews} reviews)
                </span>
              </div>
              <p className='text-lg text-muted-foreground'>
                {product.description}
              </p>
            </div>

            <div className='space-y-4'>
              <div className='flex items-center gap-4'>
                <span className='text-3xl font-bold text-primary'>
                  ${product.price}
                </span>
                {product.originalPrice > product.price && (
                  <span className='text-xl text-muted-foreground line-through'>
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              <div className='flex items-center gap-2'>
                <CheckCircle className='h-5 w-5 text-secondary' />
                <span className='text-sm font-medium'>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            {/* Features */}
            <div className='space-y-3'>
              <h3 className='font-semibold'>Key Features:</h3>
              <div className='grid grid-cols-2 gap-2'>
                {product.features.map((feature, index) => (
                  <div key={index} className='flex items-center gap-2 text-sm'>
                    <CheckCircle className='h-4 w-4 text-secondary' />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className='space-y-4'>
              <div className='flex items-center gap-4'>
                <label htmlFor='quantity' className='font-medium'>
                  Quantity:
                </label>
                <select
                  id='quantity'
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className='border rounded px-3 py-1'
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>

              <div className='flex gap-4'>
                <Button
                  onClick={handleAddToCart}
                  size='lg'
                  className='flex-1'
                  disabled={!product.inStock}
                >
                  <ShoppingCart className='h-5 w-5 mr-2' />
                  Add to Cart
                </Button>
                <Button
                  asChild
                  variant='outline'
                  size='lg'
                  className='bg-transparent'
                >
                  <Link href='/contact'>Get Quote</Link>
                </Button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className='flex items-center gap-6 pt-4 border-t'>
              <div className='flex items-center gap-2 text-sm'>
                <Shield className='h-4 w-4 text-secondary' />
                <span>2-Year Warranty</span>
              </div>
              <div className='flex items-center gap-2 text-sm'>
                <Truck className='h-4 w-4 text-secondary' />
                <span>Free Shipping</span>
              </div>
              <div className='flex items-center gap-2 text-sm'>
                <Phone className='h-4 w-4 text-secondary' />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue='specifications' className='w-full'>
          <TabsList className='grid w-full grid-cols-3'>
            <TabsTrigger value='specifications'>Specifications</TabsTrigger>
            <TabsTrigger value='installation'>Installation</TabsTrigger>
            <TabsTrigger value='reviews'>Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value='specifications' className='space-y-4'>
            <Card>
              <CardHeader>
                <CardTitle>Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className='flex justify-between py-2 border-b'
                      >
                        <span className='font-medium'>{key}:</span>
                        <span className='text-muted-foreground'>{value}</span>
                      </div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='installation' className='space-y-4'>
            <Card>
              <CardHeader>
                <CardTitle>Installation Information</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div>
                  <h4 className='font-semibold mb-2'>
                    Professional Installation Available
                  </h4>
                  <p className='text-muted-foreground'>
                    Our certified technicians can install your water filtration
                    system with a 2-year warranty on installation work.
                  </p>
                </div>
                <Separator />
                <div>
                  <h4 className='font-semibold mb-2'>DIY Installation</h4>
                  <p className='text-muted-foreground'>
                    Complete installation kit included with detailed
                    instructions. Most installations can be completed in 2-3
                    hours.
                  </p>
                </div>
                <div className='pt-4'>
                  <Button asChild>
                    <Link href='/services'>Book Installation Service</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='reviews' className='space-y-4'>
            <Card>
              <CardHeader>
                <CardTitle>Customer Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <div className='flex items-center gap-4'>
                    <div className='text-3xl font-bold'>{product.rating}</div>
                    <div>
                      <div className='flex items-center'>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${
                              star <= Math.floor(product.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <div className='text-sm text-muted-foreground'>
                        {product.reviews} reviews
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className='text-center py-8 text-muted-foreground'>
                    <p>Customer reviews will be displayed here.</p>
                    <p className='text-sm mt-2'>This feature is coming soon!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
