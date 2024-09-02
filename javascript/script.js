const senhaLinha = document.getElementById('senha-linha');
const senhaCaixa = document.getElementById("senha-caixa");
const senhaMostrar = document.getElementById("mostrar");
const btnGerar = document.getElementById("gerar");
const btnCopiar = document.getElementById("copiar");
const lugarPassword = document.getElementById("password");
const containerSenha = document.querySelector(".senha");
const inputSenha = document.querySelectorAll(".senha-marcavel");
const letramaiuscula = document.getElementById('maiscula');
const letraMinuscula = document.getElementById('minuscula');
const numero = document.getElementById('numero');
const simbolo = document.getElementById('simbolo');
const senhaCopyInputs = document.querySelectorAll(".senha-copy");

letraMinuscula.value = "abcdefghijklmnopqrstuvwxyz";
letramaiuscula.value = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
numero.value = "0123456789";
simbolo.value = "!@#$%&*()_+";

senhaLinha.oninput = function () {
    senhaMostrar.innerHTML = this.value;
    senhaCaixa.value = this.value;
};

senhaCaixa.oninput = function () {
    senhaMostrar.innerHTML = this.value;
    senhaLinha.value = this.value;
};

let novaSenha = "";
let senha = "";

btnGerar.addEventListener("click", geracaoSenha);

function geracaoSenha() {
    senha = ""; // Resetar a senha a cada geração

    inputSenha.forEach(function(dados) {
        if (dados.checked) {
            senha += dados.value;
        }
    });

    let pass = '';

    for (let i = 0, n = senha.length; i < senhaLinha.value; i++) {
        pass += senha.charAt(Math.floor(Math.random() * n));
    }

    containerSenha.style.display = "flex";
    lugarPassword.innerHTML = pass;

    novaSenha = pass;
}

lugarPassword.addEventListener("click", function() {
    alert("Senha copiada com sucesso");
    navigator.clipboard.writeText(novaSenha);
});

btnCopiar.addEventListener("click", function() {
senhaCopyInputs.forEach(function(input) {
    input.value = novaSenha;
});
navigator.clipboard.writeText(novaSenha)
});