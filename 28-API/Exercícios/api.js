// --- EXERCÍCIO 1: Usuários ---
async function carregarUsuarios() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const usuarios = await response.json();
    const lista = document.getElementById('lista-usuarios');

    usuarios.forEach(user => {
        console.log(`Nome: ${user.name} | Email: ${user.email}`); // Ex 31
        lista.innerHTML += `<li>${user.name} - ${user.email}</li>`; // Ex 32
    });
}
carregarUsuarios();

// --- EXERCÍCIO 2: 3 Posts Lado a Lado ---
async function carregarTresPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    const container = document.getElementById('container-posts-api');

    const tresPrimeiros = posts.slice(0, 3);
    tresPrimeiros.forEach(post => {
        container.innerHTML += `
            <div class="card-api">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>`;
    });
}
carregarTresPosts();

// --- EXERCÍCIO 3: Criar Card Manual ---
document.getElementById('btn-criar').addEventListener('click', () => {
    const titulo = document.getElementById('input-titulo').value;
    const texto = document.getElementById('input-texto').value;
    const area = document.getElementById('area-cards-criados');

    if (titulo && texto) {
        area.innerHTML += `
            <div class="card-usuario">
                <h4>${titulo}</h4>
                <p>${texto}</p>
            </div>`;
    }
});

// --- EXERCÍCIO 4: Botão Carregar ---
document.getElementById('btn-trigger-api').addEventListener('click', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    const display = document.getElementById('display-api-click');
    
    display.innerHTML = `<p><strong>Carregado via clique:</strong> ${data.name}</p>`;
});