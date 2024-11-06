# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos de configuración
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto en el que se ejecutará el servidor
EXPOSE 5000

# Comando para ejecutar la aplicación
CMD ["node", "index.js"] # Cambia "index.js" por el archivo principal de tu servidor
