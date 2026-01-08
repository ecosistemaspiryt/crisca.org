'use client';

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Quote } from 'lucide-react';

export function AcutisFull() {
    return (
        <section className="py-24 bg-primary text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium">
                            Patrono de Internet
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Inspirados por <br />
                            <span className="text-secondary">Carlo Acutis</span>
                        </h2>

                        <div className="relative pl-8 border-l-4 border-secondary/50">
                            <Quote className="absolute top-0 left-[-2rem] w-6 h-6 text-secondary opacity-50" />
                            <p className="text-xl md:text-2xl italic font-light text-white/90">
                                "Todos nacen como originales, pero muchos mueren como fotocopias."
                            </p>
                        </div>

                        <div className="space-y-4 text-white/80 leading-relaxed text-lg">
                            <p>
                                Carlo Acutis fue un joven programador que entendió que la web podía ser un vehículo
                                para transmitir valores eternos. Su vida nos enseña que la tecnología es éticamente neutra:
                                depende de nosotros cargarla de sentido.
                            </p>
                            <p>
                                En CRISCA tomamos su legado para recordar que detrás de cada pantalla hay un ser humano
                                y que incluso la "basura" informática puede ser instrumento de un milagro social si se
                                la trata con creatividad y amor.
                            </p>
                        </div>

                        <div className="pt-4">
                            <Button variant="secondary" size="lg" asChild>
                                <Link href="/como-participar">Unirme a esta Misión</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 to-black relative group">
                            {/* Placeholder Image */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gray-800/50 backdrop-blur-sm group-hover:bg-gray-800/40 transition-colors">
                                <span className="text-2xl font-bold mb-2">Carlo Acutis</span>
                                <span className="text-sm opacity-70">1991 - 2006</span>
                                <div className="mt-8 border border-white/30 px-6 py-2 rounded-full text-sm">
                                    Imagen del Beato
                                </div>
                            </div>
                        </div>
                        {/* Floating card */}
                        <div className="absolute -bottom-6 -left-6 bg-white text-primary p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                            <p className="font-bold text-lg mb-1">Eucaristía</p>
                            <p className="text-sm">"Mi autopista al Cielo"</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
