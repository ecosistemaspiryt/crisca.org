import { ChapelHero } from '@/components/sections/participation/ChapelHero';
import { ChapelInfo } from '@/components/sections/participation/ChapelInfo';
import { ChapelForm } from '@/components/sections/participation/ChapelForm';

export default function ChapelPage() {
    return (
        <main className="min-h-screen">
            <ChapelHero />
            <ChapelInfo />
            <ChapelForm />
        </main>
    );
}
