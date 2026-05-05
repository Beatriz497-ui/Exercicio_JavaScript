//1
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr);


//2
const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj);


//3
const string = "Hello";
const chars = [...string];
console.log(chars);


//4
function saudacao(nome){
    return `Olá, ${nome}`;
}
const nome = ["Alice", "Bob", "Charlie"];
const greetings = nome.map(nome => saudacao(nome));
console.log(greetings);


//5
const ninhoArr = [[1, 2], [3, 4], [5, 6]];
const flatArr = ninhoArr.flat();
console.log(flatArr);


//6
const ninhoObj = {a: 1, b: {c: 2, d: 3}};
const flatObj = {...ninhoObj, ...ninhoObj.b};
delete flatObj.b;
console.log(flatObj);


//7
function multiplicar(...numeros){
    return numeros.reduce((acc, curr) => acc * curr, 1);
}
console.log(multiplicar(2, 3, 4));


//8
const arr3 = [7, 8, 9];
const obj3 =  {e: 5, f: 6};
const combinedMixed = [...arr3, ...Object.values(obj3)];
console.log(combinedMixed);


//9
const string2 = "World";
chars2 = [...string2];
console.log(chars2);


//10
const obj4 = {g: 7, h: 8};
function exibirValores({g, h}){
    console.log(`g: ${g} | h: ${h}`)
}
exibirValores(obj4);


//11
const arr4 = [9, 10, 10];
function calcularMedia(...numeros){
    const total = numeros.reduce((acc, curr) => acc + curr, 0)
    return total / numeros.length;
}
console.log(calcularMedia(...arr4));


//12
const obj5 = {i: 9, j: 10};
const arr5 = [11, 12];
const combinedObjArr = {...obj5, arr: arr5};
console.log(combinedObjArr);


//13
const arr6 = [13, 14, 8, 9, 10, 11, 12, 17, 18, 19, 20];
const newArr = [...arr6, 15, 16];
console.log(newArr);


//Exercício 1 - Copiar Array

const arr7 = [1, 2, 3, 4, 5];
const copiaArr2 = [ ...arr7];
console.log(copiaArr2);

//Exercício 2 - Juntar Array

const grupoA = ["João", "Maria"];
const grupoB = ["José", "Ana"];
const todosAlunos = [...grupoA, ...grupoB];
console.log(todosAlunos);

//Exercício 3 - Atualizar o Objeto

const obj6 = { a: 1, b: 2 };
const obj7 = { ...obj6, b: 3 };

console.log(obj6);
console.log(obj7);

//Exercício 4 - Atualizar propriedade de um objeto aninhado

const obj8 = { a: 1, b: { c: 2, d: 3 } };
const obj9 = { ...obj8, b: { ...obj8.b, d: 10 } };

console.log(obj8.b.d); 
console.log(obj9.b.d); 

//Exerício 5 
function adicionarProdutos(produtos, ...novosProdutos) {
    return [...produtos, ...novosProdutos];
}

const produtos = ["Mouse", "Teclado", "Monitor"];
const novosProdutos = ["Notebook", "Carregador"];

const produtosNovos = adicionarProdutos(produtos, ...novosProdutos);
console.log(produtosNovos);

// DESAFIO - Adicionar Média Ponderada

function calcularMediaPonderada(...notas) {
    const somaValores = notas.reduce((acc, nota, i) => acc + nota * (i + 1), 0);
    const somaPesos = notas.reduce((acc, _, i) => acc + (i + 1), 0);
    
    return somaValores / somaPesos;
}

const media = calcularMediaPonderada(7, 8, 10);
console.log(media);