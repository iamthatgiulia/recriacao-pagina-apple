const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');
const nomeCor = document.getElementById('nome-cor-selecionada');
const miniaturaImagens0 = document.getElementById('0-imagem-miniatura');
const miniaturaImagens1 = document.getElementById('1-imagem-miniatura');
const miniaturaImagens2 = document.getElementById('2-imagem-miniatura');


const verdeCipreste = {
    nome: 'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
};

const azulInverno = {
    nome: 'Azul-inverno',
    pasta: 'imagens-azul-inverno'
};

const meiaNoite = {
    nome: 'Meia-Noite',
    pasta: 'imagens-meia-noite'
};

const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
};

const rosaClaro = {
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro'
};
// - - - - - - - - - - - - - - - - <3
const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ['41 mm', '45 mm']

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;
// - - - - - - - - - - - - - - - - <3
trocarImagem = () => {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id; //diferente do .getElementById (que só seleciona o elemento por seu ID específico), o .querySelector seleciona entre várias opçoes (você pode ate ver que no html, linha 129), como pelo seu nome, sua classe, seu tipo, ou até mesmo o ID também.
    imagemSelecionada = idOpcaoSelecionada.charAt(0); // pegue o caractere na posição 0
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';
}
// A opção que o usuário seleciona que fica como checked. (por padrão, no HTML escrevemos o checked em uma para já vir selecionada na hora que a página abre)

trocarTamanho = () => {
    //atualizar variável de controle do tamanho da caixa 
    const idOpcaoSelecionada = document.querySelector('[name = "opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
    //mudar o título do produto
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado]//texto dentro da tag do HTML
    //mudar o tamanho da imagem de acordo com a opção
    if (opcoesTamanho[tamanhoSelecionado] === '41 mm') {
        imagemVisualizacao.classList.add('caixa-pequena');
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena');
    }
}

trocarCor = () => {
    //atualizar cor selecionada 
    const idOpcaoSelecionada = document.querySelector('[name = "opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSelecionada.charAt(0);
    //trocar título da página 
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado];
    //trocar o nome da cor 
    nomeCor.innerText = "Cor - " + opcoesCores[corSelecionada].nome;
    //trocar imagens das miniaturas exibidas 
    miniaturaImagens0.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-0.jpeg';
    miniaturaImagens1.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-1.jpeg';
    miniaturaImagens2.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-2.jpeg';
    //trocar imagens de vizualização
    imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg';
}
