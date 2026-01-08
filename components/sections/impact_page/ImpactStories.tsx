'use client';

import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';

export function ImpactStories() {
    const stories = [
        {
            title: "Escuela N° 45 de Moreno",
            category: "Educación",
            image: "bg-blue-200", // placeholder color
            excerpt: "Equipamos el aula de informática con 12 computadoras completas. Ahora 300 chicos tienen clases semanales de programación.",
        },
        {
            title: "Comedor 'Los Peques'",
            category: "Comunidad",
            image: "bg-orange-200", // placeholder color
            excerpt: "Donamos una PC para la administración y dos notebooks para apoyo escolar. La gestión de alimentos ahora es 100% digital.",
        },
        {
            title: "Centro de Jubilados 'Renacer'",
            category: "Inclusión",
            image: "bg-green-200", // placeholder color
            excerpt: "Instalamos 3 equipos para talleres de alfabetización digital para adultos mayores. 'Nunca es tarde para conectarse'.",
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-primary mb-2">Historias Reales</h2>
                        <p className="text-text-light">Detrás de cada número hay una comunidad transformada.</p>
                    </div>
                    <Button variant="ghost" className="hidden md:flex">
                        Ver todas las historias <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {stories.map((story, i) => (
                        <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow group">
                            <div className={`h-48 ${story.image} w-full flex items-center justify-center text-gray-500 font-medium group-hover:scale-105 transition-transform duration-500`}>
                                Foto {story.title}
                            </div>
                            <CardContent className="pt-6">
                                <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">{story.category}</div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">{story.title}</h3>
                                <p className="text-text-light text-sm leading-relaxed">
                                    {story.excerpt}
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="link" className="p-0 h-auto text-primary">
                                    Leer historia completa
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Button variant="outline">Ver más historias</Button>
                </div>
            </div>
        </section>
    );
}
