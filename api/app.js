const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();
const PORT = 3001;

// Middleware to parse JSON
app.use(express.json());
// Permitir solicitudes de origen cruzado
app.use(cors());

// routes
app.use("/api", routes);

// Server
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
