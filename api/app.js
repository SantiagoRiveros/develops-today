const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(express.json());

app.use(cors());

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
