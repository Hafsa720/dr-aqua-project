'use client';

import React from 'react';

import LegalPage from '@/components/pages/LegalPage';
import { useLanguage } from '@/contexts/LanguageContext';

const TermsClientWrapper: React.FC = () => {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';

  const title = isUrdu ? 'شرائطِ خدمت' : 'Terms of Service';
  const description = isUrdu
    ? 'یہ شرائط ہماری خدمات کے استعمال کو کنٹرول کرتی ہیں۔ براہِ کرم DR.Aqua کی مصنوعات یا خدمات استعمال کرنے سے پہلے انہیں غور سے پڑھیں۔'
    : 'These terms govern your use of our services. Please read them carefully before engaging with DR.Aqua products or services.';
  const subtitle = isUrdu
    ? 'ہماری خدمات استعمال کرکے، آپ ان شرائط و ضوابط سے متفق ہوتے ہیں۔'
    : 'By using our services, you agree to be bound by these terms and conditions.';

  return (
    <LegalPage
      documentType='terms-of-service'
      title={title}
      description={description}
      subtitle={subtitle}
    />
  );
};

export default TermsClientWrapper;
