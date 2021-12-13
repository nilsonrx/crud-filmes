const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => { 
    res.send('Projeto 01');
})

app.all('/*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");

    next();
})

app.get('/filmes', (req, res) => {   // Aqui é meu Endpoint para lista de filmes
    res.send(listafilmes);
})

app.get('/filmes/:id', (req, res) => {  //Aqui é meu Endpoint para buscar filmes pelo iD
    const idfilmes = req.params.id;
    const filmesencontrados = listafilmes.find(filme => filme.id == idfilmes)
    res.send(filmesencontrados);
})



const port = 3000;  //Aqui estou definindo a porta que meu serviço vai rodar
app.listen(port, () =>{
    console.log(`Projeto rodando na porta ${port}`);
})

const listafilmes = [{   // Aqui estou criando uma variavel com a minha lista de filmes 
    id : 1,
    Filme: "Indiana Jones",
    Ano : 1987,
    Produtora : "Lucas Art"
},
{
    id : 2,
    Filme: "Missão Impossível",
    Ano : 2000,
    Produtora : "Paramount Films"

}]