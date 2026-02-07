export const productDetailLabelsEn = {
  backToShop: 'Back to Shop',
  save: 'Save',
  inStock: 'In Stock',
  outOfStock: 'Out of Stock',
  keyFeatures: 'Key Features:',
  quantity: 'Quantity:',
  addToCart: 'Add to Cart',
  getQuote: 'Get Quote',
  warranty: '2-Year Warranty',
  freeShipping: 'Free Shipping',
  support247: '24/7 Support',
  specifications: 'Specifications',
  installation: 'Installation',
  technicalSpecs: 'Technical Specifications',
  installationInfo: 'Installation Information',
  professionalInstallation: 'Professional Installation Available',
  professionalInstallationDesc:
    'Our certified technicians can install your water filtration system with a 2-year warranty on installation work.',
  diyInstallation: 'DIY Installation',
  diyInstallationDesc:
    'Complete installation kit included with detailed instructions. Most installations can be completed in 2-3 hours.',
  bookInstallation: 'Book Installation Service',
  productNotFound: 'Product Not Found',
};

export const productDetailLabelsUr = {
  backToShop: 'شاپ پر واپس جائیں',
  save: 'بچت',
  inStock: 'اسٹاک میں',
  outOfStock: 'اسٹاک ختم',
  keyFeatures: 'اہم خصوصیات:',
  quantity: 'مقدار:',
  addToCart: 'کارٹ میں شامل کریں',
  getQuote: 'قیمت حاصل کریں',
  warranty: '2 سال کی وارنٹی',
  freeShipping: 'مفت شپنگ',
  support247: '24/7 سپورٹ',
  specifications: 'تفصیلات',
  installation: 'تنصیب',
  technicalSpecs: 'تکنیکی تفصیلات',
  installationInfo: 'تنصیب کی معلومات',
  professionalInstallation: 'پیشہ ورانہ تنصیب دستیاب ہے',
  professionalInstallationDesc:
    'ہمارے تصدیق شدہ ٹیکنیشنز آپ کے واٹر فلٹریشن سسٹم کو تنصیب کے کام پر 2 سال کی وارنٹی کے ساتھ انسٹال کر سکتے ہیں۔',
  diyInstallation: 'خود تنصیب',
  diyInstallationDesc:
    'تفصیلی ہدایات کے ساتھ مکمل تنصیب کٹ شامل۔ زیادہ تر تنصیبات 2-3 گھنٹوں میں مکمل ہو سکتی ہیں۔',
  bookInstallation: 'تنصیب کی سروس بک کریں',
  productNotFound: 'مصنوعات نہیں ملی',
};

export const getProductDetailLabels = (language: string) => {
  return language === 'ur' ? productDetailLabelsUr : productDetailLabelsEn;
};
