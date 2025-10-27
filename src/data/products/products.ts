import type { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    slug: 'aquapure-pro-5-stage-filter',
    price: 299,
    originalPrice: 399,
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&auto=format&fit=crop&v=2',
    inStock: true,
    featured: true,
    name: {
      en: 'AquaPure Pro 5-Stage Filter',
      ur: 'ایکواپیور پرو 5 اسٹیج فلٹر',
    },
    category: { en: 'Residential', ur: 'رہائشی' },
    brand: { en: 'AquaPure', ur: 'ایکواپیور' },
    description: {
      en: `Advanced 5-stage filtration system with UV sterilization and smart monitoring capabilities.

## What Makes It Special
- **5-Stage Filtration** removes 99.9% of contaminants including bacteria, viruses, and heavy metals
- **UV Sterilization** ensures microbiologically safe drinking water
- **Smart Monitoring** tracks water quality in real-time via smartphone app
- **2-Year Warranty** with free replacement guarantee

Perfect for families seeking pure, safe drinking water with modern smart home integration.`,
      ur: 'یو وی جراثیم کشی اور سمارٹ مانیٹرنگ کی صلاحیتوں کے ساتھ جدید 5 اسٹیج فلٹریشن سسٹم۔',
    },
    specifications: {
      'Flow Rate': { en: '2.5 GPM', ur: '2.5 گیلن فی منٹ' },
      'Filter Life': { en: '12 months', ur: '12 ماہ' },
      Dimensions: { en: '15" x 8" x 20"', ur: '15" x 8" x 20"' },
      Weight: { en: '25 lbs', ur: '25 پاؤنڈ' },
      Installation: { en: 'Under-sink', ur: 'سنک کے نیچے' },
      Certifications: { en: 'NSF/ANSI 42, 53, 58', ur: 'NSF/ANSI 42, 53, 58' },
    },
  },
  {
    id: '2',
    slug: 'crystalflow-commercial-unit',
    price: 899,
    originalPrice: 1199,
    image:
      'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=800&auto=format&fit=crop&v=2',
    inStock: true,
    featured: true,
    name: { en: 'CrystalFlow Commercial Unit', ur: 'کرسٹل فلو کمرشل یونٹ' },
    category: { en: 'Commercial', ur: 'تجارتی' },
    brand: { en: 'CrystalFlow', ur: 'کرسٹل فلو' },
    description: {
      en: `High-capacity commercial water filtration system with auto-cleaning and remote control.

## What Makes It Special
- **High Capacity** with 10 GPM flow rate handles high-volume commercial demands
- **Auto-Cleaning** technology reduces maintenance time and costs
- **Remote Control** monitoring via web dashboard for easy management
- **5-Year Warranty** covering all parts and labor

Ideal for restaurants, offices, and small commercial facilities requiring reliable water purification.`,
      ur: 'آٹو کلیننگ اور ریموٹ کنٹرول کے ساتھ ہائی کیپیسٹی کمرشل واٹر فلٹریشن سسٹم۔',
    },
    specifications: {
      'Flow Rate': { en: '10 GPM', ur: '10 گیلن فی منٹ' },
      'Filter Life': { en: '24 months', ur: '24 ماہ' },
      Dimensions: { en: '24" x 12" x 36"', ur: '24" x 12" x 36"' },
      Weight: { en: '85 lbs', ur: '85 پاؤنڈ' },
      Installation: { en: 'Floor-standing', ur: 'فرش پر کھڑا' },
      Certifications: { en: 'NSF/ANSI 42, 53, 61', ur: 'NSF/ANSI 42, 53, 61' },
    },
  },
  {
    id: '3',
    slug: 'ecofilter-compact-home',
    price: 149,
    originalPrice: 199,
    image:
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop&v=2',
    inStock: true,
    featured: false,
    name: { en: 'EcoFilter Compact Home', ur: 'ایکو فلٹر کمپیکٹ ہوم' },
    category: { en: 'Residential', ur: 'رہائشی' },
    brand: { en: 'EcoFilter', ur: 'ایکو فلٹر' },
    description: {
      en: `Space-saving home water filter with easy installation and long-lasting performance.

## What Makes It Special
- **Space Saving** compact countertop design fits any kitchen
- **Easy Install** with no plumbing required - connects directly to your faucet
- **Long Lasting** with 6-month filter life and eco-friendly recyclable cartridges
- **1-Year Warranty** with customer support included

Perfect for renters and those seeking an affordable, portable water filtration solution.`,
      ur: 'آسان تنصیب اور طویل عرصے تک چلنے والی کارکردگی کے ساتھ جگہ بچانے والا گھریلو واٹر فلٹر۔',
    },
    specifications: {
      'Flow Rate': { en: '1.5 GPM', ur: '1.5 گیلن فی منٹ' },
      'Filter Life': { en: '6 months', ur: '6 ماہ' },
      Dimensions: { en: '10" x 6" x 12"', ur: '10" x 6" x 12"' },
      Weight: { en: '8 lbs', ur: '8 پاؤنڈ' },
      Installation: { en: 'Countertop', ur: 'کاؤنٹر ٹاپ' },
      Certifications: { en: 'NSF/ANSI 42, 53', ur: 'NSF/ANSI 42, 53' },
    },
  },
  {
    id: '4',
    slug: 'puretech-industrial-system',
    price: 1599,
    originalPrice: 1999,
    image:
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&v=2',
    inStock: true,
    featured: true,
    name: { en: 'PureTech Industrial System', ur: 'پیور ٹیک انڈسٹریل سسٹم' },
    category: { en: 'Industrial', ur: 'صنعتی' },
    brand: { en: 'PureTech', ur: 'پیور ٹیک' },
    description: {
      en: `Heavy-duty industrial water treatment system for large-scale operations.

## What Makes It Special
- **Industrial Grade** construction withstands harsh manufacturing environments
- **High Volume** with 50 GPM capacity serves entire facilities
- **Automated Controls** using PLC technology for precise water quality management
- **10-Year Warranty** with comprehensive parts and service coverage

Engineered for manufacturing plants, food processing facilities, and large-scale industrial applications.`,
      ur: 'بڑے پیمانے پر آپریشنز کے لیے ہیوی ڈیوٹی صنعتی واٹر ٹریٹمنٹ سسٹم۔',
    },
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
  },
  {
    id: '5',
    slug: 'aquahome-basic-filter',
    price: 89,
    originalPrice: 119,
    image:
      'https://images.unsplash.com/photo-1629794226404-d0fc0d9a1a1f?w=800&auto=format&fit=crop&v=2',
    inStock: true,
    featured: false,
    name: { en: 'AquaHome Basic Filter', ur: 'ایکوا ہوم بیسک فلٹر' },
    category: { en: 'Residential', ur: 'رہائشی' },
    brand: { en: 'AquaHome', ur: 'ایکوا ہوم' },
    description: {
      en: `Affordable and reliable basic water filtration for everyday use.

## What Makes It Special
- **Basic Filtration** removes common contaminants and improves water taste
- **Budget Friendly** entry-level pricing perfect for first-time buyers
- **Easy Maintenance** with simple cartridge replacement every 3 months
- **6-Month Warranty** with customer support included

Great starter solution for improving tap water taste and odor at minimal cost.`,
      ur: 'روزمرہ کے استعمال کے لیے سستا اور قابل اعتماد بنیادی واٹر فلٹریشن۔',
    },
    specifications: {
      'Flow Rate': { en: '1 GPM', ur: '1 گیلن فی منٹ' },
      'Filter Life': { en: '3 months', ur: '3 ماہ' },
      Dimensions: { en: '8" x 4" x 10"', ur: '8" x 4" x 10"' },
      Weight: { en: '4 lbs', ur: '4 پاؤنڈ' },
      Installation: { en: 'Countertop', ur: 'کاؤنٹر ٹاپ' },
      Certifications: { en: 'NSF/ANSI 42', ur: 'NSF/ANSI 42' },
    },
  },
  {
    id: '6',
    slug: 'flowmax-office-system',
    price: 449,
    originalPrice: 599,
    image:
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&v=2',
    inStock: true,
    featured: false,
    name: { en: 'FlowMax Office System', ur: 'فلو میکس آفس سسٹم' },
    category: { en: 'Commercial', ur: 'تجارتی' },
    brand: { en: 'FlowMax', ur: 'فلو میکس' },
    description: {
      en: `Perfect water filtration solution for offices and small businesses.

## What Makes It Special
- **Office Optimized** with 5 GPM flow rate serving 20-50 employees
- **Quiet Operation** won't disturb your professional workspace
- **Compact Design** with wall-mounted or floor-standing installation options
- **3-Year Warranty** with priority business support

Designed specifically for professional office environments requiring reliable, unobtrusive water purification.`,
      ur: 'دفاتر اور چھوٹے کاروبار کے لیے بہترین واٹر فلٹریشن حل۔',
    },
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
];
