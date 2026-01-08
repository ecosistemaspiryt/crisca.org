
# 🌍 GUÍA MULTIIDIOMA - WEB CRICA (V2 - Actualizado, Client-Side)

## 🎯 OBJETIVO ACTUAL (Fase Estabilidad)

Implementar una estrategia de traducción **Client-Side Only** (SPA Style) para garantizar estabilidad y entrega rápida en Next.js 16 (App Router) sin complejidad de Middleware.

**Estado:**

- ✅ **Español:** Idioma principal y fallback. Contenido completo.
- 🚧 **Português / Italiano:** Estructura preparada, contenido pendiente de activación.

---

## 🏗️ ARQUITECTURA TÉCNICA

### Librería: `react-i18next`

Usamos la versión de cliente para cambiar textos dinámicamente sin recargar la página.

### Configuración

El archivo `i18n.ts` (o configuración en `components/Layout`) inicializa `i18next`.

### Estructura de Archivos (Consolidada)

```
/public/locales
├── es/              # Fuente de verdad (Completo)
│   ├── common.json
│   ├── home.json
│   ├── about.json
│   ├── participate.json
│   ├── donate.json
│   ├── volunteer.json
│   ├── request.json
│   ├── chapel.json
│   ├── impact.json
│   ├── blog.json
│   ├── contact.json
│   └── forms.json
├── pt/              # Estructura replicada (Pendiente)
└── it/              # Estructura replicada (Pendiente)
```

---

## 💻 USO EN COMPONENTES (Client Components)

Para usar traducciones, el componente debe ser un Client Component (`'use client'`).

```tsx
'use client';

import { useTranslation } from 'react-i18next';

export function MiComponente() {
  const { t } = useTranslation('common');

  return <h1>{t('site.name')}</h1>;
}
```

---

## ⚠️ NOTAS SOBRE SEO Y RUTAS

En esta fase (Opción A):

1. **NO hay rutas dedicadas** (`/pt/sobre`, `/it/chi-siamo`).
2. La URL siempre es la misma (`crica.org/sobre-crica`).
3. Los bots verán principalmente el contenido en Español (Default).
4. Esta decisión prioriza la **funcionalidad** y la **entrega** sobre el SEO internacional perfecto.

---

### Ejemplo 3: Formulario con Validaciones

```tsx
// components/forms/DonateForm.tsx
import { useTranslation } from 'next-i18next'
import { useForm } from 'react-hook-form'

export default function DonateForm() {
  const { t } = useTranslation('forms')
  
  const { register, handleSubmit, formState: { errors } } = useForm()
  
  return (
    <form>
      <label>{t('donate.name_label')}</label>
      <input 
        {...register('name', { 
          required: t('donate.name_required') 
        })}
      />
      {errors.name && <span>{errors.name.message}</span>}
      
      <label>{t('donate.email_label')}</label>
      <input 
        {...register('email', {
          required: t('donate.email_required'),
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: t('donate.email_invalid')
          }
        })}
      />
      
      <button type="submit">
        {t('donate.submit_button')}
      </button>
    </form>
  )
}
```

---

## 🔄 SELECTOR DE IDIOMA

### Componente LanguageSelector

```tsx
// components/shared/LanguageSelector.tsx
import { useRouter } from 'next/router'
import { Globe } from 'lucide-react'

const languages = [
  { code: 'es', name: 'Español', flag: '🇦🇷' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
]

export default function LanguageSelector() {
  const router = useRouter()
  const { locale, pathname, asPath, query } = router
  
  const changeLanguage = (newLocale: string) => {
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }
  
  return (
    <div className="language-selector">
      <Globe className="icon" />
      
      <select 
        value={locale} 
        onChange={(e) => changeLanguage(e.target.value)}
      >
        {languages.map(({ code, name, flag }) => (
          <option key={code} value={code}>
            {flag} {name}
          </option>
        ))}
      </select>
    </div>
  )
}
```

### Estilo del Selector

```css
.language-selector {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.language-selector select {
  padding: 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid #e5e7eb;
  font-size: 0.875rem;
  cursor: pointer;
}

.language-selector select:hover {
  border-color: #2C5F7C;
}
```

---

## 🌐 CONFIGURACIÓN DE URLs

### Opción Recomendada: Subdominios

```
https://crica.org           → Español (default)
https://pt.crica.org        → Português
https://it.crica.org        → Italiano
```

#### Configuración en Vercel

1. Settings → Domains
2. Agregar dominios:
   - `crica.org` → producción
   - `pt.crica.org` → producción
   - `it.crica.org` → producción

3. Variables de entorno por dominio (si fuera necesario)

#### Configuración en next.config.js

```javascript
module.exports = {
  i18n: {
    locales: ['es', 'pt', 'it'],
    defaultLocale: 'es',
    domains: [
      {
        domain: 'crica.org',
        defaultLocale: 'es',
      },
      {
        domain: 'pt.crica.org',
        defaultLocale: 'pt',
      },
      {
        domain: 'it.crica.org',
        defaultLocale: 'it',
      },
    ],
  },
}
```

---

## 🔍 SEO MULTIIDIOMA

### Meta Tags por Idioma

```tsx
// app/layout.tsx o pages/_document.tsx
import { useTranslation } from 'next-i18next'
import Head from 'next/head'

export default function Layout({ children }) {
  const { t } = useTranslation('common')
  const { locale } = useRouter()
  
  return (
    <>
      <Head>
        <html lang={locale} />
        <title>{t('site.name')} - {t('site.tagline')}</title>
        <meta name="description" content={t('site.description')} />
        
        {/* Open Graph */}
        <meta property="og:title" content={t('site.name')} />
        <meta property="og:description" content={t('site.description')} />
        <meta property="og:locale" content={locale} />
        
        {/* Hreflang tags */}
        <link rel="alternate" hreflang="es" href="https://crica.org" />
        <link rel="alternate" hreflang="pt" href="https://pt.crica.org" />
        <link rel="alternate" hreflang="it" href="https://it.crica.org" />
        <link rel="alternate" hreflang="x-default" href="https://crica.org" />
      </Head>
      
      {children}
    </>
  )
}
```

### Sitemap Multiidioma

```xml
<!-- public/sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  
  <!-- Página Home -->
  <url>
    <loc>https://crica.org/</loc>
    <xhtml:link rel="alternate" hreflang="es" href="https://crica.org/"/>
    <xhtml:link rel="alternate" hreflang="pt" href="https://pt.crica.org/"/>
    <xhtml:link rel="alternate" hreflang="it" href="https://it.crica.org/"/>
    <priority>1.0</priority>
  </url>
  
  <!-- Sobre CRICA -->
  <url>
    <loc>https://crica.org/sobre-crica</loc>
    <xhtml:link rel="alternate" hreflang="es" href="https://crica.org/sobre-crica"/>
    <xhtml:link rel="alternate" hreflang="pt" href="https://pt.crica.org/sobre-crica"/>
    <xhtml:link rel="alternate" hreflang="it" href="https://it.crica.org/chi-siamo"/>
    <priority>0.8</priority>
  </url>
  
  <!-- ... más páginas ... -->
</urlset>
```

---

## 📧 EMAILS MULTIIDIOMA

### Templates por Idioma

```javascript
// lib/emailTemplates.js

const emailTemplates = {
  donate: {
    es: {
      subject: "¡Gracias por tu donación a CRICA!",
      body: `
        Hola {name},
        
        Recibimos tu solicitud de donación de {equipmentType}.
        
        En los próximos días nos pondremos en contacto contigo 
        para coordinar la entrega.
        
        Gracias por ser parte de CRICA.
        
        Equipo CRICA
      `
    },
    pt: {
      subject: "Obrigado pela sua doação ao CRICA!",
      body: `
        Olá {name},
        
        Recebemos sua solicitação de doação de {equipmentType}.
        
        Nos próximos dias entraremos em contato para coordenar a entrega.
        
        Obrigado por fazer parte do CRICA.
        
        Equipe CRICA
      `
    },
    it: {
      subject: "Grazie per la tua donazione a CRICA!",
      body: `
        Ciao {name},
        
        Abbiamo ricevuto la tua richiesta di donazione di {equipmentType}.
        
        Nei prossimi giorni ti contatteremo per coordinare la consegna.
        
        Grazie per far parte di CRICA.
        
        Team CRICA
      `
    }
  }
}

export function getEmailTemplate(type, locale, variables) {
  let template = emailTemplates[type][locale]
  
  // Reemplazar variables
  Object.keys(variables).forEach(key => {
    template.body = template.body.replace(`{${key}}`, variables[key])
  })
  
  return template
}
```

### Uso en API Route

```typescript
// app/api/contact/route.ts
import { getEmailTemplate } from '@/lib/emailTemplates'

export async function POST(request: Request) {
  const data = await request.json()
  const { name, email, equipmentType, locale } = data
  
  const template = getEmailTemplate('donate', locale, {
    name,
    equipmentType
  })
  
  await sendEmail({
    to: email,
    subject: template.subject,
    body: template.body
  })
  
  return Response.json({ success: true })
}
```

---

## 🎨 ADAPTACIONES CULTURALES

### Vocabulario Específico

```json
// ESPAÑOL (Argentina/Latam)
{
  "computer": "computadora",
  "mouse": "mouse",
  "keyboard": "teclado",
  "you_informal": "vos/tú"
}

// PORTUGUÊS (Brasil)
{
  "computer": "computador",
  "mouse": "mouse",
  "keyboard": "teclado",
  "you_informal": "você"
}

// ITALIANO
{
  "computer": "computer",
  "mouse": "mouse",
  "keyboard": "tastiera",
  "you_formal": "Lei",
  "you_informal": "tu"
}
```

### Tonos por Idioma

**ESPAÑOL:**

- Cercano y cálido
- Tuteo/voseo según región
- Emotivo pero profesional

**PORTUGUÊS:**

- Muy cálido
- Você (ni muy formal ni muy informal)
- Exclamaciones típicas: "Que legal!", "Incrível!"

**ITALIANO:**

- Formal pero acogedor
- Lei (formal) en primera interacción
- Énfasis en la conexión con Carlo/Assisi

---

## 📊 PRIORIDADES DE TRADUCCIÓN

### FASE 1: Pre-Lanzamiento (CRÍTICO)

```
✅ Home completo
✅ Sobre CRICA
✅ Cómo Participar (landing)
✅ Donar (formulario completo)
✅ Header + Footer
✅ CTAs principales
✅ Mensajes de error/éxito
```

### FASE 2: Lanzamiento (IMPORTANTE)

```
⏳ Voluntario (formulario)
⏳ Solicitar equipos (formulario)
⏳ Abrir capilla (formulario)
⏳ Contacto
⏳ FAQs básicos (top 10)
```

### FASE 3: Post-Lanzamiento (SECUNDARIO)

```
🔮 Impacto (completo)
🔮 Blog (posts destacados)
🔮 Testimonios ampliados
🔮 FAQs completos
```

---

## 💰 PRESUPUESTO DE TRADUCCIÓN

### Opción A: Traducción Profesional Humana

```
Palabras totales estimadas: ~15,000
Tarifa promedio: $0.08-0.12 por palabra

ESPAÑOL → PORTUGUÊS:
15,000 palabras × $0.10 = $1,500

ESPAÑOL → ITALIANO:
15,000 palabras × $0.10 = $1,500

TOTAL: ~$3,000
```

### Opción B: IA + Revisión Humana (RECOMENDADA)

```
DeepL API:
- Free tier: 500,000 caracteres/mes (suficiente)
- Pro: $5.49/mes si se excede

Revisión nativa (solo páginas críticas):
- Português: $300-400 (revisor brasileño)
- Italiano: $300-400 (revisor italiano)

TOTAL: ~$600-800
```

### Opción C: Híbrida (Calidad/Costo Balanceado)

```
Páginas críticas (Home, Participar, Formularios):
- Traducción humana profesional: $1,000

Páginas secundarias (Blog, FAQs extensos):
- DeepL + revisión ligera: $200

TOTAL: ~$1,200
```

**RECOMENDACIÓN:** Opción B para MVP, luego iterar con feedback de usuarios nativos.

---

## 🧪 TESTING MULTIIDIOMA

### Checklist por Idioma

```
□ Texto se ve completo (no cortado)
□ Botones tienen tamaño correcto
□ Formularios validan en idioma correcto
□ Emails se envían en idioma correcto
□ No hay mezcla de idiomas en misma página
□ Selector de idioma funciona
□ URLs correctas por idioma
□ Meta tags correctos
□ Fechas/números en formato local
```

### Testing con Nativos

**PORTUGUÊS:**

- Contratar 2-3 brasileños en Fiverr ($50 total)
- Pedirles que revisen crítico + usen formularios
- Feedback en 48hs

**ITALIANO:**

- Idem con italianos
- Bonus: mencionar conexión con Assisi

---

## 🚀 DEPLOYMENT MULTIIDIOMA

### Vercel Configuration

1. **Dominios:**

```
crica.org → main branch → español
pt.crica.org → main branch → português (auto-detect locale)
it.crica.org → main branch → italiano (auto-detect locale)
```

1. **Environment Variables:**

```
NEXT_PUBLIC_DEFAULT_LOCALE=es
NEXT_PUBLIC_SUPPORTED_LOCALES=es,pt,it
```

1. **Build Command:**

```bash
npm run build
# Next.js genera páginas para cada locale automáticamente
```

---

## 📈 MÉTRICAS DE ÉXITO

### KPIs por Idioma

```javascript
// Google Analytics Events
ga('send', 'event', {
  eventCategory: 'Language',
  eventAction: 'Change',
  eventLabel: locale // 'es', 'pt', 'it'
})

// Conversiones por idioma
ga('send', 'event', {
  eventCategory: 'Form',
  eventAction: 'Submit',
  eventLabel: `donate_${locale}`
})
```

### Métricas a Trackear

- **Tráfico por idioma** (% de cada uno)
- **Conversiones por idioma** (formularios completados)
- **Bounce rate por idioma** (si es muy alto, revisar traducciones)
- **Páginas más visitadas por idioma**
- **Origen geográfico** vs idioma seleccionado

---

## 🔄 MANTENIMIENTO

### Agregar Nueva Página

1. Crear archivos de traducción:

```
/locales/es/nueva-pagina.json
/locales/pt/nova-pagina.json
/locales/it/nuova-pagina.json
```

1. Traducir contenido (IA + revisión)

2. Importar en componente:

```tsx
const { t } = useTranslation('nueva-pagina')
```

### Actualizar Traducciones Existentes

1. Editar archivos JSON directamente
2. Commit + push
3. Vercel re-deploy automático
4. Cambios en vivo en minutos

---

## ✅ CHECKLIST FINAL

### Pre-Launch

- [ ] i18n configurado en Next.js
- [ ] Estructura /locales creada
- [ ] Traducciones críticas completas (ES, PT, IT)
- [ ] Selector de idioma visible en Header
- [ ] Formularios validan en idioma correcto
- [ ] Emails se envían en idioma correcto
- [ ] Subdominios configurados (o paths)
- [ ] Hreflang tags implementados
- [ ] Sitemap multiidioma generado
- [ ] Testing con nativos completado
- [ ] Meta descriptions por idioma
- [ ] OG images con texto correcto

### Post-Launch

- [ ] Google Analytics por idioma
- [ ] Monitorear bounce rate por idioma
- [ ] Recopilar feedback de usuarios nativos
- [ ] Iterar traducciones según feedback
- [ ] Agregar más idiomas si es necesario

---

## 🌟 BENEFICIOS FINALES

Con multiidioma implementado:

✅ **770M+ personas** pueden acceder en su idioma nativo
✅ **Brasil** (210M) puede adoptar CRICA sin fricción
✅ **Italia** (cuna de Carlo) siente el proyecto como suyo
✅ **SEO global** (rankear en Google ES, PT, IT)
✅ **Credibilidad internacional** desde día 1
✅ **Replicación fácil** en cualquier país de los 3 idiomas
✅ **Viralidad cross-border** (medios comparten en varios idiomas)

---

**CRICA no es solo argentino. Es global desde el inicio.** 🌍🚀
