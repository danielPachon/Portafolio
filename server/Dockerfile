# Usa una imagen de Node.js
FROM node:16

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos al contenedor
COPY . .

# Expone el puerto que utiliza el servidor
EXPOSE 5000

# Ejecuta el archivo server.js
CMD ["node", "server.js"]