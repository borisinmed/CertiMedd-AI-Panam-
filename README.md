# CertiMed AI Panamá — prototipo institucional

**Versión:** 0.1.0 · **Idioma:** Español · **Modo:** demostración (datos ficticios)

CertiMed AI Panamá es un prototipo web para explorar flujos de gestión y verificación documental médica. No es un sistema autorizado para emitir incapacidades reales ni está conectado al MINSA/CSS. No introduzca datos reales ni información sensible.

## Arquitectura inicial
- Frontend: HTML, CSS y JavaScript estático (sin framework ni build).
- Publicación de demostración: GitHub Pages o Cloudflare Pages (plan gratuito sujeto a límites y condiciones).
- QR: generado localmente en navegador con librería QR opcional (el prototipo usa código visual/identificador; no incluye un generador QR externo).
- IA: arquitectura preparada para integrar un modelo open-source autoalojado en una fase posterior. **No hay API comercial ni inferencia real en esta versión.**
- Persistencia: localStorage solo para datos ficticios en este navegador. No es una base de datos segura.

## Ejecutar localmente
1. Descomprima el ZIP.
2. Abra `index.html` en el navegador. (Si algunas funciones del navegador restringen archivos locales, use un servidor estático como `python -m http.server 8000` y abra `http://localhost:8000`.)
3. No cargue documentos médicos reales.

## Publicación gratuita de demo
### GitHub Pages
1. Cree un repositorio público en GitHub y suba el contenido de esta carpeta.
2. En **Settings → Pages**, elija la rama `main` y la carpeta `/root` (o `/`) y guarde.
3. GitHub le dará una URL `https://<usuario>.github.io/<repositorio>/`.
La disponibilidad y condiciones del plan pueden cambiar; revise los términos vigentes.

### Cloudflare Pages
1. Suba el proyecto a GitHub.
2. En Cloudflare Pages, conecte el repositorio.
3. Configure framework preset **None**, build command vacío y output directory `/` (o raíz del proyecto).
4. Publique y use el subdominio `*.pages.dev` ofrecido.

## Estructura
- `index.html`: interfaz y navegación.
- `styles.css`: identidad visual institucional.
- `app.js`: datos de demostración, navegación, búsqueda y acciones simuladas.
- `docs/`: arquitectura, roadmap y guía institucional.
- `assets/`: marca SVG.

## Antes de producción real
Requiere revisión legal y clínica, profesional idóneo, autorización/validación institucional cuando aplique, autenticación robusta, control de acceso, cifrado, registros de auditoría, políticas de privacidad, retención, backups, infraestructura segura y pruebas. El QR por sí solo no acredita autenticidad: debe consultar un registro confiable del emisor.
