'use client';

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Calendar, Tag, User, ArrowRight } from 'lucide-react';

export default function BlogPage() {
    const posts = [
        {
            id: 1,
            title: "¡Inauguramos 3 nuevas Capillas Recicladoras en Zona Sur!",
            excerpt: "Gracias al compromiso de la comunidad, Lanús y Quilmes ya cuentan con puntos seguros de recepción de tecnología.",
            date: "14 Oct, 2024",
            category: "Nuevas Capillas",
            author: "Equipo CRISCA",
            image: "bg-blue-100", // placeholder
        },
        {
            id: 2,
            title: "Entrega de equipamiento en la Escuela 'Rayuela'",
            excerpt: "30 notebooks recuperadas ahora potencian el aula digital de esta escuela técnica. Mirá las fotos de la jornada.",
            date: "02 Oct, 2024",
            category: "Entregas",
            author: "Voluntarios",
            image: "bg-green-100", // placeholder
        },
        {
            id: 3,
            title: "Jornada de reparación abierta: Súmate este sábado",
            excerpt: "Abrimos las puertas de nuestro taller para enseñar a diagnosticar y reparar PCs. No necesitás experiencia previa.",
            date: "28 Sep, 2024",
            category: "Eventos",
            author: "Coord. Técnica",
            image: "bg-orange-100", // placeholder
        }
    ];

    const categories = ["Todas", "Entregas", "Nuevas Capillas", "Voluntarios", "Eventos", "Reflexiones"];

    return (
        <main className="min-h-screen bg-gray-50 py-20">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Novedades y Comunidad</h1>
                    <p className="text-xl text-text-light max-w-2xl mx-auto">
                        Historias de transformación, eventos y avances de nuestra red de esperanza.
                    </p>
                </div>

                {/* Categories (Static Filter) */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat, i) => (
                        <button
                            key={i}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-secondary text-white' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Posts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col h-full border-none shadow-sm">
                            <div className={`h-56 ${post.image} w-full flex items-center justify-center text-gray-400 font-medium overflow-hidden`}>
                                <div className="group-hover:scale-105 transition-transform duration-500 w-full h-full bg-gray-200" />
                            </div>

                            <CardHeader className="pb-2">
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                                    <span className="flex items-center gap-1 text-secondary font-bold uppercase tracking-wider">
                                        <Tag className="w-3 h-3" /> {post.category}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" /> {post.date}
                                    </span>
                                </div>
                                <h2 className="text-xl font-bold text-gray-800 leading-tight group-hover:text-primary transition-colors">
                                    <Link href="#">{post.title}</Link>
                                </h2>
                            </CardHeader>

                            <CardContent className="flex-grow">
                                <p className="text-text-light text-sm leading-relaxed">
                                    {post.excerpt}
                                </p>
                            </CardContent>

                            <CardFooter className="border-t pt-4 mt-auto">
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <User className="w-3 h-3" /> {post.author}
                                    </div>
                                    <Button variant="link" className="p-0 h-auto text-primary font-semibold text-sm">
                                        Leer más <ArrowRight className="w-4 h-4 ml-1" />
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* Pagination Placeholder */}
                <div className="flex justify-center mt-16 gap-2">
                    <Button variant="outline" disabled>Previous</Button>
                    <Button variant="primary" className="w-10 h-10 p-0">1</Button>
                    <Button variant="outline" className="w-10 h-10 p-0">2</Button>
                    <Button variant="outline" className="w-10 h-10 p-0">3</Button>
                    <Button variant="outline">Next</Button>
                </div>

            </div>
        </main>
    );
}
