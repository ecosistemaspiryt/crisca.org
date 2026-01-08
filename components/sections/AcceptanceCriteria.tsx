'use client';

import { Check, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const acceptedItems = [
    'Computadoras de escritorio (cualquier estado)',
    'Notebooks y Netbooks',
    'Monitores (LCD/LED)',
    'Teclados y Mouses',
    'Cables (Power, VGA, HDMI)',
    'Componentes (RAM, Discos, Fuentes)'
];

const rejectedItems = [
    'Equipos rotos sin arreglo (pantallas estalladas)',
    'Monitores de tubo (CRT)',
    'Impresoras y Escáneres',
    'Pilas y Baterías sueltas',
    'Electrodomésticos'
];

export function AcceptanceCriteria() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">¿Qué recibimos?</h2>
                    <p className="text-text-light">Ayudanos a gestionar eficientemente nuestras donaciones.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Accepted */}
                    <Card className="border-green-100 bg-green-50/50">
                        <CardHeader>
                            <CardTitle className="text-green-700 flex items-center gap-2">
                                <div className="bg-green-100 p-2 rounded-full">
                                    <Check className="w-5 h-5" />
                                </div>
                                Sí Recibimos
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {acceptedItems.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-text">
                                        <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Rejected */}
                    <Card className="border-red-100 bg-red-50/50">
                        <CardHeader>
                            <CardTitle className="text-red-700 flex items-center gap-2">
                                <div className="bg-red-100 p-2 rounded-full">
                                    <X className="w-5 h-5" />
                                </div>
                                No Recibimos
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {rejectedItems.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-text">
                                        <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-6 text-sm text-red-600/80 italic">
                                * Por razones de espacio y gestión de residuos, no podemos aceptar estos items por el momento.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
