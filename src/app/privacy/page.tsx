import React from 'react';

import LegalPage from '@/components/pages/LegalPage';

const PrivacyPolicy = () => {
  return (
    <LegalPage
      documentType='privacy-policy'
      title='Privacy Policy'
      description='Your privacy is important to us. This policy explains how we collect, use, and protect your information.'
      subtitle='We are committed to protecting your personal data and respecting your privacy rights.'
    />
  );
};

export default PrivacyPolicy;
