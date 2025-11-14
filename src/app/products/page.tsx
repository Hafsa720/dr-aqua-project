'use client';

import { ChevronLeft, ChevronRight, Filter, Search, X } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useMemo, useState } from 'react';

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
import { getSubcategoryOptions, getSubSubOptions } from '@/data/products';
import type { ProductLanguage } from '@/types/product';

function ShopPageContent() {
  const { language: contextLang } = useLanguage();
  // Product only supports 'en' and 'ur', fallback to 'en' for other languages
  const language: ProductLanguage = (
    contextLang === 'ur' ? 'ur' : 'en'
  ) as ProductLanguage;
  const products = getProducts();
  const searchParams = useSearchParams();
  const filterParam = searchParams?.get('filter') ?? null;
  const [categories, setCategories] = useState(getCategories('en'));
  const [brands, setBrands] = useState(getBrands('en'));
  const [sortOptions, setSortOptions] = useState(getSortOptions('en'));
  const [labels, setLabels] = useState(getShopLabels('en'));

  const [subcategories, setSubcategories] = useState<
    { key: string; label: string }[]
  >(getSubcategoryOptions(categories[0] ?? 'All', 'en'));
  const [subSubOptions, setSubSubOptions] = useState<
    { key: string; label: string }[]
  >([{ key: 'all', label: 'All' }]);
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [selectedSubSub, setSelectedSubSub] = useState('all');

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
    // reset subcategory selections when language changes
    setSubcategories(
      getSubcategoryOptions(newCategories[0] ?? 'All', language),
    );
    setSelectedSubcategory('all');
    setSubSubOptions(getSubSubOptions('all', language));
    setSelectedSubSub('all');
  }, [language]);

  // Update subcategory options when user changes category
  useEffect(() => {
    setSubcategories(
      getSubcategoryOptions(selectedCategory ?? 'All', language),
    );
    setSelectedSubcategory('all');
    setSubSubOptions(getSubSubOptions('all', language));
    setSelectedSubSub('all');
  }, [selectedCategory, language]);

  const filteredProducts = useMemo(() => {
    const filterKey = filterParam ? filterParam.toLowerCase() : null;
    const filterKeywords: Record<string, string[]> = {
      'simple-filter': [
        'simple',
        'simple filter',
        'jumbo filter',
        'slim filter',
        'simple-filter',
      ],
      'ro-filter': [
        'ro',
        'r.o',
        'reverse osmosis',
        'r.o.',
        'ro 2',
        'ro 3',

        'ro 8',
        '2 stage',
        '3 stage',

        '8 stage',
      ],
      accessories: [
        'cartridge',
        'cartridges',
        'adopter',
        'adopters',
        'adapter',
        'adapter(s)',
        'membrane',
        'tap',
        'taps',
        'pipe',
        'pipes',
        'mineral cartridge',
        'mineral cartridges',
        'post carbon',
        'post-carbon',
      ],
      'solar-system': [
        'solar',
        'solor',
        'solar system',
        'panel',
        'panels',
        'battery',
        'invertor',
        'inverter',
        'frame',
        'frames',
      ],
      commercials: [
        'ice factory',
        'ice factories',
        'restaurant',
        'restaurants',
      ],
      'water-supply': ['water supply', 'supply'],
    };
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

      // Subcategory filtering (applies when a category with subcategories is selected)
      const matchesSubcategory = (() => {
        // Only apply subcategory filtering if not on "All" category
        if (selectedCategory === categories[0]) return true;

        if (!selectedSubcategory || selectedSubcategory === 'all') return true;

        const textToCheck =
          `${product.slug} ${product.name[language]}`.toLowerCase();

        if (selectedSubSub && selectedSubSub !== 'all') {
          return textToCheck.includes(selectedSubSub.toLowerCase());
        }

        const keywords = filterKeywords[selectedSubcategory] ?? [
          selectedSubcategory,
        ];
        return keywords.some((k) => textToCheck.includes(k));
      })();

      // If a navbar filter param is present, require the product's slug or name to match any keyword
      if (filterKey) {
        const keywords = filterKeywords[filterKey] ?? [filterKey];
        const textToCheck =
          `${product.slug} ${product.name[language]}`.toLowerCase();
        const matchesFilter = keywords.some((k) => textToCheck.includes(k));
        if (!matchesFilter) return false;
      }

      return (
        matchesSearch && matchesCategory && matchesBrand && matchesSubcategory
      );
    });

    // Apply sorting based on sortBy
    const sorted = [...filtered];
    switch (sortBy) {
      case 'new-to-old':
        sorted.sort((a, b) => Number(b.id) - Number(a.id));
        break;
      case 'old-to-new':
        sorted.sort((a, b) => Number(a.id) - Number(b.id));
        break;
      // price sorting is not reliable because products use price ranges; keep data order for featured/default
      default:
        break;
    }

    return sorted;
  }, [
    searchQuery,
    selectedCategory,
    selectedBrand,
    selectedSubcategory,
    selectedSubSub,
    filterParam,
    sortBy,
    products,
    categories,
    brands,
    language,
  ]);

  // Pagination: show up to `pageSize` items per page (pageSize = 6)
  const pageSize = 6;
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / pageSize));
  const itemsPerPage = pageSize;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredProducts.length);
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedBrand, sortBy, filterParam]);

  // Clamp currentPage if filteredProducts shrink
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

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

              {/* Subcategory selects for Residential, Commercial, and Accessories */}
              {(selectedCategory === categories[1] ||
                selectedCategory === categories[2] ||
                selectedCategory === categories[4]) &&
                subcategories.length > 1 && (
                  <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                      <label className='text-sm font-medium text-primary-900'>
                        {language === 'ur' ? 'زمرہ (سب)' : 'Subcategory'}
                      </label>
                      <Select
                        value={selectedSubcategory}
                        onValueChange={(v) => {
                          setSelectedSubcategory(v);
                          setSubSubOptions(getSubSubOptions(v, language));
                          setSelectedSubSub('all');
                        }}
                      >
                        <SelectTrigger className='w-full border-primary-300 hover:border-primary-400'>
                          <SelectValue
                            placeholder={
                              language === 'ur' ? 'زمرہ (سب)' : 'Subcategory'
                            }
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {subcategories.map((sc) => (
                            <SelectItem key={sc.key} value={sc.key}>
                              {sc.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {subSubOptions.length > 1 && (
                      <div className='space-y-2'>
                        <label className='text-sm font-medium text-primary-900'>
                          {language === 'ur' ? 'قسم' : 'Type'}
                        </label>
                        <Select
                          value={selectedSubSub}
                          onValueChange={setSelectedSubSub}
                        >
                          <SelectTrigger className='w-full border-primary-300 hover:border-primary-400'>
                            <SelectValue
                              placeholder={language === 'ur' ? 'قسم' : 'Type'}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            {subSubOptions.map((s) => (
                              <SelectItem key={s.key} value={s.key}>
                                {s.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </div>
                )}

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

export default function ShopPage() {
  return (
    <Suspense
      fallback={<div className='container mx-auto px-4 py-8'>Loading...</div>}
    >
      <ShopPageContent />
    </Suspense>
  );
}
