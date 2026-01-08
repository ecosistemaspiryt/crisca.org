'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';
import { ReactNode, Suspense } from 'react';

export default function I18nProvider({ children }: { children: ReactNode }) {
    return (
        <I18nextProvider i18n={i18n}>
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
                {children}
            </Suspense>
        </I18nextProvider>
    );
}
