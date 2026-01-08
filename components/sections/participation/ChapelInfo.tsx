'use client';

import { CheckCircle2, Warehouse, MapPin, HeartHandshake } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/Card";

export function ChapelInfo() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">

                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <div>
                        <h2 className="text-3xl font-bold text-primary mb-6">¿Qué implica ser una Capilla?</h2>
                        <div className="space-y-4">
                            <p className="text-text-light leading-relaxed">
                                No hace falta ser una iglesia para ser una "Capilla Recicladora". Buscamos clubes de barrio,
                                escuelas, bibliotecas populares o cualquier organización con arraigo territorial que quiera
                                ser puente.
                            </p>
                            <p className="text-text-light leading-relaxed">
                                Tu rol principal será recibir los equipos de los vecinos, guardarlos temporalmente en un lugar seguro
                                y coordinar con nosotros para su retiro o reparación in situ.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        <Card className="bg-gray-50 border-none shadow-sm">
                            <CardContent className="flex items-start gap-4 p-6">
                                <Warehouse className="w-6 h-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-gray-800">Espacio de Acopio</h3>
                                    <p className="text-sm text-text-light mt-1">Un lugar seco y seguro para guardar equipos transitoriamente (no necesitás un galpón, con un armario o rincón basta).</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-gray-50 border-none shadow-sm">
                            <CardContent className="flex items-start gap-4 p-6">
                                <HeartHandshake className="w-6 h-6 text-secondary shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-gray-800">Referente Responsable</h3>
                                    <p className="text-sm text-text-light mt-1">Una persona encargada de recibir, registrar y cuidar las donaciones.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-center text-primary mb-10">Beneficios para tu Comunidad</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            "Prioridad para recibir equipos recuperados",
                            "Capacitación técnica gratuita para miembros",
                            "Visibilidad en la red CRISCA",
                            "Kit de señalética y difusión"
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                                <span className="text-sm font-medium text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
