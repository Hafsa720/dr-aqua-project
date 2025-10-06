import type { Service, Testimonial, WhyChooseUs, ServicePageLabels } from '@/types/service';

export const servicesUr: Service[] = [
  {
    id: 'installation',
    slug: 'professional-installation',
    icon: 'Wrench',
    title: 'پیشہ ورانہ تنصیب',
    description:
      'تصدیق شدہ ٹیکنیشنز کی طرف سے ماہرانہ تنصیب کے ساتھ تنصیب کے کام پر 2 سال کی وارنٹی۔',
    price: 99,
    duration: '2-3 گھنٹے',
    features: [
      'تصدیق شدہ ٹیکنیشنز',
      'تمام ٹولز اور مواد شامل',
      'سسٹم ٹیسٹنگ اور کیلیبریشن',
      '2 سال کی تنصیب وارنٹی',
      'مفت فالو اپ وزٹ',
    ],
    popular: true,
  },
  {
    id: 'maintenance',
    slug: 'maintenance-repair',
    icon: 'Shield',
    title: 'دیکھ بھال اور مرمت',
    description:
      'آپ کے واٹر فلٹریشن سسٹم کو بہترین طریقے سے چلانے کے لیے باقاعدہ دیکھ بھال اور فوری مرمت۔',
    price: 49,
    duration: '1-2 گھنٹے',
    features: [
      'فلٹر کی تبدیلی',
      'سسٹم کا معائنہ',
      'کارکردگی کی بہتری',
      'پارٹس کی تبدیلی',
      'ایمرجنسی مرمت دستیاب',
    ],
    popular: false,
  },
  {
    id: 'testing',
    slug: 'water-quality-testing',
    icon: 'Droplets',
    title: 'پانی کے معیار کی جانچ',
    description:
      'آپ کے پانی کے حفاظتی معیارات کو یقینی بنانے کے لیے جامع پانی کا تجزیہ اور معیار کی جانچ۔',
    price: 29,
    duration: '30 منٹ',
    features: [
      'مکمل پانی کا تجزیہ',
      'آلودگی کی تشخیص',
      'پی ایچ لیول ٹیسٹنگ',
      'تفصیلی رپورٹ',
      'سفارشات شامل',
    ],
    popular: false,
  },
];

export const testimonialsUr: Testimonial[] = [
  {
    name: 'سارہ جانسن',
    service: 'پیشہ ورانہ تنصیب',
    rating: 5,
    comment:
      'تنصیب کی ٹیم پیشہ ور اور موثر تھی۔ انہوں نے ہر چیز کو واضح طور پر سمجھایا اور کوئی گندگی نہیں چھوڑی۔',
    date: '2 ہفتے پہلے',
  },
  {
    name: 'مائیکل چن',
    service: 'دیکھ بھال اور مرمت',
    rating: 5,
    comment:
      'فوری ردعمل کا وقت اور بہترین سروس۔ میرا واٹر فلٹر پہلے سے کہیں بہتر کام کر رہا ہے!',
    date: '1 ماہ پہلے',
  },
  {
    name: 'ایملی روڈریگز',
    service: 'پانی کے معیار کی جانچ',
    rating: 5,
    comment:
      'بہت مکمل جانچ اور تفصیلی رپورٹ۔ مجھے یہ سمجھنے میں مدد ملی کہ میرے پانی میں کیا ہے۔',
    date: '3 ہفتے پہلے',
  },
];

export const whyChooseUsUr: WhyChooseUs[] = [
  {
    title: 'تصدیق شدہ ماہرین',
    description: 'تمام ٹیکنیشنز تصدیق شدہ اور تربیت یافتہ ہیں',
    icon: 'CheckCircle',
  },
  {
    title: 'تیز ردعمل',
    description: 'اسی دن کی سروس دستیاب',
    icon: 'Clock',
  },
  {
    title: 'وارنٹی شامل',
    description: 'تمام خدمات وارنٹی کے ساتھ',
    icon: 'Shield',
  },
  {
    title: '24/7 سپورٹ',
    description: 'جب آپ کو ضرورت ہو ہم یہاں ہیں',
    icon: 'Phone',
  },
];

export const serviceLabelsUr: ServicePageLabels = {
  pageTitle: 'پیشہ ورانہ خدمات',
  pageSubtitle: 'مکمل واٹر حل',
  pageDescription:
    'تنصیب سے لے کر دیکھ بھال تک، ہمارے تصدیق شدہ ماہرین اس بات کو یقینی بناتے ہیں کہ آپ کا واٹر فلٹریشن سسٹم بہترین کارکردگی دکھائے۔ آج ہی سروس بک کریں اور فرق کا تجربہ کریں۔',
  perService: '/سروس',
  mostPopular: 'سب سے مقبول',
  bookNow: 'ابھی بک کریں',
  whyChooseTitle: 'ہماری خدمات کیوں منتخب کریں؟',
  whyChooseDescription:
    'ہم آپ کی تمام واٹر فلٹریشن ضروریات کے لیے اعلیٰ ترین معیار کی سروس فراہم کرنے کے لیے پرعزم ہیں۔',
  testimonialsTitle: 'ہمارے گاہک کیا کہتے ہیں',
  testimonialsDescription:
    'صرف ہماری بات نہ مانیں - ہمارے مطمئن گاہکوں سے سنیں۔',
  serviceAreasTitle: 'سروس کے علاقے',
  serviceAreasDescription:
    'ہم فخر سے تیز، قابل اعتماد سروس کے ساتھ علاقے بھر میں گاہکوں کی خدمت کرتے ہیں۔ چیک کریں کہ آیا ہم آپ کے علاقے میں سروس کرتے ہیں یا مزید معلومات کے لیے ہم سے رابطہ کریں۔',
  serviceAreasSubtext: 'ملک بھر میں 50+ شہروں میں سروس',
  checkAvailability: 'سروس کی دستیابی چیک کریں',
  contactUs: 'ہم سے رابطہ کریں',
};
