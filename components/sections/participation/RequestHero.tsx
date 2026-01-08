'use client';

import { motion } from 'framer-motion';

export function RequestHero() {
    return (
        <section className="relative py-20 bg-primary text-white overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary z-0" />
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/connected.png')] opacity-10 z-0" />

            <div className="container relative z-10 px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <div className="inline-block px-3 py-1 mb-4 border border-white/30 rounded-full text-white/90 text-sm font-medium">
                        Solicitud de Equipamiento
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Tecnología para potenciar tu comunidad
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
                        Si tu organización, escuela o comunidad necesita herramientas informáticas para educar, trabajar o comunicarse,
                        queremos ayudarte.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
