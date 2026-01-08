'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import common from '../public/locales/es/common.json';
import home from '../public/locales/es/home.json';
import about from '../public/locales/es/about.json';
import blog from '../public/locales/es/blog.json';
import chapel from '../public/locales/es/chapel.json';
import contact from '../public/locales/es/contact.json';
import donate from '../public/locales/es/donate.json';
import forms from '../public/locales/es/forms.json';
import impact from '../public/locales/es/impact.json';
import inspiration from '../public/locales/es/inspiration.json';
import participate from '../public/locales/es/participate.json';
import process from '../public/locales/es/process.json';
import request from '../public/locales/es/request.json';
import testimonials from '../public/locales/es/testimonials.json';
import volunteer from '../public/locales/es/volunteer.json';

i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            es: {
                common,
                home,
                about,
                blog,
                chapel,
                contact,
                donate,
                forms,
                impact,
                inspiration,
                participate,
                process,
                request,
                testimonials,
                volunteer
            }
        },
        fallbackLng: 'es',
        supportedLngs: ['es', 'pt', 'it'],
        ns: [
            'common',
            'home',
            'about',
            'blog',
            'chapel',
            'contact',
            'donate',
            'forms',
            'impact',
            'inspiration',
            'participate',
            'process',
            'request',
            'testimonials',
            'volunteer'
        ],
        defaultNS: 'common',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        react: {
            useSuspense: true
        }
    });

export default i18n;
