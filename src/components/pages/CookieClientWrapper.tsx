'use client';

import React from 'react';

import LegalPage from '@/components/pages/LegalPage';
import { useLanguage } from '@/contexts/LanguageContext';

const CookieClientWrapper: React.FC = () => {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';

  const title = isUrdu ? 'کوکی پالیسی' : 'Cookie Policy';
  const description = isUrdu
    ? 'یہ کوکی پالیسی بتاتی ہے کہ Dr.Aqua ہماری ویب سائٹ پر کوکیز کیسے استعمال کرتی ہے۔'
    : 'Learn about how Dr.Aqua uses cookies and similar technologies to enhance your browsing experience.';
  const subtitle = isUrdu
    ? 'ہم آپ کے تجربے کو بہتر بنانے اور ذاتی نوعیت کی خدمات فراہم کرنے کے لیے کوکیز استعمال کرتے ہیں۔'
    : 'We use cookies to improve your experience and provide personalized services.';

  return (
    <LegalPage
      documentType='cookie-policy'
      title={title}
      description={description}
      subtitle={subtitle}
    />
  );
};

export default CookieClientWrapper;
