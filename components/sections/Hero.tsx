'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Hero() {
    const { t } = useTranslation('home');

    const scrollToProcess = () => {
        const processSection = document.getElementById('process-section');
        if (processSection) {
            processSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image Placeholder - In real usage, use next/image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=2070&auto=format&fit=crop")', // Hardware/Motherboard close-up
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 text-center text-white space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-4"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                        {t('hero.title')}
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-2xl text-gray-200 font-light leading-relaxed">
                        {t('hero.subtitle')}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6" asChild>
                        <Link href="/como-participar/donar">{t('hero.donate')}</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 border-white text-primary hover:bg-white hover:text-primary bg-white" asChild>
                        {/* Note: variant outline usually has dark text, hacked here for hero contrast or use a new variant */}
                        <Link href="/como-participar/solicitar">{t('hero.request')}</Link>
                    </Button>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                onClick={scrollToProcess}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white flex flex-col items-center gap-2 text-sm"
            >
                <span>{t('hero.learn_more')}</span>
                <ArrowDown className="w-5 h-5 animate-bounce" />
            </motion.button>
        </section>
    );
}
