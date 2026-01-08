import { ParticipationHero } from '@/components/sections/participation/ParticipationHero';
import { ParticipationOptions } from '@/components/sections/participation/ParticipationOptions';

export default function ParticipationPage() {
    return (
        <main className="min-h-screen font-sans">
            <ParticipationHero />
            <ParticipationOptions />
        </main>
    );
}
