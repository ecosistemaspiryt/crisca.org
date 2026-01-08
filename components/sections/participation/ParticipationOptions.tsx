'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Laptop, Church, Wrench, Gift, ArrowRight } from "lucide-react";

export function ParticipationOptions() {
    const options = [
        {
            icon: Laptop,
            title: "Donar Tecnología",
            description: "Dale una segunda vida a tus equipos en desuso. Aceptamos PCs, notebooks y periféricos.",
            link: "/como-participar/donar",
            cta: "Donar Ahora",
            color: "text-blue-500",
            bg: "bg-blue-50"
        },
        {
            icon: Church,
            title: "Abrir una Capilla",
            description: "Convertí tu espacio comunitario o parroquia en un punto de recepción y esperanza.",
            link: "/como-participar/capilla",
            cta: "Postular mi Espacio",
            color: "text-orange-500",
            bg: "bg-orange-50"
        },
        {
            icon: Wrench,
            title: "Ser Voluntario",
            description: "Sumate a nuestros talleres de reparación. Aprendé, enseñá y repará con amor.",
            link: "/como-participar/voluntario",
            cta: "Sumarme al Equipo",
            color: "text-green-600",
            bg: "bg-green-50"
        },
        {
            icon: Gift,
            title: "Solicitar Equipos",
            description: "¿Tu organización o comunidad necesita tecnología? Contanos tu historia.",
            link: "/como-participar/solicitar",
            cta: "Hacer Solicitud",
            color: "text-purple-600",
            bg: "bg-purple-50"
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {options.map((opt, i) => (
                        <Card key={i} className="flex flex-col hover:shadow-xl transition-all duration-300 border-none shadow-md overflow-hidden group">
                            <CardHeader className={`${opt.bg} pb-8 pt-8`}>
                                <div className={`w-16 h-16 ${opt.bg} bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                    <opt.icon className={`w-8 h-8 ${opt.color}`} />
                                </div>
                                <CardTitle className="text-2xl font-bold text-gray-800">{opt.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 pt-6">
                                <CardDescription className="text-base text-gray-600 leading-relaxed">
                                    {opt.description}
                                </CardDescription>
                            </CardContent>
                            <CardFooter className="pt-0 pb-8">
                                <Button asChild className="w-full group-hover:translate-x-1 transition-transform" variant="outline">
                                    <Link href={opt.link} className="flex items-center justify-center gap-2">
                                        {opt.cta} <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
