import { productsEn, categoriesEn, brandsEn, sortOptionsEn, shopLabelsEn } from './en';
import { productsUr, categoriesUr, brandsUr, sortOptionsUr, shopLabelsUr } from './ur';
import type { Product, FilterOption, ShopLabels } from '@/types/product';

export const getProducts = (language: string): Product[] => {
  return language === 'ur' ? productsUr : productsEn;
};

export const getCategories = (language: string): string[] => {
  return language === 'ur' ? categoriesUr : categoriesEn;
};

export const getBrands = (language: string): string[] => {
  return language === 'ur' ? brandsUr : brandsEn;
};

export const getSortOptions = (language: string): FilterOption[] => {
  return language === 'ur' ? sortOptionsUr : sortOptionsEn;
};

export const getShopLabels = (language: string): ShopLabels => {
  return language === 'ur' ? shopLabelsUr : shopLabelsEn;
};

export const getProductById = (id: string, language: string): Product | undefined => {
  const products = getProducts(language);
  return products.find((p) => p.id === id);
};

export const getProductBySlug = (slug: string, language: string): Product | undefined => {
  const products = getProducts(language);
  return products.find((p) => p.slug === slug);
};

export const getFeaturedProducts = (language: string): Product[] => {
  const products = getProducts(language);
  return products.filter((p) => p.featured);
};
