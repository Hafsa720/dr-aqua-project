'use client';

import { useState } from 'react';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

import Button from '@/components/buttons/Button';
import { useLanguage } from '@/contexts/LanguageContext';
import { WhatsAppService } from '@/lib/whatsapp';
import type { ContactFormData } from '@/types';
import { CompanyInfo } from '@/types/constants';

// Import both language versions
import contactContentEn from '@/content/common/en/contact.json';
import contactContentUr from '@/content/common/ur/contact.json';

export function ContactForm() {
  const { language } = useLanguage();
  const content = language === 'ur' ? contactContentUr : contactContentEn;
  const formContent = content.form;

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    consent: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showErrors, setShowErrors] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = formContent.errors.nameRequired;
    }

    if (!formData.email.trim()) {
      newErrors.email = formContent.errors.emailRequired;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = formContent.errors.emailInvalid;
    }

    if (!formData.message.trim()) {
      newErrors.message = formContent.errors.messageRequired;
    }

    if (!formData.consent) {
      newErrors.consent = formContent.errors.consentRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;

    if (showErrors && errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setShowErrors(true);
      return;
    }

    setShowErrors(false);
    WhatsAppService.sendContact(formData);
  };

  const handleEmailSubmit = (platform: 'gmail' | 'default') => {
    if (!validateForm()) {
      setShowErrors(true);
      return;
    }

    setShowErrors(false);

    const subject = `Contact from ${formData.name}${formData.company ? ` - ${formData.company}` : ''}`;
    const body = `Hi Dr. Aqua,

I'd like to get in touch with you.

${platform === 'gmail' ? 'CONTACT INFORMATION:\n• ' : ''}Name: ${formData.name}
${platform === 'gmail' ? '• ' : ''}Email: ${formData.email}
${platform === 'gmail' ? '• ' : ''}Company: ${formData.company || 'Individual'}

${platform === 'gmail' ? 'MESSAGE:\n' : 'Message:\n'}${formData.message}

Best regards,
${formData.name}`;

    if (platform === 'gmail') {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${CompanyInfo.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailUrl, '_blank');
    } else {
      const mailtoUrl = `mailto:${CompanyInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
    }
  };

  return (
    <section className='py-32 bg-white'>
      <div className='layout'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-20 opacity-0 animate-fade-in-up'>
            <h2 className='text-5xl md:text-6xl font-bold text-slate-900 mb-6'>
              {formContent.title.split(' ').slice(0, -2).join(' ')}
              <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                {' '}
                {formContent.title.split(' ').slice(-2).join(' ')}
              </span>
            </h2>
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
              {formContent.description}
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className='bg-gradient-to-br from-slate-50 to-blue-50/30 p-12 rounded-3xl shadow-2xl border border-slate-200 opacity-0 animate-fade-in-up animation-delay-200'
          >
            <div className='grid md:grid-cols-2 gap-8 mb-8'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-semibold text-slate-700 mb-3'
                >
                  {formContent.fields.name} *
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-6 py-4 border-2 ${showErrors && errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500'} rounded-2xl focus:ring-2 transition-all duration-300 text-lg`}
                  placeholder={formContent.fields.namePlaceholder}
                />
                {showErrors && errors.name && (
                  <p className='mt-2 text-red-500 text-sm font-medium animate-fade-in'>
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-semibold text-slate-700 mb-3'
                >
                  {formContent.fields.email} *
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-6 py-4 border-2 ${showErrors && errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500'} rounded-2xl focus:ring-2 transition-all duration-300 text-lg`}
                  placeholder={formContent.fields.emailPlaceholder}
                />
                {showErrors && errors.email && (
                  <p className='mt-2 text-red-500 text-sm font-medium animate-fade-in'>
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className='mb-8'>
              <label
                htmlFor='company'
                className='block text-sm font-semibold text-slate-700 mb-3'
              >
                {formContent.fields.company}
              </label>
              <input
                type='text'
                id='company'
                name='company'
                value={formData.company}
                onChange={handleInputChange}
                className='w-full px-6 py-4 border-2 border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg'
                placeholder={formContent.fields.companyPlaceholder}
              />
            </div>

            <div className='mb-8'>
              <label
                htmlFor='message'
                className='block text-sm font-semibold text-slate-700 mb-3'
              >
                {formContent.fields.message} *
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className={`w-full px-6 py-4 border-2 ${showErrors && errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500'} rounded-2xl focus:ring-2 transition-all duration-300 text-lg resize-none`}
                placeholder={formContent.fields.messagePlaceholder}
              />
              {showErrors && errors.message && (
                <p className='mt-2 text-red-500 text-sm font-medium animate-fade-in'>
                  {errors.message}
                </p>
              )}
            </div>

            <div className='mb-10'>
              <label className='flex items-start gap-4 cursor-pointer'>
                <input
                  type='checkbox'
                  name='consent'
                  checked={formData.consent}
                  onChange={handleInputChange}
                  required
                  className={`mt-1 w-5 h-5 rounded border-2 ${showErrors && errors.consent ? 'border-red-500 text-red-600 focus:ring-red-500' : 'border-slate-300 text-blue-600 focus:ring-blue-500'} focus:ring-2`}
                />
                <span className='text-slate-700 leading-relaxed'>
                  {formContent.fields.consent} *
                </span>
              </label>
              {showErrors && errors.consent && (
                <p className='mt-2 text-red-500 text-sm font-medium animate-fade-in'>
                  {errors.consent}
                </p>
              )}
            </div>

            {/* Contact Method Selection */}
            <div className='mb-8'>
              <h3 className='text-lg font-semibold text-slate-900 mb-4 text-center'>
                {formContent.sendMethod}
              </h3>

              <div className='flex flex-col lg:flex-row gap-6 items-stretch'>
                {/* WhatsApp Option - Primary */}
                <div className='flex-1 flex items-center'>
                  <div className='w-full relative'>
                    <Button
                      onClick={handleWhatsAppSubmit}
                      type='button'
                      variant='primary'
                      size='lg'
                      className='w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center gap-3 min-h-[70px]'
                    >
                      <FaWhatsapp className='text-2xl' />
                      <div className='flex flex-col items-start'>
                        <span className='text-lg font-bold'>
                          {formContent.whatsapp.button}
                        </span>
                        <span className='text-xs opacity-90'>
                          {formContent.whatsapp.subtitle}
                        </span>
                      </div>
                    </Button>
                    {/* Recommended Badge */}
                    <div className='absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border-2 border-white'>
                      <div className='flex items-center gap-1'>
                        <div className='w-2 h-2 bg-green-400 rounded-full animate-ping'></div>
                        <span>{formContent.whatsapp.badge}</span>
                      </div>
                    </div>
                  </div>
                </div>{' '}
                {/* Smart Email Options */}
                <div className='flex-1 flex flex-col gap-2'>
                  {/* Gmail Compose Link */}
                  <Button
                    onClick={() => handleEmailSubmit('gmail')}
                    type='button'
                    variant='primary'
                    size='lg'
                    className='w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold py-3 px-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-3 min-h-[50px]'
                  >
                    <FaEnvelope className='text-lg' />
                    <div className='flex flex-col items-start'>
                      <span className='text-base font-bold'>
                        {formContent.gmail.button}
                      </span>
                      <span className='text-xs opacity-80'>
                        {formContent.gmail.subtitle}
                      </span>
                    </div>
                  </Button>

                  {/* Traditional Mailto - Compact */}
                  <Button
                    onClick={() => handleEmailSubmit('default')}
                    type='button'
                    variant='outline'
                    size='sm'
                    className='w-full border border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white font-medium py-2 px-4 rounded-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 min-h-[36px]'
                  >
                    <FaEnvelope className='text-sm opacity-70' />
                    <span className='text-sm'>{formContent.defaultEmail}</span>
                  </Button>
                </div>
              </div>

              <div className='text-center text-sm text-slate-600 mt-6 space-y-2'>
                <p>{formContent.methodInfo.whatsapp}</p>
                <p>{formContent.methodInfo.gmail}</p>
                <p>{formContent.methodInfo.default}</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
