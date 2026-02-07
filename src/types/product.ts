// Product language keys (only en and ur for products)
export type ProductLanguage = 'en' | 'ur';

// Type for fields that need translation
export type TranslatableString = Record<ProductLanguage, string>;

// Product structure with nested translations (stored in DB and used in components)
export interface Product {
  id: string;
  slug: string;
  priceRange: string; // e.g., "15,000 - 25,000" for flexible pricing
  image: string;
  inStock: boolean;
  featured: boolean;
  name: TranslatableString;
  category: TranslatableString;
  brand: TranslatableString;
  description: TranslatableString; // Supports markdown formatting
  specifications: Record<string, TranslatableString>;
}

export interface FilterOption {
  value: string;
  label: string;
}

export interface ShopLabels {
  pageTitle: string;
  pageDescription: string;
  searchPlaceholder: string;
  categoryLabel: string;
  brandLabel: string;
  priceRangeLabel: string;
  sortByLabel: string;
  activeFilters: string;
  clearAll: string;
  showingResults: string;
  of: string;
  products: string;
  noProductsFound: string;
  tryAdjusting: string;
  previous: string;
  next: string;
  inStock: string;
  outOfStock: string;
  addToCart: string;
  viewDetails: string;
  save: string;
}
