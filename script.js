let sliderElement = document.querySelector("#slider"); // Pega o elemento do slider
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");// Pega o elemento que mostra o tamanho da senha
let password = document.querySelector("#password");// Pega o elemento que mostra a senha

let containerPassword = document.querySelector("#container-password");// Pega o container da senha

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!';// Caracteres que podem ser usados na senha
let novaSenha = '';// Variável que armazena a senha gerada

sizePassword.innerHTML = sliderElement.value;// Mostra o tamanho da senha

slider.oninput = function() {// Muda o tamanho da senha
  sizePassword.innerHTML = this.value; // Mostra o tamanho da senha
}


function generatePassword(){// Gera a senha

  let pass = '';// Variável que armazena a senha gerada
  for(let i = 0, n = charset.length; i < sliderElement.value; ++i){// Gera a senha // Adiciona um caractere aleatório da variável charset na variável pass
    pass += charset.charAt(Math.floor(Math.random() * n));// Adiciona um caractere aleatório da variável charset na variável pass
  }
  
  console.log(pass)// Mostra a senha no console
  containerPassword.classList.remove("hide");// Mostra o container da senha
  password.innerHTML = pass;// Mostra a senha no container
  novaSenha = pass;// Armazena a senha gerada
}

function copyPassword(){// Copia a senha
  alert("Senha copiada com sucesso!")// Mostra um alerta
  navigator.clipboard.writeText(novaSenha);// Copia a senha
}
