'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export function ImpactDashboard() {
    const equipmentData = [
        { label: 'PCs de Escritorio', percentage: 45, color: 'bg-blue-500' },
        { label: 'Notebooks', percentage: 25, color: 'bg-green-500' },
        { label: 'Periféricos', percentage: 20, color: 'bg-orange-500' },
        { label: 'Componentes', percentage: 10, color: 'bg-purple-500' },
    ];

    const monthlyGrowth = [40, 65, 80, 120, 150, 190, 220, 256];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-4">Métricas de Recuperación</h2>
                    <p className="text-text-light">Datos acumulados del último semestre.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* Equipment Types Chart (Custom Bar) */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Tipos de Equipos Procesados</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {equipmentData.map((item, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="font-medium text-gray-700">{item.label}</span>
                                        <span className="text-gray-500">{item.percentage}%</span>
                                    </div>
                                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${item.percentage}%` }}
                                            transition={{ duration: 1, delay: i * 0.1 }}
                                            className={`h-full ${item.color} rounded-full`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    {/* Growth Curve (Custom SVG Line) */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Crecimiento de Entregas</CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-end justify-between h-64 px-4 pb-4">
                            {monthlyGrowth.map((val, i) => {
                                const height = (val / 300) * 100; // rough scale
                                return (
                                    <div key={i} className="flex flex-col items-center gap-2 w-full group">
                                        <div className="relative w-full flex items-end justify-center h-48">
                                            <motion.div
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${height}%` }}
                                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                                className="w-4/5 bg-secondary/80 rounded-t-sm group-hover:bg-secondary transition-colors"
                                            />
                                        </div>
                                        <span className="text-xs text-gray-500">Mes {i + 1}</span>
                                    </div>
                                )
                            })}
                        </CardContent>
                    </Card>

                </div>
            </div>
        </section>
    );
}
