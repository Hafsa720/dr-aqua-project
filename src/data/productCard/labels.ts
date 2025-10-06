export const productCardLabelsEn = {
  save: 'Save',
  details: 'Details',
  viewDetails: 'View Details',
  add: 'Add',
  addToCart: 'Add to Cart',
  adding: 'Adding...',
  toastTitle: 'Added to cart',
  toastDescription: '{productName} has been added to your cart.',
};

export const productCardLabelsUr = {
  save: 'بچائیں',
  details: 'تفصیلات',
  viewDetails: 'تفصیلات دیکھیں',
  add: 'شامل کریں',
  addToCart: 'کارٹ میں شامل کریں',
  adding: 'شامل ہو رہا ہے...',
  toastTitle: 'کارٹ میں شامل کر دیا گیا',
  toastDescription: '{productName} آپ کی کارٹ میں شامل کر دیا گیا ہے۔',
};

export const getProductCardLabels = (language: string) => {
  return language === 'ur' ? productCardLabelsUr : productCardLabelsEn;
};
