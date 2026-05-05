//exercício 1


//forma 1 de declarar um array
let numeros = [1,2,3,4,5];

console.log(numeros);

//forma 2 de declarar um array
let nomes = new Array("Ana", "Pedro", "Lucas");
console.log(nomes);

//forma 3 de declarar um array, incorrets
const frutas = ["Maça", "Banana", "Laranja"];
console.log(frutas);

//forma 4 de declarar um array
var carros = ["Fusca", "Gol", "Palio"];
console.log(carros);

//- Como adicionar elementos a um array
//Forma 1 - usando o método push()
let cores = ["azul", "verde"];
cores.push("vermelho", "roxo"); // adiciona no final
cores.unshift("amarelo", "preto"); // adiciona no início
console.log(cores);

//lista de prioridade se > de 65 anos entra na frente, se menor no fim da fila
let idades = [17, 2, 47, 75, 35, 69, 83];
let novaLista = [];

for (let idade of idades) {
    if (idade >= 65) {
        novaLista.unshift(idade);    // Maiores de 65 vão para o início
    } else {
        novaLista.push(idade); // Menores de 65 vão para o final
    }
}

console.log(novaLista);

//Como remover elementos de um array
//Forma 1 - usando o método pop()para remover o último e o primeiro elemento

let animais = ["Cachorro", "Gato", "Anta", "Burro", "Cavalo", "Sapo", "Flamingo", "Pássaro"];
animais.pop(); //remove o último elemento 
animais.shift(); // remove o primeiro elemento 
console.log(animais);

//Exercício

let linguagem = ["HTML","CSS","JavaScript","React"];
linguagem.pop(); //remove o último elemento
linguagem .shift();//remove o primeiro elemento
console.log(linguagem);

//como remove um elemento específico de um array usando o método splice()
let cores2 = ["azul", "verde", "roxo", "vermelho", "amarelo"];
cores2.splice(2, 1); //remove o elemento "roxo"(índice 2, remove 1 elemento)
cores2.splice(1, 1);
console.log (cores2);

//------------------------Como saber o tamanho de um array --------------------------
//usando a propriedade lenght
let cidades = ["São Paulo", "Rio", "Curitiba", "Recife", "Santa Rita do Passa Quatro", "Fortaleza"];
console.log("Número de cidades:" + cidades.lenght);

//exercício de fixação 3
let alunos = ["João", "Maria", "Pedro", "Ana", "Lucas"];
console.log("Números de alunos: " + alunos.lenght);

//----------------------Como saber se uma variável é um Array----------------
//usando o método Array.isArray()

let lista = [1, 2, 2];
let lista2 = "Beatriz";
console.log(Array.isArray(lista)); //true
console.log(Array.isArray(lista2)); //false

//--------------------Como unir dois arrays-------------------------
let time1 = ["João", "Pedro"];
let time2 = ["Ana", "Maria"];
let time3 = ["Lucas", "Marcos"];
let time4 = ["Gerson", "Rosa"];
let time5 = ["Sofia", "Carlos"];

let timeCompleto = time1.concat(time2, time3, time4, time5);
console.log(timeCompleto);

//--------------Diferença entre map() e forEach()----------------------------
//FOREACH

let numerosforeach = [1, 2, 3];
numeros.forEach(function(n){
    console.log(n * 2);
});

//MAP
let numerosmap = [1, 2, 3];
let dobro = numerosmap.map(function(n){
    return n * 2;
});
console.log("Dobro: " + dobro);

//-----------------Como encontrar um elemento ---------------

let frutasDoBebe = ["maça", "banana", "manga", "melao", "pera", "uva"];
console.log(frutasDoBebe.indexOf("banana"));
console.log(frutasDoBebe.includes("uva"));

//exercício
let tecsFavoritas = ["HTML","CSS","JS","React"];
console.log(tecsFavoritas.indexOf("JS")); //2
console.log(tecsFavoritas.includes("Angular")); //False

//==============Array Esparso =======================
//Variável do tipo array que tem elementos em posições não contíguas, ou seja, com "buracos"
let arr = [];

//Atribuindo valores á índices específicos, criando um array esparso
arr[0] = "A";
arr[1] = "B";

console.log(arr); //[ "A", <2 empty itens, "B"]
console.log(arr.length); //4

//---------------------------Ordenação de arrays ------------------------

let numerosDesordenados = [5, 2, 9, 1, 5, 6];
numerosDesordenados.sort(); //CRESCENTE
console.log(numerosDesordenados);

let numerosDesordenados2 = [5, 2, 9, 1, 5, 6, 12, 54, 13, 4, 22, 76, 120 ];
numerosDesordenados2.sort((a, b) => b - a);
console.log(numerosDesordenados2);