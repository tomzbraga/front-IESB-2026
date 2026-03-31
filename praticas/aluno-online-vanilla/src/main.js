import './style.css'


const matricula = document.querySelector('#matricula');
const senha     = document.querySelector('#senha');
const botao     = document.querySelector('button');

botao.addEventListener('click', function() {

    const matriculaErro = document.querySelector("#matriculaErro");
    const senhaErro     = document.querySelector("#senhaErro");

    matriculaErro.textContent = '';
    senhaErro.textContent = '';

    let valido = true;

    if (matricula.value == '') {
        matriculaErro.textContent = "Matricula é obrigatória";
        valido = false;
        return;
    }

    if (parseInt(matricula.value) <= 0) {
        matriculaErro.textContent = "Matrícula inválida";
        valido = false;
        return;
    }

    if (senha.value == '') {
        senhaErro.textContent = "Senha é obrigatória";
        valido = false;
        return;
    }

    if (senha.value.length < 8) {
        senhaErro.textContent = "Senha deve conter no mínimo 8 caracteres";
        valido = false;
        return;
    }

    if (valido) {
        window.location.href = "index.html";
    }
});