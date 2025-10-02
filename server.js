const express = require("express");
const dotenv = require("dotenv");
const clienteRoutes = require("./routes/clienteRoutes");
const sequelize = require("./config/database");

dotenv.config();

const app = express();
app.use(express.json());

// Rotas
app.use("/api/clientes", clienteRoutes);

// Sincronizar banco e iniciar servidor
sequelize.sync()
  .then(() => {
    console.log("Banco sincronizado!");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  })
  .catch(err => console.error("Erro ao sincronizar banco:", err));
