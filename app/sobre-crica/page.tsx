import { AboutHero } from '@/components/sections/about_page/AboutHero';
import { History } from '@/components/sections/about_page/History';
import { Principles } from '@/components/sections/about_page/Principles';
import { DetailedProcess } from '@/components/sections/about_page/DetailedProcess';
import { TeamAlliances } from '@/components/sections/about_page/TeamAlliances';
import { AcutisFull } from '@/components/sections/about_page/AcutisFull';

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <AboutHero />
            <History />
            <Principles />
            <AcutisFull />
            <DetailedProcess />
            <TeamAlliances />
        </main>
    );
}
