# Guía de Despliegue con Vercel

## ¿Por qué Vercel?

- ✅ Optimizado para Next.js (creado por el mismo equipo)
- ✅ Soporte completo para SSR y API Routes
- ✅ Despliegues automáticos desde Git
- ✅ Dominio personalizado
- ✅ Variables de entorno seguras
- ✅ Gratis para proyectos públicos

## Pasos de Despliegue

### 1. **Crear cuenta en Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Haz clic en "Sign Up"
   - Autentica con tu cuenta de GitHub

### 2. **Conectar tu repositorio**
   - En Vercel, haz clic en "New Project"
   - Selecciona tu repositorio `EHP-Web-site`
   - Vercel detectará automáticamente que es un proyecto Next.js

### 3. **Configurar variables de entorno**
   - En la pantalla de configuración del proyecto, ve a "Environment Variables"
   - Agrega tu clave de API:
     ```
     Name: GEMINI_API_KEY
     Value: [tu_clave_gemini_aqui]
     ```
   - Haz clic en "Save"

### 4. **Desplegar**
   - Haz clic en "Deploy"
   - Espera a que se complete el build (2-3 minutos)
   - ¡Tu sitio estará disponible en una URL `*.vercel.app`

## Despliegues Posteriores

- **Automático**: Cada push a `main` desencadena un nuevo despliegue
- **Preview**: Cada Pull Request obtiene una URL de vista previa
- **Manual**: Puedes redeplegar desde el dashboard de Vercel

## Dominio Personalizado (Opcional)

1. En Vercel, ve a "Settings" → "Domains"
2. Agrega tu dominio personalizado
3. Configura los registros DNS según las instrucciones de Vercel
4. Tu sitio estará disponible en tu dominio personalizado

## Monitoreo y Logs

- Accede a los logs en tiempo real: Dashboard → Deployments → [último deploy] → Logs
- Monitorea métricas de rendimiento en "Analytics"
- Recibe alertas de errores en "Monitoring"

## Troubleshooting

### Error: GEMINI_API_KEY no definida
- Verifica que la variable esté en "Environment Variables"
- Redeploya el proyecto después de agregar la variable

### Error de build
- Revisa los logs en el dashboard de Vercel
- Asegúrate de que `npm install` y `npm run build` funcionan localmente

### Sitio lento
- Verifica la región de despliegue
- Revisa "Analytics" para identificar cuellos de botella

## Comandos Útiles

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar desde la terminal
vercel

# Desplegar a producción
vercel --prod

# Ver logs
vercel logs
```

## URLs Importantes

- **Dashboard**: https://vercel.com/dashboard
- **Documentación**: https://vercel.com/docs/next.js
- **Soporte**: https://vercel.com/support
