import { ContactForm } from '@/components/contact/ContactForm';
import { ContactOptions } from '@/components/contact/ContactOptions';
import { FAQSection } from '@/components/contact/FAQSection';

export default function ContactPage() {
  return (
    <div>
      <ContactOptions />
      <ContactForm />
      <FAQSection />
    </div>
  );
}
