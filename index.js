const express = require("express");
const app = express();

app.use(express.json());

// Endpoint GET
app.get("/cursos", (req, res) => {
  res.json([
    { id: 1, nombre: "Programación", nivel: "Básico" },
    { id: 2, nombre: "Bases de Datos", nivel: "Intermedio" }
  ]);
});

// Puerto para Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("API corriendo en puerto", PORT);
});
