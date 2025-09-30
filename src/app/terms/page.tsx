import React from 'react';

import LegalPage from '@/components/pages/LegalPage';

const TermsOfService = () => {
  return (
    <LegalPage
      documentType='terms-of-service'
      title='Terms of Service'
      description='These terms govern your use of our services. Please read them carefully before engaging with RapidBizz.'
      subtitle='By using our services, you agree to be bound by these terms and conditions.'
    />
  );
};

export default TermsOfService;
