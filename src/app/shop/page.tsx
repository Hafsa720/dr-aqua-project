'use client';

import { Filter, Search, ShoppingCart, Star } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';

import { useCart } from '@/components/cart-provider';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

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
  },
  {
    id: '4',
    name: 'PureTech Industrial System',
    price: 1599,
    originalPrice: 1999,
    image: '/industrial-water-treatment-system.jpg',
    rating: 4.9,
    reviews: 45,
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
  },
  {
    id: '5',
    name: 'AquaHome Basic Filter',
    price: 89,
    originalPrice: 119,
    image: '/basic-home-water-filter.jpg',
    rating: 4.5,
    reviews: 312,
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
  },
  {
    id: '6',
    name: 'FlowMax Office System',
    price: 449,
    originalPrice: 599,
    image: '/office-water-filtration-system.jpg',
    rating: 4.6,
    reviews: 156,
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
  },
];

const categories = ['All', 'Residential', 'Commercial', 'Industrial'];
const brands = [
  'All',
  'AquaPure',
  'CrystalFlow',
  'EcoFilter',
  'PureTech',
  'AquaHome',
  'FlowMax',
];
const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'reviews', label: 'Most Reviews' },
];

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [sortBy, setSortBy] = useState('featured');
  const { addItem } = useCart();

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      const matchesBrand =
        selectedBrand === 'All' || product.brand === selectedBrand;
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'reviews':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        // Keep original order for featured
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedBrand, priceRange, sortBy]);

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='space-y-8'>
        {/* Header */}
        <div className='text-center space-y-4'>
          <h1 className='text-3xl lg:text-4xl font-bold text-primary-900'>
            Water Filter Shop
          </h1>
          <p className='text-lg text-primary-700 max-w-2xl mx-auto'>
            Discover our complete range of water filtration systems for home,
            office, and industrial use.
          </p>
        </div>

        {/* Search and Filters */}
        <div className='space-y-6'>
          {/* Search Bar */}
          <div className='relative max-w-md mx-auto'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-500 h-4 w-4' />
            <Input
              placeholder='Search products...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='pl-10 border-primary-300 focus:border-primary-500'
            />
          </div>

          {/* Filters */}
          <div className='flex flex-wrap gap-4 items-center justify-center'>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Category' />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedBrand} onValueChange={setSelectedBrand}>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Brand' />
              </SelectTrigger>
              <SelectContent>
                {brands.map((brand) => (
                  <SelectItem key={brand} value={brand}>
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className='flex items-center gap-4 min-w-[200px]'>
              <span className='text-sm font-medium text-primary-800'>
                Price:
              </span>
              <div className='flex-1'>
                <Slider
                  value={priceRange}
                  onValueChange={(value: number[]) =>
                    setPriceRange(value as [number, number])
                  }
                  max={2000}
                  min={0}
                  step={50}
                  className='w-full'
                />
                <div className='flex justify-between text-xs text-primary-600 mt-1'>
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Sort by' />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className='text-center text-primary-600'>
          Showing {filteredProducts.length} of {products.length} products
        </div>

        {/* Product Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className='group hover:shadow-xl transition-all duration-300 border-primary-200 hover:border-primary-300'
            >
              <CardHeader className='p-0'>
                <div className='relative overflow-hidden rounded-t-lg'>
                  <img
                    src={product.image || '/placeholder.svg'}
                    alt={product.name}
                    className='w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                  <Badge
                    className='absolute top-4 left-4 bg-primary-500 hover:bg-primary-600'
                    variant='secondary'
                  >
                    {product.category}
                  </Badge>
                  {product.originalPrice > product.price && (
                    <Badge className='absolute top-4 right-4 bg-secondary-500 text-white'>
                      Save ${product.originalPrice - product.price}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className='p-6'>
                <div className='space-y-4'>
                  <div>
                    <CardTitle className='text-xl mb-2 text-primary-900'>
                      {product.name}
                    </CardTitle>
                    <p className='text-sm text-primary-700 mb-3'>
                      {product.description}
                    </p>
                    <div className='flex items-center gap-2 mb-3'>
                      <div className='flex items-center'>
                        <Star className='h-4 w-4 fill-yellow-400 text-yellow-400' />
                        <span className='ml-1 text-sm font-medium text-primary-800'>
                          {product.rating}
                        </span>
                      </div>
                      <span className='text-sm text-primary-600'>
                        ({product.reviews} reviews)
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <span className='text-2xl font-bold text-primary-600'>
                        ${product.price}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className='text-lg text-primary-500 line-through'>
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className='flex gap-2'>
                    <Button
                      asChild
                      variant='outline'
                      className='flex-1 bg-transparent border-primary-300 text-primary-700 hover:bg-primary-50'
                    >
                      <Link href={`/shop/${product.id}`}>View Details</Link>
                    </Button>
                    <Button
                      onClick={() => handleAddToCart(product)}
                      className='flex-1 bg-primary-500 hover:bg-primary-600'
                    >
                      <ShoppingCart className='h-4 w-4 mr-2' />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className='text-center py-12'>
            <Filter className='h-12 w-12 text-primary-400 mx-auto mb-4' />
            <h3 className='text-lg font-semibold mb-2 text-primary-900'>
              No products found
            </h3>
            <p className='text-primary-700'>
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
