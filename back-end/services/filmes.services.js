const filmes = [
    {
        id: 1,
        Filme: "Capitão América",
        Ano: 2000,
        Produtora: "Marvel",
        
    },
    {
        id: 2,
        Filme: "Capitão América 2",
        Ano: 2001,
        Produtora: "Marvel",
    },
    {
        id: 3,
        Filme: "Missão Impossível",
        Ano: 2000,
        Produtora: "Paramount Films",
    },
    ]

const getFilmesService = () => {
    return filmes
}

const getFilmesByIdService = (idParam) => {
    return filmes.find((filme) => filme.id == idParam)
}


const addFilme = (newFilme) => {
    
    const newId = filmes.length + 1;
    newFilme.id = newId;
    filmes.push(newFilme);
    return newFilme;
}


const putFilme = (idParam, filmeEdit) => {
    
    const index = filmes.findIndex((filme) => filme.id == idParam);

    
    if(index >= 0) {
        
        filmes[index] = {
            ...filmes[index],
            ...filmeEdit
        }
        
     
        return true
    } else {
        
        return false
    }
}

const deleteFilme = (idParam) => {
    const index = filmes.findIndex((filme) => filme.id == idParam)
   
    const filmeExcluido = filmes[index];
    filmes.splice(index, 1)
    return filmeExcluido;
}

module.exports = {
    getFilmesService,
    getFilmesByIdService,
    addFilme,
    putFilme,
    deleteFilme
}