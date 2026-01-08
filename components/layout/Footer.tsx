'use client';

import Link from 'next/link';
import { Heart, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Footer() {
    const { t } = useTranslation('common');
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
                            <Heart className="w-6 h-6 fill-white text-white" />
                            <span>{t('site.name')}</span>
                        </Link>
                        <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                            {t('footer.description')}
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-poppins font-semibold text-lg mb-4">{t('footer.explore_title')}</h3>
                        <ul className="space-y-2 text-sm text-white/80">
                            <li><Link href="/sobre-crica" className="hover:text-secondary transition-colors">{t('nav.about')}</Link></li>
                            <li><Link href="/como-participar" className="hover:text-secondary transition-colors">{t('nav.participate')}</Link></li>
                            <li><Link href="/impacto" className="hover:text-secondary transition-colors">{t('nav.impact')}</Link></li>
                            <li><Link href="/blog" className="hover:text-secondary transition-colors">{t('nav.blog')}</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-poppins font-semibold text-lg mb-4">{t('footer.contact_title')}</h3>
                        <ul className="space-y-3 text-sm text-white/80">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 shrink-0 text-secondary" />
                                <span>Calle Falsa 123, Buenos Aires, Argentina</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 shrink-0 text-secondary" />
                                <a href="mailto:hola@crisca.org" className="hover:text-white transition-colors">hola@crisca.org</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 shrink-0 text-secondary" />
                                <span>+54 11 1234 5678</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-poppins font-semibold text-lg mb-4">{t('footer.follow_title')}</h3>
                        <div className="flex gap-4">
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors" aria-label="Facebook">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors" aria-label="Instagram">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors" aria-label="YouTube">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
                    <p>© {currentYear} {t('site.name')}. {t('footer.rights')}.</p>
                    <div className="flex gap-6">
                        <Link href="/privacidad" className="hover:text-white">{t('footer.privacy')}</Link>
                        <Link href="/terminos" className="hover:text-white">{t('footer.legal')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
