'use client';

import { Wrench, BookOpen, Clock, Users } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/Card";

export function VolunteerInfo() {
    const roles = [
        {
            icon: Wrench,
            title: "Reparación y Diagnóstico",
            description: "Revisar equipos donados, identificar fallas, limpiar componentes y realizar reparaciones físicas."
        },
        {
            icon: BookOpen,
            title: "Instalación de Software",
            description: "Instalar sistemas operativos ligeros (Linux), software educativo y herramientas de ofimática."
        },
        {
            icon: Users,
            title: "Mentores y Capacitadores",
            description: "Enseñar a otros voluntarios o dar talleres básicos a los beneficiarios de los equipos."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Roles */}
                    <div>
                        <h2 className="text-3xl font-bold text-primary mb-8">¿Qué hace un Voluntario?</h2>
                        <div className="space-y-6">
                            {roles.map((role, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary shrink-0">
                                        <role.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800">{role.title}</h3>
                                        <p className="text-text-light leading-relaxed">{role.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Requisitos y Capacitación */}
                    <div className="bg-gray-50 p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold text-primary mb-6">Lo que ofrecemos y pedimos</h3>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <Clock className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-bold text-gray-800">Tu Compromiso</h4>
                                    <p className="text-sm text-text-light">
                                        Pedimos un mínimo de <strong>4 horas mensuales</strong>. Pueden ser en nuestros talleres o jornadas especiales de reparación.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <BookOpen className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-bold text-gray-800">Aprendizaje Continuo</h4>
                                    <p className="text-sm text-text-light">
                                        No necesitás ser un experto. Ofrecemos capacitaciones gratuitas en reparación de PC, Linux y borrado seguro de datos.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
                            <p className="text-sm text-center italic text-primary">
                                "En CRISCA no solo reparamos máquinas, nos reparamos a nosotros mismos sirviendo a los demás."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
