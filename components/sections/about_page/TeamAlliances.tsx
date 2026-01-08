'use client';

import { Card, CardContent } from "@/components/ui/Card";

export function TeamAlliances() {
    // Placeholder profiles
    const team = [
        { name: "Padre Juan", role: "Fundador y Director Espiritual", initials: "PJ" },
        { name: "Ing. María González", role: "Coordinadora Técnica", initials: "MG" },
        { name: "Lucas M.", role: "Jefe de Voluntarios", initials: "LM" },
        { name: "Dra. Sofía R.", role: "Relaciones Institucionales", initials: "SR" },
    ];

    const alliances = [
        "Parroquia San José", "TechSchool", "Fundación Esperanza", "ReciclaArg"
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">

                {/* Equipo */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary mb-4">Nuestro Equipo</h2>
                        <p className="text-text-light">Personas comprometidas con la misión de CRISCA.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {team.map((member, i) => (
                            <Card key={i} className="text-center hover:shadow-md transition-shadow">
                                <CardContent className="pt-6">
                                    <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                        {member.initials}
                                    </div>
                                    <h4 className="font-bold text-primary">{member.name}</h4>
                                    <p className="text-xs text-text-light">{member.role}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Alianzas */}
                <div>
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-primary mb-4">Quienes nos Acompañan</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {alliances.map((partner, i) => (
                            <div key={i} className="flex items-center justify-center p-4 bg-white shadow-sm rounded-lg min-w-[150px]">
                                <span className="font-semibold text-text-light">{partner}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
