'use client';

import { motion } from 'framer-motion';

export function ChapelHero() {
    return (
        <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
            {/* Abstract Background - maybe representing connection points */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 opacity-90" />

            <div className="container relative z-10 px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    <div className="inline-block px-3 py-1 mb-4 border border-secondary/50 rounded-full text-secondary text-sm font-medium">
                        Red de Esperanza
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Convertí tu espacio en una Capilla Recicladora
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
                        Las Capillas Recicladoras son el corazón territorial de CRISCA. Son lugares seguros donde la comunidad
                        puede acercar sus donaciones y donde la tecnología comienza su camino de transformación.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
