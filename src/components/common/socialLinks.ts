import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';
import { SiBehance, SiFreelancer, SiUpwork } from 'react-icons/si';

export const socialLinks = [
  {
    name: 'Upwork',
    href: 'https://www.upwork.com/agencies/Dr.Aqua',
    icon: SiUpwork,
    hoverColor: 'green',
    bgColor: 'bg-green-500',
  },
  {
    name: 'Freelancer',
    href: 'https://www.freelancer.com/u/Dr.Aqua',
    icon: SiFreelancer,
    hoverColor: 'blue-6',
    bgColor: 'bg-blue-600',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/Dr.Aqua',
    icon: FaLinkedin,
    hoverColor: 'blue-6',
    bgColor: 'bg-blue-600',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/Dr.Aqua',
    icon: FaFacebook,
    hoverColor: 'blue-8',
    bgColor: 'bg-blue-800',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/Dr.Aqua',
    icon: FaInstagram,
    hoverColor: 'pink',
    bgColor: 'bg-pink-500',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/Dr.Aqua',
    icon: FaTwitter,
    hoverColor: 'sky',
    bgColor: 'bg-sky-400',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@Dr.Aqua',
    icon: FaYoutube,
    hoverColor: 'red',
    bgColor: 'bg-red-600',
  },
  {
    name: 'Behance',
    href: 'https://www.behance.net/Dr.Aqua',
    icon: SiBehance,
    hoverColor: 'blue-5',
    bgColor: 'bg-blue-500',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Dr.Aqua',
    icon: FaGithub,
    hoverColor: 'gray',
    bgColor: 'bg-gray-600',
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/971501234567',
    icon: FaWhatsapp,
    hoverColor: 'green',
    bgColor: 'bg-green-500',
  },
];

export const contactInfo = {
  email: 'info@Dr.Aqua.com',
  phone: '03016315524',
  location: 'Dubai, UAE',
  emailHref: 'mailto:info@Dr.Aqua.com',
  phoneHref: 'tel:+971501234567',
  locationHref: 'https://maps.google.com/?q=Dubai,UAE',
};
