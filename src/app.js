const express = require('express');
const app = express();
const veiculoRoutes = require('./routes/veiculo.routes');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(veiculoRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000/veiculos');
});