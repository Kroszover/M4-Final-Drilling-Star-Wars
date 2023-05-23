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
import { Mensaje } from "./modules/mensajes.js";
import { crearCard } from "./modules/cards.js";
import { Color } from "./modules/colores.js";

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
  const personajesPos = resultados[0].map((data) => {
    return new Personaje(data.name, data.height, data.mass);
  });

  const cardsData = [
    // Primera sección
    {
      containerId: "card1",
      title: Mensaje.estaSeccion,
      description: Mensaje.findInfo + Mensaje.pjPrincipal,
      svgColor: Color.Rojo,
    },
    {
      containerId: "card2",
      title: Mensaje.estaSeccion,
      description: Mensaje.findInfo + Mensaje.pjSecundario,
      svgColor: Color.Verde,
    },
    {
      containerId: "card3",
      title: Mensaje.estaSeccion,
      description: Mensaje.pjBlue,
      svgColor: Color.Azul,
    },
  ];

  const cardsIndiv1 = [
    // Cards individuales
    {
      containerId: "card1P1",
      personajeIndex: 0,
      svgColor: Color.Rojo,
    },
    {
      containerId: "card1P2",
      personajeIndex: 1,
      svgColor: Color.Rojo,
    },
    {
      containerId: "card1P3",
      personajeIndex: 2,
      svgColor: Color.Rojo,
    },
    {
      containerId: "card1P4",
      personajeIndex: 3,
      svgColor: Color.Rojo,
    },
    {
      containerId: "card1P5",
      personajeIndex: 4,
      svgColor: Color.Rojo,
    },
  ];

  const cardsIndiv2 = [
    {
      containerId: "card2P1",
      personajeIndex: 5,
      svgColor: Color.Verde,
    },
    {
      containerId: "card2P2",
      personajeIndex: 6,
      svgColor: Color.Verde,
    },
    {
      containerId: "card2P3",
      personajeIndex: 7,
      svgColor: Color.Verde,
    },
    {
      containerId: "card2P4",
      personajeIndex: 8,
      svgColor: Color.Verde,
    },
    {
      containerId: "card2P5",
      personajeIndex: 9,
      svgColor: Color.Verde,
    },
  ];

  const cardsIndiv3 = [
    {
      containerId: "card3P1",
      personajeIndex: 10,
      svgColor: Color.Azul,
    },
    {
      containerId: "card3P2",
      personajeIndex: 11,
      svgColor: Color.Azul,
    },
    {
      containerId: "card3P3",
      personajeIndex: 12,
      svgColor: Color.Azul,
    },
    {
      containerId: "card3P4",
      personajeIndex: 13,
      svgColor: Color.Azul,
    },
    {
      containerId: "card3P5",
      personajeIndex: 14,
      svgColor: Color.Azul,
    },
  ];

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
  });

  // Agregar evento al pasar el mouse sobre card1
  const card1Container = document.getElementById("card1");
  card1Container.addEventListener("mouseover", () => {
    cardsIndiv1.forEach((cardIndivData) => {
      const { containerId, personajeIndex, svgColor } = cardIndivData;
      const indivContainer = document.getElementById(containerId);

      const personaje = personajesPos[personajeIndex];
      const description = `Estatura: ${personaje.altura} cm - Peso: ${personaje.peso} kg`;
      cardIndivData.title = personaje.nombre;
      cardIndivData.description = description;

      crearCard(indivContainer, cardIndivData, svgColor);
    });
  });

  // Agregar evento al sacar el mouse de card1
  card1Container.addEventListener("mouseout", () => {
    cardsIndiv1.forEach((cardIndivData) => {
      const { containerId } = cardIndivData;
      const indivContainer = document.getElementById(containerId);
      indivContainer.innerHTML = ""; // Limpiar el contenido del contenedor para ocultar la card individual
    });
  });

  // Agregar evento al pasar el mouse sobre P1
  const p1Container = document.getElementById("P1");
  p1Container.addEventListener("mouseover", () => {
    cardsIndiv1.forEach((cardIndivData) => {
      const { containerId, personajeIndex, svgColor } = cardIndivData;
      const indivContainer = document.getElementById(containerId);

      const personaje = personajesPos[personajeIndex];
      const description = `Estatura: ${personaje.altura} cm - Peso: ${personaje.peso} kg`;
      cardIndivData.title = personaje.nombre;
      cardIndivData.description = description;

      crearCard(indivContainer, cardIndivData, svgColor);
    });
  });

  // Agregar evento al sacar el mouse de P1
  p1Container.addEventListener("mouseout", () => {
    cardsIndiv1.forEach((cardIndivData) => {
      const { containerId } = cardIndivData;
      const indivContainer = document.getElementById(containerId);
      indivContainer.innerHTML = ""; // Limpiar el contenido del contenedor para ocultar la card individual
    });
  });

  // Agregar evento al pasar el mouse sobre card2
  const card2Container = document.getElementById("card2");
  card2Container.addEventListener("mouseover", () => {
    cardsIndiv2.forEach((cardIndivData) => {
      const { containerId, personajeIndex, svgColor } = cardIndivData;
      const indivContainer = document.getElementById(containerId);

      const personaje = personajesPos[personajeIndex];
      const description = `Estatura: ${personaje.altura} cm - Peso: ${personaje.peso} kg`;
      cardIndivData.title = personaje.nombre;
      cardIndivData.description = description;

      crearCard(indivContainer, cardIndivData, svgColor);
    });
  });

  // Agregar evento al sacar el mouse de card2
  card2Container.addEventListener("mouseout", () => {
    cardsIndiv2.forEach((cardIndivData) => {
      const { containerId } = cardIndivData;
      const indivContainer = document.getElementById(containerId);
      indivContainer.innerHTML = ""; // Limpiar el contenido del contenedor para ocultar la card individual
    });
  });

  // Agregar evento al pasar el mouse sobre P2
  const p2Container = document.getElementById("P2");
  p2Container.addEventListener("mouseover", () => {
    cardsIndiv2.forEach((cardIndivData) => {
      const { containerId, personajeIndex, svgColor } = cardIndivData;
      const indivContainer = document.getElementById(containerId);

      const personaje = personajesPos[personajeIndex];
      const description = `Estatura: ${personaje.altura} cm - Peso: ${personaje.peso} kg`;
      cardIndivData.title = personaje.nombre;
      cardIndivData.description = description;

      crearCard(indivContainer, cardIndivData, svgColor);
    });
  });

  // Agregar evento al sacar el mouse de P2
  p2Container.addEventListener("mouseout", () => {
    cardsIndiv2.forEach((cardIndivData) => {
      const { containerId } = cardIndivData;
      const indivContainer = document.getElementById(containerId);
      indivContainer.innerHTML = ""; // Limpiar el contenido del contenedor para ocultar la card individual
    });
  });

  // Agregar evento al pasar el mouse sobre card3
  const card3Container = document.getElementById("card3");
  card3Container.addEventListener("mouseover", () => {
    cardsIndiv3.forEach((cardIndivData) => {
      const { containerId, personajeIndex, svgColor } = cardIndivData;
      const indivContainer = document.getElementById(containerId);

      const personaje = personajesPos[personajeIndex];
      const description = `Estatura: ${personaje.altura} cm - Peso: ${personaje.peso} kg`;
      cardIndivData.title = personaje.nombre;
      cardIndivData.description = description;

      crearCard(indivContainer, cardIndivData, svgColor);
    });
  });

  // Agregar evento al sacar el mouse de card3
  card3Container.addEventListener("mouseout", () => {
    cardsIndiv3.forEach((cardIndivData) => {
      const { containerId } = cardIndivData;
      const indivContainer = document.getElementById(containerId);
      indivContainer.innerHTML = ""; // Limpiar el contenido del contenedor para ocultar la card individual
    });
  });

  // Agregar evento al pasar el mouse sobre P3
  const p3Container = document.getElementById("P3");
  p3Container.addEventListener("mouseover", () => {
    cardsIndiv3.forEach((cardIndivData) => {
      const { containerId, personajeIndex, svgColor } = cardIndivData;
      const indivContainer = document.getElementById(containerId);

      const personaje = personajesPos[personajeIndex];
      const description = `Estatura: ${personaje.altura} cm - Peso: ${personaje.peso} kg`;
      cardIndivData.title = personaje.nombre;
      cardIndivData.description = description;

      crearCard(indivContainer, cardIndivData, svgColor);
    });
  });

  // Agregar evento al sacar el mouse de P3
  p3Container.addEventListener("mouseout", () => {
    cardsIndiv3.forEach((cardIndivData) => {
      const { containerId } = cardIndivData;
      const indivContainer = document.getElementById(containerId);
      indivContainer.innerHTML = ""; // Limpiar el contenido del contenedor para ocultar la card individual
    });
  });
});

/*5.- Organizar los bloques de contenido en secciones según los rangos de números indicados en el lado izquierdo de la vista.
Por ejemplo, en la sección "1 - 5", se deben generar los bloques para los personajes del 1 al 5. */

/*6.- Limitar la cantidad de resultados a mostrar a 5 por sección. */

/*7.- Utilizar un generador para la generación dinámica de los bloques de contenido. */

/*8.- Mostrar la información obtenida de la API en los bloques correspondientes. */

/*9.- Opcional: Utilizar recursos como jQuery o animaciones para enriquecer la vista. */

/*10.- Verificar que la aplicación funcione correctamente y cumpla con todos los requisitos. */

/*FIN DE DESARROLLO */
