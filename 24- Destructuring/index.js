//1
const usuario = {
    nome: "Ana",
    idade: 25,
    cidade: "São Paulo"
};

const {nome, idade} = usuario;

console.log("Nome: " + nome + " Idade: " + idade + " anos.");


//2
function mostrarProduto({nome, preco}){
    console.log("Produto: ", nome);
    console.log("Preço: ", preco);
}

mostrarProduto({
    nome: "Notebook",
    preco: 3500
});


//3
const numeros = [10, 20, 30, 40];
const [primeiro, segundo] = numeros;
console.log("Primeiro: ", primeiro);
console.log("Segundo: ", segundo);


//4
const alunos = [
    {nome: "Carlos", idade: 22},
    {nome: "Maria", idade: 24},
    {nome: "João", idade: 21}
];
for(const {nome, idade} of alunos){
    console.log(`${nome} tem ${idade} anos.`);
}


//Exerícios para praticar a desestruturação

//--------------------------Desestruturação de objetos------------------------

// Destructuring de objeto 
//Use destructuring para criar as variáveis nome, idade e curso a partir do objeto aluno 
// e monstre os valores no console.

const aluno = {
  nome_aluno: "Lucas",
  idade_aluno: 20,
  curso: "ADS"
};

const { nome_aluno, idade_aluno, curso } = aluno;
console.log(nome_aluno);  
console.log(idade_aluno); 
console.log(curso);
 
//--------------------------Destructuring em função--------------------------  

const filme = {
  titulo: "Matrix",
  ano: 1999,
  diretor: "Wachowski"
};

function mostrarFilme({ titulo, ano, diretor }) {
  console.log(`Título: ${titulo}`);
  console.log(`Ano: ${ano}`);
  console.log(`Diretor: ${diretor}`);
}

mostrarFilme(filme);

//--------------------------Desestruturação de arrays-------------------------
// Extrair o primeiro e o último número do array

const numeros_exercicio = [10,20,30,40];

const [p, , , ultimo] = numeros_exercicio; 
console.log(p);
console.log(ultimo);