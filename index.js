/* 
    Quando clicar no pokemon da listagem temos que esconder o cartão do pokemon aberto e mostrar o cartão correspondente ao que foi selecionado.

    pra isso vamos precisar trabalhar com dois elementos 
    1 - listagem
    2 - cartão pokemon

    precisamos criar duas variaves no JS pra trabalhar com os elementos da tela

    vamos precisar trablahar com um evento de clique feito pelo usuario na listagem de pokemons

    - remover a classe aberto só do cartão que está aberto
    - ao clicar em um pokeomn da listagem pegamos o ID desse pokemon pra saber qual cartão mostrar
    - remover a classe ativo que marca o pokemon selecionado
    - adicionar a classe ativo no item da lista selecionado
*/

//  precisamos criar duas variaves no JS pra trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    //vamos precisar trablahar com um evento de clique feito pelo usuario na listagem de pokemons

    pokemon.addEventListener('click', () => {
        // remover a classe aberto só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')


         // ao clicar em um pokeomn da listagem pegamos o ID desse pokemon pra saber qual cartão mostrar
         const idPokemonSelecionado = pokemon.attributes.id.value

         const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
         cartaoPokemonParaAbrir.classList.add('aberto')

    })
})



