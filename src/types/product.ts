export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  brand: string;
  description: string;
  shortDescription: string;
  features: string[];
  specifications: Record<string, string>;
  inStock: boolean;
  featured: boolean;
  tags: string[];
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
