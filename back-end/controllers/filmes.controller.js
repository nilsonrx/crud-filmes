// importo o service para poder ter acesso as funcoes que cuidam dos dados.
const FilmesService = require('../services/filmes.services');

// vai retornar uma lista de filmes pré cadastrados para o front-end
const getFilmes = (req, res) => {
    const filmes = FilmesService.getFilmesService();
    res.send(filmes);
}


const getFilmesById = (req, res) => {
    // REQ = o que vem do front pro back
    // RES = o que o backend retornar pro front
    const id = req.params.id;
    const filme = FilmesService.getFilmesByIdService(id);
    res.send(filme)
}


const postFilme = (req, res) => {

    const filme = req.body;
    console.log(req.body);
   
    const newFilme = FilmesService.addFilme(filme);
    res.send({message: `Filme ${newFilme.filme} foi cadastrado com sucesso`})
}


const putFilme = (req, res) => {
    
    const idParam = req.params.id
    
    const filmeEdit = req.body
    const edicao = FilmesService.putFilme(idParam, filmeEdit);
    if(edicao) {
        res.send({message: `O filme foi editado com sucesso!`})
    } else {
        res.status(404).send({message: `Nao encontramos filmes com esse id para editar`})
    }
}


const deleteFilme = (req, res) => {
    const filmeExcluido = FilmesService.deleteFilme(req.params.id);
    res.send(`O filme ${filmeExcluido.Filme} foi excluido com sucesso`);
}


// exportando as funcoes para serem usadas nas rotas
module.exports =  {
    getFilmes,
    getFilmesById,
    postFilme,
    putFilme,
    deleteFilme
}
