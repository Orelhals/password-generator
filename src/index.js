// selecionar quem vai ser usado na brincadeira

const $generatePasswordButton = document.querySelector("#generate-password");
const $generatedPasswordElement = document.querySelector("#generated-password");

//Eventos:
const $gerarSenha = $generatePasswordButton.addEventListener(
  "click",
  generateRandomString
);

// Funções:

function generateRandomString() {
  console.log("oi");
}
