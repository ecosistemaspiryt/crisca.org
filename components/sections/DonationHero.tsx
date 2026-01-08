'use client';

import { motion } from 'framer-motion';

export function DonationHero() {
    return (
        <section className="relative py-20 bg-primary text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0" />

            <div className="container relative z-10 px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto space-y-6"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary font-semibold text-sm">
                        Donar Tecnología
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        Tu tecnología en desuso puede cambiar vidas
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
                        No es basura, es oportunidad. Doná tus equipos y ayudanos a construir puentes digitales.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
