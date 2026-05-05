// 1. Renderização condicional
const user = "admin";
const pass = "123";

if (user === "admin" && pass === "123") {
    document.getElementById("admin").innerHTML = "<h1>Painel Admin</h1>";
} else {
    document.getElementById("admin").innerHTML = "<h1>Acesso Negado</h1>";
}

// 2. Lista de 10 itens (3 atributos)
const filmes = [
    { t: "Filme 1", g: "Ação", n: 10 },
    { t: "Filme 2", g: "Drama", n: 9 },
    { t: "Filme 3", g: "Comédia", n: 8 },
    { t: "Filme 4", g: "Terror", n: 7 },
    { t: "Filme 5", g: "Ficção", n: 10 },
    { t: "Filme 6", g: "Aventura", n: 9 },
    { t: "Filme 7", g: "Crime", n: 8 },
    { t: "Filme 8", g: "Mistério", n: 7 },
    { t: "Filme 9", g: "Animação", n: 10 },
    { t: "Filme 10", g: "Guerra", n: 9 }
];

const listaUI = document.getElementById("listaFavoritos");
filmes.forEach(f => {
    listaUI.innerHTML += `<li>${f.t} - ${f.g} - Nota: ${f.n}</li>`;
});

// 3. Sistema de tarefas (Array vazio)
let tarefas = [];

function add() {
    const txt = document.getElementById("inputTarefa").value;
    if (txt !== "") {
        tarefas.push(txt);
        document.getElementById("inputTarefa").value = "";
        renderizar();
    }
}

function renderizar() {
    const ul = document.getElementById("minhasTarefas");
    ul.innerHTML = "";
    tarefas.forEach(t => {
        ul.innerHTML += `<li>${t}</li>`;
    });
}