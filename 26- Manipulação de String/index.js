const nome = "Beatriz";
let sobrenome = "Santos";
var nomedomeio = "Mozaner";

const nomeCompleto = nome + " " + nomedomeio + " " + sobrenome;

const nomeCompletoMinusculo = nomeCompleto.toLowerCase();
console.log(nomeCompletoMinusculo);

const nomeCompletoMaiusculo = nomeCompleto.toUpperCase();
console.log(nomeCompletoMaiusculo);

const comprimentoNomeCompleto = nomeCompleto.length;
console.log(comprimentoNomeCompleto);

const indiceSobrenome = nomeCompleto.indexOf(sobrenome);
console.log(indiceSobrenome);

const parteDoNome = nomeCompleto.slice(0, 6);
console.log(parteDoNome);

const nomeCompletoAlterado = nomeCompleto.replace("Beatriz", "Alice");
console.log(nomeCompletoAlterado);

const partesDoNome = nomeCompleto.split(" ");
console.log(partesDoNome);


const nomeComEspacos = " " + nomeCompleto + " ";
const nomeSemEspacos = nomeComEspacos.trim();
console.log(nomeSemEspacos);

//Método includes()
const temSobrenome = nomeCompleto.includes(sobrenome);
console.log(temSobrenome);

//Método charAt()
const primeiraLetra = nomeCompleto.charAt(0);
console.log(primeiraLetra);

//Método substring()
const parteDoNome2 = nomeCompleto.substring(0, 6);
console.log(parteDoNome2);

//Método startsWith()
const comecaComBeatriz = nomeCompleto.startsWith("Beatriz");
console.log(comecaComBeatriz);

//Método endsWith()
const terminaComSantos = nomeCompleto.endsWith("Santos");
console.log(terminaComSantos);

//Método repeat()
const nomeRepetido = nome.repeat(6);
console.log(nomeRepetido);

//Método padStart()
const nomePaddedStart = nome.padStart(10, "*");
console.log(nomePaddedStart);

//Método padEnd()
const nomePaddedEnd = nome.padEnd(10, "*");
console.log(nomePaddedEnd);

//-------------------Exercícios-------------------

//1

function arrumarNomeUsuario(nomeCompleto) {
    return nomeCompleto.trim().toLowerCase();
}
const usuarioLimpo = arrumarNomeUsuario("  Beatriz Mozaner Santos  ");
console.log(usuarioLimpo);

//2
function buscarPalavra(texto, alvo) {
    const palavras = texto.toLowerCase().split(" ");
    const resultado = palavras.filter(p => p === alvo.toLowerCase());
    return `A palavra "${alvo}" aparece ${resultado.length} vezes.`;
}

const meuTexto = "Estou estudando JavaScript, JavaScript é a linguagem da web";
console.log(buscarPalavra(meuTexto, "JavaScript")); 

//3
function formatarNomes(texto) {
  return texto.toLowerCase().split(' ').map(p => 
    p.charAt(0).toUpperCase() + p.slice(1)
  ).join(' ');
}

console.log(formatarNomes("BEATRIZ TORRES MOZANER DOS SANTOS"));

//4

function validarSenha(senha) {
    const senhaValida = 
        senha.length >= 8 && 
        /[A-Z]/.test(senha) && 
        /[a-z]/.test(senha) && 
        /[0-9]/.test(senha) && 
        /[!@#$%^&*]/.test(senha);

    return senhaValida ? "Senha válida " : "Senha inválida ";
}

console.log(validarSenha("Bia@1234"));