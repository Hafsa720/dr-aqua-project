import type {
  Service,
  ServicePageLabels,
  Testimonial,
  WhyChooseUs,
} from '@/types/service';

export const servicesUr: Service[] = [
  {
    id: 'installation',
    slug: 'professional-installation',
    icon: 'Wrench',
    title: 'RO سسٹم کی تنصیب',
    description:
      'بہاولپور میں تصدیق شدہ ٹیکنیشنز کے ذریعے RO سسٹم اور واٹر پیوریفائر کی ماہرانہ تنصیب 1 سال کی وارنٹی کے ساتھ۔',
    priceRange: '2,000 - 3,500',
    duration: '2-4 گھنٹے',
    features: [
      'پیشہ ورانہ تنصیب ٹیم',
      'تمام پائپ اور فٹنگز شامل',
      'سسٹم ٹیسٹنگ اور پانی کے معیار کی جانچ',
      '1 سال کی تنصیب وارنٹی',
      'مفت مشاورت اور سائٹ وزٹ',
      'اسی دن تنصیب دستیاب',
    ],
    popular: true,
  },
  {
    id: 'maintenance',
    slug: 'maintenance-repair',
    icon: 'Shield',
    title: 'دیکھ بھال اور مرمت',
    description:
      'بہاولپور میں تمام برانڈز کے RO سسٹمز اور واٹر پیوریفائرز کے لیے مکمل دیکھ بھال اور مرمت کی خدمات۔',
    priceRange: '1,200 - 2,500',
    duration: '1-2 گھنٹے',
    features: [
      'فلٹر کی تبدیلی (تمام مراحل)',
      'مکمل سسٹم معائنہ',
      'TDS لیول کی جانچ',
      'لیکیج کی تلاش اور مرمت',
      'میمبرین کی صفائی/تبدیلی',
      'ایمرجنسی مرمت سروس',
    ],
    popular: false,
  },
  {
    id: 'amc',
    slug: 'annual-maintenance-contract',
    icon: 'CheckCircle',
    title: 'سالانہ دیکھ بھال کنٹریکٹ',
    description:
      'آپ کے RO سسٹم کے لیے باقاعدہ سروسنگ اور ترجیحی سپورٹ کے ساتھ سالانہ دیکھ بھال پیکیج۔',
    priceRange: '7,000 - 12,000',
    duration: '1 سال کی کوریج',
    features: [
      'سال میں 4 مفت سروس وزٹ',
      'ایمرجنسی کے لیے ترجیحی سپورٹ',
      'سپیئر پارٹس پر 20% رعایت',
      'مفت فلٹر تبدیلیاں (سال میں 2)',
      'TDS مانیٹرنگ اور رپورٹس',
      'توسیع شدہ وارنٹی کوریج',
    ],
    popular: false,
  },
];

export const testimonialsUr: Testimonial[] = [
  {
    name: 'احمد خان',
    service: 'RO سسٹم کی تنصیب',
    rating: 5,
    comment:
      'ڈاکٹر ایکوا سے بہترین سروس! انہوں نے ماڈل ٹاؤن میں میرا 7 مرحلہ RO سسٹم 3 گھنٹے میں انسٹال کر دیا۔ بہت پیشہ ورانہ ٹیم۔',
    date: '1 ہفتہ پہلے',
  },
  {
    name: 'فاطمہ ملک',
    service: 'دیکھ بھال اور مرمت',
    rating: 5,
    comment:
      'سیٹلائٹ ٹاؤن میں میری RO مرمت کے لیے فوری ردعمل۔ انہوں نے لیکیج ٹھیک کیا اور فلٹر تبدیل کیے۔ بہت زیادہ تجویز کردہ!',
    date: '2 ہفتے پہلے',
  },
  {
    name: 'حسن علی',
    service: 'سالانہ دیکھ بھال کنٹریکٹ',
    rating: 5,
    comment:
      'AMC سروس ہر روپے کے قابل ہے۔ باقاعدہ دیکھ بھال میرے RO سسٹم کو بہترین طریقے سے چلا رہی ہے۔ ڈاکٹر ایکوا سے بہترین سپورٹ۔',
    date: '3 ہفتے پہلے',
  },
];

export const whyChooseUsUr: WhyChooseUs[] = [
  {
    title: 'مقامی سروس',
    description: 'بہاولپور میں واقع - فوری ردعمل',
    icon: 'CheckCircle',
  },
  {
    title: 'اسی دن سروس',
    description: '24 گھنٹوں میں تنصیب اور مرمت',
    icon: 'Clock',
  },
  {
    title: '1 سال کی وارنٹی',
    description: 'تمام تنصیب کے کام کی ضمانت',
    icon: 'Shield',
  },
  {
    title: 'واٹس ایپ سپورٹ',
    description: '0334 7071759 پر فوری قیمت',
    icon: 'Phone',
  },
];

export const serviceLabelsUr: ServicePageLabels = {
  pageTitle: 'پیشہ ورانہ خدمات',
  pageSubtitle: 'بہاولپور میں مکمل RO سسٹم خدمات',
  pageDescription:
    'تنصیب سے لے کر دیکھ بھال تک، ہماری ماہر ٹیم اس بات کو یقینی بناتی ہے کہ آپ کا RO سسٹم بہترین کارکردگی دکھائے۔ ماڈل ٹاؤن، سیٹلائٹ ٹاؤن، DHA، اور بہاولپور کے تمام علاقوں میں خدمات۔',
  perService: '',
  mostPopular: 'سب سے مقبول',
  bookNow: 'واٹس ایپ قیمت',
  whyChooseTitle: 'ڈاکٹر ایکوا کیوں منتخب کریں؟',
  whyChooseDescription:
    'ماہر ٹیکنیشنز اور معیاری پارٹس کے ساتھ بہاولپور کا قابل اعتماد واٹر پیوریفیکیشن سروس فراہم کنندہ۔',
  testimonialsTitle: 'ہمارے گاہک کیا کہتے ہیں',
  testimonialsDescription:
    'بہاولپور بھر میں مطمئن گاہکوں سے سنیں جو ڈاکٹر ایکوا پر بھروسہ کرتے ہیں۔',
  serviceAreasTitle: 'بہاولپور میں سروس کے علاقے',
  serviceAreasDescription:
    'ہم بہاولپور کے تمام علاقوں بشمول ماڈل ٹاؤن، سیٹلائٹ ٹاؤن، DHA، کینٹ، بغداد الجدید، اور آس پاس کی علاقوں میں تیز، قابل اعتماد سروس کے ساتھ خدمات فراہم کرتے ہیں۔',
  serviceAreasSubtext: 'بہاولپور کے تمام علاقوں میں خدمات',
  checkAvailability: 'دستیابی چیک کریں',
  contactUs: 'واٹس ایپ کریں',
};
