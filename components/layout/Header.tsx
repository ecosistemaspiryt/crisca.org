'use client';

import { useState, useEffect } from 'react';
import { LanguageSelector } from '@/components/shared/LanguageSelector';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Menu, X, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

import { useTranslation } from 'react-i18next';

export function Header() {
    const { t } = useTranslation('common');
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { name: t('nav.about'), href: '/sobre-crica' },
        { name: t('nav.participate'), href: '/como-participar' },
        { name: t('nav.impact'), href: '/impacto' },
        { name: t('nav.blog'), href: '/blog' },
        { name: t('nav.contact'), href: '/contacto' },
    ];


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <header
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-300',
                scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4 text-white'
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 font-bold text-2xl tracking-tight">
                    <Heart className={cn("w-8 h-8", scrolled ? "text-primary fill-primary" : "text-white fill-white")} />
                    <span className={cn(scrolled ? "text-primary" : "text-white")}>{t('site.name')}</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-secondary",
                                scrolled ? "text-text" : "text-white/90"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}

                    <div className={scrolled ? "text-text" : "text-white"}>
                        <LanguageSelector />
                    </div>

                    <Button
                        variant={scrolled ? "primary" : "secondary"}
                        size="sm"
                        asChild
                    >
                        <Link href="/como-participar/donar">{t('cta.donate')}</Link>
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <X className={cn("w-6 h-6", scrolled ? "text-text" : "text-white")} />
                    ) : (
                        <Menu className={cn("w-6 h-6", scrolled ? "text-text" : "text-white")} />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 md:hidden"
                    >
                        <div className="flex flex-col p-4 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-lg font-medium text-text hover:text-primary py-2 border-b border-gray-50 last:border-0"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="py-2">
                                <span className="block mb-2 text-sm text-gray-500">Idioma:</span>
                                <LanguageSelector />
                            </div>
                            <Button className="w-full mt-4" size="lg" asChild>
                                <Link href="/como-participar/donar">{t('cta.donate')}</Link>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
