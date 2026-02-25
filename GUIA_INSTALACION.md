# 🚀 Guía Completa de Instalación - Dagar Abogados Web

Esta guía te mostrará cómo instalar tu página web en tu dominio y servidor. Hay varias opciones disponibles según tus necesidades y presupuesto.

---

## 📋 Tabla de Contenidos

1. [Opción 1: Usar Manus (Recomendado - Más Fácil)](#opción-1-usar-manus-recomendado)
2. [Opción 2: Hosting Tradicional (cPanel/Plesk)](#opción-2-hosting-tradicional-cpanelplesk)
3. [Opción 3: Servidor VPS/Dedicado](#opción-3-servidor-vpsdeicado)
4. [Opción 4: Plataformas Cloud (Vercel, Netlify, Railway)](#opción-4-plataformas-cloud)
5. [Comparativa de Opciones](#comparativa-de-opciones)

---

## Opción 1: Usar Manus (Recomendado)

### ✅ Ventajas
- **Más fácil**: Solo necesitas hacer clic en "Publish"
- **Dominio personalizado**: Conecta tu dominio en minutos
- **SSL automático**: HTTPS incluido
- **Soporte técnico**: Equipo de Manus disponible
- **Actualizaciones automáticas**: No necesitas hacer nada
- **Backups automáticos**: Tu sitio está protegido
- **CDN global**: Tu página carga rápido en todo el mundo

### 📝 Pasos para Publicar en Manus

#### Paso 1: Crear un Checkpoint (si no lo has hecho)

Ya tienes un checkpoint creado. Este es el estado actual de tu página web que será publicado.

#### Paso 2: Publicar tu Sitio

1. En la interfaz de Manus, haz clic en el botón **"Publish"** (esquina superior derecha)
2. Se abrirá una ventana con opciones de publicación
3. Selecciona **"Publish to Manus"**
4. Tu sitio estará disponible en una URL como: `https://dagar-abogados.manus.space`

#### Paso 3: Conectar tu Dominio Personalizado

1. En el panel de Manus, ve a **"Settings" → "Domains"**
2. Haz clic en **"Add Custom Domain"**
3. Ingresa tu dominio (ej: `dagarabogados.es`)
4. Manus te mostrará los registros DNS que necesitas configurar
5. Ve a tu proveedor de dominios (GoDaddy, Namecheap, etc.)
6. Configura los registros DNS según las instrucciones de Manus
7. Espera 24-48 horas para que los cambios se propaguen
8. ¡Listo! Tu dominio estará conectado

### 💰 Costos

- Hosting: Incluido en tu suscripción de Manus
- Dominio: Puedes comprar directamente en Manus o usar uno existente
- SSL: Incluido automáticamente

---

## Opción 2: Hosting Tradicional (cPanel/Plesk)

### ✅ Ventajas
- Muy común y barato
- Fácil de usar con cPanel/Plesk
- Muchos proveedores disponibles

### ⚠️ Desventajas
- Requiere más configuración técnica
- No incluye soporte técnico especializado
- Rendimiento puede ser variable

### 📝 Pasos de Instalación

#### Paso 1: Preparar los Archivos

1. Descarga los archivos de tu proyecto desde Manus:
   - Ve a **"Code"** en el panel de Manus
   - Haz clic en **"Download All Files"**
   - Se descargará un archivo ZIP

2. Extrae el archivo ZIP en tu computadora

3. Construye el proyecto para producción:
   ```bash
   cd dagar-abogados-web
   pnpm install
   pnpm build
   ```

4. Los archivos compilados estarán en la carpeta `dist/public`

#### Paso 2: Subir Archivos al Hosting

1. Accede a tu cPanel/Plesk
2. Abre el **File Manager**
3. Navega a la carpeta `public_html` (o `www`)
4. Sube todos los archivos de `dist/public` a esta carpeta
5. Asegúrate de que `index.html` esté en la raíz

#### Paso 3: Configurar el Dominio

1. En cPanel, ve a **"Addon Domains"** o **"Domains"**
2. Añade tu dominio
3. Apunta la raíz del documento a la carpeta donde subiste los archivos

#### Paso 4: Configurar SSL (HTTPS)

1. En cPanel, ve a **"AutoSSL"** o **"SSL/TLS"**
2. Instala un certificado SSL gratuito (Let's Encrypt)
3. Espera a que se instale (puede tardar 24 horas)

#### Paso 5: Configurar Reescritura de URLs

Para que el enrutamiento funcione correctamente, necesitas crear un archivo `.htaccess`:

1. En el File Manager, crea un nuevo archivo llamado `.htaccess`
2. Añade este contenido:

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

3. Guarda el archivo

### 💰 Costos

- Hosting: $5-15 USD/mes
- Dominio: $10-15 USD/año
- SSL: Gratuito (Let's Encrypt)

---

## Opción 3: Servidor VPS/Dedicado

### ✅ Ventajas
- Control total del servidor
- Mejor rendimiento
- Escalabilidad ilimitada

### ⚠️ Desventajas
- Requiere conocimientos técnicos
- Más caro
- Necesitas administrar el servidor

### 📝 Pasos de Instalación (Ubuntu/Debian)

#### Paso 1: Conectarse al Servidor

```bash
ssh root@tu_ip_del_servidor
```

#### Paso 2: Instalar Dependencias

```bash
# Actualizar sistema
apt update && apt upgrade -y

# Instalar Node.js
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
apt install -y nodejs

# Instalar pnpm
npm install -g pnpm

# Instalar Nginx
apt install -y nginx

# Instalar Certbot para SSL
apt install -y certbot python3-certbot-nginx
```

#### Paso 3: Descargar y Preparar el Proyecto

```bash
# Crear directorio para la aplicación
mkdir -p /var/www/dagar-abogados
cd /var/www/dagar-abogados

# Descargar los archivos (opción: usar git o SCP)
# Si usas git:
git clone https://github.com/tu-usuario/dagar-abogados.git .

# O sube los archivos manualmente usando SCP:
# scp -r /ruta/local/dagar-abogados-web/* root@tu_ip:/var/www/dagar-abogados/

# Instalar dependencias
pnpm install

# Construir para producción
pnpm build
```

#### Paso 4: Configurar Nginx

1. Crea un archivo de configuración para Nginx:

```bash
nano /etc/nginx/sites-available/dagar-abogados
```

2. Añade este contenido:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name dagarabogados.es www.dagarabogados.es;

    root /var/www/dagar-abogados/dist/public;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache para archivos estáticos
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css text/javascript application/javascript application/json;
}
```

3. Habilita el sitio:

```bash
ln -s /etc/nginx/sites-available/dagar-abogados /etc/nginx/sites-enabled/
```

4. Prueba la configuración:

```bash
nginx -t
```

5. Reinicia Nginx:

```bash
systemctl restart nginx
```

#### Paso 5: Configurar SSL con Certbot

```bash
certbot --nginx -d dagarabogados.es -d www.dagarabogados.es
```

Sigue las instrucciones en pantalla.

#### Paso 6: Configurar Renovación Automática de SSL

```bash
systemctl enable certbot.timer
systemctl start certbot.timer
```

#### Paso 7: Configurar Firewall

```bash
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw enable
```

### 💰 Costos

- VPS: $5-50 USD/mes (según recursos)
- Dominio: $10-15 USD/año
- SSL: Gratuito (Let's Encrypt)

---

## Opción 4: Plataformas Cloud

### Vercel (Recomendado para React)

#### Paso 1: Preparar el Repositorio

1. Crea una cuenta en GitHub: https://github.com
2. Crea un nuevo repositorio privado
3. Sube tu código:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tu-usuario/dagar-abogados.git
git push -u origin main
```

#### Paso 2: Desplegar en Vercel

1. Ve a https://vercel.com
2. Haz clic en "Sign Up" y crea una cuenta con GitHub
3. Haz clic en "New Project"
4. Selecciona tu repositorio
5. Vercel detectará automáticamente que es un proyecto React
6. Haz clic en "Deploy"
7. ¡Tu sitio estará en línea en minutos!

#### Paso 3: Conectar Dominio

1. En Vercel, ve a "Settings" → "Domains"
2. Añade tu dominio
3. Sigue las instrucciones para configurar los registros DNS
4. ¡Listo!

### Netlify

Similar a Vercel, pero con interfaz ligeramente diferente:

1. Ve a https://netlify.com
2. Conecta tu repositorio de GitHub
3. Configura los comandos de build:
   - Build command: `pnpm build`
   - Publish directory: `dist/public`
4. Haz clic en "Deploy"

### Railway

Buena opción si necesitas backend también:

1. Ve a https://railway.app
2. Crea una cuenta
3. Conecta tu repositorio de GitHub
4. Railway detectará automáticamente tu proyecto
5. Configura las variables de entorno si es necesario
6. ¡Listo!

### 💰 Costos

- **Vercel**: Gratuito para proyectos estáticos
- **Netlify**: Gratuito para proyectos estáticos
- **Railway**: Gratuito (con límites), luego $5+/mes
- Dominio: $10-15 USD/año

---

## Comparativa de Opciones

| Característica | Manus | Hosting Tradicional | VPS | Vercel/Netlify |
|---|---|---|---|---|
| **Facilidad** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ |
| **Costo** | Incluido | $5-15/mes | $5-50/mes | Gratuito |
| **Rendimiento** | Excelente | Bueno | Excelente | Excelente |
| **Soporte** | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ |
| **SSL** | Automático | Gratuito | Gratuito | Automático |
| **Actualizaciones** | Automáticas | Manual | Manual | Automáticas |
| **Escalabilidad** | Buena | Limitada | Excelente | Excelente |

---

## 🎯 Recomendación Final

Para tu caso (página web de abogados), recomiendo:

### **Opción 1: Manus (Más Recomendado)**
- Publicar directamente desde Manus
- Conectar tu dominio personalizado
- Ventajas: Fácil, seguro, soporte técnico, actualizaciones automáticas

### **Opción 2: Vercel (Si prefieres independencia)**
- Subir a GitHub
- Desplegar en Vercel
- Ventajas: Gratuito, rápido, fácil de actualizar

### **Opción 3: Hosting Tradicional (Si ya tienes uno)**
- Si ya tienes un hosting contratado
- Sube los archivos compilados
- Ventajas: Económico, familiar

---

## 🔧 Mantenimiento y Actualizaciones

### Después de la Instalación

1. **Prueba tu sitio**: Verifica que todo funciona correctamente
2. **Configura EmailJS**: Sigue la guía EMAILJS_SETUP.md
3. **Monitorea el rendimiento**: Usa Google PageSpeed Insights
4. **Actualiza contenido**: Añade nuevos artículos al blog regularmente
5. **Haz backups**: Guarda copias de seguridad regularmente

### Actualizaciones Futuras

Si necesitas hacer cambios:

1. **En Manus**: Edita directamente en el panel, crea un checkpoint y publica
2. **En Vercel/Netlify**: Sube cambios a GitHub, se despliegan automáticamente
3. **En hosting tradicional**: Sube los archivos compilados manualmente

---

## 🆘 Solución de Problemas

### "Mi sitio no carga"

1. Verifica que los archivos están en la ubicación correcta
2. Comprueba los permisos de carpetas (755 para carpetas, 644 para archivos)
3. Revisa los logs del servidor
4. Verifica que el dominio apunta a la IP correcta

### "Recibo error 404"

1. Asegúrate de que `.htaccess` está configurado correctamente
2. Verifica que `index.html` está en la raíz
3. Comprueba que el servidor soporta reescritura de URLs

### "El formulario no envía emails"

1. Verifica que EmailJS está configurado correctamente
2. Comprueba que tus credenciales son válidas
3. Revisa la consola del navegador para ver mensajes de error

### "El sitio es muy lento"

1. Habilita compresión Gzip
2. Usa un CDN
3. Optimiza las imágenes
4. Habilita caché del navegador

---

## 📞 Soporte Técnico

Si necesitas ayuda:

- **Para Manus**: Contacta con el equipo de Manus
- **Para Vercel**: Consulta la documentación: https://vercel.com/docs
- **Para Netlify**: Consulta la documentación: https://docs.netlify.com
- **Para VPS**: Busca en DigitalOcean Community: https://www.digitalocean.com/community

---

## ✅ Checklist Final

Antes de publicar, verifica:

- [ ] Todos los textos están correctos
- [ ] Las imágenes se cargan correctamente
- [ ] El formulario de contacto funciona
- [ ] El botón de WhatsApp funciona
- [ ] Los enlaces internos funcionan
- [ ] El sitio se ve bien en móvil
- [ ] El sitio se ve bien en desktop
- [ ] Los emails se envían correctamente
- [ ] El SSL/HTTPS está habilitado
- [ ] El dominio apunta correctamente

---

**¡Felicidades! Tu página web está lista para ser publicada. Elige la opción que mejor se adapte a tus necesidades y sigue los pasos. Si tienes dudas, no dudes en contactarme.**
