'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

export function Inspiration() {
    const { t } = useTranslation('inspiration');

    return (
        <section className="py-20 bg-gradient-to-br from-white to-blue-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="flex-1 space-y-6">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-2">
                            {t('badge')}
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                            {t('title')}
                        </h2>
                        <div className="space-y-4 text-text-light text-lg">
                            <p>
                                <Trans i18nKey="content.p1" t={t} components={{ bold: <strong /> }} />
                            </p>
                            <p>
                                {t('content.p2')}
                            </p>
                            <p className="italic text-primary/80">
                                {t('content.quote')}
                            </p>
                        </div>
                        <div className="pt-4">
                            <Button className="gap-2" asChild>
                                <Link href="/sobre-crica">
                                    {t('cta')}
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full max-w-md lg:max-w-full"
                    >
                        {/* Placeholder for Carlo Acutis Image */}
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-gray-200 relative group">
                            {/* Simulated Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Carlo_Acutis_2.jpg/800px-Carlo_Acutis_2.jpg")' }}
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
