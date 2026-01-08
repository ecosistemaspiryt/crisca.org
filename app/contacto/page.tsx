import { ContactHero } from '@/components/sections/contact_page/ContactHero';
import { ContactInfo } from '@/components/sections/contact_page/ContactInfo';
import { ContactForm } from '@/components/sections/contact_page/ContactForm';
import { SocialLinks } from '@/components/sections/contact_page/SocialLinks';

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <ContactHero />
            <ContactInfo />
            <ContactForm />
            <SocialLinks />
        </main>
    );
}
