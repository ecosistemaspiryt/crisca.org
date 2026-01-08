'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const points = [
    {
        name: 'Parroquia Nuestra Señora de la Esperanza',
        address: 'Av. Santa Fe 1234, Palermo, CABA',
        hours: 'Lun a Vie 10-18hs',
        mapUrl: 'https://maps.google.com'
    },
    {
        name: 'Colegio San José Obrero',
        address: 'Calle 14 esq. 5, San Isidro, GBA Norte',
        hours: 'Sabados 9-13hs',
        mapUrl: 'https://maps.google.com'
    }
];

export function DropOffPoints() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">Puntos de Recepción</h2>
                    <p className="text-text-light">Acercate a cualquiera de nuestras Capillas Recicladoras.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {points.map((point, index) => (
                        <div key={index} className="border rounded-lg overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow">
                            {/* Map Placeholder */}
                            <div className="bg-gray-200 w-full md:w-1/3 min-h-[150px] flex items-center justify-center text-gray-400 text-sm">
                                Mapa
                            </div>

                            <div className="p-6 flex-1">
                                <h3 className="font-bold text-lg text-primary mb-2">{point.name}</h3>
                                <div className="space-y-2 text-sm text-text-light mb-4">
                                    <div className="flex items-start gap-2">
                                        <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                                        <span>{point.address}</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <Clock className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                                        <span>{point.hours}</span>
                                    </div>
                                </div>
                                <Button variant="outline" size="sm" asChild>
                                    <a href={point.mapUrl} target="_blank" rel="noopener noreferrer">Ver en Mapa</a>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
