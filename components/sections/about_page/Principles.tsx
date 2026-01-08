'use client';

import { Heart, Wrench, Cross } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const principles = [
    {
        icon: Wrench,
        title: "Tecnología con Identidad",
        description: "No entregamos 'basura' reciclada. Entregamos herramientas dignas. Utilizamos software libre para garantizar soberanía y libertad, y aseguramos que cada equipo funcione perfectamente para su propósito."
    },
    {
        icon: Heart,
        title: "Ternura Aplicada",
        description: "La 'ternura' no es un sentimiento débil, es la fuerza que nos impulsa a tratar cada donación y cada beneficiario con máximo respeto. Limpiamos, reparamos y preparamos cada equipo como si fuera para Jesús."
    },
    {
        icon: Cross,
        title: "Fe y Razón",
        description: "Creemos que la ciencia y la fe caminan juntas. Nuestra labor técnica es una extensión de nuestra fe. En el taller, la oración se mezcla con el código y el hardware."
    }
];

export function Principles() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-4">Nuestros Principios</h2>
                    <p className="text-text-light max-w-2xl mx-auto">
                        Estos son los pilares fundamentales que sostienen cada acción que realizamos en CRISCA.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {principles.map((p, i) => (
                        <Card key={i} className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                            <CardHeader className="text-center pb-2">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                    <p.icon className="w-8 h-8" />
                                </div>
                                <CardTitle className="text-xl font-bold text-primary">{p.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-text-light leading-relaxed">
                                    {p.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
