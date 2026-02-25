# ⚡ Guía Rápida: Instalar en Hosting Tradicional (cPanel)

Si tienes un hosting con cPanel y quieres instalar tu página web rápidamente, sigue estos pasos.

## 📋 Requisitos Previos

- Acceso a cPanel de tu hosting
- Tu dominio apuntando al hosting
- Conexión a Internet

## 🚀 Pasos Rápidos (5 minutos)

### Paso 1: Descargar y Compilar

En tu computadora:

```bash
# Descargar los archivos desde Manus
# (Ve a Code → Download All Files)

# Extraer el ZIP
unzip dagar-abogados-web.zip
cd dagar-abogados-web

# Instalar dependencias (si tienes Node.js)
npm install
# o
pnpm install

# Compilar para producción
npm run build
# o
pnpm build
```

Esto creará una carpeta `dist/public` con todos los archivos listos.

### Paso 2: Acceder a cPanel

1. Ve a `https://tu-dominio.com:2083` o `https://tu-hosting.com/cpanel`
2. Inicia sesión con tus credenciales

### Paso 3: Subir Archivos

1. En cPanel, haz clic en **"File Manager"**
2. Navega a **"public_html"**
3. Elimina los archivos que haya (si es la primera vez)
4. Sube todos los archivos de `dist/public`:
   - Puedes arrastrar y soltar
   - O usar "Upload" para seleccionar archivos
5. **Importante**: Asegúrate de que `index.html` está en la raíz de `public_html`

### Paso 4: Crear .htaccess

1. En File Manager, haz clic derecho en la carpeta `public_html`
2. Selecciona **"Create New File"**
3. Nombra el archivo `.htaccess`
4. Haz clic en el archivo y selecciona **"Edit"**
5. Copia y pega esto:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

6. Guarda el archivo

### Paso 5: Configurar SSL (HTTPS)

1. En cPanel, busca **"AutoSSL"** o **"SSL/TLS"**
2. Haz clic en **"Install"** o **"Manage"**
3. Selecciona tu dominio
4. Haz clic en **"Install"**
5. Espera a que se instale (puede tardar 24 horas)

### Paso 6: Verificar

1. Abre tu navegador
2. Ve a `https://tu-dominio.com`
3. ¡Deberías ver tu página web!

## ✅ Verificación

- [ ] La página carga correctamente
- [ ] El HTTPS funciona (candado verde)
- [ ] Los enlaces internos funcionan
- [ ] El formulario de contacto aparece
- [ ] El botón de WhatsApp funciona
- [ ] Se ve bien en móvil

## 🐛 Problemas Comunes

### "Error 404 - Página no encontrada"

**Solución**: Verifica que `.htaccess` está en `public_html` y contiene el código correcto.

### "Error 500 - Internal Server Error"

**Solución**: 
1. Verifica los permisos de carpetas (755)
2. Comprueba que `.htaccess` no tiene errores de sintaxis
3. Contacta con tu proveedor de hosting

### "El sitio no carga"

**Solución**:
1. Verifica que `index.html` está en `public_html`
2. Comprueba que el dominio apunta al hosting correcto
3. Espera 24 horas para que los cambios de DNS se propaguen

### "HTTPS no funciona"

**Solución**:
1. Espera 24 horas a que Let's Encrypt instale el certificado
2. Fuerza HTTPS en `.htaccess`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

## 📞 Soporte

Si necesitas ayuda:
- Contacta con tu proveedor de hosting
- Revisa la documentación de cPanel
- Busca en Google el error específico

---

**¡Listo! Tu página web está instalada. Ahora configura EmailJS siguiendo la guía EMAILJS_SETUP.md.**
