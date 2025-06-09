
/*
  O que precisamos fazer? - Quando o usuário clicar no botão "Aplicar filtros", vamos filtrar as cartas baseado na categoria e no preço máximo selecionados
    OBJETIVO 1 - Criar a funcionalidade de filtrar as cartas
        passo 1 - pegar o botao de aplicar filtros  do HTML e mandar pro JS
        passo 2 - escutar o clique no botão de aplicar filtros
        passo 3 - pegar os valores dos campos de categoria e preço
        passo 4 - para cada carta, verificar se ela deve ser mostrada ou escondida 
*/

// passo 1 - pegar o botao de aplicar filtros  do HTML e mandar pro JS
const buttonFilter = document.querySelector('.button-filter');

// passo 2 - escutar o clique no botão de aplicar filtros
buttonFilter.addEventListener('click', function () {
    //  passo 3 - pegar os valores dos campos de categoria e preço
    const categorySelected = document.querySelector('#categories').value;
    const maxpriceSelected = document.querySelector('#price').value;

    // passo 4 - para cada carta, verificar se ela deve ser mostrada ou escondida
    const cards = document.querySelectorAll('.card');

    cards.forEach(function (card) {
        const cardCategory = card.dataset.categories;
        const cardPrice = card.dataset.price;

        let showCard = true;

        if (categorySelected !== '' && categorySelected.toLowerCase() !== cardCategory.toLowerCase()) {
            showCard = false;
        }
        if (maxpriceSelected !== '' && parseFloat(cardPrice) > parseFloat(maxpriceSelected)) {
            showCard = false;
        }

        if (showCard) {
        card.classList.add('show');
        card.classList.remove('hide');
    } else {
        card.classList.remove('show');
        card.classList.add('hide');
    }
})



});
