'use client';

import { motion } from 'framer-motion';

export function ContactHero() {
    return (
        <section className="relative py-20 bg-primary text-white">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

            <div className="container relative z-10 px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto"
                >
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Hablemos de cómo cambiar el mundo juntos
                    </h1>
                    <p className="text-xl text-white/90 font-light">
                        ¿Tenés dudas, propuestas o simplemente querés saludar? Estamos acá para escucharte.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
