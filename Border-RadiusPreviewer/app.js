const btnCopy = document.querySelector("#btn-copy");
const inputBottomLeft = document.querySelector("#border-bottom-left-radius");
const inputBottomRight = document.querySelector("#border-bottom-right-radius");
const inputTopLeft = document.querySelector("#border-top-left-radius");
const inputTopRight = document.querySelector("#border-top-right-radius");
const frame = document.querySelector("#frame");
const inputResult = document.querySelector("#border-result");

inputBottomLeft.addEventListener("input", checkValueInput);
inputBottomRight.addEventListener("input", checkValueInput);
inputTopLeft.addEventListener("input", checkValueInput);
inputTopRight.addEventListener("input", checkValueInput);
btnCopy.addEventListener("click", copyResult);

function checkValueInput(e) {
  const value = e.target.value;
  const id = e.target.id;

  frame.style[id] = value + "%";

  // Usar la unidad correcta (% en lugar de px) para mantener consistencia
  inputResult.value = `${inputTopLeft.value}% ${inputTopRight.value}% ${inputBottomRight.value}% ${inputBottomLeft.value}%`;
}

function copyResult() {
  navigator.clipboard.writeText(inputResult.value);
  btnCopy.textContent = "¡Copiado!";
  setTimeout(() => {
    btnCopy.textContent = "Copiar";
  }, 2000);
}

