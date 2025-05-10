let intro = document.getElementById("intro");
let card = document.getElementById("card");
let simButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let startButton = document.getElementById("start");
let attempts = 0; // Contador de tentativas de clicar no botão "Sim"

// Alternar para a pergunta principal ao clicar no botão "Sim" da introdução
startButton.addEventListener("click", function () {
  intro.style.display = "none"; // Oculta a introdução
  card.style.display = "block"; // Exibe a pergunta principal
});

// Exibir a mensagem caso seja selecionado o 'sim'
simButton.addEventListener("click", function () {
  if (attempts < 5) {
    alert("Você precisa tentar mais vezes!");
  } else {
    document.getElementById("question").style.display = "none";
    document.querySelector(".answer").style.display = "flex";
  }
});

// Movimento aleatório do botão 'sim' ao passar o mouse
simButton.addEventListener("mouseover", function () {
  if (attempts < 5) {
    let width = window.innerWidth - 50;
    let height = window.innerHeight - 50;

    this.style.position = "absolute";
    this.style.top = Math.random() * height + "px";
    this.style.left = Math.random() * width + "px";

    attempts++;
  } else {
    this.style.position = "static";
  }
});

// Exibir a mensagem caso seja selecionado o 'não'
;