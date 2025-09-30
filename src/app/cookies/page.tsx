import React from 'react';

import LegalPage from '@/components/pages/LegalPage';

const CookiePolicy = () => {
  return (
    <LegalPage
      documentType='cookie-policy'
      title='Cookie Policy'
      description='Learn about how RapidBizz uses cookies and similar technologies to enhance your browsing experience.'
      subtitle='We use cookies to improve your experience and provide personalized services.'
    />
  );
};

export default CookiePolicy;
