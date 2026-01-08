'use client';

import { motion } from 'framer-motion';
import { Counter } from '@/components/shared/Counter'; // Assuming we have this or I'll use simple text for now if not available, but I recall creating it. 
// Actually I see Counter.tsx in the file list from previous context: c:/MisProyectos/crica-web/components/shared/Counter.tsx

export function ImpactHero() {
    return (
        <section className="relative py-24 bg-primary text-white overflow-hidden">
            {/* Background Network Animation */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-10 left-10 w-32 h-32 bg-secondary rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent rounded-full blur-3xl" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                        La transparencia construye confianza
                    </h1>
                    <p className="text-xl text-white/80 font-light mb-12 max-w-2xl mx-auto">
                        Cada equipo donado es un recurso que se respeta, se recupera y se entrega.
                        Acá podés ver el recorrido de tu solidaridad en números reales.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                                256
                            </div>
                            <div className="text-sm uppercase tracking-wider opacity-70">Equipos Recuperados</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                                +600
                            </div>
                            <div className="text-sm uppercase tracking-wider opacity-70">Personas Beneficiadas</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                                12
                            </div>
                            <div className="text-sm uppercase tracking-wider opacity-70">Capillas Activas</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                                3.5
                            </div>
                            <div className="text-sm uppercase tracking-wider opacity-70">Toneladas Evitadas</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
