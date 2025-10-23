import type { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    slug: 'aquapure-pro-5-stage-filter',
    price: 299,
    originalPrice: 399,
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&auto=format&fit=crop&v=2',
    rating: 4.8,
    reviews: 124,
    inStock: true,
    featured: true,
    name: {
      en: 'AquaPure Pro 5-Stage Filter',
      ur: 'ایکواپیور پرو 5 اسٹیج فلٹر',
    },
    category: { en: 'Residential', ur: 'رہائشی' },
    brand: { en: 'AquaPure', ur: 'ایکواپیور' },
    description: {
      en: 'Advanced 5-stage filtration system with UV sterilization and smart monitoring capabilities.',
      ur: 'یو وی جراثیم کشی اور سمارٹ مانیٹرنگ کی صلاحیتوں کے ساتھ جدید 5 اسٹیج فلٹریشن سسٹم۔',
    },
    shortDescription: {
      en: 'Advanced 5-stage filtration system with UV sterilization.',
      ur: 'یو وی جراثیم کشی کے ساتھ جدید 5 اسٹیج فلٹریشن سسٹم۔',
    },
    features: [
      { en: '5-Stage Filtration', ur: '5 اسٹیج فلٹریشن' },
      { en: 'UV Sterilization', ur: 'یو وی جراثیم کشی' },
      { en: 'Smart Monitoring', ur: 'سمارٹ مانیٹرنگ' },
      { en: '2-Year Warranty', ur: '2 سال کی وارنٹی' },
    ],
    specifications: {
      'Flow Rate': { en: '2.5 GPM', ur: '2.5 گیلن فی منٹ' },
      'Filter Life': { en: '12 months', ur: '12 ماہ' },
      Dimensions: { en: '15" x 8" x 20"', ur: '15" x 8" x 20"' },
      Weight: { en: '25 lbs', ur: '25 پاؤنڈ' },
      Installation: { en: 'Under-sink', ur: 'سنک کے نیچے' },
      Certifications: { en: 'NSF/ANSI 42, 53, 58', ur: 'NSF/ANSI 42, 53, 58' },
    },
    tags: [
      { en: 'Residential', ur: 'رہائشی' },
      { en: 'UV Filter', ur: 'یو وی فلٹر' },
      { en: 'Smart', ur: 'سمارٹ' },
      { en: '5-Stage', ur: '5-اسٹیج' },
    ],
  },
  {
    id: '2',
    slug: 'crystalflow-commercial-unit',
    price: 899,
    originalPrice: 1199,
    image:
      'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=800&auto=format&fit=crop&v=2',
    rating: 4.9,
    reviews: 87,
    inStock: true,
    featured: true,
    name: { en: 'CrystalFlow Commercial Unit', ur: 'کرسٹل فلو کمرشل یونٹ' },
    category: { en: 'Commercial', ur: 'تجارتی' },
    brand: { en: 'CrystalFlow', ur: 'کرسٹل فلو' },
    description: {
      en: 'High-capacity commercial water filtration system with auto-cleaning and remote control.',
      ur: 'آٹو کلیننگ اور ریموٹ کنٹرول کے ساتھ ہائی کیپیسٹی کمرشل واٹر فلٹریشن سسٹم۔',
    },
    shortDescription: {
      en: 'High-capacity commercial system with auto-cleaning feature.',
      ur: 'آٹو کلیننگ فیچر کے ساتھ ہائی کیپیسٹی تجارتی سسٹم۔',
    },
    features: [
      { en: 'High Capacity', ur: 'ہائی کیپیسٹی' },
      { en: 'Auto-Cleaning', ur: 'آٹو کلیننگ' },
      { en: 'Remote Control', ur: 'ریموٹ کنٹرول' },
      { en: '5-Year Warranty', ur: '5 سال کی وارنٹی' },
    ],
    specifications: {
      'Flow Rate': { en: '10 GPM', ur: '10 گیلن فی منٹ' },
      'Filter Life': { en: '24 months', ur: '24 ماہ' },
      Dimensions: { en: '24" x 12" x 36"', ur: '24" x 12" x 36"' },
      Weight: { en: '85 lbs', ur: '85 پاؤنڈ' },
      Installation: { en: 'Floor-standing', ur: 'فرش پر کھڑا' },
      Certifications: { en: 'NSF/ANSI 42, 53, 61', ur: 'NSF/ANSI 42, 53, 61' },
    },
    tags: [
      { en: 'Commercial', ur: 'تجارتی' },
      { en: 'Auto-Cleaning', ur: 'آٹو کلیننگ' },
      { en: 'Remote Control', ur: 'ریموٹ کنٹرول' },
      { en: 'High Capacity', ur: 'ہائی کیپیسٹی' },
    ],
  },
  {
    id: '3',
    slug: 'ecofilter-compact-home',
    price: 149,
    originalPrice: 199,
    image:
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop&v=2',
    rating: 4.7,
    reviews: 203,
    inStock: true,
    featured: false,
    name: { en: 'EcoFilter Compact Home', ur: 'ایکو فلٹر کمپیکٹ ہوم' },
    category: { en: 'Residential', ur: 'رہائشی' },
    brand: { en: 'EcoFilter', ur: 'ایکو فلٹر' },
    description: {
      en: 'Space-saving home water filter with easy installation and long-lasting performance.',
      ur: 'آسان تنصیب اور طویل عرصے تک چلنے والی کارکردگی کے ساتھ جگہ بچانے والا گھریلو واٹر فلٹر۔',
    },
    shortDescription: {
      en: 'Space-saving home filter with easy installation.',
      ur: 'آسان تنصیب کے ساتھ جگہ بچانے والا گھریلو فلٹر۔',
    },
    features: [
      { en: 'Space Saving', ur: 'جگہ کی بچت' },
      { en: 'Easy Install', ur: 'آسان تنصیب' },
      { en: 'Long Lasting', ur: 'لمبے عرصے تک چلنے والا' },
      { en: '1-Year Warranty', ur: '1 سال کی وارنٹی' },
    ],
    specifications: {
      'Flow Rate': { en: '1.5 GPM', ur: '1.5 گیلن فی منٹ' },
      'Filter Life': { en: '6 months', ur: '6 ماہ' },
      Dimensions: { en: '10" x 6" x 12"', ur: '10" x 6" x 12"' },
      Weight: { en: '8 lbs', ur: '8 پاؤنڈ' },
      Installation: { en: 'Countertop', ur: 'کاؤنٹر ٹاپ' },
      Certifications: { en: 'NSF/ANSI 42, 53', ur: 'NSF/ANSI 42, 53' },
    },
    tags: [
      { en: 'Residential', ur: 'رہائشی' },
      { en: 'Compact', ur: 'کمپیکٹ' },
      { en: 'Countertop', ur: 'کاؤنٹر ٹاپ' },
      { en: 'Budget-Friendly', ur: 'سستا' },
    ],
  },
  {
    id: '4',
    slug: 'puretech-industrial-system',
    price: 1599,
    originalPrice: 1999,
    image:
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&v=2',
    rating: 4.9,
    reviews: 45,
    inStock: true,
    featured: true,
    name: { en: 'PureTech Industrial System', ur: 'پیور ٹیک انڈسٹریل سسٹم' },
    category: { en: 'Industrial', ur: 'صنعتی' },
    brand: { en: 'PureTech', ur: 'پیور ٹیک' },
    description: {
      en: 'Heavy-duty industrial water treatment system for large-scale operations.',
      ur: 'بڑے پیمانے پر آپریشنز کے لیے ہیوی ڈیوٹی صنعتی واٹر ٹریٹمنٹ سسٹم۔',
    },
    shortDescription: {
      en: 'Heavy-duty industrial system for large-scale operations.',
      ur: 'بڑے پیمانے پر آپریشنز کے لیے ہیوی ڈیوٹی صنعتی سسٹم۔',
    },
    features: [
      { en: 'Industrial Grade', ur: 'صنعتی گریڈ' },
      { en: 'High Volume', ur: 'ہائی والیوم' },
      { en: 'Automated Controls', ur: 'خودکار کنٹرولز' },
      { en: '10-Year Warranty', ur: '10 سال کی وارنٹی' },
    ],
    specifications: {
      'Flow Rate': { en: '50 GPM', ur: '50 گیلن فی منٹ' },
      'Filter Life': { en: '36 months', ur: '36 ماہ' },
      Dimensions: { en: '36" x 24" x 48"', ur: '36" x 24" x 48"' },
      Weight: { en: '250 lbs', ur: '250 پاؤنڈ' },
      Installation: { en: 'Floor-standing', ur: 'فرش پر کھڑا' },
      Certifications: {
        en: 'NSF/ANSI 42, 53, 61, 372',
        ur: 'NSF/ANSI 42, 53, 61, 372',
      },
    },
    tags: [
      { en: 'Industrial', ur: 'صنعتی' },
      { en: 'Heavy-Duty', ur: 'ہیوی ڈیوٹی' },
      { en: 'High Volume', ur: 'ہائی والیوم' },
      { en: 'Automated', ur: 'خودکار' },
    ],
  },
  {
    id: '5',
    slug: 'aquahome-basic-filter',
    price: 89,
    originalPrice: 119,
    image:
      'https://images.unsplash.com/photo-1629794226404-d0fc0d9a1a1f?w=800&auto=format&fit=crop&v=2',
    rating: 4.5,
    reviews: 312,
    inStock: true,
    featured: false,
    name: { en: 'AquaHome Basic Filter', ur: 'ایکوا ہوم بیسک فلٹر' },
    category: { en: 'Residential', ur: 'رہائشی' },
    brand: { en: 'AquaHome', ur: 'ایکوا ہوم' },
    description: {
      en: 'Affordable and reliable basic water filtration for everyday use.',
      ur: 'روزمرہ کے استعمال کے لیے سستا اور قابل اعتماد بنیادی واٹر فلٹریشن۔',
    },
    shortDescription: {
      en: 'Affordable basic filtration for everyday use.',
      ur: 'روزمرہ کے استعمال کے لیے سستا بنیادی فلٹریشن۔',
    },
    features: [
      { en: 'Basic Filtration', ur: 'بنیادی فلٹریشن' },
      { en: 'Budget Friendly', ur: 'بجٹ دوستانہ' },
      { en: 'Easy Maintenance', ur: 'آسان دیکھ بھال' },
      { en: '6-Month Warranty', ur: '6 ماہ کی وارنٹی' },
    ],
    specifications: {
      'Flow Rate': { en: '1 GPM', ur: '1 گیلن فی منٹ' },
      'Filter Life': { en: '3 months', ur: '3 ماہ' },
      Dimensions: { en: '8" x 4" x 10"', ur: '8" x 4" x 10"' },
      Weight: { en: '4 lbs', ur: '4 پاؤنڈ' },
      Installation: { en: 'Countertop', ur: 'کاؤنٹر ٹاپ' },
      Certifications: { en: 'NSF/ANSI 42', ur: 'NSF/ANSI 42' },
    },
    tags: [
      { en: 'Residential', ur: 'رہائشی' },
      { en: 'Budget', ur: 'بجٹ' },
      { en: 'Basic', ur: 'بنیادی' },
      { en: 'Countertop', ur: 'کاؤنٹر ٹاپ' },
    ],
  },
  {
    id: '6',
    slug: 'flowmax-office-system',
    price: 449,
    originalPrice: 599,
    image:
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&v=2',
    rating: 4.6,
    reviews: 156,
    inStock: true,
    featured: false,
    name: { en: 'FlowMax Office System', ur: 'فلو میکس آفس سسٹم' },
    category: { en: 'Commercial', ur: 'تجارتی' },
    brand: { en: 'FlowMax', ur: 'فلو میکس' },
    description: {
      en: 'Perfect water filtration solution for offices and small businesses.',
      ur: 'دفاتر اور چھوٹے کاروبار کے لیے بہترین واٹر فلٹریشن حل۔',
    },
    shortDescription: {
      en: 'Perfect solution for offices and small businesses.',
      ur: 'دفاتر اور چھوٹے کاروبار کے لیے بہترین حل۔',
    },
    features: [
      { en: 'Office Optimized', ur: 'آفس کے لیے بہتر' },
      { en: 'Quiet Operation', ur: 'خاموش آپریشن' },
      { en: 'Compact Design', ur: 'کمپیکٹ ڈیزائن' },
      { en: '3-Year Warranty', ur: '3 سال کی وارنٹی' },
    ],
    specifications: {
      'Flow Rate': { en: '5 GPM', ur: '5 گیلن فی منٹ' },
      'Filter Life': { en: '18 months', ur: '18 ماہ' },
      Dimensions: { en: '18" x 10" x 24"', ur: '18" x 10" x 24"' },
      Weight: { en: '45 lbs', ur: '45 پاؤنڈ' },
      Installation: {
        en: 'Wall-mounted or floor-standing',
        ur: 'دیوار پر نصب یا فرش پر کھڑا',
      },
      Certifications: { en: 'NSF/ANSI 42, 53', ur: 'NSF/ANSI 42, 53' },
    },
    tags: [
      { en: 'Commercial', ur: 'تجارتی' },
      { en: 'Office', ur: 'آفس' },
      { en: 'Quiet', ur: 'خاموش' },
      { en: 'Compact', ur: 'کمپیکٹ' },
    ],
  },
];

// Categories and brands with translations
export const categoriesWithTranslations = [
  { en: 'All', ur: 'تمام' },
  { en: 'Residential', ur: 'رہائشی' },
  { en: 'Commercial', ur: 'تجارتی' },
  { en: 'Industrial', ur: 'صنعتی' },
];

export const brandsWithTranslations = [
  { en: 'All', ur: 'تمام' },
  { en: 'AquaPure', ur: 'ایکواپیور' },
  { en: 'CrystalFlow', ur: 'کرسٹل فلو' },
  { en: 'EcoFilter', ur: 'ایکو فلٹر' },
  { en: 'PureTech', ur: 'پیور ٹیک' },
  { en: 'AquaHome', ur: 'ایکوا ہوم' },
  { en: 'FlowMax', ur: 'فلو میکس' },
];

export const sortOptionsWithTranslations = [
  { value: 'featured', label: { en: 'Featured', ur: 'نمایاں' } },
  {
    value: 'price-low',
    label: { en: 'Price: Low to High', ur: 'قیمت: کم سے زیادہ' },
  },
  {
    value: 'price-high',
    label: { en: 'Price: High to Low', ur: 'قیمت: زیادہ سے کم' },
  },
  { value: 'rating', label: { en: 'Highest Rated', ur: 'سب سے زیادہ ریٹیڈ' } },
];
