'use client';

import { useState } from 'react';
import {
  FaChevronDown,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';
import { SiBehance, SiFreelancer, SiUpwork } from 'react-icons/si';

import Button from '@/components/buttons/Button';
import UnstyledLink from '@/components/links/UnstyledLink';
import MotionSocial from '@/components/MotionSocial';
import { motion } from '@/components/MotionWrapper';
import contactContent from '@/content/common/en/contact.json';
import contactData from '@/content/common/en/data.json';
import footerContent from '@/content/common/en/footer.json';
import { WhatsAppService } from '@/lib/whatsapp';
import type { ContactFormData, ContactOption, FAQ } from '@/types';
import { CompanyInfo } from '@/types/constants';

const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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

  // Icon mapping for contact options
  const contactIconMap = {
    FaEnvelope,
    FaPhone,
    FaWhatsapp,
    FaMapMarkerAlt,
  };

  // Convert contact options with icon mapping
  const contactOptions = contactData.contactOptions.map((option: any) => ({
    ...option,
    icon:
      contactIconMap[option.icon as keyof typeof contactIconMap] || FaEnvelope,
  })) as ContactOption[];

  // Icon mapping for social links
  const socialIconMap = {
    SiUpwork,
    SiFreelancer,
    FaLinkedin,
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    SiBehance,
    FaGithub,
    FaWhatsapp,
  };

  // Convert social links with icon mapping (using footer content)
  const socialLinks = footerContent.socialLinks.map((link: any) => ({
    ...link,
    icon: socialIconMap[link.icon as keyof typeof socialIconMap] || FaLinkedin,
  }));

  // Use FAQs from centralized content
  const faqs = contactData.faqs as FAQ[];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;

    // Clear error for this field when user starts typing
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

    // Send contact message via WhatsApp using centralized service
    WhatsAppService.sendContact(formData);
  };

  return (
    <div>
      {/* Page Hero */}
      <section className='relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-primary-100/30 to-primary-200/50 overflow-hidden'>
        {/* Background Pattern */}
        <div className='absolute inset-0'>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
            className='absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary-400/10 to-secondary-400/10 rounded-full blur-3xl'
          />
        </div>

        <div className='layout text-center relative z-10 page-header-spacing'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full text-sm font-medium text-primary-700 mb-8'
          >
            <FaEnvelope className='w-4 h-4' />
            <span>{contactContent.hero.subtitle}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='text-5xl md:text-7xl font-bold leading-tight mb-8'
          >
            <span className='text-primary-900'>Get In</span>
            <br />
            <span className='bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-700 bg-clip-text text-transparent'>
              Touch
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed'
          >
            {contactContent.hero.description}
          </motion.p>
        </div>
      </section>

      {/* Contact Options */}
      <section className='py-32 bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-800 dark:to-slate-900'>
        <div className='layout'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-20'
          >
            <h2 className='text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6'>
              Contact
              <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                {' '}
                Options
              </span>
            </h2>
            <p className='text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto'>
              Choose the best way to reach us. We're here to help and respond
              quickly to all inquiries with personalized solutions.
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <UnstyledLink
                  href={option.link}
                  openNewTab={option.link.startsWith('http')}
                  className='bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 text-center border border-slate-200 dark:border-slate-700 block group'
                >
                  <div className='w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-6 shadow-lg'>
                    <option.icon className='text-white text-2xl' />
                  </div>
                  <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                    {option.title}
                  </h3>
                  <p className='text-slate-600 dark:text-slate-300 mb-4 leading-relaxed'>
                    {option.description}
                  </p>
                  <p className='text-blue-600 dark:text-blue-400 font-semibold text-lg'>
                    {option.contact}
                  </p>
                </UnstyledLink>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className='text-center mt-20'
          >
            <h3 className='text-3xl font-bold text-slate-900 dark:text-white mb-8'>
              Connect With Us
            </h3>
            <div className='flex justify-center flex-wrap gap-3'>
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <MotionSocial
                    href={social.href}
                    title={<social.icon size={20} />}
                    classes='bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 p-4 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300 border border-slate-200 dark:border-slate-600 shadow-lg hover:shadow-xl'
                    background={social.bgColor}
                    iconSize={20}
                    hoverColor={social.hoverColor}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className='py-32 bg-white dark:bg-slate-900'>
        <div className='layout'>
          <div className='max-w-4xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-center mb-20'
            >
              <h2 className='text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6'>
                Send Us a
                <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                  {' '}
                  Message
                </span>
              </h2>
              <p className='text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto'>
                Fill out the form below and we'll get back to you within 24
                hours with a personalized response to your inquiry.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={(e) => e.preventDefault()}
              className='bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-800 dark:to-slate-700 p-12 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-600'
            >
              <div className='grid md:grid-cols-2 gap-8 mb-8'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3'
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
                    className={`w-full px-6 py-4 border-2 ${showErrors && errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500'} dark:bg-slate-800 dark:text-white rounded-2xl focus:ring-2 transition-all duration-300 text-lg`}
                    placeholder='Your full name'
                  />
                  {showErrors && errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className='mt-2 text-red-500 text-sm font-medium'
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3'
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
                    className={`w-full px-6 py-4 border-2 ${showErrors && errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500'} dark:bg-slate-800 dark:text-white rounded-2xl focus:ring-2 transition-all duration-300 text-lg`}
                    placeholder='your@email.com'
                  />
                  {showErrors && errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className='mt-2 text-red-500 text-sm font-medium'
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>
              </div>

              <div className='mb-8'>
                <label
                  htmlFor='company'
                  className='block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3'
                >
                  Company (Optional)
                </label>
                <input
                  type='text'
                  id='company'
                  name='company'
                  value={formData.company}
                  onChange={handleInputChange}
                  className='w-full px-6 py-4 border-2 border-slate-200 dark:border-slate-600 dark:bg-slate-800 dark:text-white rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg'
                  placeholder='Your company name'
                />
              </div>

              <div className='mb-8'>
                <label
                  htmlFor='message'
                  className='block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3'
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
                  className={`w-full px-6 py-4 border-2 ${showErrors && errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-600 focus:border-blue-500 focus:ring-blue-500'} dark:bg-slate-800 dark:text-white rounded-2xl focus:ring-2 transition-all duration-300 text-lg resize-none`}
                  placeholder='Tell us about your project, goals, timeline, and any specific requirements...'
                />
                {showErrors && errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='mt-2 text-red-500 text-sm font-medium'
                  >
                    {errors.message}
                  </motion.p>
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
                  <span className='text-slate-700 dark:text-slate-300 leading-relaxed'>
                    I agree to receive communications from RapidBizz and
                    understand that I can unsubscribe at any time. *
                  </span>
                </label>
                {showErrors && errors.consent && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='mt-2 text-red-500 text-sm font-medium'
                  >
                    {errors.consent}
                  </motion.p>
                )}
              </div>

              {/* Contact Method Selection */}
              <div className='mb-8'>
                <h3 className='text-lg font-semibold text-slate-900 dark:text-white mb-4 text-center'>
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
                      onClick={() => {
                        // Validate form data first
                        if (!validateForm()) {
                          setShowErrors(true);
                          return;
                        }

                        setShowErrors(false);

                        const subject = `Contact from ${formData.name}${formData.company ? ` - ${formData.company}` : ''}`;
                        const body = `Hi RapidBizz,

I'd like to get in touch with you.

CONTACT INFORMATION:
• Name: ${formData.name}
• Email: ${formData.email}
• Company: ${formData.company || 'Individual'}

MESSAGE:
${formData.message}

Best regards,
${formData.name}`;

                        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${CompanyInfo.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                        window.open(gmailUrl, '_blank');
                      }}
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
                      onClick={() => {
                        // Validate form data first
                        if (!validateForm()) {
                          setShowErrors(true);
                          return;
                        }

                        setShowErrors(false);

                        const subject = `Contact from ${formData.name}${formData.company ? ` - ${formData.company}` : ''}`;
                        const body = `Hi RapidBizz,

I'd like to get in touch with you.

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Individual'}

Message:
${formData.message}

Best regards,
${formData.name}`;

                        const mailtoUrl = `mailto:${CompanyInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                        window.location.href = mailtoUrl;
                      }}
                      type='button'
                      variant='outline'
                      size='sm'
                      className='w-full border border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-slate-900 font-medium py-2 px-4 rounded-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 min-h-[36px]'
                    >
                      <FaEnvelope className='text-sm opacity-70' />
                      <span className='text-sm'>Default Email App</span>
                    </Button>
                  </div>
                </div>

                <div className='text-center text-sm text-slate-600 dark:text-slate-400 mt-6 space-y-2'>
                  <p>
                    💬 <strong>WhatsApp:</strong> Instant messaging with quick
                    replies
                  </p>
                  <p>
                    📧 <strong>Gmail:</strong> Opens Gmail compose with
                    pre-filled message
                  </p>
                  <p>
                    📩 <strong>Default Email:</strong> Uses your system's
                    default email app
                  </p>
                </div>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='py-32 bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-800 dark:to-slate-900'>
        <div className='layout'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-20'
          >
            <h2 className='text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6'>
              Frequently Asked
              <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                {' '}
                Questions
              </span>
            </h2>
            <p className='text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto'>
              Find answers to common questions about our services, process, and
              how we can help your business grow.
            </p>
          </motion.div>

          <div className='max-w-4xl mx-auto space-y-6'>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                }}
                whileHover={{
                  y: -2,
                  transition: { duration: 0.2 },
                }}
                className='bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300'
              >
                <motion.div
                  whileHover={{ backgroundColor: 'rgba(248, 250, 252, 0.5)' }}
                  whileTap={{ scale: 0.995 }}
                >
                  <Button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    variant='ghost'
                    className='w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 group'
                  >
                    <motion.span
                      className='text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors pr-4'
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {faq.question}
                    </motion.span>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaChevronDown className='text-blue-600 dark:text-blue-400 flex-shrink-0' />
                    </motion.div>
                  </Button>
                </motion.div>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1],
                    opacity: {
                      duration: 0.2,
                      delay: openFaq === index ? 0.1 : 0,
                    },
                  }}
                  className='overflow-hidden'
                >
                  <div className='px-8 pb-6 border-t border-slate-200 dark:border-slate-600'>
                    <motion.p
                      className='text-slate-600 dark:text-slate-300 leading-relaxed text-lg pt-4'
                      initial={{ y: -10, opacity: 0 }}
                      animate={{
                        y: openFaq === index ? 0 : -10,
                        opacity: openFaq === index ? 1 : 0,
                      }}
                      transition={{ delay: 0.15, duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
