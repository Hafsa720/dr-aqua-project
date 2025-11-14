import type { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1001',
    slug: 'ro-2-stage',
    priceRange: '10,000 - 15,000',
    image: '/products/2-stage-filter.jpg',
    inStock: true,
    featured: false,
    name: { en: 'RO 2 Stage', ur: 'آر او 2 مرحلے' },
    category: { en: 'Residential', ur: 'رہائشی' },
    brand: { en: 'Aqua', ur: 'آکوا' },
    description: {
      en: 'Basic 2-stage RO water purification system for small households.',
      ur: 'چھوٹے گھروں کے لیے بنیادی 2 مرحلہ آر او واٹر پیوریفیکیشن سسٹم۔',
    },
    specifications: {
      'Filtration Stages': { en: '2 Stages', ur: '2 مراحل' },
      'Flow Rate': { en: '1 GPM', ur: '1 گیلن فی منٹ' },
    },
  },
  {
    id: '1002',
    slug: 'ro-3-stage',
    priceRange: '12,000 - 18,000',
    image: '/products/3-stage-filter.jpg',
    inStock: true,
    featured: false,
    name: { en: 'RO 3 Stage', ur: 'آر او 3 مرحلے' },
    category: { en: 'Residential', ur: 'رہائشی' },
    brand: { en: 'Aqua', ur: 'آکوا' },
    description: {
      en: 'Efficient 3-stage RO water purification system for improved water quality.',
      ur: 'بہتر پانی کے معیار کے لیے موثر 3 مرحلہ آر او واٹر پیوریفیکیشن سسٹم۔',
    },
    specifications: {
      'Filtration Stages': { en: '3 Stages', ur: '3 مراحل' },
      'Flow Rate': { en: '1.2 GPM', ur: '1.2 گیلن فی منٹ' },
    },
  },
  {
    id: '1003',
    slug: 'ro-8-stage',
    priceRange: '30,000 - 40,000',
    image: '/products/8-stage-ro-master.png',
    inStock: true,
    featured: false,
    name: { en: 'RO 8 Stage', ur: 'آر او 8 مرحلے' },
    category: { en: 'Residential', ur: 'رہائشی' },
    brand: { en: 'Aqua', ur: 'آکوا' },
    description: {
      en: 'Advanced 8-stage RO water purification system for maximum contaminant removal.',
      ur: 'زیادہ سے زیادہ آلودگی دور کرنے کے لیے جدید 8 مرحلہ آر او واٹر پیوریفیکیشن سسٹم۔',
    },
    specifications: {
      'Filtration Stages': { en: '8 Stages', ur: '8 مراحل' },
      'Flow Rate': { en: '2 GPM', ur: '2 گیلن فی منٹ' },
    },
  },
  {
    id: '1',
    slug: 'ro-water-master-with-stand',
    priceRange: '20,000 - 30,000',
    image: '/products/ro-hundred-gallon-per-day.jpg',
    inStock: true,
    featured: true,
    name: {
      en: 'R.o 100 gallon per day',
      ur: 'آر او 100 گیلن فی دن',
    },
    category: { en: 'Residential', ur: 'رہائشی' },
    brand: { en: 'Water Master', ur: 'واٹر ماسٹر' },
    description: {
      en: `High-performance Reverse Osmosis water purification system producing 100 gallons per day of pure, safe drinking water.

## What Makes It Special
- **100 Gallon Daily Capacity** produces approximately 380 liters of purified water per day, perfect for medium to large families
- **6-Stage Filtration** with Sediment, Carbon, RO Membrane, Post Carbon, Mineral, and Alkaline filters removes 99.9% of contaminants
- **Taiwan-Made RO Membrane** ensures superior quality and long-lasting performance
- **Mineral & Alkaline Enhancement** adds essential minerals back into water for healthy, great-tasting water
- **Complete Installation Kit** includes floor stand or wall-mount options with all necessary accessories
- **Energy Efficient** operates on standard 220V power with low electricity consumption

Perfect for families who want reliable, high-capacity water purification with advanced filtration technology.`,
      ur: `اعلیٰ کارکردگی والا ریورس اوسموسس واٹر پیوریفیکیشن سسٹم جو روزانہ 100 گیلن (تقریباً 380 لیٹر) صاف اور محفوظ پینے کا پانی تیار کرتا ہے۔
ان خاندانوں کے لیے بہترین جو جدید فلٹریشن ٹیکنالوجی کے ساتھ قابل اعتماد، اعلیٰ صلاحیت والا واٹر پیوریفیکیشن چاہتے ہیں۔`,
    },
    specifications: {
      'Purification Capacity': {
        en: '100 Gallons Per Day (Approx. 380 Liters/Day)',
        ur: '100 گیلن فی دن (تقریباً 380 لیٹر فی دن)',
      },
      'Filtration Stages': {
        en: '6 Stages (Sediment, Carbon, RO Membrane, Post Carbon, Mineral, Alkaline)',
        ur: '6 مراحل (سیڈمنٹ، کاربن، آر او جھلی، پوسٹ کاربن، منرل، الکلائن)',
      },
      'Membrane Type': {
        en: 'High-Efficiency Reverse Osmosis (Made in Taiwan)',
        ur: 'اعلیٰ معیار کا ریورس اوسموسس (تائیوان میں تیار شدہ)',
      },
      'Flow Rate': { en: '2.5 GPM', ur: '2.5 گیلن فی منٹ' },
      'Filter Life': {
        en: '6–12 months (depends on water quality)',
        ur: '6 سے 12 ماہ (پانی کے معیار پر منحصر)',
      },
      Dimensions: { en: '24" x 15" x 10"', ur: '24" x 15" x 10"' },
      Weight: { en: '11–13 kg (approx.)', ur: 'تقریباً 11–13 کلوگرام' },
      Installation: {
        en: 'Floor stand or wall-mounted (complete kit included)',
        ur: 'فرش پر اسٹینڈ یا دیوار پر نصب (مکمل کٹ شامل ہے)',
      },
      'Power Requirement': { en: '220V / 50Hz', ur: '220 وولٹ / 50 ہرٹز' },
      Certifications: {
        en: 'ISO 9001, CE, NSF/ANSI Standards',
        ur: 'ISO 9001، CE، NSF/ANSI معیار',
      },
      'Country of Origin': { en: 'Made in Taiwan', ur: 'تائیوان میں تیار شدہ' },
    },
  },
  {
    id: '2',
    slug: 'ro-water-master-without-stand',
    priceRange: '0',
    image: '/products/ro-water-master.jpg',
    inStock: true,
    featured: true,
    name: {
      en: 'R.O Water Master 100 Gallon Per Day',
      ur: 'آر او واٹر ماسٹر 100 گیلن فی دن',
    },
    category: { en: 'Residential', ur: 'رہائشی' },
    brand: { en: 'Water Master', ur: 'واٹر ماسٹر' },
    description: {
      en: `Premium Reverse Osmosis water purification system producing 100 gallons per day of pure, safe drinking water.

## What Makes It Special
- **100 Gallon Daily Capacity** produces approximately 380 liters of purified water per day, perfect for medium to large families
- **7-Stage Filtration** with advanced multi-stage filters removes 99.9% of contaminants
- **Vietnam-Made Quality** ensures superior quality and long-lasting performance
- **Mineral & Alkaline Enhancement** adds essential minerals back into water for healthy, great-tasting water
- **Complete Installation Kit** includes floor stand or wall-mount options with all necessary accessories
- **Energy Efficient** operates on standard 220V power with low electricity consumption

Perfect for families who want reliable, high-capacity water purification with advanced filtration technology.`,
      ur: `100 گیلن فی دن خالص، محفوظ پینے کا پانی تیار کرنے والا پریمیم ریورس اوسموسس واٹر پیوریفیکیشن سسٹم۔
ان خاندانوں کے لیے بہترین جو جدید فلٹریشن ٹیکنالوجی کے ساتھ قابل اعتماد، اعلیٰ صلاحیت والا واٹر پیوریفیکیشن چاہتے ہیں۔`,
    },
    specifications: {
      'Purification Capacity': {
        en: '100 Gallons Per Day (Approx. 380 Liters/Day)',
        ur: '100 گیلن فی دن (تقریباً 380 لیٹر فی دن)',
      },
      'Filtration Stages': {
        en: '7 Stages',
        ur: '7 مراحل',
      },
      'Membrane Type': {
        en: 'High-Efficiency Reverse Osmosis (Made in Vietnam)',
        ur: 'اعلیٰ معیار کا ریورس اوسموسس (ویتنام میں تیار شدہ)',
      },
      'Flow Rate': { en: '2.5 GPM', ur: '2.5 گیلن فی منٹ' },
      'Filter Life': {
        en: '6–12 months (depends on water quality)',
        ur: '6 سے 12 ماہ (پانی کے معیار پر منحصر)',
      },
      Dimensions: { en: '24" x 15" x 10"', ur: '24" x 15" x 10"' },
      Weight: { en: '11–13 kg (approx.)', ur: 'تقریباً 11–13 کلوگرام' },
      Installation: {
        en: 'Floor stand or wall-mounted (complete kit included)',
        ur: 'فرش پر اسٹینڈ یا دیوار پر نصب (مکمل کٹ شامل ہے)',
      },
      'Power Requirement': { en: '220V / 50Hz', ur: '220 وولٹ / 50 ہرٹز' },
      Certifications: {
        en: 'ISO 9001, CE, NSF/ANSI Standards',
        ur: 'ISO 9001، CE، NSF/ANSI معیار',
      },
      'Country of Origin': { en: 'Made in Vietnam', ur: 'ویتنام میں تیار شدہ' },
    },
  },
  {
    id: '3',
    slug: 'dr-aqua-simple-filter',
    priceRange: '0',
    image: '/products/two-filter.jpg',
    inStock: true,
    featured: true,
    name: { en: 'Dr.Aqua Simple Filter', ur: 'ڈاکٹر ایکوا سادہ فلٹر' },
    category: { en: 'Residential', ur: 'رہائشی' },
    brand: { en: 'Pure One', ur: 'پیور ون' },
    description: {
      en: `Simple yet effective 2-stage water filtration system for everyday water purification.

## What Makes It Special
- **2-Stage Filtration** with essential filters removes common contaminants and improves water taste
- **Simple Design** easy to use and maintain for households of all sizes
- **Vietnam-Made Quality** reliable and durable construction
- **Affordable Solution** budget-friendly entry-level water filtration
- **Easy Installation** straightforward setup with minimal requirements
- **Energy Efficient** low power consumption for everyday use

Perfect for families seeking a simple, affordable water filtration solution with reliable performance.`,
      ur: `روزمرہ کے پانی کی صفائی کے لیے سادہ لیکن موثر 2 مرحلہ واٹر فلٹریشن سسٹم۔
ان خاندانوں کے لیے بہترین جو سادہ، سستا واٹر فلٹریشن حل تلاش کر رہے ہیں۔`,
    },
    specifications: {
      'Filtration Type': {
        en: '2-Stage Simple Filtration',
        ur: '2 مرحلہ سادہ فلٹریشن',
      },
      'Filtration Stages': {
        en: '2 Stages',
        ur: '2 مراحل',
      },
      'Filter Type': {
        en: 'Sediment and Carbon Filters',
        ur: 'سیڈمنٹ اور کاربن فلٹرز',
      },
      'Flow Rate': { en: '1.5 GPM', ur: '1.5 گیلن فی منٹ' },
      'Filter Life': {
        en: '3–6 months (depends on water quality)',
        ur: '3 سے 6 ماہ (پانی کے معیار پر منحصر)',
      },
      Dimensions: { en: '10" x 8" x 6"', ur: '10" x 8" x 6"' },
      Weight: { en: '2 kg (approx.)', ur: 'تقریباً 2 کلوگرام' },
      Installation: {
        en: 'Countertop (easy installation)',
        ur: 'کاؤنٹر ٹاپ (آسان تنصیب)',
      },
      'Power Requirement': {
        en: 'No power required',
        ur: 'بجلی کی ضرورت نہیں',
      },
      Certifications: {
        en: 'ISO 9001, NSF/ANSI Standards',
        ur: 'ISO 9001، NSF/ANSI معیار',
      },
      'Country of Origin': { en: 'Made in Vietnam', ur: 'ویتنام میں تیار شدہ' },
    },
  },
  {
    id: '4',
    slug: 'aspire-without-stand-filter',
    priceRange: '0',
    image: '/products/aspire.jpg',
    inStock: true,
    featured: true,
    name: {
      en: 'Aspire 100 Gallon Per Day',
      ur: 'ایسپائر 100 گیلن فی دن',
    },
    category: { en: 'Residential', ur: 'رہائشی' },
    brand: { en: 'Aspire', ur: 'ایسپائر' },
    description: {
      en: `Premium 8-stage Reverse Osmosis water purification system producing 100 gallons per day of pure, safe drinking water.

## What Makes It Special
- **100 Gallon Daily Capacity** produces approximately 380 liters of purified water per day, perfect for medium to large families
- **8-Stage Advanced Filtration** with premium multi-stage filters removes 99.99% of contaminants
- **Vietnam-Made Quality** ensures superior quality and long-lasting performance
- **Mineral & Alkaline Enhancement** adds essential minerals back into water for healthy, great-tasting water
- **Complete Installation Kit** includes floor stand or wall-mount options with all necessary accessories
- **Energy Efficient** operates on standard 220V power with low electricity consumption

Perfect for families who want premium, high-capacity water purification with advanced 8-stage filtration technology.`,
      ur: `100 گیلن فی دن خالص، محفوظ پینے کا پانی تیار کرنے والا 8 مرحلہ پریمیم ریورس اوسموسس واٹر پیوریفیکیشن سسٹم۔
ان خاندانوں کے لیے بہترین جو جدید 8 مرحلہ فلٹریشن ٹیکنالوجی کے ساتھ اعلیٰ معیار کا واٹر پیوریفیکیشن چاہتے ہیں۔`,
    },
    specifications: {
      'Purification Capacity': {
        en: '100 Gallons Per Day (Approx. 380 Liters/Day)',
        ur: '100 گیلن فی دن (تقریباً 380 لیٹر فی دن)',
      },
      'Filtration Stages': {
        en: '8 Stages (Advanced Multi-Stage)',
        ur: '8 مراحل (ایڈوانسڈ ملٹی سٹیج)',
      },
      'Membrane Type': {
        en: 'High-Efficiency Reverse Osmosis (Made in Vietnam)',
        ur: 'اعلیٰ معیار کا ریورس اوسموسس (ویتنام میں تیار شدہ)',
      },
      'Flow Rate': { en: '2.5 GPM', ur: '2.5 گیلن فی منٹ' },
      'Filter Life': {
        en: '6–12 months (depends on water quality)',
        ur: '6 سے 12 ماہ (پانی کے معیار پر منحصر)',
      },
      Dimensions: { en: '24" x 15" x 10"', ur: '24" x 15" x 10"' },
      Weight: { en: '11–13 kg (approx.)', ur: 'تقریباً 11–13 کلوگرام' },
      Installation: {
        en: 'Floor stand or wall-mounted (complete kit included)',
        ur: 'فرش پر اسٹینڈ یا دیوار پر نصب (مکمل کٹ شامل ہے)',
      },
      'Power Requirement': { en: '220V / 50Hz', ur: '220 وولٹ / 50 ہرٹز' },
      Certifications: {
        en: 'ISO 9001, CE, NSF/ANSI Standards',
        ur: 'ISO 9001، CE، NSF/ANSI معیار',
      },
      'Country of Origin': { en: 'Made in Vietnam', ur: 'ویتنام میں تیار شدہ' },
    },
  },
  {
    id: '5',
    slug: 'jumbo-filter-2-stage',
    priceRange: '0',
    image: '/products/jamboo-filter.jpg',
    inStock: true,
    featured: true,
    name: { en: 'Jumbo Filter', ur: 'جمبو فلٹر' },
    category: { en: 'Residential', ur: 'رہائشی' },
    brand: { en: 'Pure One', ur: 'پیور ون' },
    description: {
      en: `Reliable 2-stage water filtration system for everyday water purification.

## What Makes It Special
- **2-Stage Filtration** with essential filters removes common contaminants and improves water taste
- **Simple Design** easy to use and maintain for households of all sizes
- **Vietnam-Made Quality** reliable and durable construction
- **Affordable Solution** budget-friendly water filtration
- **Easy Installation** straightforward setup with minimal requirements
- **Energy Efficient** low power consumption for everyday use

Perfect for families seeking reliable, affordable water filtration with simple 2-stage technology.`,
      ur: `روزمرہ کے پانی کی صفائی کے لیے قابل اعتماد 2 مرحلہ واٹر فلٹریشن سسٹم۔
ان خاندانوں کے لیے بہترین جو سادہ، سستا واٹر فلٹریشن حل تلاش کر رہے ہیں۔`,
    },
    specifications: {
      'Filtration Type': {
        en: '2-Stage Filtration',
        ur: '2 مرحلہ فلٹریشن',
      },
      'Filtration Stages': {
        en: '2 Stages',
        ur: '2 مراحل',
      },
      'Filter Type': {
        en: 'Sediment and Carbon Filters',
        ur: 'سیڈمنٹ اور کاربن فلٹرز',
      },
      'Flow Rate': { en: '1.5 GPM', ur: '1.5 گیلن فی منٹ' },
      'Filter Life': {
        en: '3–6 months (depends on water quality)',
        ur: '3 سے 6 ماہ (پانی کے معیار پر منحصر)',
      },
      Dimensions: { en: '10" x 8" x 6"', ur: '10" x 8" x 6"' },
      Weight: { en: '2 kg (approx.)', ur: 'تقریباً 2 کلوگرام' },
      Installation: {
        en: 'Countertop (easy installation)',
        ur: 'کاؤنٹر ٹاپ (آسان تنصیب)',
      },
      'Power Requirement': {
        en: 'No power required',
        ur: 'بجلی کی ضرورت نہیں',
      },
      Certifications: {
        en: 'ISO 9001, NSF/ANSI Standards',
        ur: 'ISO 9001، NSF/ANSI معیار',
      },
      'Country of Origin': { en: 'Made in Vietnam', ur: 'ویتنام میں تیار شدہ' },
    },
  },
  {
    id: '6',
    slug: 'domestic-filter-3-stage',
    priceRange: '0',
    image: '/products/domestic-filter.jpg',
    inStock: true,
    featured: false,
    name: { en: 'Domestic Filter', ur: 'ڈومیسٹک فلٹر' },
    category: { en: 'Residential', ur: 'رہائشی' },
    brand: { en: 'Pure One', ur: 'پیور ون' },
    description: {
      en: `Effective 3-stage water filtration system for household water purification.

## What Makes It Special
- **3-Stage Filtration** with advanced filters removes common contaminants and improves water taste and clarity
- **Simple Design** easy to use and maintain for households of all sizes
- **Vietnam-Made Quality** reliable and durable construction
- **Affordable Solution** budget-friendly water filtration for daily use
- **Easy Installation** straightforward setup with minimal requirements
- **Energy Efficient** low power consumption for everyday use

Perfect for families seeking reliable, affordable water filtration with 3-stage technology.`,
      ur: `گھریلو پانی کی صفائی کے لیے موثر 3 مرحلہ واٹر فلٹریشن سسٹم۔
ان خاندانوں کے لیے بہترین جو قابل اعتماد، سستا واٹر فلٹریشن حل تلاش کر رہے ہیں۔`,
    },
    specifications: {
      'Filtration Type': {
        en: '3-Stage Filtration',
        ur: '3 مرحلہ فلٹریشن',
      },
      'Filtration Stages': {
        en: '3 Stages',
        ur: '3 مراحل',
      },
      'Filter Type': {
        en: 'Sediment, Carbon, and Post-Carbon Filters',
        ur: 'سیڈمنٹ، کاربن، اور پوسٹ کاربن فلٹرز',
      },
      'Flow Rate': { en: '2 GPM', ur: '2 گیلن فی منٹ' },
      'Filter Life': {
        en: '4–8 months (depends on water quality)',
        ur: '4 سے 8 ماہ (پانی کے معیار پر منحصر)',
      },
      Dimensions: { en: '12" x 10" x 8"', ur: '12" x 10" x 8"' },
      Weight: { en: '3 kg (approx.)', ur: 'تقریباً 3 کلوگرام' },
      Installation: {
        en: 'Countertop (easy installation)',
        ur: 'کاؤنٹر ٹاپ (آسان تنصیب)',
      },
      'Power Requirement': {
        en: 'No power required',
        ur: 'بجلی کی ضرورت نہیں',
      },
      Certifications: {
        en: 'ISO 9001, NSF/ANSI Standards',
        ur: 'ISO 9001، NSF/ANSI معیار',
      },
      'Country of Origin': { en: 'Made in Vietnam', ur: 'ویتنام میں تیار شدہ' },
    },
  },
  {
    id: '7',
    slug: 'granular-activated-carbon-10',
    priceRange: '0',
    image: '/products/granular-activated-carbon.jpg',
    inStock: true,
    featured: false,
    name: {
      en: 'Granular Activated Carbon 10"',
      ur: 'گرینولر ایکٹیویٹیڈ کاربن 10"',
    },
    category: { en: 'Residential', ur: 'رہائشی' },
    brand: { en: 'Pure Mac', ur: 'پیور میک' },
    description: {
      en: `Premium granular activated carbon filter cartridge for advanced water purification.

## What Makes It Special
- **10-Inch Size** compatible with standard water filtration systems
- **Granular Activated Carbon** effectively removes chlorine, odors, and chemical contaminants
- **High Absorption Capacity** extends filter life and improves water quality
- **Vietnam-Made Quality** premium grade activated carbon with consistent performance
- **Universal Compatibility** works with most standard 10" filter housings
- **Long-Lasting** provides extended filtration before replacement needed

Perfect for replacing existing carbon filters or upgrading your water filtration system.`,
      ur: `ایڈوانسڈ واٹر پیوریفیکیشن کے لیے پریمیم گرینولر ایکٹیویٹیڈ کاربن فلٹر کارتوس۔
موجودہ کاربن فلٹرز کو تبدیل کرنے یا اپنے واٹر فلٹریشن سسٹم کو اپ گریڈ کرنے کے لیے بہترین۔`,
    },
    specifications: {
      'Filter Type': {
        en: 'Granular Activated Carbon (GAC)',
        ur: 'گرینولر ایکٹیویٹیڈ کاربن',
      },
      Size: {
        en: '10 Inches',
        ur: '10 انچ',
      },
      'Absorption Capacity': {
        en: 'High - Removes Chlorine, Odors, and Chemical Contaminants',
        ur: 'زیادہ - کلورین، بدبو اور کیمیائی آلودگیوں کو ہٹاتا ہے',
      },
      'Filter Life': {
        en: '6–12 months (depends on water quality)',
        ur: '6 سے 12 ماہ (پانی کے معیار پر منحصر)',
      },
      Material: {
        en: 'Premium Grade Activated Carbon',
        ur: 'پریمیم گریڈ ایکٹیویٹیڈ کاربن',
      },
      Compatibility: {
        en: 'Standard 10" Filter Housing',
        ur: 'معیاری 10" فلٹر ہاؤسنگ',
      },
      Weight: { en: '0.5 kg (approx.)', ur: 'تقریباً 0.5 کلوگرام' },
      Installation: {
        en: 'Easy Cartridge Replacement',
        ur: 'آسان کارتوس کی تبدیلی',
      },
      Certifications: {
        en: 'ISO 9001, NSF Standards',
        ur: 'ISO 9001، NSF معیار',
      },
      'Country of Origin': { en: 'Made in Vietnam', ur: 'ویتنام میں تیار شدہ' },
    },
  },
  {
    id: '13',
    slug: 'simple-filter-2-stage-20-inch',
    priceRange: '0',
    image: '/products/2-stage-filter.jpg',
    inStock: true,
    featured: false,
    name: { en: 'Simple Filter 2 Stage 20"', ur: 'سادہ فلٹر 2 مرحلہ 20"' },
    category: { en: 'Residential', ur: 'رہائشی' },
    brand: { en: 'Pure One', ur: 'پیور ون' },
    description: {
      en: `Simple yet effective 2-stage water filtration system with 20-inch size for high-volume water purification.

## What Makes It Special
- **2-Stage Filtration** with essential filters removes common contaminants and improves water taste
- **20-Inch Size** larger capacity for higher volume water filtration and extended filter life
- **Simple Design** easy to use and maintain for households and small businesses
- **Vietnam-Made Quality** reliable and durable construction
- **Affordable Solution** budget-friendly water filtration for daily use
- **High Flow Rate** handles larger volumes while maintaining filtration quality
- **Easy Installation** straightforward setup with minimal requirements
- **Energy Efficient** low power consumption for everyday use

Perfect for families and small businesses seeking reliable, affordable water filtration with larger capacity.`,
      ur: `اعلیٰ حجم میں پانی کی صفائی کے لیے 20 انچ سائز کے ساتھ سادہ لیکن موثر 2 مرحلہ واٹر فلٹریشن سسٹم۔
خاندانوں اور چھوٹے کاروبار کے لیے بہترین جو زیادہ صلاحیت کے ساتھ قابل اعتماد، سستا واٹر فلٹریشن حل تلاش کر رہے ہیں۔`,
    },
    specifications: {
      'Filtration Type': {
        en: '2-Stage Simple Filtration',
        ur: '2 مرحلہ سادہ فلٹریشن',
      },
      'Filtration Stages': {
        en: '2 Stages',
        ur: '2 مراحل',
      },
      'Filter Size': {
        en: '20 Inches',
        ur: '20 انچ',
      },
      'Filter Type': {
        en: 'Sediment and Carbon Filters',
        ur: 'سیڈمنٹ اور کاربن فلٹرز',
      },
      'Flow Rate': { en: '3 GPM', ur: '3 گیلن فی منٹ' },
      'Filter Life': {
        en: '4–8 months (depends on water quality)',
        ur: '4 سے 8 ماہ (پانی کے معیار پر منحصر)',
      },
      Dimensions: { en: '20" x 10" x 8"', ur: '20" x 10" x 8"' },
      Weight: { en: '3.5 kg (approx.)', ur: 'تقریباً 3.5 کلوگرام' },
      Installation: {
        en: 'Countertop or wall-mounted (easy installation)',
        ur: 'کاؤنٹر ٹاپ یا دیوار پر نصب (آسان تنصیب)',
      },
      'Power Requirement': {
        en: 'No power required',
        ur: 'بجلی کی ضرورت نہیں',
      },
      Certifications: {
        en: 'ISO 9001, NSF/ANSI Standards',
        ur: 'ISO 9001، NSF/ANSI معیار',
      },
      'Country of Origin': { en: 'Made in Vietnam', ur: 'ویتنام میں تیار شدہ' },
    },
  },
  {
    id: '14',
    slug: '3-stage-filter-10-inch',
    priceRange: '0',
    image: '/products/3-stage-filter.jpg',
    inStock: true,
    featured: true,
    name: { en: '3 Stage Filter 10"', ur: '3 مرحلہ فلٹر 10"' },
    category: { en: 'Residential', ur: 'رہائشی' },
    brand: { en: 'Pure One', ur: 'پیور ون' },
    description: {
      en: `Effective 3-stage water filtration system with 10-inch size for household water purification.

## What Makes It Special
- **3-Stage Filtration** with advanced filters removes common contaminants and improves water taste and clarity
- **10-Inch Size** standard size compatible with most filter housings
- **Sediment, Carbon, and Post-Carbon Filters** comprehensive multi-stage filtration
- **Vietnam-Made Quality** reliable and durable construction
- **Affordable Solution** budget-friendly water filtration for daily use
- **Balanced Flow Rate** maintains good water flow while removing contaminants
- **Easy Installation** straightforward setup and maintenance
- **Extended Filter Life** longer lasting compared to 2-stage systems

Perfect for households seeking reliable, effective water filtration with 3-stage technology.`,
      ur: `گھریلو پانی کی صفائی کے لیے 10 انچ سائز کے ساتھ موثر 3 مرحلہ واٹر فلٹریشن سسٹم۔
ان خاندانوں کے لیے بہترین جو 3 مرحلہ ٹیکنالوجی کے ساتھ قابل اعتماد، موثر واٹر فلٹریشن تلاش کر رہے ہیں۔`,
    },
    specifications: {
      'Filtration Type': {
        en: '3-Stage Filtration',
        ur: '3 مرحلہ فلٹریشن',
      },
      'Filtration Stages': {
        en: '3 Stages',
        ur: '3 مراحل',
      },
      'Filter Size': {
        en: '10 Inches',
        ur: '10 انچ',
      },
      'Filter Type': {
        en: 'Sediment, Carbon, and Post-Carbon Filters',
        ur: 'سیڈمنٹ، کاربن، اور پوسٹ کاربن فلٹرز',
      },
      'Flow Rate': { en: '2 GPM', ur: '2 گیلن فی منٹ' },
      'Filter Life': {
        en: '4–8 months (depends on water quality)',
        ur: '4 سے 8 ماہ (پانی کے معیار پر منحصر)',
      },
      Dimensions: { en: '10" x 8" x 6"', ur: '10" x 8" x 6"' },
      Weight: { en: '2.5 kg (approx.)', ur: 'تقریباً 2.5 کلوگرام' },
      Installation: {
        en: 'Countertop or wall-mounted (easy installation)',
        ur: 'کاؤنٹر ٹاپ یا دیوار پر نصب (آسان تنصیب)',
      },
      'Power Requirement': {
        en: 'No power required',
        ur: 'بجلی کی ضرورت نہیں',
      },
      Certifications: {
        en: 'ISO 9001, NSF/ANSI Standards',
        ur: 'ISO 9001، NSF/ANSI معیار',
      },
      'Country of Origin': { en: 'Made in Vietnam', ur: 'ویتنام میں تیار شدہ' },
    },
  },
  {
    id: '8',
    slug: 'pp-sediment-filter',
    priceRange: '0',
    image: '/products/aspire-pp-sediment-filter.jpg',
    inStock: true,
    featured: false,
    name: { en: 'PP Sediment Filter', ur: 'پی پی سیڈمنٹ فلٹر' },
    category: { en: 'Residential', ur: 'رہائشی' },
    brand: { en: 'Aspire', ur: 'ایسپائر' },
    description: {
      en: `High-quality polypropylene sediment filter for water pre-filtration.

## What Makes It Special
- **PP Material** polypropylene construction for durability and chemical resistance
- **Sediment Removal** effectively removes sand, silt, and particulate matter
- **Pre-Filtration** protects downstream filters and extends their lifespan
- **Vietnam-Made Quality** reliable and cost-effective filtration solution
- **Standard Sizing** compatible with most filter housings and systems
- **High Flow Rate** allows adequate water flow while removing sediments

Perfect for well water, municipal water, or any source requiring sediment pre-filtration.`,
      ur: `واٹر پری فلٹریشن کے لیے اعلیٰ معیار کا پولی پروپیلین سیڈمنٹ فلٹر۔
تمام پانی کے ذرائع کے لیے سیڈمنٹ پری فلٹریشن کی ضرورت ہے بہترین حل۔`,
    },
    specifications: {
      'Filter Type': {
        en: 'PP (Polypropylene) Sediment Filter',
        ur: 'پی پی (پولی پروپیلین) سیڈمنٹ فلٹر',
      },
      Material: {
        en: 'Food-Grade Polypropylene',
        ur: 'فوڈ گریڈ پولی پروپیلین',
      },
      'Filtration Purpose': {
        en: 'Pre-Filtration - Removes Sediment, Sand, and Silt',
        ur: 'پری فلٹریشن - سیڈمنٹ، ریت اور سلٹ کو ہٹاتا ہے',
      },
      'Micron Rating': {
        en: '5-100 Microns (Various Grades)',
        ur: '5-100 مائکرون (مختلف گریڈز)',
      },
      'Filter Life': {
        en: '3–6 months (depends on sediment levels)',
        ur: '3 سے 6 ماہ (سیڈمنٹ کی سطح پر منحصر)',
      },
      'Flow Rate': {
        en: 'High - Up to 5 GPM',
        ur: 'زیادہ - 5 جی پی ایم تک',
      },
      Weight: { en: '0.2 kg (approx.)', ur: 'تقریباً 0.2 کلوگرام' },
      Installation: {
        en: 'Easy Cartridge Replacement',
        ur: 'آسان کارتوس کی تبدیلی',
      },
      Certifications: {
        en: 'ISO 9001, NSF Standards',
        ur: 'ISO 9001، NSF معیار',
      },
      'Country of Origin': { en: 'Made in Vietnam', ur: 'ویتنام میں تیار شدہ' },
    },
  },
  {
    id: '9',
    slug: 'carbon-block-filter',
    priceRange: '0',
    image: '/products/aspire-carbon-block-filter.jpg',
    inStock: true,
    featured: false,
    name: { en: 'Carbon Block Filter', ur: 'کاربن بلاک فلٹر' },
    category: { en: 'Residential', ur: 'رہائشی' },
    brand: { en: 'Aspire', ur: 'ایسپائر' },
    description: {
      en: `Premium activated carbon block filter for comprehensive water filtration.

## What Makes It Special
- **Carbon Block Technology** compressed activated carbon provides superior filtration performance
- **Multi-Contaminant Removal** effectively removes chlorine, odors, taste, sediment, and chemicals
- **High Filtration Efficiency** removes particles as small as 0.5 microns
- **Vietnam-Made Quality** reliable and consistent filtration results
- **Universal Compatibility** works with most standard filter housings
- **Extended Lifespan** longer filter life compared to granular carbon

Perfect for improving water taste, odor, and quality with advanced carbon block filtration.`,
      ur: `جامع واٹر فلٹریشن کے لیے پریمیم ایکٹیویٹیڈ کاربن بلاک فلٹر۔
کاربن بلاک فلٹریشن کے ساتھ واٹر کی ذائقہ، بدبو اور معیار کو بہتر بنانے کے لیے بہترین۔`,
    },
    specifications: {
      'Filter Type': {
        en: 'Activated Carbon Block Filter',
        ur: 'ایکٹیویٹیڈ کاربن بلاک فلٹر',
      },
      Material: {
        en: 'Compressed Activated Carbon',
        ur: 'کمپریسڈ ایکٹیویٹیڈ کاربن',
      },
      'Filtration Purpose': {
        en: 'Removes Chlorine, Odors, Taste, Sediment, and Chemicals',
        ur: 'کلورین، بدبو، ذائقہ، سیڈمنٹ اور کیمیکلز کو ہٹاتا ہے',
      },
      'Micron Rating': {
        en: '0.5 Microns',
        ur: '0.5 مائکرون',
      },
      'Filter Life': {
        en: '6–12 months (depends on water quality and usage)',
        ur: '6 سے 12 ماہ (پانی کے معیار اور استعمال پر منحصر)',
      },
      'Flow Rate': {
        en: 'Medium - Up to 2.5 GPM',
        ur: 'درمیانی - 2.5 جی پی ایم تک',
      },
      'Contaminant Reduction': {
        en: 'Chlorine, VOCs, Sediment, Taste and Odor',
        ur: 'کلورین، وی او سی، سیڈمنٹ، ذائقہ اور بدبو',
      },
      Weight: { en: '0.3 kg (approx.)', ur: 'تقریباً 0.3 کلوگرام' },
      Installation: {
        en: 'Easy Cartridge Replacement',
        ur: 'آسان کارتوس کی تبدیلی',
      },
      Certifications: {
        en: 'ISO 9001, NSF Standards',
        ur: 'ISO 9001، NSF معیار',
      },
      'Country of Origin': { en: 'Made in Vietnam', ur: 'ویتنام میں تیار شدہ' },
    },
  },
  {
    id: '11',
    slug: 'aspire-8-stage-stang-gauge-model',
    priceRange: '0',
    image: '/products/aspire-eight-stage.jpg',
    inStock: true,
    featured: false,
    name: {
      en: 'Aspire 8 Stage Stang Gauge Model',
      ur: 'ایسپائر 8 مرحلہ اسٹینگ گیج ماڈل',
    },
    category: { en: 'Residential', ur: 'رہائشی' },
    brand: { en: 'Aspire', ur: 'ایسپائر' },
    description: {
      en: `Premium 8-stage Reverse Osmosis system with stang gauge monitoring producing 100 gallons per day.

## What Makes It Special
- **100 Gallon Daily Capacity** produces approximately 380 liters of purified water per day, perfect for medium to large families
- **8-Stage Advanced Filtration** with premium multi-stage filters removes 99.99% of contaminants
- **Stang Gauge Model** includes pressure gauge for real-time system monitoring
- **Advanced Filtration Technology** provides superior water purity with mineral enhancement
- **Vietnam-Made Quality** ensures reliability and consistent performance
- **Mineral & Alkaline Enhancement** adds essential minerals back into water for healthy, great-tasting water
- **Complete Installation Kit** includes all necessary accessories for immediate setup
- **Energy Efficient** operates on standard 220V power with low electricity consumption

Perfect for families who want premium water purification with advanced monitoring capabilities.`,
      ur: `سٹینگ گیج نگرانی کے ساتھ روزانہ 100 گیلن تیار کرنے والا 8 مرحلہ پریمیم ریورس اوسموسس سسٹم۔
ان خاندانوں کے لیے بہترین جو ایڈوانسڈ نگرانی کی صلاحیت کے ساتھ پریمیم پانی کی صفائی چاہتے ہیں۔`,
    },
    specifications: {
      'Purification Capacity': {
        en: '100 Gallons Per Day (Approx. 380 Liters/Day)',
        ur: '100 گیلن فی دن (تقریباً 380 لیٹر فی دن)',
      },
      'Filtration Stages': {
        en: '8 Stages (Advanced Multi-Stage)',
        ur: '8 مراحل (ایڈوانسڈ ملٹی سٹیج)',
      },
      'Model Type': {
        en: 'Stang Gauge Model with Pressure Monitoring',
        ur: 'دباؤ کی نگرانی کے ساتھ اسٹینگ گیج ماڈل',
      },
      'Membrane Type': {
        en: 'High-Efficiency Reverse Osmosis (Made in Vietnam)',
        ur: 'اعلیٰ معیار کا ریورس اوسموسس (ویتنام میں تیار شدہ)',
      },
      'Flow Rate': { en: '2.5 GPM', ur: '2.5 گیلن فی منٹ' },
      'Filter Life': {
        en: '6–12 months (depends on water quality)',
        ur: '6 سے 12 ماہ (پانی کے معیار پر منحصر)',
      },
      Dimensions: { en: '24" x 15" x 10"', ur: '24" x 15" x 10"' },
      Weight: { en: '11–13 kg (approx.)', ur: 'تقریباً 11–13 کلوگرام' },
      Installation: {
        en: 'Floor stand or wall-mounted (complete kit included)',
        ur: 'فرش پر اسٹینڈ یا دیوار پر نصب (مکمل کٹ شامل ہے)',
      },
      'Monitoring System': {
        en: 'Stang Gauge - Real-Time Pressure Monitoring',
        ur: 'اسٹینگ گیج - حقیقی وقت کی دباؤ کی نگرانی',
      },
      'Power Requirement': { en: '220V / 50Hz', ur: '220 وولٹ / 50 ہرٹز' },
      Certifications: {
        en: 'ISO 9001, CE, NSF/ANSI Standards',
        ur: 'ISO 9001، CE، NSF/ANSI معیار',
      },
      'Country of Origin': { en: 'Made in Vietnam', ur: 'ویتنام میں تیار شدہ' },
    },
  },
];

// Categories and brands with translations
export const categoriesWithTranslations = [
  { en: 'All', ur: 'تمام' },
  { en: 'Residential', ur: 'رہائشی' },
  { en: 'Commercial', ur: 'تجارتی' },
  { en: 'Industrial', ur: 'صنعتی' },
  { en: 'Accessories', ur: 'لوازمات' },
];

export const brandsWithTranslations = [
  { en: 'All', ur: 'تمام' },
  { en: 'Aspire', ur: 'ایسپائر' },
  { en: 'Water Master', ur: 'واٹر ماسٹر' },
  { en: 'Axtron', ur: 'ایکسٹرون' },
  { en: 'Pure One', ur: 'پیور ون' },
  { en: 'Pure Mac', ur: 'پیور میک' },
  { en: 'Perfect', ur: 'پرفیکٹ' },
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
  {
    value: 'new-to-old',
    label: { en: 'New to Old', ur: 'نئے سے پرانے' },
  },
  {
    value: 'old-to-new',
    label: { en: 'Old to New', ur: 'پرانے سے نئے' },
  },
];

// Subcategory options per category (keys used for filtering/search matching)
export const subcategoryOptionsByCategory = {
  residential: [
    { key: 'all', en: 'All', ur: 'تمام' },
    { key: 'simple-filter', en: 'Simple Filter', ur: 'سمپل فلٹر' },
    { key: 'ro-filter', en: 'RO Filter', ur: 'آر او فلٹر' },
  ],
  commercial: [
    { key: 'all', en: 'All', ur: 'تمام' },
    {
      key: 'ice-factories',
      en: 'Ice Factories',
      ur: 'آئس فیکٹریز',
    },
    {
      key: 'resturants',
      en: 'resturants',
      ur: 'ریسٹورانٹس',
    },
  ],
  accessories: [
    { key: 'all', en: 'All', ur: 'تمام' },
    { key: 'cartridges', en: 'Cartridges', ur: 'کارٹریجز' },
    { key: 'adopters', en: 'Adopters', ur: 'اڈاپٹرز' },
    { key: 'membrane', en: 'Membrane', ur: 'ممبرین' },
    { key: 'tabs', en: 'Tabs', ur: 'نلکے' },
    { key: 'pipes', en: 'Pipes', ur: 'پائپ' },
    {
      key: 'minerals-cartridges',
      en: 'Minerals Cartridges',
      ur: 'منرل کارٹریجز',
    },
    {
      key: 'post-carbon-cartridges',
      en: 'Post Carbon Cartridges',
      ur: 'پوسٹ کاربن کارٹریجز',
    },
  ],
};

// Sub-subcategory options for each subcategory key
export const subSubOptionsBySubcategory = {
  'simple-filter': [
    { key: 'all', en: 'All', ur: 'تمام' },
    { key: 'simple', en: 'Simple Filter', ur: 'سمپل فلٹر' },
    { key: 'jumbo filter', en: 'Jumbo Filter', ur: 'جمبو فلٹر' },
    { key: 'slim filter', en: 'Slim Filter', ur: 'سلم فلٹر' },
  ],
  'ro-filter': [
    { key: 'all', en: 'All', ur: 'تمام' },
    { key: 'ro 2', en: 'RO 2 Stage', ur: 'آر او 2 مرحلے' },
    { key: 'ro 3', en: 'RO 3 Stage', ur: 'آر او 3 مرحلے' },
    { key: 'ro 8', en: 'RO 8 Stage', ur: 'آر او 8 مرحلے' },
  ],
};
