const Cliente = require("../models/clienteModel");

// Listar todos os clientes
const listarClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cadastrar novo cliente
const cadastrarCliente = async (req, res) => {
  try {
    const { nome, email, telefone } = req.body;
    const novoCliente = await Cliente.create({ nome, email, telefone });
    res.status(201).json(novoCliente);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  listarClientes,
  cadastrarCliente
};
