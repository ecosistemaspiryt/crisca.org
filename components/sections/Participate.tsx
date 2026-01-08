'use client';

import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import Link from 'next/link';
import { Monitor, Church, Wrench, Gift } from 'lucide-react';
import { motion } from 'framer-motion';

const options = [
    {
        icon: Monitor,
        title: 'Donar Tecnología',
        description: 'Tu equipo en desuso puede ser la primera computadora de un niño.',
        action: 'Donar Ahora',
        href: '/como-participar/donar',
        color: 'bg-blue-50 text-blue-600'
    },
    {
        icon: Church,
        title: 'Abrir Capilla',
        description: 'Convertí tu espacio comunitario en un punto de recepción y esperanza.',
        action: 'Postularme',
        href: '/como-participar/capilla',
        color: 'bg-orange-50 text-orange-600'
    },
    {
        icon: Wrench,
        title: 'Ser Voluntario',
        description: 'Sumá tus manos y conocimientos para reparar y enseñar.',
        action: 'Inscribirme',
        href: '/como-participar/voluntario',
        color: 'bg-green-50 text-green-600'
    },
    {
        icon: Gift,
        title: 'Solicitar Equipos',
        description: 'Conectá a tu comunidad con herramientas digitales.',
        action: 'Solicitar',
        href: '/como-participar/solicitar',
        color: 'bg-purple-50 text-purple-600'
    }
];

export function Participate() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Formas de Participar</h2>
                    <p className="text-text-light text-lg max-w-2xl mx-auto">
                        Todos tenemos algo para dar. Elegí cómo querés ser parte de esta transformación.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {options.map((option, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className="h-full"
                        >
                            <Card className="h-full flex flex-col hover:border-secondary/50 hover:shadow-lg transition-all">
                                <CardHeader>
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${option.color}`}>
                                        <option.icon className="w-7 h-7" />
                                    </div>
                                    <CardTitle className="mb-2">{option.title}</CardTitle>
                                    <CardDescription className="text-base">{option.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow" />
                                <CardFooter>
                                    <Button className="w-full" variant="outline" asChild>
                                        <Link href={option.href}>{option.action}</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
