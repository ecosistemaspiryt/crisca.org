'use client';

import { motion } from 'framer-motion';

export function ParticipationHero() {
    return (
        <section className="relative py-24 bg-primary text-white overflow-hidden">
            <div className="absolute inset-0 bg-black/20 z-0" />
            <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-circuit.png')] z-0 mix-blend-overlay" />

            <div className="container relative z-10 px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Hay muchas formas de ser parte del milagro
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
                        Ya sea donando, reparando, evangelizando o recibiendo, tu rol es fundamental en esta red de esperanza.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
