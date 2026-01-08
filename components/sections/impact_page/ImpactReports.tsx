'use client';

import { FileText, Download } from 'lucide-react';
import { Button } from "@/components/ui/Button";

export function ImpactReports() {
    return (
        <section className="py-20 bg-primary text-white">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl font-bold mb-8">Transparencia Documental</h2>
                <p className="text-white/80 max-w-2xl mx-auto mb-12">
                    Publicamos anualmente nuestro informe de gestión, balance social y estado financiero.
                    Creemos que la confianza se construye con datos abiertos.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors w-full md:w-auto min-w-[250px]">
                        <FileText className="w-10 h-10 text-secondary mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-1">Informe 2024</h3>
                        <p className="text-sm text-white/60 mb-6">PDF - 4.5 MB</p>
                        <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary">
                            <Download className="w-4 h-4 mr-2" /> Descargar
                        </Button>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 w-full md:w-auto min-w-[250px] opacity-70">
                        <FileText className="w-10 h-10 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-1">Informe 2023</h3>
                        <p className="text-sm text-white/50 mb-6">PDF - 3.2 MB</p>
                        <Button variant="ghost" disabled className="w-full text-white/50 border-white/20 border">
                            <Download className="w-4 h-4 mr-2" /> Archivo
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
