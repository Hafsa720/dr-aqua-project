'use client';

import React, { useState } from 'react';
import { FaCheck, FaTimes, FaWhatsapp } from 'react-icons/fa';

import { AnimatePresence, motion } from '@/components/MotionWrapper';
import { WhatsAppService } from '@/lib/whatsapp';
import type { Service } from '@/types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
}

const budgetRanges = [
  { label: '$5k - $10k', value: '5000-10000' },
  { label: '$10k - $25k', value: '10000-25000' },
  { label: '$25k - $50k', value: '25000-50000' },
  { label: '$50k+', value: '50000+' },
  { label: 'Custom', value: 'custom' },
];

const timeframes = [
  { label: 'ASAP (Rush)', value: 'rush' },
  { label: '1-2 months', value: '1-2' },
  { label: '3-6 months', value: '3-6' },
  { label: '6+ months', value: '6+' },
  { label: 'Flexible', value: 'flexible' },
];

export default function QuoteModal({
  isOpen,
  onClose,
  service,
}: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    timeline: '',
    requirements: '',
    priority: 'standard' as 'standard' | 'urgent',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data using centralized service
    const validation = WhatsAppService.validateQuoteData(formData, service);
    if (!validation.isValid) {
      alert(validation.error);
      return;
    }

    // Send quote via WhatsApp using centralized service
    // service is guaranteed to exist due to validation above
    WhatsAppService.sendQuote(formData, service as Service);

    // Close modal and reset form
    onClose();
    setFormData({
      name: '',
      email: '',
      company: '',
      budget: '',
      timeline: '',
      requirements: '',
      priority: 'standard' as 'standard' | 'urgent',
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && service && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto modal-scrollbar'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className='p-6 border-b border-slate-200'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center'>
                    <service.icon className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h2 className='text-2xl font-bold text-slate-900'>
                      Get Quote for {service.title}
                    </h2>
                    <p className='text-slate-600'>
                      Starting from {service.startingPrice} •{' '}
                      {service.deliveryTime}
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className='w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors'
                >
                  <FaTimes className='w-4 h-4 text-slate-600' />
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className='p-6 space-y-6'>
              {/* Contact Info */}
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-sm font-medium text-slate-900 mb-2'>
                    Full Name *
                  </label>
                  <input
                    type='text'
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className='w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                    placeholder='John Doe'
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-slate-900 mb-2'>
                    Email Address *
                  </label>
                  <input
                    type='email'
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className='w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                    placeholder='john@company.com'
                  />
                </div>
              </div>

              <div>
                <label className='block text-sm font-medium text-slate-900 mb-2'>
                  Company (Optional)
                </label>
                <input
                  type='text'
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className='w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                  placeholder='Your Company Name'
                />
              </div>

              {/* Budget & Timeline */}
              <div className='grid md:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-sm font-medium text-slate-900 mb-2'>
                    Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) =>
                      handleInputChange('budget', e.target.value)
                    }
                    className='w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                  >
                    <option value=''>Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className='block text-sm font-medium text-slate-900 mb-2'>
                    Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) =>
                      handleInputChange('timeline', e.target.value)
                    }
                    className='w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                  >
                    <option value=''>Select timeline</option>
                    {timeframes.map((time) => (
                      <option key={time.value} value={time.value}>
                        {time.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Priority */}
              <div>
                <label className='block text-sm font-medium text-slate-900 mb-2'>
                  Project Priority
                </label>
                <div className='grid grid-cols-2 gap-3'>
                  {[
                    {
                      value: 'standard',
                      label: 'Standard',
                      desc: 'Normal priority',
                    },
                    { value: 'urgent', label: 'Urgent', desc: 'High priority' },
                  ].map((priority) => (
                    <label
                      key={priority.value}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        formData.priority === priority.value
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-slate-200 hover:border-blue-300'
                      }`}
                    >
                      <input
                        type='radio'
                        name='priority'
                        value={priority.value}
                        checked={formData.priority === priority.value}
                        onChange={(e) =>
                          handleInputChange('priority', e.target.value)
                        }
                        className='sr-only'
                      />
                      <div className='flex items-center justify-between'>
                        <div>
                          <div className='font-medium text-slate-900'>
                            {priority.label}
                          </div>
                          <div className='text-sm text-slate-600'>
                            {priority.desc}
                          </div>
                        </div>
                        {formData.priority === priority.value && (
                          <FaCheck className='w-4 h-4 text-blue-500' />
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div>
                <label className='block text-sm font-medium text-slate-900 mb-2'>
                  Project Requirements
                </label>
                <textarea
                  value={formData.requirements}
                  onChange={(e) =>
                    handleInputChange('requirements', e.target.value)
                  }
                  rows={4}
                  className='w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none'
                  placeholder='Describe your project requirements, features needed, target audience, etc...'
                />
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                className='w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-4 rounded-xl font-semibold shadow-lg inline-flex items-center justify-center gap-3 group transition-all duration-300'
              >
                <FaWhatsapp className='w-5 h-5' />
                <span>Continue on WhatsApp</span>
                <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse' />
              </button>

              <p className='text-center text-sm text-slate-600'>
                We'll send your quote request directly to WhatsApp for quick
                response
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
