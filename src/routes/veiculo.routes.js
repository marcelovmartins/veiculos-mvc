const router = require('express').Router();
const ctrl = require('../controllers/veiculo.controller');

router.get('/veiculos', ctrl.listar);

module.exports = router;