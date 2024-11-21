# Etapa 1: Construir la aplicación React
FROM node:16 AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios para instalar dependencias
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Etapa 2: Servir la aplicación estática con nginx
FROM nginx:alpine

# Copia los archivos de construcción al servidor nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copia la configuración por defecto de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80 para nginx
EXPOSE 80

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
