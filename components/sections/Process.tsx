'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Church, Wrench, Gift, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function Process() {
    const { t } = useTranslation('process');

    const steps = [
        {
            order: 1,
            icon: Church,
            title: t('steps.reception.title'),
            description: t('steps.reception.description')
        },
        {
            order: 2,
            icon: Wrench,
            title: t('steps.recycling.title'),
            description: t('steps.recycling.description')
        },
        {
            order: 3,
            icon: Gift,
            title: t('steps.distribution.title'),
            description: t('steps.distribution.description')
        }
    ];

    return (
        <section id="process-section" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('title')}</h2>
                    <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.3, duration: 0.5 }}
                                className="bg-gray-50 p-4" // Wrapper to hide line behind
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-full bg-white border-4 border-secondary text-secondary flex items-center justify-center text-2xl font-bold mb-6 shadow-md">
                                        {step.order}
                                    </div>
                                    <div className="mb-4 text-primary">
                                        <step.icon className="w-12 h-12" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-text">{step.title}</h3>
                                    <p className="text-text-light">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-16">
                    <Button variant="outline" size="lg" className="group" asChild>
                        <Link href="/sobre-crica" className="flex items-center gap-2">
                            {t('cta')}
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
