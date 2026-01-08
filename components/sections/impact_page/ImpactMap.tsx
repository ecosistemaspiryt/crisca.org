'use client';

import { MapPin } from 'lucide-react';

export function ImpactMap() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">Alcance Territorial</h2>
                    <p className="text-text-light">
                        Nuestras Capillas Recicladoras y puntos de entrega cubren gran parte del AMBA.
                    </p>
                </div>

                <div className="relative w-full h-[400px] md:h-[500px] bg-blue-50 rounded-2xl overflow-hidden border border-blue-100 flex items-center justify-center group">
                    {/* Abstract Map Representation */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Map_of_Buenos_Aires_Metro_area.svg/1200px-Map_of_Buenos_Aires_Metro_area.svg.png')] bg-cover bg-center mix-blend-multiply transition-transform duration-700 group-hover:scale-105" />

                    {/* Pins */}
                    <div className="relative z-10 w-full h-full max-w-2xl mx-auto">
                        {/* Example Pin 1 - CABA */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-12 -translate-y-12 group/pin">
                            <MapPin className="w-8 h-8 text-primary drop-shadow-lg animate-bounce" />
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white px-3 py-1 rounded shadow-md text-xs font-bold whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity">
                                Sede Central Palermo
                            </div>
                        </div>
                        {/* Example Pin 2 - San Isidro */}
                        <div className="absolute top-1/3 left-1/3 group/pin">
                            <MapPin className="w-8 h-8 text-secondary drop-shadow-lg animate-bounce [animation-delay:0.2s]" />
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white px-3 py-1 rounded shadow-md text-xs font-bold whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity">
                                Capilla San Isidro
                            </div>
                        </div>
                        {/* Example Pin 3 - Lanus */}
                        <div className="absolute bottom-1/3 right-1/3 group/pin">
                            <MapPin className="w-8 h-8 text-secondary drop-shadow-lg animate-bounce [animation-delay:0.5s]" />
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white px-3 py-1 rounded shadow-md text-xs font-bold whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity">
                                Capilla Lanús
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow text-sm">
                        <div className="flex items-center gap-2 mb-1">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span className="font-bold">Sede Central</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-secondary" />
                            <span className="font-bold">Capillas Activas</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
