import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { DonationHero } from '@/components/sections/DonationHero';
import { AcceptanceCriteria } from '@/components/sections/AcceptanceCriteria';
import { DonationProcess } from '@/components/sections/DonationProcess';
import { DonationForm } from '@/components/sections/DonationForm';
import { DropOffPoints } from '@/components/sections/DropOffPoints';
import { DonationFAQ } from '@/components/sections/DonationFAQ';

export default function DonationPage() {
    return (
        <div className="flex min-h-screen flex-col font-sans">
            <Header />

            <main className="flex-1 pt-16 md:pt-20"> {/* Header space */}
                <DonationHero />
                <AcceptanceCriteria />
                <DonationProcess />
                <DonationForm />
                <DropOffPoints />
                <DonationFAQ />
            </main>

            <Footer />
        </div>
    );
}
