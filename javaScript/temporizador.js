//estado inicial del temporizador, tiempo/valor timer, si está activo y los segundos restantes.
let timer = 0;
let isRunning = false;
let remainingSeconds = 0;

//Botones disponibles.
let empezarButton = document.getElementById("empezar");
let continuarPausarButton = document.getElementById("continuarPausar");
let detenerButton = document.getElementById("detener");
let timerInput = document.getElementById("inputTime");

//Estado inicial de los botones.
continuarPausarButton.disabled = true;
detenerButton.disabled = true;

//esta función inicia el temporizador, actualiza el display cada segundo, deshabilita el boton empezarButton y el input, y habilita los otros botones.
function startTimer() {
  timer = setInterval(updateTimer, 1000);
  isRunning = true;

  empezarButton.disabled = true;
  timerInput.disabled = true;
  continuarPausarButton.disabled = false;
  detenerButton.disabled = false;
}

//Esta función reanuda o pausa y actualiza el texto del botón continuarPausarButton
function continuePauseTimer() {
  if (!isRunning) {
    timer = setInterval(updateTimer, 1000);
    document.getElementById("continuarPausar").textContent = "Pausar";
    isRunning = true;
  } else {
    clearInterval(timer);
    document.getElementById("continuarPausar").textContent = "Continuar";
    isRunning = false;
  }
}

//Esta función restaura a su valor inicial a todas las propiedades del timer, display y botones.
function resetTimer() {
  clearInterval(timer);

  document.getElementById("continuarPausar").textContent = "Pausar";
  document.getElementById("inputTime").value = "";
  updateDisplay();
  document.getElementById("display").textContent = "--";

  isRunning = false;
  remainingSeconds = 0;

  empezarButton.disabled = false;
  timerInput.disabled = false;
  continuarPausarButton.disabled = true;
  detenerButton.disabled = true;
}

//actualiza el timer según pasa el tiempo.
function updateTimer() {
  if (remainingSeconds > 0) {
    remainingSeconds--;
  } else {
    clearInterval(timer);
    document.getElementById("continuarPausar").textContent = "Iniciar";
    document.getElementById("inputTime").inpuContent = "";

    isRunning = false;

    resetTimer();
    return;
  }
  updateDisplay();
}

//Actualiza el display según los remainingSeconds
function updateDisplay() {
  let minutes = Math.floor((remainingSeconds % 3600) / 60);
  let seconds = remainingSeconds % 60;
  document.getElementById("display").textContent = `${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
}

// Escuchar el evento "input" para actualizar dinámicamente el display.
document.getElementById("inputTime").addEventListener("input", () => {
  let inputSeconds = parseInt(document.getElementById("inputTime").value);
  if (!isNaN(inputSeconds) && inputSeconds >= 0) {
    remainingSeconds = inputSeconds;
    updateDisplay();
  }
});

//Llamado de las funciones una vez sea necesario según el boton.
empezarButton.addEventListener("click", startTimer);
continuarPausarButton.addEventListener("click", continuePauseTimer);
detenerButton.addEventListener("click", resetTimer);
