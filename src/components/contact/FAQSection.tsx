'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

import Button from '@/components/buttons/Button';
// Import both language versions
import contactDataEn from '@/content/common/en/data.json';
import contactDataUr from '@/content/common/ur/data.json';
import { useLanguage } from '@/contexts/LanguageContext';
import type { FAQ } from '@/types';

export function FAQSection() {
  const { language } = useLanguage();
  const contactData = language === 'ur' ? contactDataUr : contactDataEn;

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = contactData.faqs as FAQ[];

  return (
    <section className='py-32 bg-gradient-to-br from-slate-50 to-blue-50/30'>
      <div className='layout'>
        <div className='text-center mb-20 opacity-0 animate-fade-in-up'>
          <h2 className='text-5xl md:text-6xl font-bold text-slate-900 mb-6'>
            Frequently Asked
            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              {' '}
              Questions
            </span>
          </h2>
          <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
            Find answers to common questions about our services, process, and
            how we can help your business grow.
          </p>
        </div>

        <div className='max-w-4xl mx-auto space-y-6'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 opacity-0 animate-fade-in-up'
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className='hover:bg-slate-50/50 transition-colors duration-200'>
                <Button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  variant='ghost'
                  className='w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-all duration-300 group'
                >
                  <span className='text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors pr-4'>
                    {faq.question}
                  </span>
                  <div
                    className='transform transition-transform duration-300 ease-in-out'
                    style={{ rotate: openFaq === index ? '180deg' : '0deg' }}
                  >
                    <FaChevronDown className='text-blue-600 flex-shrink-0 hover:scale-110 active:scale-90 transition-transform' />
                  </div>
                </Button>
              </div>
              <div
                className='overflow-hidden transition-all duration-400 ease-in-out'
                style={{
                  height: openFaq === index ? 'auto' : 0,
                  opacity: openFaq === index ? 1 : 0,
                }}
              >
                <div className='px-8 pb-6 border-t border-slate-200'>
                  <p className='text-slate-600 leading-relaxed text-lg pt-4'>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
