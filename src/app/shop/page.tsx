'use client';

import { Filter, Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';

import { ProductCard } from '@/components/ProductCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&auto=format&fit=crop&v=2',
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
    image:
      'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=800&auto=format&fit=crop&v=2',
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
    image:
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop&v=2',
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
    image:
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&v=2',
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
    image:
      'https://images.unsplash.com/photo-1629794226404-d0fc0d9a1a1f?w=800&auto=format&fit=crop&v=2',
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
    image:
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&v=2',
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
        <Card className='border-primary-200 shadow-sm'>
          <CardContent className='p-6'>
            <div className='space-y-6'>
              {/* Search Bar */}
              <div className='relative'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-500 h-5 w-5' />
                <Input
                  placeholder='Search products...'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className='pl-11 h-12 border-primary-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 text-base'
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className='absolute right-3 top-1/2 transform -translate-y-1/2 text-primary-400 hover:text-primary-600'
                  >
                    <X className='h-4 w-4' />
                  </button>
                )}
              </div>

              {/* Filters */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='space-y-2'>
                  <label className='text-sm font-medium text-primary-900'>
                    Category
                  </label>
                  <Select
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                  >
                    <SelectTrigger className='w-full border-primary-300 hover:border-primary-400'>
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
                </div>

                <div className='space-y-2'>
                  <label className='text-sm font-medium text-primary-900'>
                    Brand
                  </label>
                  <Select
                    value={selectedBrand}
                    onValueChange={setSelectedBrand}
                  >
                    <SelectTrigger className='w-full border-primary-300 hover:border-primary-400'>
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
                </div>

                <div className='space-y-2'>
                  <label className='text-sm font-medium text-primary-900'>
                    Price Range
                  </label>
                  <div className='pt-2'>
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
                    <div className='flex justify-between text-sm text-primary-700 font-medium mt-2'>
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                <div className='space-y-2'>
                  <label className='text-sm font-medium text-primary-900'>
                    Sort By
                  </label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className='w-full border-primary-300 hover:border-primary-400'>
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

              {/* Active Filters Summary */}
              {(selectedCategory !== 'All' ||
                selectedBrand !== 'All' ||
                searchQuery ||
                priceRange[0] !== 0 ||
                priceRange[1] !== 2000) && (
                <div className='flex flex-wrap items-center gap-2 pt-2 border-t border-primary-200'>
                  <span className='text-sm font-medium text-primary-700'>
                    Active Filters:
                  </span>
                  {selectedCategory !== 'All' && (
                    <Badge
                      variant='secondary'
                      className='bg-primary-100 text-primary-800 hover:bg-primary-200'
                    >
                      {selectedCategory}
                      <button
                        onClick={() => setSelectedCategory('All')}
                        className='ml-1 hover:text-primary-900'
                      >
                        <X className='h-3 w-3' />
                      </button>
                    </Badge>
                  )}
                  {selectedBrand !== 'All' && (
                    <Badge
                      variant='secondary'
                      className='bg-primary-100 text-primary-800 hover:bg-primary-200'
                    >
                      {selectedBrand}
                      <button
                        onClick={() => setSelectedBrand('All')}
                        className='ml-1 hover:text-primary-900'
                      >
                        <X className='h-3 w-3' />
                      </button>
                    </Badge>
                  )}
                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={() => {
                      setSelectedCategory('All');
                      setSelectedBrand('All');
                      setSearchQuery('');
                      setPriceRange([0, 2000]);
                    }}
                    className='text-primary-600 hover:text-primary-800 h-7'
                  >
                    Clear All
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className='text-center text-primary-600'>
          Showing {filteredProducts.length} of {products.length} products
        </div>

        {/* Product Grid */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} variant='compact' />
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
