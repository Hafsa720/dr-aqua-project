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
  subcategoryOptionsByCategory,
  subSubOptionsBySubcategory,
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

export const getSubcategoryOptions = (
  category: string,
  language: string,
): { key: string; label: string }[] => {
  const catKey = category.toLowerCase();

  // Map known categories to their subcategory options
  if (catKey === 'residential' || catKey === 'رہائشی') {
    return subcategoryOptionsByCategory.residential.map(
      (o: { key: string; en: string; ur: string }) => ({
        key: o.key,
        label: language === 'ur' ? o.ur : o.en,
      }),
    );
  }

  if (catKey === 'commercial' || catKey === 'تجارتی') {
    return subcategoryOptionsByCategory.commercial.map(
      (o: { key: string; en: string; ur: string }) => ({
        key: o.key,
        label: language === 'ur' ? o.ur : o.en,
      }),
    );
  }

  if (catKey === 'accessories' || catKey === 'لوازمات') {
    return subcategoryOptionsByCategory.accessories.map(
      (o: { key: string; en: string; ur: string }) => ({
        key: o.key,
        label: language === 'ur' ? o.ur : o.en,
      }),
    );
  }

  // Default: return single 'all' option
  return [{ key: 'all', label: language === 'ur' ? 'تمام' : 'All' }];
};

export const getSubSubOptions = (
  subcategoryKey: string,
  language: string,
): { key: string; label: string }[] => {
  const list =
    subSubOptionsBySubcategory[
      subcategoryKey as keyof typeof subSubOptionsBySubcategory
    ];
  if (!list) return [{ key: 'all', label: language === 'ur' ? 'تمام' : 'All' }];
  return (list as { key: string; en: string; ur: string }[]).map((o) => ({
    key: o.key,
    label: language === 'ur' ? o.ur : o.en,
  }));
};

export const getBrands = (language: string): string[] => {
  // Start with canonical brands list (from products.ts translations) so requested
  // brands always appear, then append any extra brands found in product data.
  const allLabel = language === 'ur' ? 'تمام' : 'All';
  const langKey: 'en' | 'ur' = language === 'ur' ? 'ur' : 'en';

  // Canonical brands from the translations file (skip the first 'All' entry)
  const canonical = brandsWithTranslations
    .slice(1)
    .map((b) => (language === 'ur' ? b.ur : b.en));

  // Brands present in products (language-specific)
  const productBrands = Array.from(
    new Set(products.map((p) => p.brand[langKey]).filter(Boolean)),
  );

  // Merge canonical + product-derived (preserve canonical order, then extras)
  const canonicalSet = new Set(canonical);
  const extras = productBrands.filter((b) => !canonicalSet.has(b));

  return [allLabel, ...canonical, ...extras];
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
