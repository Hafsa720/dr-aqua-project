'use client';

import { useState } from 'react';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

import Button from '@/components/buttons/Button';
import { WhatsAppService } from '@/lib/whatsapp';
import type { ContactFormData } from '@/types';
import { CompanyInfo } from '@/types/constants';

export function ContactForm() {
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
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to the privacy policy';
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
    const body = `Hi RapidBizz,

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
              Send Us a
              <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                {' '}
                Message
              </span>
            </h2>
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
              Fill out the form below and we'll get back to you within 24 hours
              with a personalized response to your inquiry.
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
                  Name *
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-6 py-4 border-2 ${showErrors && errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500'} rounded-2xl focus:ring-2 transition-all duration-300 text-lg`}
                  placeholder='Your full name'
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
                  Email *
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-6 py-4 border-2 ${showErrors && errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500'} rounded-2xl focus:ring-2 transition-all duration-300 text-lg`}
                  placeholder='your@email.com'
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
                Company (Optional)
              </label>
              <input
                type='text'
                id='company'
                name='company'
                value={formData.company}
                onChange={handleInputChange}
                className='w-full px-6 py-4 border-2 border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg'
                placeholder='Your company name'
              />
            </div>

            <div className='mb-8'>
              <label
                htmlFor='message'
                className='block text-sm font-semibold text-slate-700 mb-3'
              >
                Message *
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className={`w-full px-6 py-4 border-2 ${showErrors && errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500'} rounded-2xl focus:ring-2 transition-all duration-300 text-lg resize-none`}
                placeholder='Tell us about your project, goals, timeline, and any specific requirements...'
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
                  I agree to receive communications from RapidBizz and
                  understand that I can unsubscribe at any time. *
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
                Send us your message instantly:
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
                          Send via WhatsApp
                        </span>
                        <span className='text-xs opacity-90'>
                          ⚡ Get reply within 1 hour
                        </span>
                      </div>
                    </Button>
                    {/* Recommended Badge */}
                    <div className='absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border-2 border-white'>
                      <div className='flex items-center gap-1'>
                        <div className='w-2 h-2 bg-green-400 rounded-full animate-ping'></div>
                        <span>Recommended</span>
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
                        Send via Gmail
                      </span>
                      <span className='text-xs opacity-80'>
                        Opens Gmail compose
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
                    <span className='text-sm'>Default Email App</span>
                  </Button>
                </div>
              </div>

              <div className='text-center text-sm text-slate-600 mt-6 space-y-2'>
                <p>
                  💬 <strong>WhatsApp:</strong> Instant messaging with quick
                  replies
                </p>
                <p>
                  📧 <strong>Gmail:</strong> Opens Gmail compose with
                  pre-filled message
                </p>
                <p>
                  📩 <strong>Default Email:</strong> Uses your system's default
                  email app
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
