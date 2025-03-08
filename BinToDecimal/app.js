const btnSubmit = document.querySelector("#btn-submit");
const inputText = document.querySelector("#input-text");
const inputResult = document.querySelector("#input-result");
const containerAlert = document.querySelector('#container-alert')

btnSubmit.addEventListener("click", convertBinToDec);
btnSubmit.addEventListener("submit", convertBinToDec)

function convertBinToDec(e) {
  e.preventDefault();
  const numBin = inputText.value.trim();
  const result = Number.parseInt(numBin, 2);

  if (numBin.length === 0) {
    showAlert("Please enter a binary number", containerAlert);
    return;
  }

  for (let i = 0; i < numBin.length; i++) {
    if (numBin[i] !== "1" && numBin[i] !== "0") {
      showAlert("Enter only 1 and 0", containerAlert);
      return;
    }
  }

  inputResult.value = result;
  clearAlert(containerAlert);
}

function showAlert(message, reference) {
  clearAlert(reference);
  const alert = document.createElement("p");
  alert.innerText = message;
  alert.classList.add('alert')
  containerAlert.appendChild(alert)
}

function clearAlert(reference) {
  const alertDiv = reference.querySelector('.alert')
  if (alertDiv) {
    alertDiv.remove();
  }
}
