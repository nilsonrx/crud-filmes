const url = 'http://localhost:3000'

// Aqui estou mapeando o elemento da lista do html.
const lista = document.getElementById('lista');

const getFilmes = async () => {
    const response = await fetch('${url}/filmes');
    const vagas = await response.json();
    filmes.map((listafilmes) =>{
        console.log(filmes);
        lista.insertAdjacentHTML('beforeend', 
        <tr>
            <td>${listafilmes.id}</td>
            <td>${listafilmes.Filme}</td>
            <td>${listafilmes.Ano}</td>
            <td>${listafilmes.Produtora}</td>
        </tr>
        )
    })
    
}

getFilmes();

const escolherFilme = async () => {
    const idDigitado = document.getElementById('idFilmes').value;
    const response = await fetch('${url}/filmes/${idDigitado}')
    const filme = await response.json();
    
    document.getElementById('filme').insertAdjacentHTML('beforeend',
    <tr>
            <td>${listafilmes.id}</td>
            <td>${listafilmes.Filme}</td>
            <td>${listafilmes.Ano}</td>
            <td>${listafilmes.Produtora}</td>
        </tr>
    )
}