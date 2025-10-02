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
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

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

const products = [
  {
    id: '1',
    name: 'AquaPure Pro 5-Stage Filter',
    price: 299,
    originalPrice: 399,
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&auto=format&fit=crop&v=2',
    rating: 4.8,
    _reviews: 124,
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
    image:
      'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=800&auto=format&fit=crop&v=2',
    rating: 4.9,
    _reviews: 87,
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
    image:
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop&v=2',
    rating: 4.7,
    _reviews: 203,
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
  {
    id: '4',
    name: 'PureTech Industrial System',
    price: 1599,
    originalPrice: 1999,
    image:
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&v=2',
    rating: 4.9,
    _reviews: 45,
    category: 'Industrial',
    brand: 'PureTech',
    description:
      'Heavy-duty industrial water treatment system for large-scale operations.',
    features: [
      'Industrial Grade',
      'High Volume',
      'Automated Controls',
      '10-Year Warranty',
    ],
    specifications: {
      'Flow Rate': '50 GPM',
      'Filter Life': '36 months',
      Dimensions: '36" x 24" x 48"',
      Weight: '250 lbs',
      Installation: 'Floor-standing',
      Certifications: 'NSF/ANSI 42, 53, 61, 372',
    },
    inStock: true,
  },
  {
    id: '5',
    name: 'AquaHome Basic Filter',
    price: 89,
    originalPrice: 119,
    image:
      'https://images.unsplash.com/photo-1629794226404-d0fc0d9a1a1f?w=800&auto=format&fit=crop&v=2',
    rating: 4.5,
    _reviews: 312,
    category: 'Residential',
    brand: 'AquaHome',
    description:
      'Affordable and reliable basic water filtration for everyday use.',
    features: [
      'Basic Filtration',
      'Budget Friendly',
      'Easy Maintenance',
      '6-Month Warranty',
    ],
    specifications: {
      'Flow Rate': '1 GPM',
      'Filter Life': '3 months',
      Dimensions: '8" x 4" x 10"',
      Weight: '4 lbs',
      Installation: 'Countertop',
      Certifications: 'NSF/ANSI 42',
    },
    inStock: true,
  },
  {
    id: '6',
    name: 'FlowMax Office System',
    price: 449,
    originalPrice: 599,
    image:
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&v=2',
    rating: 4.6,
    _reviews: 156,
    category: 'Commercial',
    brand: 'FlowMax',
    description:
      'Perfect water filtration solution for offices and small businesses.',
    features: [
      'Office Optimized',
      'Quiet Operation',
      'Compact Design',
      '3-Year Warranty',
    ],
    specifications: {
      'Flow Rate': '5 GPM',
      'Filter Life': '18 months',
      Dimensions: '18" x 10" x 24"',
      Weight: '45 lbs',
      Installation: 'Wall-mounted or floor-standing',
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
            <div className='relative overflow-hidden rounded-lg aspect-square bg-primary-50'>
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes='(max-width: 1024px) 100vw, 50vw'
                className='object-cover hover:scale-105 transition-transform duration-500'
                priority
              />
              {product.originalPrice > product.price && (
                <Badge className='absolute top-4 right-4 bg-secondary-600 hover:bg-secondary-700 text-white shadow-lg'>
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
                <div className='flex items-center gap-1 bg-yellow-50 px-3 py-1.5 rounded-md'>
                  <Star className='h-5 w-5 fill-yellow-400 text-yellow-400' />
                  <span className='ml-1 font-semibold text-yellow-900'>
                    {product.rating}
                  </span>
                </div>
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
                <label
                  htmlFor='quantity'
                  className='font-medium text-primary-900'
                >
                  Quantity:
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
                  Add to Cart
                </Button>
                <Button
                  asChild
                  variant='outline'
                  size='lg'
                  className='border-primary-300 text-primary-700 hover:bg-primary-50'
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
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='specifications'>Specifications</TabsTrigger>
            <TabsTrigger value='installation'>Installation</TabsTrigger>
          </TabsList>

          <TabsContent value='specifications' className='space-y-4'>
            <Card className='border-primary-200'>
              <CardHeader>
                <CardTitle className='text-primary-900'>
                  Technical Specifications
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
                        <span className='text-primary-700'>{value}</span>
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
                  Installation Information
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div>
                  <h4 className='font-semibold mb-2 text-primary-900'>
                    Professional Installation Available
                  </h4>
                  <p className='text-primary-700'>
                    Our certified technicians can install your water filtration
                    system with a 2-year warranty on installation work.
                  </p>
                </div>
                <Separator className='bg-primary-200' />
                <div>
                  <h4 className='font-semibold mb-2 text-primary-900'>
                    DIY Installation
                  </h4>
                  <p className='text-primary-700'>
                    Complete installation kit included with detailed
                    instructions. Most installations can be completed in 2-3
                    hours.
                  </p>
                </div>
                <div className='pt-4'>
                  <Button
                    asChild
                    className='bg-secondary-600 hover:bg-secondary-700 text-white'
                  >
                    <Link href='/services'>Book Installation Service</Link>
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
