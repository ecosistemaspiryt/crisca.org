'use client';

import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react';
import Link from 'next/link';

export function SocialLinks() {
    const socials = [
        { name: "Instagram", icon: Instagram, url: "#", color: "hover:text-pink-600" },
        { name: "Facebook", icon: Facebook, url: "#", color: "hover:text-blue-600" },
        { name: "YouTube", icon: Youtube, url: "#", color: "hover:text-red-600" },
        { name: "Twitter", icon: Twitter, url: "#", color: "hover:text-blue-400" },
    ];

    return (
        <section className="py-20 bg-white border-t">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-8">Seguinos en Redes</h2>
                <div className="flex justify-center gap-8">
                    {socials.map((social, i) => (
                        <Link key={i} href={social.url} className={`text-gray-400 transition-colors ${social.color} transform hover:scale-110 duration-300`}>
                            <social.icon className="w-10 h-10" />
                            <span className="sr-only">{social.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
