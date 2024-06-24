// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

// Crea un botón en tu página HTML y añade un evento de click que muestre en la consola el texto del botón al hacer click.

const buttonElement = document.getElementById('button');

const printClick = event => {
  console.log(event);
};

buttonElement.addEventListener('click', printClick);

//- Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"

const h1Element = document.getElementById('h1');
const returnElement = h1Element.textContent;
const changeName = event => {
  h1Element.textContent = 'Quita de encima!!!';
};
h1Element.addEventListener('mouseover', changeName);

const retunrName = event => {
  h1Element.textContent = returnElement;
};
h1Element.addEventListener('mouseleave', retunrName);

//- Agrega un evento de cambio de tamaño de ventana y te muestre por consola el tamaño de la ventana.

const resizeWindow = () => {
  console.log(`${window.visualViewport.height} X ${window.visualViewport.width}`);
};
window.addEventListener('resize', resizeWindow);

const printWindowSize = event => {
  console.log(`El ancho de la ventana es de ${event.target.innerWidth}px y el alto es de ${event.target.innerHeigth}`);
};

window.addEventListener('resize', printWindowSize);

//- Crea un p con el texto "esperando entrada de teclado" al pulsar cualquier tecla deberá poner qué tecla has pulsado.

const textElement = document.getElementById('text');

const newComand = event => {
  textElement.textContent = `Has pulsado al tecla "${event.key}"`;
};
window.addEventListener('keydown', newComand);

const waitingKeyInfo = evet => {
  textElement.textContent = `Esperando entrada de teclado`;
};
window.addEventListener('keyup', waitingKeyInfo);

//- Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previus y next respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dandole a previous.

//- Repite el mismo ejercicio pero esta vez desactiva el botón previous si estás en el primer elemento y el botón next si estás en el último

const words = ['hola', 'adios', 'hasta luego', 'bye', 'nos vemos'];

const slideTextElement = document.getElementById('word');
const buttonPreviousElement = document.getElementById('button-1');
const buttonNextElement = document.getElementById('button-2');
let slideCounter = 0;
const changeText = () => {
  slideTextElement.textContent = words[slideCounter];
};

const previousText = () => {
  slideCounter--;
  buttonNextElement.disabled = false;
  if (slideCounter === 0) buttonPreviousElement.disabled = true;
  changeText();
};

const nexText = () => {
  slideCounter++;
  buttonPreviousElement.disabled = false;
  if (slideCounter === words.length - 1) buttonNextElement.disabled = true;

  changeText();
};

slideTextElement.textContent = words[0];
buttonPreviousElement.addEventListener('click', previousText);
buttonNextElement.addEventListener('click', nexText);

//- Crea un input range con un label, al mover el input range deberá escribir en el label el valor del input range.

const rangeLabelElement = document.getElementById('range-label');
const rangeInputElement = document.getElementById('range-input');

const changeTextLabel = () => {
  rangeLabelElement.textContent = rangeInputElement.value;
};

rangeInputElement.addEventListener('input', changeTextLabel);

//- Crea una lista de 4 checkbox con el texto que quieras y un botón, al pulsar el botón deberá decirte cuantos checkbox están marcados y cual es su texto.
