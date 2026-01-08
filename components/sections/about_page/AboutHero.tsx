'use client';

import { motion } from 'framer-motion';

export function AboutHero() {
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
                        Nuestra Historia y Misión
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        Reciclar Tecnología, Reconstruir Vínculos
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
                        CRISCA no es solo un centro de reciclaje, es una comunidad de fe y acción inspirada en el Beato Carlo Acutis.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
