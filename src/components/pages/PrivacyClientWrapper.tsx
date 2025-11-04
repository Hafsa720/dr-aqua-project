'use client';

import React from 'react';

import LegalPage from '@/components/pages/LegalPage';
import { useLanguage } from '@/contexts/LanguageContext';

const PrivacyClientWrapper: React.FC = () => {
  const { language } = useLanguage();
  const isUrdu = language === 'ur';

  const title = isUrdu ? 'رازداری کی پالیسی' : 'Privacy Policy';
  const description = isUrdu
    ? 'ہم آپ کی رازداری کا احترام کرتے ہیں۔ یہ پالیسی بتاتی ہے کہ ہم آپ کی معلومات کو کیسے جمع اور محفوظ رکھتے ہیں۔'
    : 'Your privacy is important to us. This policy explains how we collect, use, and protect your information.';
  const subtitle = isUrdu
    ? 'ہم آپ کے ذاتی ڈیٹا کے تحفظ اور آپ کے پرائیویسی حقوق کے احترام کے لیے پرعزم ہیں۔'
    : 'We are committed to protecting your personal data and respecting your privacy rights.';

  return (
    <LegalPage
      documentType='privacy-policy'
      title={title}
      description={description}
      subtitle={subtitle}
    />
  );
};

export default PrivacyClientWrapper;
