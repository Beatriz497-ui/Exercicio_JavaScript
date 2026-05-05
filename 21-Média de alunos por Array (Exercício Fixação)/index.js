let notas = [];

function adicionarNota() {
  let input = document.getElementById("nota");
  let valor = parseFloat(input.value);

  // Validação simples e limite em uma única condição
  if (!valor || valor < 0 || valor > 10 || notas.length >= 5) return;

  notas.push(valor);
  document.getElementById("listaNotas").innerHTML += `<li>Nota: ${valor}</li>`;
  
  input.value = ""; // Apenas limpa o campo, sem forçar o foco
}

function calcularMedia() {
  if (notas.length === 0) return;

  let soma = notas.reduce((a, b) => a + b, 0);
  document.getElementById("resultado").innerText = `Média: ${(soma / notas.length).toFixed(1)}`;
}