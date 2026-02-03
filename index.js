const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/cursos", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json([
    { id: 1, nombre: "Programación" },
    { id: 2, nombre: "Bases de Datos" },
    { id: 3, nombre: "Sitios" }
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("API corriendo correctamente");
});
