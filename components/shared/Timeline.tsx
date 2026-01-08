'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export interface TimelineStep {
    order?: number | string;
    icon?: React.ElementType;
    title: string;
    description: string | ReactNode;
}

interface TimelineProps {
    steps: TimelineStep[];
    variant?: 'horizontal' | 'vertical'; // Basic support for now, styling focuses on responsive grid
}

export function Timeline({ steps }: TimelineProps) {
    return (
        <div className="relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 z-0 translate-y-4" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        className="bg-transparent"
                    >
                        <div className="flex flex-col items-center text-center">
                            {/* Icon or Order Circle */}
                            <div className="w-16 h-16 rounded-full bg-white border-4 border-secondary text-secondary flex items-center justify-center text-2xl font-bold mb-6 shadow-md relative z-10">
                                {step.icon ? <step.icon className="w-8 h-8" /> : (step.order || index + 1)}
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
                            <div className="text-gray-600 leading-relaxed text-sm">
                                {step.description}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
