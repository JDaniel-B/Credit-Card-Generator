const Card = document.getElementById("Card");
const height = Card.clientHeight;
const width = Card.clientWidth;

const id = document.getElementById("ID");
const Year = document.getElementById("Year");
const Month = document.getElementById("Month");

const generate = document.getElementById("Generate");

Card.addEventListener("mouseover", (e) => {
  const { layerX, layerY } = e;

  const xRotation = ((layerX - width / 2) / width) * 20;

  const yRotation = ((layerY - height / 2) / height) * 20;

  const string = `
  perspective(500px)
  scale(1.1)
  rotateX(${xRotation}deg)
  rotateY(${yRotation}deg)
  `;

  Card.style.transform = string;
});

Card.addEventListener("mouseout", (e) => {
  Card.style.transform = `
  perspective(500px)
  scale(1)
  rotateX(0)
  rotateY(0)
  `;
});

function generarNumeroRandom(min, max) {
  const randomFraction = Math.random();

  const diferencia = max - min;
  const randomScaled = Math.floor(randomFraction * (diferencia + 1)) + min;

  return randomScaled;
}

function insertarEspacios(str, cantidadEspacios) {
  const expresionRegular = new RegExp(`(.{1,${cantidadEspacios}})`, "g");

  const strConEspacios = str.replace(expresionRegular, "$1 ");

  return strConEspacios;
}

const min = 1111111111111111;
const max = 9999999999999999;

generate.addEventListener("click", () => {
  const newspaperSpinning = [{ opacity: "0" }, { opacity: "1" }];

  const newspaperTiming = {
    duration: 500,
    iterations: 1,
    fill: "forwards",
  };

  Card.animate(newspaperSpinning, newspaperTiming);

  const numeroRandom = generarNumeroRandom(min, max);
  const numText = numeroRandom.toString();
  const result = insertarEspacios(numText, 4);
  id.innerText = result;

  const monthRandom = generarNumeroRandom(1, 12);
  const yearRandom = generarNumeroRandom(23, 30);

  Month.innerText = monthRandom;
  Year.innerText = yearRandom;
  // const year = new Date().getFullYear().toString().substr(-2);
  // console.log(parseInt(year) + 5);
});
