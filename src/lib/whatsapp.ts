import type { ContactFormData, Service } from '@/types';
import { CompanyInfo } from '@/types/constants';

// Base interface for all WhatsApp message types
interface BaseMessageData {
  name: string;
  email: string;
  company: string;
}

// Quote-specific message data
export interface QuoteMessageData extends BaseMessageData {
  budget: string;
  timeline: string;
  requirements: string;
  priority: 'standard' | 'urgent';
  service: Service;
}

// Contact-specific message data
export interface ContactMessageData extends BaseMessageData {
  message: string;
}

// Utility constants
const BUDGET_RANGES = [
  { label: '$5k - $10k', value: '5000-10000' },
  { label: '$10k - $25k', value: '10000-25000' },
  { label: '$25k - $50k', value: '25000-50000' },
  { label: '$50k+', value: '50000+' },
  { label: 'Custom', value: 'custom' },
] as const;

const TIMEFRAMES = [
  { label: 'ASAP (Rush)', value: 'rush' },
  { label: '1-2 months', value: '1-2' },
  { label: '3-6 months', value: '3-6' },
  { label: '6+ months', value: '6+' },
  { label: 'Flexible', value: 'flexible' },
] as const;

/**
 * WhatsApp Service - Centralized service for all WhatsApp messaging functionality
 */
export class WhatsAppService {
  private static readonly PHONE_NUMBER = CompanyInfo.whatsapp;

  /**
   * Validate and format WhatsApp phone number
   */
  private static validatePhoneNumber(phoneNumber: string): string {
    if (!phoneNumber) {
      throw new Error('WhatsApp phone number is not configured');
    }

    // Remove all non-digit characters for validation
    const cleanNumber = phoneNumber.replace(/\D/g, '');

    // Check if number is properly formatted (should have country code)
    if (cleanNumber.length < 10 || cleanNumber.length > 15) {
      throw new Error('WhatsApp phone number is not properly formatted');
    }

    // For UAE numbers, ensure proper format
    if (phoneNumber.startsWith('+971') && cleanNumber.length !== 12) {
      throw new Error(
        'UAE WhatsApp number should be 12 digits with country code',
      );
    }

    return cleanNumber;
  }

  /**
   * Get validated phone number for WhatsApp URLs
   */
  private static getValidatedPhoneNumber(): string {
    return this.validatePhoneNumber(this.PHONE_NUMBER);
  }

  /**
   * Generate WhatsApp URL with pre-filled message
   */
  private static generateURL(message: string): string {
    const validatedNumber = this.getValidatedPhoneNumber();
    return `https://wa.me/${validatedNumber}?text=${encodeURIComponent(message)}`;
  }

  /**
   * Open WhatsApp with pre-filled message in new tab
   */
  private static openWhatsApp(message: string): void {
    window.open(this.generateURL(message), '_blank');
  }

  /**
   * Format quote data into WhatsApp message
   */
  private static formatQuoteMessage(data: QuoteMessageData): string {
    const budget =
      BUDGET_RANGES.find((b) => b.value === data.budget)?.label ||
      'Not specified';
    const timeline =
      TIMEFRAMES.find((t) => t.value === data.timeline)?.label ||
      'Not specified';

    return `Hi RapidBizz! I'm interested in ${data.service.title}.

PROJECT DETAILS:
• Budget: ${budget}
• Timeline: ${timeline}  
• Priority: ${data.priority}

CONTACT INFO:
• Name: ${data.name}
• Email: ${data.email}
• Company: ${data.company || 'Individual'}

REQUIREMENTS:
${data.requirements || 'To be discussed'}

Starting price: ${data.service.startingPrice}
Expected delivery: ${data.service.deliveryTime}

Let's discuss the project details!`;
  }

  /**
   * Format contact form data into WhatsApp message
   */
  private static formatContactMessage(data: ContactMessageData): string {
    return `Hi RapidBizz! I'd like to get in touch with you.

CONTACT INFORMATION:
• Name: ${data.name}
• Email: ${data.email}
• Company: ${data.company || 'Individual'}

MESSAGE:
${data.message}

I'm looking forward to discussing how we can work together!`;
  }

  /**
   * Send quote request via WhatsApp
   */
  public static sendQuote(
    formData: Omit<QuoteMessageData, 'service'>,
    service: Service,
  ): void {
    const quoteData: QuoteMessageData = { ...formData, service };
    const message = this.formatQuoteMessage(quoteData);
    this.openWhatsApp(message);
  }

  /**
   * Send contact message via WhatsApp
   */
  public static sendContact(formData: ContactFormData): void {
    const contactData: ContactMessageData = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      message: formData.message,
    };
    const message = this.formatContactMessage(contactData);
    this.openWhatsApp(message);
  }

  /**
   * Validate required fields for quote
   */
  public static validateQuoteData(
    formData: Omit<QuoteMessageData, 'service'>,
    service?: Service | null,
  ): { isValid: boolean; error?: string } {
    if (!formData.name || !formData.email) {
      return { isValid: false, error: 'Name and email are required fields.' };
    }

    if (!service) {
      return { isValid: false, error: 'Service selection is required.' };
    }

    return { isValid: true };
  }

  /**
   * Validate required fields for contact
   */
  public static validateContactData(formData: ContactFormData): {
    isValid: boolean;
    error?: string;
  } {
    if (!formData.name || !formData.email || !formData.message) {
      return {
        isValid: false,
        error:
          'Please fill in all required fields before sending via WhatsApp.',
      };
    }

    return { isValid: true };
  }

  /**
   * Get company WhatsApp number (for display purposes)
   */
  public static getPhoneNumber(): string {
    try {
      this.getValidatedPhoneNumber(); // Validate but return original format for display
      return this.PHONE_NUMBER;
    } catch (error) {
      console.error('WhatsApp phone number validation failed:', error);
      return ''; // Return empty string as fallback for display
    }
  }

  /**
   * Generate simple WhatsApp link (without pre-filled message)
   */
  public static getSimpleURL(): string {
    const validatedNumber = this.getValidatedPhoneNumber();
    return `https://wa.me/${validatedNumber}`;
  }
}

// Export utility functions for backwards compatibility
export const {
  sendQuote,
  sendContact,
  validateQuoteData,
  validateContactData,
} = WhatsAppService;
