function goToScreen(screenNumber) {
  // Ocultar todas as telas
  let screens = document.querySelectorAll(".screen");
  screens.forEach((screen) => {
    screen.style.display = "none";
  });

  // Mostrar a tela desejada
  let screenToShow = document.getElementById("screen" + screenNumber);
  screenToShow.style.display = "block";
}

// Inicializar a primeira tela
goToScreen(1);
function verifyAnswers() {
  let correctAnswers = 0;

  let q1 = document.querySelector('input[name="q1"]:checked');
  if (q1 && q1.value === "b") {
    correctAnswers++;
  }

  let q2 = document.querySelector('input[name="q2"]:checked');
  if (q2 && q2.value === "b") {
    correctAnswers++;
  }

  // Adicione verificações para outras perguntas conforme necessário.

  alert(`Você acertou ${correctAnswers} de 2 perguntas!`);
}
