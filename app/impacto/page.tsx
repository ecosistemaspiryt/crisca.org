import { ImpactHero } from '@/components/sections/impact_page/ImpactHero';
import { ImpactDashboard } from '@/components/sections/impact_page/ImpactDashboard';
import { ImpactMap } from '@/components/sections/impact_page/ImpactMap';
import { ImpactStories } from '@/components/sections/impact_page/ImpactStories';
import { ImpactReports } from '@/components/sections/impact_page/ImpactReports';

export default function ImpactPage() {
    return (
        <main className="min-h-screen">
            <ImpactHero />
            <ImpactDashboard />
            <ImpactMap />
            <ImpactStories />
            <ImpactReports />
        </main>
    );
}
