let display = document.getElementById('display');
let advanced = false;

function appendValue(value) {
  if (display.textContent === '0') display.textContent = '';
  display.textContent += value;
}

function clearDisplay() {
  display.textContent = '0';
}

function deleteLast() {
  if (display.textContent.length > 1) {
    display.textContent = display.textContent.slice(0, -1);
  } else {
    display.textContent = '0';
  }
}

function calculate() {
  try {
    const result = eval(display.textContent);
    if (!isFinite(result)) throw new Error("División inválida");
    display.textContent = result;
  } catch {
    display.textContent = 'Error';
  }
}

function toggleMode() {
  advanced = !advanced;
  document.getElementById('buttons-advanced').classList.toggle('hidden', !advanced);
  document.getElementById('buttons-basic').classList.toggle('hidden', advanced);
}

// Funciones avanzadas:
function squareRoot() {
  try {
    const value = eval(display.textContent);
    if (value < 0) throw new Error();
    display.textContent = Math.sqrt(value);
  } catch {
    display.textContent = 'Error';
  }
}

function power() {
  const base = prompt("Base:");
  const exponent = prompt("Exponente:");
  if (base !== null && exponent !== null) {
    display.textContent = Math.pow(Number(base), Number(exponent));
  }
}

function factorial() {
  const num = parseInt(display.textContent);
  if (num < 0 || isNaN(num)) {
    display.textContent = 'Error';
    return;
  }
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  display.textContent = result;
}

function naturalLog() {
  try {
    const value = eval(display.textContent);
    if (value <= 0) throw new Error();
    display.textContent = Math.log(value).toFixed(4);
  } catch {
    display.textContent = 'Error';
  }
}
