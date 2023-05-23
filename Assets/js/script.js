/*REQUERIMIENTOS
1.- Diseñar la vista de la aplicación con el diseño proporcionado.
2.- Consumir la API de Star Wars (https://swapi.dev/) utilizando el método fetch().
3.- Implementar la lógica para obtener la información de los personajes de Star Wars.
4.- Generar dinámicamente los bloques de contenido que muestran el nombre, estatura y peso de los personajes.
5.- Organizar los bloques de contenido en secciones según los rangos de números indicados en el lado izquierdo de la vista.
Por ejemplo, en la sección "1 - 5", se deben generar los bloques para los personajes del 1 al 5.
6.- Limitar la cantidad de resultados a mostrar a 5 por sección.
7.- Utilizar un generador para la generación dinámica de los bloques de contenido.
8.- Mostrar la información obtenida de la API en los bloques correspondientes.
9.- Opcional: Utilizar recursos como jQuery o animaciones para enriquecer la vista.
10.- Verificar que la aplicación funcione correctamente y cumpla con todos los requisitos. */

/*Desarrollo */
/*1.- Diseñar la vista de la aplicación con el diseño proporcionado. */

/*2.- Consumir la API de Star Wars (https://swapi.dev/) utilizando el método fetch(). */

import { Personaje } from "./modules/personaje.js";
import { crearCard } from "./modules/cards.js";
import {
  cardsData,
  cardsIndiv1,
  cardsIndiv2,
  cardsIndiv3,
} from "./modules/dataOfCards.js";

//Uso del generador
function* generarPersonajes(personajesData) {
  for (const data of personajesData) {
    yield new Personaje(data.name, data.height, data.mass);
  }
}

function obtenerInformacionPersonajes(rangoInicial, rangoFinal) {
  const promesas = [];

  for (let i = rangoInicial; i <= rangoFinal; i++) {
    const url = `https://swapi.dev/api/people/${i}/`;
    const promesa = fetch(url)
      .then((res) => res.json())
      .then((response) => response);

    promesas.push(promesa);
  }

  return Promise.all(promesas);
}

const rango = obtenerInformacionPersonajes(1, 16);

Promise.all([rango]).then((resultados) => {
  // Generar los personajes utilizando el generador
  const personajesPos = [...generarPersonajes(resultados[0])];

  const cardContainers = {};

  cardsData.forEach((cardData) => {
    const { containerId, personajeIndex, title, svgColor } = cardData;
    const container = document.getElementById(containerId);
    cardContainers[containerId] = container;

    if (personajeIndex !== undefined) {
      const personaje = personajesPos[personajeIndex];
      const description = `Estatura: ${personaje.altura} cm - Peso: ${personaje.peso} kg`;
      cardData.title = personaje.nombre;
      cardData.description = description;
    }

    crearCard(container, cardData, svgColor);

    // Agregar evento al pasar el mouse sobre la tarjeta principal
    container.addEventListener("mouseover", () => {
      const cardIndivArray = getCardIndivArray(containerId);
      updateCardIndiv(personajesPos, cardIndivArray);
    });

    // Agregar evento al sacar el mouse de la tarjeta principal
    container.addEventListener("mouseout", () => {
      const cardIndivArray = getCardIndivArray(containerId);
      clearCardIndiv(cardIndivArray);
    });

    // Agregar evento al pasar el mouse sobre P1, P2 o P3
    const pContainer = document.getElementById(
      containerId.replace("card", "P")
    );
    pContainer.addEventListener("mouseover", () => {
      const cardIndivArray = getCardIndivArray(containerId);
      updateCardIndiv(personajesPos, cardIndivArray);
    });

    // Agregar evento al sacar el mouse de P1, P2 o P3
    pContainer.addEventListener("mouseout", () => {
      const cardIndivArray = getCardIndivArray(containerId);
      clearCardIndiv(cardIndivArray);
    });
  });
});

function getCardIndivArray(containerId) {
  if (containerId === "card1" || containerId === "P1") {
    return cardsIndiv1;
  } else if (containerId === "card2" || containerId === "P2") {
    return cardsIndiv2;
  } else if (containerId === "card3" || containerId === "P3") {
    return cardsIndiv3;
  }

  return [];
}

function updateCardIndiv(personajesPos, cardIndivArray) {
  cardIndivArray.forEach((cardIndivData) => {
    const { containerId, personajeIndex, svgColor } = cardIndivData;
    const indivContainer = document.getElementById(containerId);

    const personaje = personajesPos[personajeIndex];
    const description = `Estatura: ${personaje.altura} cm - Peso: ${personaje.peso} kg`;
    cardIndivData.title = personaje.nombre;
    cardIndivData.description = description;

    crearCard(indivContainer, cardIndivData, svgColor);
  });
}

function clearCardIndiv(cardIndivArray) {
  cardIndivArray.forEach((cardIndivData) => {
    const { containerId } = cardIndivData;
    const indivContainer = document.getElementById(containerId);
    indivContainer.innerHTML = ""; // Limpiar el contenido del contenedor para ocultar la tarjeta individual
  });
}

/*5.- Organizar los bloques de contenido en secciones según los rangos de números indicados en el lado izquierdo de la vista.
Por ejemplo, en la sección "1 - 5", se deben generar los bloques para los personajes del 1 al 5. */

/*6.- Limitar la cantidad de resultados a mostrar a 5 por sección. */

/*7.- Utilizar un generador para la generación dinámica de los bloques de contenido. */

/*8.- Mostrar la información obtenida de la API en los bloques correspondientes. */

/*9.- Opcional: Utilizar recursos como jQuery o animaciones para enriquecer la vista. */

/*10.- Verificar que la aplicación funcione correctamente y cumpla con todos los requisitos. */

/*FIN DE DESARROLLO */
