//Mostrar o conteudo do elemento
const nome = "Melhor Terceirão do SESI";
document.getElementById("app").innerHTML = `<h1>Olá ${nome}</h1>`;

//Produto - objeto
const produto = {
    nome: "Notebook",
    preco: 3500
};

function renderProduto(){
    document.getElementById("produto").innerHTML = `
        <h2>${produto.nome}</h2>
        <p>Preço: R$ ${produto.preco}</p>
    `;
}

renderProduto()

let numero = 0;

function render() {
    document.getElementById("contador").innerHTML = `<h1>${numero}</h1>`;
}

//Clico no botão-> numero++ -> render() -> UI atualizada
function incrementar() {
    numero ++;
    render();
} 

//atualização - decrementar o contador
function decrementar(){
    numero --;
    render();
}

render();

//------------------------
//Condicional
const logado = true;

function renderStatus () {
    
    if(logado) {
        document.getElementById("status").innerHTML =
        "<p>Usuário logado</p>";
    } else {
        document.getElementById("status").innerHTML =
        "<p>Faça Login</p>";
    }
}

renderStatus();

//Lista de itens
const tarefas = [
    "Estudar JS",
    "Treinar React",
    "Fazer Exercício",
    "Fortalecer a  base"
];

function rederLista(){
    const lista = document.getElementById("lista");
    lista .innerHTML = "";

    tarefas .forEach(tarefa => {
        lista.innerHTML += `<li>${tarefa}</li>`;
    });
}
renderLista();

//Exemplo com Map

function renderListaMap(){
    const lista = document.getElementById("renderListaMap");
    lista.innerHTML = "";

    const itens = tarefas.map(tarefa => `<li>${tarefa}</li>`);
    lista.innerHTML = itens.join("");
}

renderListaMap();

//----------------------

const produtos = [
    {nome:"Mouse", preco:50},
    {nome:"Teclado", preco:120},
    {nome:"Monitor", preco: 900}
];

function renderProdutos(){

    const container = document.getElementById("produtos");

    container.innerHTML = "";

    produtos.forEach(p => {
        container.innerHTML += `
        <div>
            <h3>${p.nome}</h3>
            <p>R$ ${p.preco}<p>
        </div>
        `;
    });
}
renderProdutos()