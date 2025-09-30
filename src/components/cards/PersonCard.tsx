'use client';

import { useState } from 'react';
import {
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
  FaRocket,
} from 'react-icons/fa';
import { HiGlobeAlt, HiSparkles } from 'react-icons/hi';
import { SiBehance, SiFreelancer, SiUpwork } from 'react-icons/si';

import UnstyledLink from '@/components/links/UnstyledLink';
import { AnimatePresence, motion } from '@/components/MotionWrapper';
import NextImage from '@/components/NextImage';
import type { TeamMember } from '@/types';

interface PersonCardProps {
  member: TeamMember;
  index: number;
}

const PersonCard: React.FC<PersonCardProps> = ({ member, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const socialEntries = Object.entries(member.social).filter(([_, url]) => url);
  const visibleSocials = socialEntries.slice(0, 4);
  const hiddenSocials = socialEntries.slice(4);
  // Check if member has portfolio or github as portfolio indicator
  const hasPortfolio = Boolean(
    member.portfolio || member.social.github || member.social.behance,
  );

  const toggleSocialExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCardClick = () => {
    if (hasPortfolio) {
      // Priority: portfolio > github > behance
      const portfolioUrl =
        member.portfolio ||
        member.social.github ||
        member.social.behance ||
        `/portfolio/${member.id}`;
      window.open(portfolioUrl, '_blank');
    }
  };

  const getSocialConfig = (platform: string) => {
    const configs = {
      linkedin: {
        icon: FaLinkedin,
        color: 'text-blue-600 dark:text-blue-400',
        bg: 'bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 border-blue-200 dark:border-blue-800',
      },
      github: {
        icon: FaGithub,
        color: 'text-slate-700 dark:text-slate-300',
        bg: 'bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 border-slate-200 dark:border-slate-600',
      },
      behance: {
        icon: SiBehance,
        color: 'text-indigo-600 dark:text-indigo-400',
        bg: 'bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 border-indigo-200 dark:border-indigo-800',
      },
      upwork: {
        icon: SiUpwork,
        color: 'text-green-600 dark:text-green-400',
        bg: 'bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/40 border-green-200 dark:border-green-800',
      },
      freelancer: {
        icon: SiFreelancer,
        color: 'text-orange-600 dark:text-orange-400',
        bg: 'bg-orange-50 dark:bg-orange-900/20 hover:bg-orange-100 dark:hover:bg-orange-900/40 border-orange-200 dark:border-orange-800',
      },
    };
    return (
      configs[platform as keyof typeof configs] || {
        icon: HiGlobeAlt,
        color: 'text-slate-600 dark:text-slate-400',
        bg: 'bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 border-slate-200 dark:border-slate-600',
      }
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100,
        damping: 15,
      }}
      whileHover={{
        y: -12,
        transition: { duration: 0.4, ease: 'easeOut' },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`group relative ${hasPortfolio ? 'cursor-pointer' : ''} ${isHovered ? 'z-40' : 'z-10'}`}
    >
      {/* Portfolio Tooltip - Only show on card hover, independent of expansion */}
      <AnimatePresence>
        {isHovered && hasPortfolio && !isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.2 }}
            className='absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-slate-900 dark:bg-slate-800 text-white text-xs rounded-lg shadow-xl border border-slate-700 dark:border-slate-600 whitespace-nowrap'
            style={{ zIndex: 45 }}
          >
            <span className='flex items-center gap-1.5'>
              <FaExternalLinkAlt className='w-3 h-3' />
              Click to view portfolio
            </span>
            <div className='absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900 dark:border-t-slate-800'></div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className='bg-white dark:bg-slate-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700 text-center relative overflow-hidden h-[480px] flex flex-col'
        onClick={hasPortfolio ? handleCardClick : undefined}
      >
        {/* Background Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-8 transition-opacity duration-500`}
        />

        {/* Header Section - Adjustable positioning */}
        <motion.div
          className='relative z-10 px-6 pb-4'
          animate={{
            paddingTop: isExpanded ? '16px' : '24px',
            marginBottom: isExpanded ? '8px' : '16px',
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {/* Profile Image - Moves up when expanded */}
          <motion.div
            className='relative mx-auto mb-4'
            animate={{
              width: isExpanded ? '64px' : '80px',
              height: isExpanded ? '64px' : '80px',
              y: isExpanded ? -8 : 0,
              scale: isHovered ? 1.1 : 1,
              rotateY: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <div className='w-full h-full rounded-full overflow-hidden ring-3 ring-white dark:ring-slate-600 shadow-lg group-hover:ring-4 group-hover:ring-opacity-50 transition-all duration-300'>
              <NextImage
                src={member.image}
                alt={member.name}
                width={80}
                height={80}
                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              className={`absolute -bottom-2 -right-2 bg-gradient-to-r ${member.gradient} rounded-full flex items-center justify-center shadow-lg`}
              animate={{
                width: isExpanded ? '24px' : '32px',
                height: isExpanded ? '24px' : '32px',
                scale: isHovered ? 1.2 : 1,
                rotate: isHovered ? 12 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {member.roleIcon ? (
                <member.roleIcon
                  className={`${isExpanded ? 'w-2.5 h-2.5' : 'w-3 h-3'} text-white`}
                />
              ) : (
                <FaRocket
                  className={`${isExpanded ? 'w-2.5 h-2.5' : 'w-3 h-3'} text-white`}
                />
              )}
            </motion.div>
          </motion.div>

          {/* Name & Role - Smaller when expanded */}
          <motion.div
            animate={{
              marginBottom: isExpanded ? '4px' : '8px',
            }}
            transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
          >
            <motion.h3
              className='font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'
              animate={{
                fontSize: isExpanded ? '16px' : '18px',
                lineHeight: isExpanded ? '20px' : '24px',
                marginBottom: isExpanded ? '2px' : '4px',
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
            >
              {member.name}
            </motion.h3>

            <motion.p
              className='text-blue-600 dark:text-blue-400 font-medium'
              animate={{
                fontSize: isExpanded ? '11px' : '14px',
                marginBottom: isExpanded ? '4px' : '8px',
              }}
              transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
            >
              {member.role}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Content Section - Tighter layout when expanded */}
        <motion.div
          className='relative z-10 px-6 flex-1 flex flex-col justify-between'
          animate={{
            paddingTop: isExpanded ? '0px' : '8px',
            paddingBottom: isExpanded ? '4px' : '8px',
          }}
          transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
        >
          {/* Experience & Skills - Ultra-compact layout */}
          <motion.div
            className='space-y-4 mb-4'
            animate={{
              marginBottom: isExpanded ? '6px' : '16px',
              gap: isExpanded ? '8px' : '16px',
            }}
            transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
          >
            {/* Experience Badge - Tighter spacing */}
            <motion.div
              className='flex justify-center'
              animate={{
                marginBottom: isExpanded ? '4px' : '12px',
              }}
              transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
            >
              <motion.div
                className='inline-flex items-center gap-2 bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-700 dark:to-slate-600 rounded-full font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600'
                animate={{
                  paddingLeft: isExpanded ? '10px' : '12px',
                  paddingRight: isExpanded ? '10px' : '12px',
                  paddingTop: isExpanded ? '4px' : '6px',
                  paddingBottom: isExpanded ? '4px' : '6px',
                  fontSize: isExpanded ? '11px' : '12px',
                  gap: isExpanded ? '6px' : '8px',
                }}
                transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
              >
                <motion.div
                  animate={{
                    width: isExpanded ? '11px' : '12px',
                    height: isExpanded ? '11px' : '12px',
                  }}
                  transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
                >
                  <HiSparkles className='w-full h-full' />
                </motion.div>
                {member.experience}
              </motion.div>
            </motion.div>

            {/* Key Skills - Same count, different sizes */}
            <motion.div
              className='flex flex-wrap justify-center'
              animate={{
                gap: isExpanded ? '3px' : '6px',
              }}
              transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
            >
              {member.expertise?.slice(0, 3).map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    fontSize: isExpanded ? '9px' : '12px',
                    paddingLeft: isExpanded ? '6px' : '8px',
                    paddingRight: isExpanded ? '6px' : '8px',
                    paddingTop: isExpanded ? '2px' : '4px',
                    paddingBottom: isExpanded ? '2px' : '4px',
                  }}
                  transition={{
                    delay: 0.3 + skillIndex * 0.05,
                    duration: 0.4,
                    ease: [0.4, 0.0, 0.2, 1],
                  }}
                  className='bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg font-medium border border-blue-100 dark:border-blue-800 whitespace-nowrap'
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Stats Row - Ultra minimal spacing when expanded */}
            <motion.div
              className='flex justify-center'
              animate={{
                gap: isExpanded ? '12px' : '32px',
                marginTop: isExpanded ? '4px' : '16px',
                marginBottom: isExpanded ? '0px' : '12px',
              }}
              transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
            >
              <motion.div
                className='text-center'
                animate={{
                  fontSize: isExpanded ? '11px' : '14px',
                }}
                transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
              >
                <motion.div className='flex items-center gap-1'>
                  <motion.span
                    className='text-slate-500 dark:text-slate-400 font-medium'
                    animate={{
                      fontSize: isExpanded ? '9px' : '12px',
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
                  >
                    Projects:
                  </motion.span>
                  <motion.span
                    className='font-bold text-slate-900 dark:text-white'
                    animate={{
                      fontSize: isExpanded ? '11px' : '14px',
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
                  >
                    {member.projects}
                  </motion.span>
                </motion.div>
              </motion.div>
              <motion.div
                className='text-center'
                animate={{
                  fontSize: isExpanded ? '11px' : '14px',
                }}
                transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
              >
                <motion.div className='flex items-center gap-1'>
                  <motion.span
                    className='text-slate-500 dark:text-slate-400 font-medium'
                    animate={{
                      fontSize: isExpanded ? '9px' : '12px',
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
                  >
                    Skills:
                  </motion.span>
                  <motion.span
                    className='font-bold text-slate-900 dark:text-white'
                    animate={{
                      fontSize: isExpanded ? '11px' : '14px',
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
                  >
                    {member.expertise?.length || 0}+
                  </motion.span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced Social Links Section - Almost no margin from stats when expanded */}
          <motion.div
            animate={{
              marginTop: isExpanded ? '-2px' : '8px',
              marginBottom: isExpanded ? '4px' : '8px',
              gap: isExpanded ? '2px' : '8px',
            }}
            transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
            className='flex flex-col'
          >
            <motion.h4
              className='font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center'
              animate={{
                fontSize: isExpanded ? '9px' : '12px',
                marginBottom: isExpanded ? '0px' : '6px',
              }}
              transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
            >
              Connect
            </motion.h4>

            {/* Primary Social Links Row */}
            <motion.div
              className='flex flex-wrap justify-center'
              animate={{
                gap: isExpanded ? '6px' : '8px',
              }}
              transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
            >
              {visibleSocials.map(([platform, url], socialIndex) => {
                const config = getSocialConfig(platform);
                const IconComponent = config.icon;

                return (
                  <motion.div
                    key={platform}
                    whileHover={{
                      scale: 1.1,
                      y: -3,
                      transition: { duration: 0.2, ease: 'easeOut' },
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      width: isExpanded ? '30px' : '36px',
                      height: isExpanded ? '30px' : '36px',
                    }}
                    transition={{
                      duration: 0.4,
                      delay: socialIndex * 0.03,
                      ease: [0.4, 0.0, 0.2, 1],
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <UnstyledLink
                      href={url}
                      openNewTab
                      className={`w-full h-full rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md border ${config.bg} ${config.color} relative overflow-hidden group/social`}
                      title={`${member.name} on ${platform.charAt(0).toUpperCase() + platform.slice(1)}`}
                    >
                      {/* Subtle shine effect on hover */}
                      <div className='absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover/social:translate-x-full transition-transform duration-500' />
                      <motion.div
                        animate={{
                          width: isExpanded ? '14px' : '16px',
                          height: isExpanded ? '14px' : '16px',
                        }}
                        transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
                      >
                        <IconComponent className='w-full h-full' />
                      </motion.div>
                    </UnstyledLink>
                  </motion.div>
                );
              })}

              {/* Enhanced Expandable More Links Button */}
              {hiddenSocials.length > 0 && (
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                    transition: { duration: 0.2, ease: 'easeOut' },
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    backgroundColor: isExpanded ? '#3b82f6' : undefined,
                    color: isExpanded ? '#ffffff' : undefined,
                    width: isExpanded ? '30px' : '36px',
                    height: isExpanded ? '30px' : '36px',
                    borderColor: isExpanded ? '#3b82f6' : undefined,
                  }}
                  transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
                  className={`rounded-xl ${isExpanded ? 'bg-blue-500 text-white border-blue-500' : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-600'} border flex items-center justify-center shadow-sm hover:shadow-md cursor-pointer group/more relative overflow-hidden`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSocialExpansion();
                  }}
                  title={
                    isExpanded
                      ? 'Show less social links'
                      : `Show ${hiddenSocials.length} more social links`
                  }
                >
                  {/* Subtle shine effect */}
                  <div className='absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover/more:translate-x-full transition-transform duration-500' />
                  <motion.span
                    className='font-bold relative z-10'
                    animate={{
                      rotate: isExpanded ? 45 : 0,
                      fontSize: isExpanded ? '10px' : '12px',
                    }}
                    transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
                  >
                    {isExpanded ? '✕' : `+${hiddenSocials.length}`}
                  </motion.span>
                </motion.div>
              )}
            </motion.div>

            {/* Expandable Additional Social Links - Clean integration without border */}
            <AnimatePresence mode='wait'>
              {isExpanded && hiddenSocials.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0, scale: 0.9 }}
                  animate={{ opacity: 1, height: 'auto', scale: 1 }}
                  exit={{ opacity: 0, height: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.4, 0.0, 0.2, 1],
                    opacity: { duration: 0.25 },
                    height: { duration: 0.35 },
                    scale: { duration: 0.25 },
                  }}
                  className='overflow-hidden'
                >
                  <motion.div
                    className='flex flex-wrap justify-center gap-2'
                    style={{
                      paddingTop: isExpanded ? '8px' : '0px',
                    }}
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.06,
                          delayChildren: 0.05,
                        },
                      },
                      hidden: {
                        transition: {
                          staggerChildren: 0.03,
                          staggerDirection: -1,
                        },
                      },
                    }}
                  >
                    {hiddenSocials.map(([platform, url], _hiddenIndex) => {
                      const config = getSocialConfig(platform);
                      const IconComponent = config.icon;

                      return (
                        <motion.div
                          key={platform}
                          variants={{
                            hidden: {
                              opacity: 0,
                              scale: 0.2,
                              y: 10,
                            },
                            visible: {
                              opacity: 1,
                              scale: 1,
                              y: 0,
                              transition: {
                                type: 'spring',
                                stiffness: 300,
                                damping: 20,
                              },
                            },
                          }}
                          whileHover={{
                            scale: 1.1,
                            y: -2,
                            transition: {
                              duration: 0.2,
                              ease: 'easeOut',
                            },
                          }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <UnstyledLink
                            href={url}
                            openNewTab
                            className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md border ${config.bg} ${config.color} relative overflow-hidden group/hidden-social`}
                            title={`${member.name} on ${platform.charAt(0).toUpperCase() + platform.slice(1)}`}
                          >
                            {/* Subtle shine effect for hidden socials */}
                            <div className='absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent -translate-x-full group-hover/hidden-social:translate-x-full transition-transform duration-500' />
                            <IconComponent
                              size={12}
                              className='relative z-10'
                            />
                          </UnstyledLink>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Footer Section - Minimal padding when expanded */}
        <motion.div
          className='relative z-10'
          animate={{
            paddingTop: isExpanded ? '4px' : '12px',
            paddingBottom: isExpanded ? '6px' : '16px',
            paddingLeft: isExpanded ? '16px' : '16px',
            paddingRight: isExpanded ? '16px' : '16px',
          }}
          transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
        >
          {/* Hover Action Bar - Always show, independent of expansion */}
          <motion.div
            className={`h-1 w-full bg-gradient-to-r ${member.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full mb-2`}
            initial={false}
          />
        </motion.div>

        {/* Corner Accent with subtle pulse */}
        <motion.div
          className={`absolute top-0 right-0 bg-gradient-to-bl ${member.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-3xl`}
          animate={{
            width: isExpanded ? '60px' : '80px',
            height: isExpanded ? '60px' : '80px',
          }}
          transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
        />

        {/* Subtle expansion indicator */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className={`absolute top-2 right-2 w-2 h-2 bg-gradient-to-r ${member.gradient} rounded-full`}
            style={{
              boxShadow: `0 0 8px rgba(59, 130, 246, 0.5)`,
            }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default PersonCard;
