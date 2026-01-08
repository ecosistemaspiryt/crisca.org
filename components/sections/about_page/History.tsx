'use client';

import { motion } from 'framer-motion';

export function History() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div>
                        <h2 className="text-3xl font-bold text-primary mb-2">Nuestro Origen</h2>
                        <div className="h-1 w-20 bg-secondary rounded-full" />
                    </div>

                    <p className="text-text-light leading-relaxed">
                        CRISCA nace de la necesidad imperiosa de cerrar la brecha digital en nuestras comunidades más vulnerables,
                        pero con una mirada distinta: no solo entregar una máquina, sino entregarla con dignidad y afecto.
                    </p>
                    <p className="text-text-light leading-relaxed">
                        Inspirados por la figura de Carlo Acutis, el "ciberapóstol" de la Eucaristía, un grupo de profesionales,
                        jóvenes y sacerdotes decidimos unir fuerzas. Vimos que en muchas empresas y hogares se descartaban equipos
                        que, con un poco de amor y conocimiento técnico, podían cambiar la vida de un estudiante o una familia.
                    </p>
                    <p className="text-text-light leading-relaxed font-medium">
                        Así surgió el concepto de "Reciclaje Afectivo-Tecnológico": cada tornillo ajustado es una oración,
                        cada equipo entregado es un acto de amor.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-xl"
                >
                    {/* Placeholder for history image */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100">
                        <span className="text-lg">Foto Histórica / Fundacional</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
