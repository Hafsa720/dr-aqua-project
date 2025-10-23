import type {
  FilterOption,
  Product,
  ShopLabels,
  TranslatableString,
} from '@/types/product';

import { shopLabelsEn } from './en';
import {
  brandsWithTranslations,
  categoriesWithTranslations,
  products,
  sortOptionsWithTranslations,
} from './products';
import { shopLabelsUr } from './ur';

// Helper to extract language-specific string
const extractLang = (
  translatable: TranslatableString,
  language: string,
): string => {
  return language === 'ur' ? translatable.ur : translatable.en;
};

export const getProducts = (): Product[] => {
  return products;
};

export const getCategories = (language: string): string[] => {
  return categoriesWithTranslations.map((c) => extractLang(c, language));
};

export const getBrands = (language: string): string[] => {
  return brandsWithTranslations.map((b) => extractLang(b, language));
};

export const getSortOptions = (language: string): FilterOption[] => {
  return sortOptionsWithTranslations.map((option) => ({
    value: option.value,
    label: extractLang(option.label, language),
  }));
};

export const getShopLabels = (language: string): ShopLabels => {
  return language === 'ur' ? shopLabelsUr : shopLabelsEn;
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.featured);
};
