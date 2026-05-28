# Guía de Despliegue con GitHub Pages

## ¿Por qué GitHub Pages?

- ✅ **Gratis** - Incluido con tu repositorio GitHub
- ✅ **Integración nativa** - No necesita cuentas externas
- ✅ **Automatizado** - Despliegues automáticos con GitHub Actions
- ✅ **Fácil** - No requiere configuración compleja
- ✅ **HTTPS gratis** - Certificados SSL automáticos
- ✅ **Dominio personalizado** - Soporta dominios propios

## Requisitos Previos

1. **Clave de API de Gemini** - Necesaria para las funcionalidades de IA
2. **GitHub Pages habilitado** - En los settings del repositorio
3. **Next.js en modo export** - Ya configurado en `next.config.ts`

## Pasos de Configuración

### 1. **Agregar Secret para GEMINI_API_KEY**

Ve a tu repositorio:
- **Settings** → **Secrets and variables** → **Actions**
- Click en **New repository secret**
- **Name:** `GEMINI_API_KEY`
- **Value:** Tu clave de API de Gemini
- Click en **Add secret**

### 2. **Verificar GitHub Pages Settings**

En **Settings** → **Pages**:
- **Source:** `Deploy from a branch`
- **Branch:** `gh-pages` (se crea automáticamente)
- **Folder:** `/ (root)`

### 3. **Despliegue Automático**

El workflow se ejecuta automáticamente cuando:
- ✅ Haces push a la rama `main`
- ✅ Cada Pull Request se despliega en preview
- ✅ Puedes desencadenar manualmente desde "Actions"

## URLs de Despliegue

| Tipo | URL |
|------|-----|
| **Sitio en vivo** | `https://ehp-consulting.github.io/EHP-Web-site/` |
| **Repositorio** | `https://github.com/ehp-consulting/EHP-Web-site` |
| **Actions** | `https://github.com/ehp-consulting/EHP-Web-site/actions` |

## Monitoreo del Despliegue

1. Ve a **Actions** en tu repositorio
2. Selecciona el workflow `Deploy to GitHub Pages`
3. Haz clic en el último run
4. Verifica los logs en cada paso:
   - ✅ Checkout
   - ✅ Setup Node.js
   - ✅ Install dependencies
   - ✅ Build Next.js app
   - ✅ Deploy to GitHub Pages

## Solución de Problemas

### El sitio no aparece en la URL esperada

**Problema:** `https://ehp-consulting.github.io/EHP-Web-site/` devuelve 404

**Soluciones:**
1. Espera 1-2 minutos después del despliegue
2. Verifica que el workflow completó exitosamente en **Actions**
3. Confirma que en **Settings** → **Pages**, la rama es `gh-pages`
4. Limpia el caché del navegador (Ctrl+Shift+Delete)

### Error: "GEMINI_API_KEY not found"

**Solución:**
1. Ve a **Settings** → **Secrets and variables** → **Actions**
2. Verifica que `GEMINI_API_KEY` está creado
3. Revisa que el valor sea correcto (sin espacios)
4. Redeploya manualmente: **Actions** → **Deploy to GitHub Pages** → **Run workflow**

### Build falla con errores de dependencias

**Solución:**
1. Ejecuta localmente: `npm install && npm run build`
2. Revisa los logs en **Actions** para detalles del error
3. Si hay errores de TypeScript, revisa `next.config.ts`

### Las imágenes remotas no cargan

**Solución:**
- Las imágenes de Unsplash y Picsum deben cargar correctamente
- Si no cargan, verifica que tienes conexión a internet
- Revisa la consola del navegador para errores CORS

## Comandos Locales para Pruebas

```bash
# Instalar dependencias
npm install

# Construir para export estático (como lo hace GitHub Actions)
npm run build

# Previsualizar el build localmente
npx serve out

# Ver logs del workflow
gh run list --repo ehp-consulting/EHP-Web-site
gh run view [RUN_ID] --log --repo ehp-consulting/EHP-Web-site
```

## Dominio Personalizado (Opcional)

Si tienes un dominio propio:

1. Ve a **Settings** → **Pages**
2. En **Custom domain**, ingresa: `tudominio.com`
3. Configura DNS records:
   - `A` record: apuntando a IPs de GitHub Pages
   - O `CNAME` record: apuntando a `ehp-consulting.github.io`
4. Espera a que se verifique (5-30 minutos)

Para instrucciones detalladas: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Desactivar Despliegues

Si necesitas pausar los despliegues automáticos:
1. Ve a **.github/workflows/deploy-pages.yml**
2. Deshabilita el workflow o elimina el archivo
3. Los despliegues manuales aún funcionarán desde **Actions**

## Más Información

- **Docs GitHub Pages:** https://docs.github.com/en/pages
- **Docs GitHub Actions:** https://docs.github.com/en/actions
- **Docs Next.js Static Export:** https://nextjs.org/docs/app/building-your-application/deploying/static-exports

---

## Estado Actual ✅

- ✅ Workflow GitHub Actions configurado
- ✅ Next.js en modo `export` (static)
- ✅ Base path configurado para subdirectorio
- ✅ Listo para primer despliegue

**Próximo paso:** Agrega `GEMINI_API_KEY` a Secrets en Settings
