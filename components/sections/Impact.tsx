'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Counter } from '@/components/shared/Counter';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Impact() {
    const { t } = useTranslation('impact');

    const stats = [
        { key: 'recovered', value: 200, suffix: '' },
        { key: 'beneficiaries', value: 500, suffix: '' },
        { key: 'chapels', value: 10, suffix: '' },
        { key: 'volunteers', value: 30, suffix: '' },
        { key: 'waste', value: 2, suffix: 'T' },
    ];

    return (
        <section className="py-20 bg-primary text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center divide-white/10 md:divide-x-0">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="text-4xl md:text-5xl font-bold font-poppins mb-2 text-secondary">
                                <Counter end={stat.value} suffix={stat.suffix} />
                            </div>
                            <p className="text-white/80 text-sm md:text-base font-medium max-w-[120px]">
                                {t(`stats.${stat.key}.label`)}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Button variant="outline" className="border-white text-primary bg-white hover:bg-white/90" asChild>
                        <Link href="/impacto" className="flex items-center gap-2">
                            {t('cta')}
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
