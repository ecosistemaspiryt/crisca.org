'use client';

import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const languages = [
    { code: 'es', name: 'Español', flag: '🇦🇷' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
];

export function LanguageSelector() {
    const { i18n } = useTranslation();

    const changeLanguage = (newLocale: string) => {
        i18n.changeLanguage(newLocale);
    };

    return (
        <div className="flex items-center gap-2 border border-white/20 rounded-md px-2 py-1 hover:bg-white/10 transition-colors">
            <Globe className="w-4 h-4 text-white/80" />

            <select
                value={i18n.language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="bg-transparent text-sm text-white focus:outline-none cursor-pointer [&>option]:text-black"
            >
                {languages.map(({ code, name, flag }) => (
                    <option key={code} value={code}>
                        {flag} {name}
                    </option>
                ))}
            </select>
        </div>
    );
}
