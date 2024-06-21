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

//- Crea un p con el texto "esperando entrada de teclado" al pulsar cualquier tecla deberá poner qué tecla has pulsado.

const textElement = document.getElementById('text');

const newComand = event => {
  textElement.textContent = event.key;
};
window.addEventListener('keydown', newComand);

//- Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previus y next respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dandole a previous.

fiveWords = ['hola', 'adios', 'hasta luego', 'bye', 'nos vemos'];

//const rename
