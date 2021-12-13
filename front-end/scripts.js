const url = 'http://localhost:3000'

// Aqui estou mapeando o elemento da lista do html.
const lista = document.getElementById('lista');

const getFilmes = async () => {
    const response = await fetch('${url}/filmes');
    const filmes = await response.json();
    
    filmes.map((filme) =>{
        console.log(filmes);
        lista.insertAdjacentHTML('beforeend', 
        <tr>
            <th scope="row"> ${filme.id}</th>
            <td>${filme.id}</td>
            <td>${filme.Filme}</td>
            <td>${filme.Ano}</td>
            <td>${filme.Produtora}</td>
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
            <td>${filme.id}</td>
            <td>${filme.Filme}</td>
            <td>${filme.Ano}</td>
            <td>${filme.Produtora}</td>
        </tr>
    )
}