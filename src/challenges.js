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

function footballPoints(wins, ties) {
  return 3 * wins + 1 * ties;
}

// Desafio 6

function highestCount(numero) {
  let result = 1;

  console.log(
    numero.sort(function (a, b) {
      return b - a;
    }),
  );
  for (let index = 1; numero[index - 1] === numero[index]; index += 1) {
    result += 1;
  }
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);
  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  } if (distanciaCat1 === distanciaCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8

function fizzBuzz(numeros) {
let string = [];

for (let index = 0; index < numeros.length; index += 1) {
  if (numeros[index] % 3 === 0 && numeros[index] % 5 !== 0) {
    string.push('fizz');
  } else if (numeros[index] % 5 === 0 && numeros[index] % 3 !== 0) {
    string.push('buzz');
  } else if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
    string.push('fizzBuzz');
  } else {
    string.push('bug!');
  }    
}
return string;
}

// Desafio 9
function encode() {
  
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
