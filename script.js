let intro = document.getElementById("intro");
let card = document.getElementById("card");
let simButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let startButton = document.getElementById("start");
let attempts = 0; // Contador de tentativas de clicar no botão "Sim"

// Salva a posição inicial do botão "Sim"
let initialSimPosition = {
  position: simButton.style.position,
  left: simButton.style.left,
  top: simButton.style.top
};

// Alternar para a pergunta principal ao clicar no botão "Sim" da introdução
startButton.addEventListener("click", function () {
  intro.style.display = "none";
  card.style.display = "block";
});

// Movimento aleatório do botão 'sim' ao passar o mouse até 5 vezes
simButton.addEventListener("mouseenter", function () {
  if (attempts < 5) {
    const cardRect = card.getBoundingClientRect();
    const btnWidth = simButton.offsetWidth;
    const btnHeight = simButton.offsetHeight;
    const maxLeft = cardRect.width - btnWidth;
    const maxTop = cardRect.height - btnHeight;

    const left = Math.random() * maxLeft;
    const top = Math.random() * maxTop;

    simButton.style.position = "absolute";
    simButton.style.left = `${left}px`;
    simButton.style.top = `${top}px`;
    attempts++;
    // Quando atingir 5 tentativas, volta para posição inicial
    if (attempts === 5) {
      setTimeout(() => {
        simButton.style.position = initialSimPosition.position;
        simButton.style.left = initialSimPosition.left;
        simButton.style.top = initialSimPosition.top;
      }, 300);
    }
  }
});

// Redirecionar para resposta.html ao clicar em "Sim"
simButton.addEventListener("click", function () {
  if (attempts >= 5) {
    window.location.href = "resposta/resposta.html";
  } else {
    alert("Tente clicar mais vezes 😁");
  }
});

// Exibir mensagem caso seja selecionado o 'não'
noButton.addEventListener("click", function () {
  alert("Tem certeza? Clique em 'Sim' para continuar!");
});