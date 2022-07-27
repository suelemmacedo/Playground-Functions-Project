// Desafio 1

function compareTrue(girafa, macaco) {
  return girafa && macaco;
}

compareTrue(true, true);

// Desafio 2

let areaTriangulo = 0;

function calcArea(base, altura) {
  areaTriangulo = (base * altura) / 2;
  return areaTriangulo;
}

calcArea(51, 1);

// Desafio 3

function splitSentence(setence) {
  let resultsentence = setence.split(' ');

  return resultsentence;
}

// Desafio 4

function concatName(array = [' ']) {
  let primeiroItem = array[0];
  let ultimoItem = array[array.length - 1];
  return ultimoItem + ', ' + primeiroItem;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
