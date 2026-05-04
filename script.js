let form = document.getElementById('cadastroForm');
let lista = document.getElementById('listaAlunos');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const nome = document.getElementById('nomeAluno').value;
    const idade = document.getElementById('idadeAluno').value;
    const cpf = document.getElementById('cpfAluno').value;
    const email = document.getElementById('emailAluno').value;

    const novoItem = document.createElement('li');
    novoItem.innerHTML = `<strong>${nome}</strong> - ${idade} anos - ${cpf} - ${email}`;

    lista.appendChild(novoItem);

    form.reset(); 
});