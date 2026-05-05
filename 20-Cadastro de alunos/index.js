// Array que armazenará os alunos
let alunos = [];

// --- MÁSCARAS ---
function aplicarMascaras() {
    document.getElementById("cpf").addEventListener("input", (e) => {
        let v = e.target.value.replace(/\D/g, "");
        v = v.replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        e.target.value = v;
    });

    document.getElementById("telefone").addEventListener("input", (e) => {
        let v = e.target.value.replace(/\D/g, "");
        v = v.replace(/^(\d{2})(\d)/g, "($1) $2").replace(/(\d)(\d{4})$/, "$1-$2");
        e.target.value = v;
    });
}
aplicarMascaras();

// --- FUNÇÃO PRINCIPAL ---
function cadastrarAluno() {
  let nome = document.getElementById("nome").value;
  let telefone = document.getElementById("telefone").value;
  let email = document.getElementById("email").value;
  let cpf = document.getElementById("cpf").value;

  // Validação de Nome Completo
  if (!validarNome(nome)) {
    alert("Digite o nome completo (pelo menos nome e sobrenome)!");
    return;
  }

  if (!validarEmail(email)) return alert("Email inválido!");
  if (!validarCPF(cpf)) return alert("CPF inválido!");
  if (telefone.length < 14) return alert("Telefone incompleto!");

  let aluno = { nome, telefone, email, cpf };
  alunos.push(aluno);
  listarAlunos();
  limparCampos();
}

// --- VALIDAÇÃO DE NOME ---
function validarNome(nome) {
  // Remove espaços extras no início e fim
  nome = nome.trim();
  // Divide o nome pelos espaços em branco
  let partes = nome.split(" ");
  // Verifica se tem pelo menos 2 partes e se a segunda não está vazia
  return partes.length >= 2 && partes[1] !== "";
}

// --- VALIDAÇÃO REAL DE CPF ---
function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, "");
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  
  let soma = 0, resto;
  for (let i = 1; i <= 9; i++) soma += parseInt(cpf[i-1]) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf[9])) return false;

  soma = 0;
  for (let i = 1; i <= 10; i++) soma += parseInt(cpf[i-1]) * (12 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf[10])) return false;

  return true;
}

// --- FUNÇÕES AUXILIARES ---
function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function listarAlunos() {
  let lista = document.getElementById("listaAlunos");
  lista.innerHTML = ""; 
  for (let i = 0; i < alunos.length; i++) {
    let li = document.createElement("li");
    li.textContent = `${alunos[i].nome} | ${alunos[i].cpf} | ${alunos[i].telefone}`;
    lista.appendChild(li);
  }
}

function limparCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("cpf").value = "";
}