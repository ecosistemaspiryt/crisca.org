'use client';

import { Monitor, Wrench, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function About() {
    const { t } = useTranslation('about');

    const items = [
        {
            icon: Monitor,
            title: t('cards.identity.title'),
            description: t('cards.identity.description')
        },
        {
            icon: Wrench,
            title: t('cards.tenderness.title'),
            description: t('cards.tenderness.description')
        },
        {
            icon: Heart,
            title: t('cards.faith.title'),
            description: t('cards.faith.description')
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('title')}</h2>
                    <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="group"
                        >
                            <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                <item.icon className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-text">{item.title}</h3>
                            <p className="text-text-light leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
