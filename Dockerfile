# Usa una imagen de Node.js como base
FROM node:16

# Establece el directorio de trabajo
WORKDIR /app

# Copia solo los archivos necesarios para instalar dependencias
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto del cliente
EXPOSE 3000

# Comando para iniciar el servidor de React
CMD ["npm", "start"]
