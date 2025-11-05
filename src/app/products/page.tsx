'use client';

import { ChevronLeft, ChevronRight, Filter, Search, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

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
import { useLanguage } from '@/contexts/LanguageContext';
import {
  getBrands,
  getCategories,
  getProducts,
  getShopLabels,
  getSortOptions,
} from '@/data/products';
import type { ProductLanguage } from '@/types/product';

export default function ShopPage() {
  const { language: contextLang } = useLanguage();
  // Product only supports 'en' and 'ur', fallback to 'en' for other languages
  const language: ProductLanguage = (
    contextLang === 'ur' ? 'ur' : 'en'
  ) as ProductLanguage;
  const products = getProducts();
  const [categories, setCategories] = useState(getCategories('en'));
  const [brands, setBrands] = useState(getBrands('en'));
  const [sortOptions, setSortOptions] = useState(getSortOptions('en'));
  const [labels, setLabels] = useState(getShopLabels('en'));

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedBrand, setSelectedBrand] = useState(brands[0]);
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const newCategories = getCategories(language);
    const newBrands = getBrands(language);
    const newSortOptions = getSortOptions(language);
    const newLabels = getShopLabels(language);

    setCategories(newCategories);
    setBrands(newBrands);
    setSortOptions(newSortOptions);
    setLabels(newLabels);
    setSelectedCategory(newCategories[0]);
    setSelectedBrand(newBrands[0]);
  }, [language]);

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.name[language]
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        product.description[language]
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === categories[0] ||
        product.category[language] === selectedCategory;
      const matchesBrand =
        selectedBrand === brands[0] ||
        product.brand[language] === selectedBrand;

      return matchesSearch && matchesCategory && matchesBrand;
    });

    // Note: Price-based sorting removed since products now use price ranges
    // Featured products are already sorted in the data
    return filtered;
  }, [
    searchQuery,
    selectedCategory,
    selectedBrand,
    products,
    categories,
    brands,
    language,
  ]);

  // Force total pages to 2 and distribute products/images accordingly
  const totalPages = 2;
  const itemsPerPage = Math.ceil(filteredProducts.length / totalPages);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedBrand, sortBy]);

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='space-y-8'>
        {/* Header */}
        <div className='text-center space-y-4'>
          <h1 className='text-3xl lg:text-4xl font-bold text-primary-900'>
            {labels.pageTitle}
          </h1>
          <p className='text-lg text-primary-700 max-w-2xl mx-auto'>
            {labels.pageDescription}
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
                  placeholder={labels.searchPlaceholder}
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
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='space-y-2'>
                  <label className='text-sm font-medium text-primary-900'>
                    {labels.categoryLabel}
                  </label>
                  <Select
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                  >
                    <SelectTrigger className='w-full border-primary-300 hover:border-primary-400'>
                      <SelectValue placeholder={labels.categoryLabel} />
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
                    {labels.brandLabel}
                  </label>
                  <Select
                    value={selectedBrand}
                    onValueChange={setSelectedBrand}
                  >
                    <SelectTrigger className='w-full border-primary-300 hover:border-primary-400'>
                      <SelectValue placeholder={labels.brandLabel} />
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
                    {labels.sortByLabel}
                  </label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className='w-full border-primary-300 hover:border-primary-400'>
                      <SelectValue placeholder={labels.sortByLabel} />
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
              {(selectedCategory !== categories[0] ||
                selectedBrand !== brands[0] ||
                searchQuery) && (
                <div className='flex flex-wrap items-center gap-2 pt-2 border-t border-primary-200'>
                  <span className='text-sm font-medium text-primary-700'>
                    {labels.activeFilters}
                  </span>
                  {selectedCategory !== categories[0] && (
                    <Badge
                      variant='secondary'
                      className='bg-primary-100 text-primary-800 hover:bg-primary-200'
                    >
                      {selectedCategory}
                      <button
                        onClick={() => setSelectedCategory(categories[0])}
                        className='ml-1 hover:text-primary-900'
                      >
                        <X className='h-3 w-3' />
                      </button>
                    </Badge>
                  )}
                  {selectedBrand !== brands[0] && (
                    <Badge
                      variant='secondary'
                      className='bg-primary-100 text-primary-800 hover:bg-primary-200'
                    >
                      {selectedBrand}
                      <button
                        onClick={() => setSelectedBrand(brands[0])}
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
                      setSelectedCategory(categories[0]);
                      setSelectedBrand(brands[0]);
                      setSearchQuery('');
                    }}
                    className='text-primary-600 hover:text-primary-800 h-7'
                  >
                    {labels.clearAll}
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className='text-center text-primary-600'>
          {labels.showingResults} {startIndex + 1}-
          {Math.min(endIndex, filteredProducts.length)} {labels.of}{' '}
          {filteredProducts.length} {labels.products}
        </div>

        {/* Product Grid */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} variant='compact' />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className='flex justify-center items-center gap-2 mt-8'>
            <Button
              variant='outline'
              size='sm'
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className='border-primary-300 text-primary-700 hover:bg-primary-50 disabled:opacity-50'
            >
              <ChevronLeft className='h-4 w-4 mr-1' />
              {labels.previous}
            </Button>

            <div className='flex items-center gap-1'>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? 'default' : 'outline'}
                    size='sm'
                    onClick={() => setCurrentPage(page)}
                    className={
                      currentPage === page
                        ? 'bg-primary-600 hover:bg-primary-700 text-white'
                        : 'border-primary-300 text-primary-700 hover:bg-primary-50'
                    }
                  >
                    {page}
                  </Button>
                ),
              )}
            </div>

            <Button
              variant='outline'
              size='sm'
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className='border-primary-300 text-primary-700 hover:bg-primary-50 disabled:opacity-50'
            >
              {labels.next}
              <ChevronRight className='h-4 w-4 ml-1' />
            </Button>
          </div>
        )}

        {filteredProducts.length === 0 && (
          <div className='text-center py-12'>
            <Filter className='h-12 w-12 text-primary-400 mx-auto mb-4' />
            <h3 className='text-lg font-semibold mb-2 text-primary-900'>
              {labels.noProductsFound}
            </h3>
            <p className='text-primary-700'>{labels.tryAdjusting}</p>
          </div>
        )}
      </div>
    </div>
  );
}
