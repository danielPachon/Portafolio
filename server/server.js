const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors"); // Importa el paquete cors

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para CORS
app.use(cors()); // Permitir todas las solicitudes CORS

// Middleware para analizar JSON
app.use(bodyParser.json());

// Conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST || "db",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_DATABASE || "contactsdb",
});

// Verifica la conexión a la base de datos
db.connect((err) => {
  if (err) {
    console.error("Error de conexión a la base de datos:", err);
    return;
  }
  console.log("Conectado a la base de datos MySQL");
});

// Ruta para manejar el contacto
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Validar que los campos no estén vacíos
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Todos los campos son obligatorios." });
  }

  // Aquí se guarda el contacto en la base de datos
  const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
  db.query(sql, [name, email, message], (error, results) => {
    if (error) {
      console.error("Error al insertar en la base de datos:", error);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
    res.status(200).json({ message: "Mensaje recibido" });
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});