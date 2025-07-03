const Veiculo = require('../models/veiculo.model');

async function listar(req, res) {
  const veiculos = await Veiculo.getAll();
  res.render('veiculos', { veiculos });
}

module.exports = { listar };