'use client';

import { ClipboardList, Truck, Wrench, HeartHandshake } from 'lucide-react';

const steps = [
    {
        icon: ClipboardList,
        title: 'Completá el Formulario',
        description: 'Decinos qué equipos tenés para donar y en qué estado se encuentran.'
    },
    {
        icon: Truck,
        title: 'Acercá tu Donación',
        description: 'Llevá los equipos a la Capilla Recicladora más cercana o coordinamos el retiro.'
    },
    {
        icon: Wrench,
        title: 'Reparamos y Reciclamos',
        description: 'Nuestros voluntarios técnicos ponen a punto el equipo para su nueva vida.'
    },
    {
        icon: HeartHandshake,
        title: 'Nueva Vida',
        description: 'El equipo se entrega a una familia o institución que lo necesita.'
    }
];

export function DonationProcess() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">¿Cómo es el proceso?</h2>
                    <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center relative">
                            <div className="w-16 h-16 rounded-full bg-white border-4 border-secondary/20 text-secondary flex items-center justify-center mb-4 shadow-sm z-10">
                                <step.icon className="w-8 h-8" />
                            </div>
                            {/* Connector line for desktop */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-secondary/20 -z-0" />
                            )}

                            <h3 className="font-bold text-lg mb-2 text-primary">{step.title}</h3>
                            <p className="text-text-light text-sm">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
