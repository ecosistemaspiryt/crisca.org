'use client';

import { Card, CardContent } from '@/components/ui/Card';
import { Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Testimonials() {
    const { t } = useTranslation('testimonials');

    // Hardcoded indices to map to JSON array structure safely
    const testimonialIndices = [0, 1, 2];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('title')}</h2>
                    <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonialIndices.map((index) => (
                        <Card key={index} className="border-none shadow-md bg-white">
                            <CardContent className="pt-6 relative">
                                <Quote className="absolute top-4 left-4 w-8 h-8 text-secondary/20 rotate-180" />
                                <div className="mb-6 pt-6 text-text-light italic text-lg leading-relaxed">
                                    "{t(`items.${index}.content`)}"
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-400">
                                        {/* Fallback to first letter of translated author name */}
                                        {t(`items.${index}.author`)[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary">{t(`items.${index}.author`)}</h4>
                                        <p className="text-sm text-text-light">{t(`items.${index}.role`)}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
