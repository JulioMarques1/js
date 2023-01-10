function soma(a, b) {
  const juros = 2;
  return (a * b) * juros;
}

// void
let total = 1;
function calc() {
  const valor1 = 5
  const valor2 = 10
  total = valor1 + valor2
}

calc();
const valorFinal = soma(2, 2) + total;
console.log(valorFinal);