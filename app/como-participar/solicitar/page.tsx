import { RequestHero } from '@/components/sections/participation/RequestHero';
import { RequestCriteria } from '@/components/sections/participation/RequestCriteria';
import { RequestForm } from '@/components/sections/participation/RequestForm';

export default function RequestPage() {
    return (
        <main className="min-h-screen">
            <RequestHero />
            <RequestCriteria />
            <RequestForm />
        </main>
    );
}
