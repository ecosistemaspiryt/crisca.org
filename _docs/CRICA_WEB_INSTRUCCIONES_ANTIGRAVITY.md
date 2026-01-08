# 🚀 INSTRUCCIONES PARA ANTIGRAVITY - WEB CRICA

## 📋 CONTEXTO DEL PROYECTO

**Nombre:** CRICA - Centro de Reciclaje Afectivo-Tecnológico  
**Tipo:** Sitio web institucional (landing page + páginas secundarias)  
**Objetivo:** Difundir el proyecto, captar donantes, voluntarios y beneficiarios  
**Tono:** Emotivo, cercano, espiritual, profesional  

---

## 🎯 REQUERIMIENTO PRINCIPAL

Crear un sitio web institucional completo para CRICA que:
- Presente el proyecto de forma emotiva y clara
- Facilite la participación (donar, ser voluntario, solicitar equipos, abrir capilla)
- Muestre impacto con números y testimonios
- Sea responsive (mobile-first)
- Tenga excelente performance y SEO

---

## 🏗️ ARQUITECTURA TÉCNICA

### Stack Tecnológico
```
Frontend: Next.js 14+ (App Router)
Styling: Tailwind CSS
Animaciones: Framer Motion
Formularios: React Hook Form
Iconos: Lucide React
Hosting: Vercel (recomendado)
```

### Estructura de Carpetas
```
crica-web/
├── app/
│   ├── page.tsx                 # Home
│   ├── sobre-crica/
│   │   └── page.tsx
│   ├── como-participar/
│   │   ├── donar/
│   │   ├── capilla/
│   │   ├── voluntario/
│   │   └── solicitar/
│   ├── impacto/
│   │   └── page.tsx
│   ├── blog/
│   │   └── page.tsx
│   └── contacto/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Process.tsx
│   │   ├── Impact.tsx
│   │   ├── Participate.tsx
│   │   └── Testimonials.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Form.tsx
│   │   └── Modal.tsx
│   └── shared/
│       ├── Counter.tsx
│       ├── Timeline.tsx
│       └── ContactForm.tsx
├── lib/
│   ├── utils.ts
│   └── api.ts
├── public/
│   ├── images/
│   └── fonts/
└── styles/
    └── globals.css
```

---

## 🎨 DISEÑO VISUAL

### Paleta de Colores
```css
/* En globals.css o tailwind.config.js */
--color-primary: #2C5F7C;      /* Azul profundo */
--color-secondary: #E8943A;    /* Naranja cálido */
--color-accent: #4A90A4;       /* Celeste */
--color-background: #F5F5F5;   /* Fondo claro */
--color-text: #333333;         /* Texto principal */
--color-text-light: #666666;   /* Texto secundario */
```

### Tipografía
```css
/* Importar en layout.tsx */
import { Poppins, Inter } from 'next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700'],
  variable: '--font-poppins'
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

/* Aplicar */
h1, h2, h3: font-family: var(--font-poppins);
body, p: font-family: var(--font-inter);
```

---

## 📄 PÁGINAS A CREAR

### 1. HOME (/) - PÁGINA PRINCIPAL

#### Secciones en orden:

**A. HERO**
```tsx
// components/sections/Hero.tsx
- Imagen de fondo emotiva (manos entregando PC a niño)
- Título: "Tecnología con Alma"
- Subtítulo: "Convertimos equipos en desuso en puentes de oportunidad, memoria y comunidad"
- 3 botones CTA:
  * [Quiero Donar] → /como-participar/donar
  * [Quiero Recibir] → /como-participar/solicitar
  * [Ver Cómo Funciona ↓] → scroll suave a sección Process
- Altura: 100vh (mobile: 80vh)
- Overlay oscuro sobre imagen para legibilidad
```

**B. ¿QUÉ ES CRICA?**
```tsx
// components/sections/About.tsx
- Grid de 3 columnas (mobile: 1 columna)
- Cada tarjeta:
  * Ícono grande centrado
  * Título en negrita
  * Descripción corta
- Íconos:
  1. 🖥️ Tecnología con Identidad
  2. 🔧 Ternura Aplicada
  3. 🙏 Fe + Tecnología
- Padding: py-16 (mobile: py-10)
```

**C. EL CAMINO DEL MILAGRO**
```tsx
// components/sections/Process.tsx
- Timeline horizontal (mobile: vertical)
- 3 pasos numerados:
  1. RECEPCIÓN SIMBÓLICA
     Ícono: iglesia
     Texto: "Las donaciones se reciben como ofrendas en espacios de confianza"
  
  2. RECICLAJE DEVOCIONAL
     Ícono: herramientas
     Texto: "Técnicos voluntarios diagnostican, reparan y bendicen cada equipo"
  
  3. REDISTRIBUCIÓN LITÚRGICA
     Ícono: regalo
     Texto: "Entregamos con ceremonia a quienes realmente lo necesitan"

- Botón al final: [Ver el Proceso Completo →] → /sobre-crica
- Animación de entrada por scroll (fade in)
```

**D. IMPACTO EN NÚMEROS**
```tsx
// components/sections/Impact.tsx
// components/shared/Counter.tsx (contador animado)

- Background con color primario (#2C5F7C)
- Texto blanco
- Grid de 5 números:
  * 200 - Equipos Recuperados
  * 500 - Personas Beneficiadas
  * 10 - Capillas Activas
  * 30 - Voluntarios Técnicos
  * 2 ton - Basura Electrónica Evitada

- Números animados (count-up) al entrar en viewport
- Usar framer-motion o react-countup
- Botón: [Ver Más Impacto →] → /impacto
```

**E. FORMAS DE PARTICIPAR**
```tsx
// components/sections/Participate.tsx
- Grid de 4 cards (mobile: 2 cols o 1 col)
- Cada card:
  * Ícono grande
  * Título
  * Descripción
  * Botón CTA
  * Hover effect (elevación + cambio de color)

Cards:
1. 💻 DONAR TECNOLOGÍA → /como-participar/donar
2. ⛪ ABRIR UNA CAPILLA → /como-participar/capilla
3. 🔧 SER VOLUNTARIO → /como-participar/voluntario
4. 🎁 SOLICITAR EQUIPOS → /como-participar/solicitar

- Padding generoso
- Usar color secundario (#E8943A) en hover
```

**F. TESTIMONIOS**
```tsx
// components/sections/Testimonials.tsx
- Carrusel de testimonios (3 testimonios iniciales)
- Cada testimonio:
  * Comillas grandes arriba
  * Texto del testimonio
  * Foto del testimonante (circular)
  * Nombre y rol
  * Rating de estrellas (opcional)

Testimonios:
1. Laura - Coordinadora de comedor
2. Martín - Donante
3. Padre Tomás - Párroco

- Navegación con flechas y dots
- Auto-play cada 5 segundos
- Usar biblioteca: keen-slider o embla-carousel
```

**G. INSPIRACIÓN (CARLO ACUTIS)**
```tsx
// components/sections/Inspiration.tsx
- Layout de 2 columnas (mobile: 1 columna)
- Izquierda: Foto de Carlo Acutis
- Derecha: 
  * Título: "Inspirados en Carlo Acutis"
  * Texto sobre él y su relación con tecnología
  * Botón: [Conocer Más →] → página específica o modal

- Background suave (color accent claro)
- Tipografía más grande, espaciado generoso
```

---

### 2. SOBRE CRICA (/sobre-crica)

```tsx
// app/sobre-crica/page.tsx

Secciones:
1. Hero interno (imagen + título)
2. Historia del proyecto
3. Principios centrales (expandido de home)
4. El camino del milagro (versión detallada)
5. Inspiración en Carlo Acutis (sección completa)
6. Equipo y alianzas
7. CTA: [Quiero Ser Parte] → /como-participar

Tono: Más profundo que el home, con storytelling
```

---

### 3. CÓMO PARTICIPAR - LANDING GENERAL (/como-participar)

```tsx
// app/como-participar/page.tsx

- Hero: "Hay muchas formas de ser parte de CRICA"
- 4 secciones principales (mismas del home pero expandidas):
  
  A. Donar Tecnología
     - Descripción
     - Qué aceptamos
     - Proceso
     - Botón: [Donar Ahora →] → /como-participar/donar
  
  B. Abrir una Capilla Recicladora
     - Descripción
     - Requisitos
     - Beneficios
     - Botón: [Postularme →] → /como-participar/capilla
  
  C. Ser Voluntario Técnico
     - Descripción
     - Perfil buscado
     - Compromiso
     - Botón: [Inscribirme →] → /como-participar/voluntario
  
  D. Solicitar Equipos
     - Descripción
     - Quiénes pueden solicitar
     - Proceso
     - Botón: [Solicitar →] → /como-participar/solicitar

- Cada sección: card con imagen, texto y CTA
```

---

### 4. DONAR TECNOLOGÍA (/como-participar/donar)

```tsx
// app/como-participar/donar/page.tsx

Secciones:
1. Hero: "Tu tecnología en desuso puede cambiar vidas"

2. ¿Qué aceptamos?
   - Lista con checkmarks:
     ✅ Computadoras de escritorio
     ✅ Notebooks
     ✅ Monitores
     ✅ Teclados y mouses
     ✅ Cables y accesorios
   - Lista con X rojas:
     ❌ Equipos rotos sin posibilidad de reparación
     ❌ CRT (monitores antiguos de tubo)
     ❌ Impresoras (por ahora)

3. Proceso de donación
   - Timeline visual:
     1. Completás el formulario
     2. Coordinamos retiro o punto de entrega
     3. Registramos tu donación
     4. Reparamos el equipo
     5. Te contamos a quién ayudó

4. FORMULARIO DE PRE-REGISTRO
   Campos:
   - Nombre completo *
   - Email *
   - Teléfono *
   - Ciudad *
   - Tipo de equipo(s) a donar *
   - Cantidad aproximada
   - Estado del equipo (funciona / no funciona / no sé)
   - ¿Podés acercarlo a un punto de entrega? (sí/no)
   - Comentarios adicionales
   - [Enviar Donación]

5. Puntos de entrega
   - Mapa con marcadores (usar leaflet o mapbox)
   - Lista de capillas activas
   - Dirección, horarios, contacto

6. FAQs sobre donación
   - Acordeón con preguntas frecuentes

7. CTA final: "¿Dudas? Contactanos" → /contacto
```

---

### 5. ABRIR UNA CAPILLA (/como-participar/capilla)

```tsx
// app/como-participar/capilla/page.tsx

Secciones:
1. Hero: "Convertí tu espacio en un punto de esperanza"

2. ¿Qué es una Capilla Recicladora?
   - Explicación
   - Qué implica serlo
   - Beneficios para la comunidad

3. Requisitos
   - Espacio físico seguro
   - Horarios de atención definidos
   - Persona responsable designada
   - Compromiso de cuidado de equipos
   - (No hace falta conocimiento técnico)

4. Beneficios de ser Capilla
   - Visibilidad en la red CRICA
   - Material de difusión
   - Capacitación
   - Acceso prioritario a equipos para tu comunidad
   - Ser parte de un movimiento

5. FORMULARIO DE POSTULACIÓN
   Campos:
   - Nombre del espacio/organización *
   - Tipo (parroquia, escuela, centro comunitario, otro)
   - Nombre del responsable *
   - Email *
   - Teléfono *
   - Dirección completa *
   - Días/horarios disponibles *
   - ¿Cuentan con espacio de almacenamiento? *
   - ¿Por qué quieren ser Capilla Recicladora? *
   - [Enviar Postulación]

6. Testimonios de Capillas activas

7. Manual de operación (PDF descargable)
```

---

### 6. SER VOLUNTARIO (/como-participar/voluntario)

```tsx
// app/como-participar/voluntario/page.tsx

Secciones:
1. Hero: "Tu conocimiento puede multiplicar milagros"

2. ¿Qué hace un Voluntario Técnico?
   - Diagnosticar equipos
   - Reparar hardware
   - Instalar software
   - Capacitar a otros
   - Documentar procesos

3. Perfil buscado
   - Conocimientos técnicos (nivel básico-medio OK)
   - Compromiso de X horas por mes
   - Ganas de aprender y enseñar
   - Sensibilidad social

4. Capacitaciones disponibles
   - Reparación básica de PC
   - Instalación de Linux
   - Wipe seguro de datos
   - Diagnóstico de fallas

5. FORMULARIO DE INSCRIPCIÓN
   Campos:
   - Nombre completo *
   - Email *
   - Teléfono *
   - Ciudad *
   - Nivel de conocimiento técnico (básico/intermedio/avanzado)
   - Áreas de expertise (hardware/software/redes/otro)
   - Disponibilidad horaria *
   - ¿Tenés herramientas propias? (opcional)
   - ¿Cómo te enteraste de CRICA?
   - Motivación para ser voluntario
   - [Inscribirme]

6. Testimonios de voluntarios

7. CTA: "¿Querés saber más? Escribinos" → /contacto
```

---

### 7. SOLICITAR EQUIPOS (/como-participar/solicitar)

```tsx
// app/como-participar/solicitar/page.tsx

Secciones:
1. Hero: "Conectá tu comunidad con tecnología"

2. ¿Quiénes pueden solicitar?
   - Escuelas
   - Comedores comunitarios
   - Hogares de niños/ancianos
   - Organizaciones sociales
   - Familias con necesidad comprobable

3. Criterios de selección
   - Necesidad real y comprobable
   - Compromiso de uso responsable
   - Capacidad de cuidado del equipo
   - Preferencia a comunidades organizadas

4. Proceso de evaluación
   - Timeline:
     1. Completás solicitud
     2. Evaluamos necesidad
     3. Visita (si es posible)
     4. Asignación de equipo
     5. Entrega y capacitación

5. FORMULARIO DE SOLICITUD
   Campos:
   - Tipo de solicitante (persona/organización) *
   - Nombre completo / Organización *
   - Email *
   - Teléfono *
   - Dirección *
   - ¿Para qué necesitan el equipo? *
   - ¿Cuántas personas se beneficiarían? *
   - ¿Cuentan con conexión a internet? (sí/no/limitada)
   - ¿Tienen espacio seguro para el equipo? *
   - ¿Hay alguien con conocimientos básicos de PC? *
   - Carta de motivación / Situación *
   - Documentación respaldatoria (upload opcional)
   - [Enviar Solicitud]

6. Qué incluye el kit entregado
   - Equipo funcional
   - Accesorios (teclado, mouse, cables)
   - Sistema operativo instalado
   - Software básico
   - Manual de uso
   - Certificado de Memoria Viva

7. Compromisos del beneficiario
   - Cuidado del equipo
   - Uso para el fin declarado
   - Reportar si hay problemas técnicos
   - Compartir testimonio (opcional pero apreciado)

8. Historias de beneficiarios
```

---

### 8. IMPACTO (/impacto)

```tsx
// app/impacto/page.tsx

Secciones:
1. Hero con números grandes (animated)

2. Dashboard interactivo
   - Gráficos:
     * Equipos recuperados por mes (línea)
     * Tipos de equipos (torta)
     * Distribución geográfica (mapa)
   - Usar recharts o chart.js

3. Mapa de Capillas Activas
   - Mapa interactivo (leaflet)
   - Marcadores por capilla
   - Popup con info al hacer click

4. Historias Destacadas
   - Cards con foto + historia breve
   - Botón "Leer Más" (abre modal o página)
   - Al menos 3 historias iniciales

5. Testimonios ampliados
   - Más testimonios que en home
   - Con fotos y contexto

6. Informes Anuales
   - PDFs descargables
   - Tarjetas por año
   - Botón [Descargar Informe 2024]

7. CTA: "Quiero formar parte de estos números" → /como-participar
```

---

### 9. BLOG/NOVEDADES (/blog)

```tsx
// app/blog/page.tsx

- Grid de posts (3 columnas, mobile: 1 columna)
- Cada card:
  * Imagen destacada
  * Categoría (tag)
  * Título
  * Extracto
  * Fecha
  * [Leer Más →]

- Filtros por categoría:
  * Todas
  * Entregas
  * Nuevas Capillas
  * Voluntarios
  * Eventos

- Paginación

// Para V1: puede ser estático (posts hardcodeados)
// Para V2: integrar CMS (Notion, Contentful, etc.)
```

---

### 10. CONTACTO (/contacto)

```tsx
// app/contacto/page.tsx

Secciones:
1. Hero: "Hablemos de cómo podemos cambiar el mundo juntos"

2. Información de contacto
   - Grid 2 columnas:
     
     Izquierda:
     📧 Email: contacto@crica.org
     📱 Teléfono: [número]
     📍 Dirección: [dirección completa]
     
     Horarios de atención:
     Lunes a Viernes: 9:00 - 18:00
     Sábados: 10:00 - 14:00
     
     Derecha:
     Mapa embebido (Google Maps o OpenStreetMap)

3. FORMULARIO DE CONTACTO GENERAL
   Campos:
   - Nombre *
   - Email *
   - Teléfono
   - Asunto *
   - Mensaje *
   - [Enviar Mensaje]

4. Redes Sociales
   - Botones grandes con íconos:
     * Instagram
     * Facebook
     * YouTube
     * (las que tengan)

5. FAQs Generales
   - Acordeón con preguntas más frecuentes

6. CTA: "¿Querés formar parte?" → /como-participar
```

---

## 🧩 COMPONENTES COMPARTIDOS

### Header/Navigation
```tsx
// components/layout/Header.tsx

Desktop:
- Logo CRICA (izquierda)
- Menú horizontal:
  * Sobre CRICA
  * Cómo Participar (dropdown)
  * Impacto
  * Blog
  * Contacto
- Botón destacado: [Donar Ahora]

Mobile:
- Logo CRICA (centro)
- Hamburger menu (derecha)
- Menú slide-in desde derecha

Comportamiento:
- Sticky (fixed al hacer scroll)
- Background blur al hacer scroll
- Active state en ruta actual
```

### Footer
```tsx
// components/layout/Footer.tsx

- Background color primario (#2C5F7C)
- Texto blanco

Estructura (4 columnas en desktop, apiladas en mobile):

Col 1: Logo + descripción breve
Col 2: Navegación rápida (links)
Col 3: Contacto
Col 4: Redes sociales

Abajo del todo:
- Copyright
- Links legales (Términos, Privacidad si aplica)
```

### Botones
```tsx
// components/ui/Button.tsx

Variantes:
- primary (color primario, relleno)
- secondary (color secundario, relleno)
- outline (borde, fondo transparente)
- ghost (sin borde, hover cambia fondo)

Tamaños:
- sm, md, lg

Props:
- variant
- size
- children
- onClick
- href (si es link)
- disabled
```

### Cards
```tsx
// components/ui/Card.tsx

- Sombra suave
- Border radius
- Padding interno
- Hover effect (elevación)
- Variants: default, highlight
```

### Forms
```tsx
// components/ui/Form.tsx
// components/ui/Input.tsx
// components/ui/Textarea.tsx
// components/ui/Select.tsx

- Estilos consistentes
- Estados: default, focus, error, disabled
- Labels claros
- Mensajes de error integrados
- Validación con react-hook-form + zod
```

### Modal
```tsx
// components/ui/Modal.tsx

- Overlay oscuro
- Centrado en pantalla
- Botón cerrar (X)
- Animación de entrada/salida (framer-motion)
- Accesible (ESC cierra, focus trap)
```

### Counter (números animados)
```tsx
// components/shared/Counter.tsx

- Usa framer-motion o react-countup
- Anima cuando entra en viewport
- Props: end (número final), duration, suffix
```

### Timeline
```tsx
// components/shared/Timeline.tsx

- Horizontal (desktop) / Vertical (mobile)
- Círculos numerados conectados por línea
- Cada paso con ícono, título y descripción
- Animación de entrada progresiva
```

### ContactForm
```tsx
// components/shared/ContactForm.tsx

- Reutilizable en múltiples páginas
- Validación con react-hook-form
- Envío a EmailJS, Formspree o API propia
- Estados: idle, sending, success, error
- Feedback visual claro
```

---

## 📱 RESPONSIVE DESIGN

### Breakpoints (Tailwind)
```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Mobile-First Approach
- Diseñar primero para mobile
- Agregar complejidad en pantallas más grandes
- Menú hamburger en mobile
- Grids adaptativos (4 cols → 2 cols → 1 col)
- Texto más grande en mobile para legibilidad
- Botones full-width en mobile

### Touch-Friendly
- Botones/links mínimo 44x44px
- Espaciado generoso entre elementos clickeables
- No hover-only interactions en mobile

---

## ⚡ PERFORMANCE

### Optimización de Imágenes
- Usar Next.js Image component
- Lazy loading automático
- Formato WebP cuando sea posible
- Tamaños responsivos (srcset)
- Placeholder blur mientras carga

### Code Splitting
- Next.js lo hace automático
- Dynamic imports para componentes pesados
- Lazy load de mapas y carruseles

### Lighthouse Score Objetivo
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## 🔍 SEO

### Meta Tags (por página)
```tsx
// En cada page.tsx
export const metadata = {
  title: "CRICA - Título específico",
  description: "Descripción específica (max 160 chars)",
  openGraph: {
    title: "...",
    description: "...",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
};
```

### Structured Data (JSON-LD)
- Organization schema
- LocalBusiness schema (si aplica)
- Event schema (para eventos futuros)

### Sitemap
- Generar sitemap.xml automático (Next.js)

### robots.txt
- Permitir todo el crawling

---

## 📧 FORMULARIOS - INTEGRACIÓN

### Opción A: EmailJS (Recomendado para V1)
```tsx
// lib/emailjs.ts
import emailjs from '@emailjs/browser';

emailjs.init("YOUR_PUBLIC_KEY");

export async function sendEmail(data: FormData) {
  return emailjs.send(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    data,
    "YOUR_PUBLIC_KEY"
  );
}
```

### Opción B: API Route + Resend/SendGrid
```tsx
// app/api/contact/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();
  
  await resend.emails.send({
    from: 'noreply@crica.org',
    to: 'contacto@crica.org',
    subject: data.subject,
    html: `...`
  });
  
  return Response.json({ success: true });
}
```

### Opción C: Formspree
- Más simple, sin código backend
- Plan gratuito: 50 submissions/mes

---

## 🎨 ASSETS NECESARIOS

### Imágenes (a conseguir/crear)
- Logo CRICA (SVG + PNG)
- Favicon (multiple sizes)
- OG Image (1200x630px)
- Foto hero principal (alta calidad)
- Fotos de equipos
- Fotos de voluntarios
- Fotos de entregas
- Fotos de capillas
- Foto de Carlo Acutis
- Íconos/ilustraciones custom (si aplica)

### Íconos
- Usar Lucide React (biblioteca completa)
- O Hero Icons (alternativa)
- Consistencia en todo el sitio

---

## 🚀 DEPLOYMENT

### Hosting Recomendado: Vercel
1. Conectar repo de GitHub
2. Deploy automático en cada push
3. Preview deployments en PRs
4. Variables de entorno en dashboard

### Variables de Entorno
```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_GOOGLE_MAPS_KEY=...
(si se usa analytics, mapas, etc.)
```

### Dominio
- Configurar dominio custom (crica.org)
- SSL automático (Vercel lo maneja)

---

## ✅ CHECKLIST PRE-LANZAMIENTO

### Funcionalidad
- [ ] Todas las páginas cargan correctamente
- [ ] Navegación funciona en desktop y mobile
- [ ] Todos los formularios envían correctamente
- [ ] Links externos abren en nueva pestaña
- [ ] Todos los CTAs llevan a donde deben

### Contenido
- [ ] Textos finales aprobados
- [ ] Imágenes optimizadas
- [ ] Testimonios reales incluidos
- [ ] Contacto actualizado
- [ ] Números de impacto correctos

### SEO
- [ ] Meta tags en todas las páginas
- [ ] OG images funcionando
- [ ] Sitemap generado
- [ ] robots.txt configurado
- [ ] Google Analytics integrado

### Performance
- [ ] Lighthouse score 90+
- [ ] Imágenes optimizadas
- [ ] Tiempos de carga < 3s
- [ ] Mobile performance buena

### Accesibilidad
- [ ] Navegación con teclado funciona
- [ ] Contraste de colores adecuado
- [ ] Alt text en todas las imágenes
- [ ] Labels en todos los inputs
- [ ] Headings jerárquicos (h1, h2, h3...)

### Cross-Browser
- [ ] Chrome ✓
- [ ] Firefox ✓
- [ ] Safari ✓
- [ ] Edge ✓
- [ ] Mobile browsers ✓

---

## 📝 NOTAS FINALES

### Tono de Contenido
- Emotivo pero no exagerado
- Cercano y humano
- Profesional sin ser corporativo
- Inspirador sin ser naïve
- Llamados a la acción claros pero no agresivos

### Accesibilidad
- Siempre pensar en usuarios con discapacidades
- Screen readers deben funcionar perfecto
- Navegación con teclado impecable
- Contrastes de color WCAG AA mínimo

### Mantenibilidad
- Código limpio y comentado
- Componentes reutilizables
- Convenciones de nombres claras
- README con instrucciones de desarrollo

---

## 🎯 PRIORIDADES DE DESARROLLO

### FASE 1 (MVP - 2 semanas)
1. Setup inicial (Next.js + Tailwind)
2. Componentes base (Button, Card, Form, etc.)
3. Layout (Header + Footer)
4. Home completo
5. Formularios funcionales (EmailJS)
6. Deploy en Vercel

### FASE 2 (Full Site - 2 semanas)
1. Páginas secundarias (Sobre, Participar, etc.)
2. Blog estático
3. Página de Impacto con números
4. Optimización SEO
5. Testing cross-browser

### FASE 3 (Mejoras - Ongoing)
1. Integración CMS para blog
2. Dashboard en tiempo real (conectar a API CRICA)
3. Mapa interactivo de capillas
4. Tracking de equipos por QR (futuro)
5. Portal de voluntarios (login)

---

## 💡 TIPS PARA LOS MODELOS EN ANTIGRAVITY

1. **Empezá por el setup:**
   - Crear proyecto Next.js
   - Instalar dependencias (Tailwind, Framer Motion, etc.)
   - Configurar Tailwind con colores custom

2. **Componentes primero:**
   - Antes de hacer páginas, crear los componentes reutilizables
   - Testear cada componente aislado
   - Usar Storybook si es posible (opcional)

3. **Mobile-first siempre:**
   - Cada componente debe verse bien en mobile primero
   - Después agregar complejidad para desktop

4. **Commits atómicos:**
   - Commitear seguido
   - Mensajes descriptivos
   - Un feature por vez

5. **Testing continuo:**
   - Probar en mobile real (no solo DevTools)
   - Probar formularios end-to-end
   - Validar performance con Lighthouse

6. **Placeholder content:**
   - Si no hay contenido final, usar placeholders claros
   - Lorem ipsum solo para textos muy largos
   - Imágenes de placeholder con unsplash

7. **Comunicación:**
   - Si algo no queda claro, preguntar
   - Documentar decisiones tomadas
   - Alertar si hay blockers

---

## 📞 DUDAS / ITERACIONES

Si algo no está claro en estas instrucciones:
1. Revisar el documento original de CRICA
2. Preguntar a Carlos (el humano)
3. Tomar decisión razonable y documentarla

**IMPORTANTE:** Estas instrucciones son una guía, no una cárcel. Si algo no tiene sentido o hay una mejor forma, hacerlo y comunicarlo.

---

**¡Éxito en la construcción! 🚀**

**CRICA es un proyecto hermoso y merece una web a su altura.**
