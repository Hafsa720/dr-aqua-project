'use client';

import {
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

import UnstyledLink from '@/components/links/UnstyledLink';
import contactContent from '@/content/common/en/contact.json';
import contactData from '@/content/common/en/data.json';
import footerContent from '@/content/common/en/footer.json';
import type { ContactOption } from '@/types';

export function ContactOptions() {
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

  return (
    <section className='py-32 bg-gradient-to-br from-slate-50 to-blue-50/30'>
      <div className='layout'>
        <div className='flex justify-center'>
          <div className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full text-sm font-medium text-primary-700 mb-8 animate-fade-in'>
            <FaEnvelope className='w-4 h-4' />
            <span>{contactContent.hero.subtitle}</span>
          </div>
        </div>
        <div className='text-center mb-20 animate-fade-in-up'>
          <h2 className='text-5xl md:text-6xl font-bold text-slate-900 mb-6'>
            Contact
            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              {' '}
              Options
            </span>
          </h2>
          <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
            Choose the best way to reach us. We're here to help and respond
            quickly to all inquiries with personalized solutions.
          </p>
        </div>{' '}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {contactOptions.map((option, index) => (
            <div
              key={option.title}
              className='opacity-0 animate-fade-in-up hover:-translate-y-1 transition-all duration-300'
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <UnstyledLink
                href={option.link}
                openNewTab={option.link.startsWith('http')}
                className='bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 text-center border border-slate-200 block group'
              >
                <div className='w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-6 shadow-lg'>
                  <option.icon className='text-white text-2xl' />
                </div>
                <h3 className='text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors'>
                  {option.title}
                </h3>
                <p className='text-slate-600 mb-4 leading-relaxed'>
                  {option.description}
                </p>
                <p className='text-blue-600 font-semibold text-lg'>
                  {option.contact}
                </p>
              </UnstyledLink>
            </div>
          ))}
        </div>
        {/* Social Links */}
        <div className='text-center mt-20 opacity-0 animate-fade-in-up animation-delay-400'>
          <h3 className='text-3xl font-bold text-slate-900 mb-8'>
            Connect With Us
          </h3>
          <div className='flex justify-center flex-wrap gap-3'>
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-white text-slate-600 p-4 rounded-2xl hover:bg-slate-100 transition-all duration-300 border border-slate-200 shadow-lg hover:shadow-xl hover:scale-110 opacity-0 animate-fade-in'
                style={{ animationDelay: `${index * 50}ms` }}
                aria-label={social.name}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
