const express = require('express');

const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const filmesRoutes = require('./routes/routes');
app.use('/filmes', filmesRoutes);

const port = 3000;  //Aqui estou definindo a porta que meu serviço vai rodar
app.listen(port, () =>{
    console.log(`Projeto rodando na porta ${port}`);
})

