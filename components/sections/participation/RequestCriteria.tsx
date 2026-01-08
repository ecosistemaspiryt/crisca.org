'use client';

import { Users, School, Home, CheckCircle2, AlertCircle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/Card";

export function RequestCriteria() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">

                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">¿Quiénes pueden solicitar?</h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: School, title: "Escuelas y Bibliotecas", desc: "Instituciones educativas que necesiten equipar aulas o espacios de estudio." },
                            { icon: Home, title: "Centros Comunitarios", desc: "Comedores, clubes y ONGs que brinden servicios a su barrio." },
                            { icon: Users, title: "Familias / Particulares", desc: "Casos particulares con necesidad comprobable (sujeto a disponibilidad)." }
                        ].map((item, i) => (
                            <Card key={i} className="text-center border-none shadow-sm bg-gray-50 hover:bg-gray-100 transition-colors">
                                <CardContent className="pt-8 pb-8">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                                    <p className="text-sm text-text-light">{item.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
                        <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-2">
                            <AlertCircle className="w-5 h-5" />
                            Criterios de Prioridad
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Proyectos educativos o de capacitación laboral.",
                                "Instituciones con acceso a internet garantizado.",
                                "Comunidades con responsable designado para el cuidado.",
                                "Capacidad de retirar los equipos si es necesario."
                            ].map((c, i) => (
                                <li key={i} className="flex gap-3 text-sm text-gray-700">
                                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                                    {c}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-primary">¿Qué incluye el Kit?</h3>
                        <p className="text-text-light">
                            Entregamos computadoras de escritorio (CPU) completas y listas para usar. Cada kit suele incluir:
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 bg-gray-50 rounded border border-gray-100 text-sm font-medium">🖥️ Monitor LCD</div>
                            <div className="p-3 bg-gray-50 rounded border border-gray-100 text-sm font-medium">⌨️ Teclado y Mouse</div>
                            <div className="p-3 bg-gray-50 rounded border border-gray-100 text-sm font-medium">🔌 Cables de poder y video</div>
                            <div className="p-3 bg-gray-50 rounded border border-gray-100 text-sm font-medium">🐧 Sistema Operativo Linux</div>
                        </div>
                        <p className="text-xs text-text-light italic">
                            * No entregamos impresoras ni conectividad a internet.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
