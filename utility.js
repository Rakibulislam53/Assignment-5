function increse(elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  const elementConvert = parseInt(elementText);

  const updateValue = elementConvert + 1;

  element.innerText = updateValue;
}

function decrese(elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  const elementConvert = parseInt(elementText);

  const updateValue = elementConvert - 1;

  element.innerText = updateValue;
}

function hiddenElemetById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function removeElemetById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function setValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function disabledBtn() {
  const seatCount = document.getElementById("seatCount").innerText;
  const seatCountText = parseInt(seatCount);
  if (seatCountText == 3) {
    const allBtn = document.getElementsByClassName("btn-ticket");
    for (const btn of allBtn) {
      btn.disabled = true;
    }
  }
}
