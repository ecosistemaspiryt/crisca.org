'use client';

import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/Card";

export function ContactInfo() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Info Cards */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-6">Información de Contacto</h2>
                            <p className="text-text-light mb-8">
                                Nuestra sede central funciona como el corazón logístico y espiritual de CRISCA.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <Card className="border-none shadow-md bg-gray-50">
                                <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary shadow-sm">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-gray-800">Email</h3>
                                    <a href="mailto:contacto@crisca.org" className="text-primary hover:underline">contacto@crisca.org</a>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-md bg-gray-50">
                                <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary shadow-sm">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-gray-800">WhatsApp</h3>
                                    <a href="https://wa.me/5491112345678" className="text-primary hover:underline">+54 9 11 1234 5678</a>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                                <MapPin className="w-6 h-6 text-primary mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-gray-800">Sede Central Palermo</h4>
                                    <p className="text-sm text-text-light">Av. Santa Fe 1234, CABA, Argentina.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                                <Clock className="w-6 h-6 text-primary mt-1 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-gray-800">Horarios de Atención</h4>
                                    <p className="text-sm text-text-light">Lunes a Viernes de 10:00 a 17:00 hs.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13136.066850016401!2d-58.41730440000001!3d-34.603722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac4f5d5b775%3A0xe5a22d2f3f1e944!2sPalermo%2C%20CABA!5e0!3m2!1ses!2sar!4v1709569882245!5m2!1ses!2sar"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale hover:grayscale-0 transition-all duration-700"
                        ></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
}
