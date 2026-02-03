const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); 
app.use(express.json());

app.get("/cursos", (req, res) => {
  res.json([
    { id: 1, nombre: "Programación" },
    { id: 2, nombre: "Bases de Datos" }
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor activo");
});
