// Array com alguns alunos cadastrados
let alunos = ["Ana", "Carlos", "Mariana", "Pedro", "Juliana", "Bia"];

function buscarAluno() {

  // Captura o valor digitado no input
  let nomeDigitado = document.getElementById("nomeBusca").value;

  // Converte para minúsculo para evitar erro de comparação
  nomeDigitado = nomeDigitado.toLowerCase();

  // Variável para controlar se encontrou ou não
  let encontrado = false;

  // Percorre todo o array
  for (let i = 0; i < alunos.length; i++) {

    // Compara o nome digitado com cada posição do array
    if (alunos[i].toLowerCase() === nomeDigitado) {
      encontrado = true;
      break; // interrompe o loop se encontrar
    }
  }
//-------------------------------------------------
  // Exibe o resultado na tela
  let resultado = document.getElementById("resultado");

  if (encontrado) {
    resultado.textContent = `Aluno(a) ${nomeDigitado} encontrada!`;
    
    //usando contatenação para mostrar o nome digitado
    resultado.textContent = "Aluno(a) " + nomeDigitado + " encontrado(a)!";

    resultado.style.color = "green";
  } else {
    resultado.textContent = `Aluno(a) ${nomeDigitado} não encontrado(a)!`;
    resultado.style.color = "red";
  }
}