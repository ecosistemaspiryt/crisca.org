'use client';

import { motion } from 'framer-motion';

export function VolunteerHero() {
    return (
        <section className="relative py-20 bg-primary text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10" />

            <div className="container relative z-10 px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <div className="inline-block px-3 py-1 mb-4 bg-secondary text-primary font-bold rounded-full text-sm">
                        Voluntariado Técnico
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Tus manos pueden multiplicar milagros
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-2xl">
                        No importa si sos experto en hardware o si recién estás aprendiendo. En CRISCA, cada hora de tu tiempo
                        se convierte en oportunidades para quienes más lo necesitan.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
