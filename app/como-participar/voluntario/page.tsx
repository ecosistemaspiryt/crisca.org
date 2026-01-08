import { VolunteerHero } from '@/components/sections/participation/VolunteerHero';
import { VolunteerInfo } from '@/components/sections/participation/VolunteerInfo';
import { VolunteerForm } from '@/components/sections/participation/VolunteerForm';

export default function VolunteerPage() {
    return (
        <main className="min-h-screen">
            <VolunteerHero />
            <VolunteerInfo />
            <VolunteerForm />
        </main>
    );
}
