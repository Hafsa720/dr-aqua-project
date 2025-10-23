import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiGlobeAlt } from 'react-icons/hi';
import { SiBehance, SiFreelancer, SiUpwork } from 'react-icons/si';

export interface SocialPlatformConfig {
  icon: React.ElementType;
  color: string;
  bg: string;
}

export const socialPlatformConfigs: Record<string, SocialPlatformConfig> = {
  linkedin: {
    icon: FaLinkedin,
    color: 'text-blue-600',
    bg: 'bg-blue-50 hover:bg-blue-100/40 border-blue-200',
  },
  github: {
    icon: FaGithub,
    color: 'text-slate-700',
    bg: 'bg-slate-50 hover:bg-slate-100 border-slate-200',
  },
  behance: {
    icon: SiBehance,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50 hover:bg-indigo-100/40 border-indigo-200',
  },
  upwork: {
    icon: SiUpwork,
    color: 'text-green-600',
    bg: 'bg-green-50 hover:bg-green-100/40 border-green-200',
  },
  freelancer: {
    icon: SiFreelancer,
    color: 'text-orange-600',
    bg: 'bg-orange-50 hover:bg-orange-100/40 border-orange-200',
  },
};

export const defaultSocialConfig: SocialPlatformConfig = {
  icon: HiGlobeAlt,
  color: 'text-slate-600',
  bg: 'bg-slate-50 hover:bg-slate-100 border-slate-200',
};

export const getSocialConfig = (platform: string): SocialPlatformConfig => {
  return socialPlatformConfigs[platform] || defaultSocialConfig;
};
