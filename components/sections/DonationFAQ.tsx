'use client';

// Accordion imports removed as we implemented a custom simple solution
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
    {
        question: "¿Tienen que andar las computadoras?",
        answer: "No necesariamente. Nuestro equipo técnico evalúa cada caso. Si es reparable, lo arreglamos. Si no, recuperamos los componentes útiles y desechamos el resto responsablemente."
    },
    {
        question: "¿Pasan a retirar a domicilio?",
        answer: "Hacemos retiros programados para donaciones grandes (más de 3 equipos) o empresas. Para donaciones particulares, preferimos que las acerquen a los Puntos de Recepción para optimizar recursos."
    },
    {
        question: "¿Qué hacen con los datos del disco rígido?",
        answer: "Realizamos un borrado seguro de datos (wiping) de nivel militar en todos los discos que recibimos. Tu privacidad es nuestra prioridad."
    },
    {
        question: "¿Puedo donar dinero?",
        answer: "¡Sí! El dinero nos ayuda a comprar repuestos (discos SSD, fuentes) que no se consiguen donados. Escribinos a contacto@crica.org."
    }
];

export function DonationFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20 bg-gray-50">
            <div className="container max-w-3xl mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">Preguntas Frecuentes</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-lg border overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left font-medium text-text hover:bg-gray-50 transition-colors"
                            >
                                {faq.question}
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-gray-400" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="p-6 pt-0 text-text-light border-t bg-gray-50/50">
                                    <p className="mt-4">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
