'use client';

import { Package, Wrench, Gift, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

export function DetailedProcess() {
    const steps = [
        {
            icon: Package,
            title: "1. Recepción Simbólica",
            description: "Las donaciones no son 'basura', son ofrendas. Recibimos cada equipo en nuestras Capillas Recicladoras o puntos de confianza. Registramos quién dona y con qué intención, iniciando la cadena de transparencia.",
            details: ["Registro de donante", "Inspección visual inicial", "Etiquetado único"]
        },
        {
            icon: Wrench,
            title: "2. Reciclaje Devocional",
            description: "Nuestros voluntarios técnicos realizan un diagnóstico profundo. Si el equipo es recuperable, se limpia física y lógicamente. Se instala software libre educativo y herramientas de productividad.",
            details: ["Borrado seguro de datos", "Reparación de hardware", "Limpieza profunda", "Instalación de Linux"]
        },
        {
            icon: Gift,
            title: "3. Redistribución Litúrgica",
            description: "La entrega es una celebración. No damos 'cosas', damos oportunidades. Cada equipo se entrega en comodato a instituciones o familias que asumen el compromiso de cuidarlo y usarlo para bien.",
            details: ["Selección de beneficiarios", "Firma de compromiso", "Capacitación básica", "Entrega presencial"]
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-4">El Camino del Milagro</h2>
                    <p className="text-text-light max-w-2xl mx-auto">
                        Transformamos la frialdad del metal en calidez humana a través de un proceso meticuloso y transparente.
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200 -z-10" />

                    <div className="grid md:grid-cols-3 gap-12">
                        {steps.map((step, index) => (
                            <div key={index} className="relative bg-white pt-8">
                                <div className="w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center shadow-lg mb-6 relative z-10">
                                    <step.icon className="w-8 h-8" />
                                </div>

                                <div className="text-center space-y-4">
                                    <h3 className="text-xl font-bold text-primary">{step.title}</h3>
                                    <p className="text-text-light text-sm leading-relaxed min-h-[80px]">
                                        {step.description}
                                    </p>

                                    <ul className="text-left bg-gray-50 p-4 rounded-lg space-y-2 text-sm text-text-light border border-gray-100">
                                        {step.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                <ArrowRight className="w-3 h-3 text-secondary shrink-0" />
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
