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

function obtenerInformacionPersonajes(rangoInicial, rangoFinal) {
  const promesas = [];

  // Iterar sobre el rango de números de personajes
  for (let i = rangoInicial; i <= rangoFinal; i++) {
    const url = `https://swapi.dev/api/people/${i}/`;
    const promesa = fetch(url)
      .then((res) => res.json())
      .then((response) => {
        return response;
      });

    promesas.push(promesa);
  }

  // Devolver una promesa que se resuelve con un arreglo de resultados
  return Promise.all(promesas);
}

// Obtener la información de los personajes en los rangos especificados
const rango = obtenerInformacionPersonajes(1, 16);

// Esperar a que se resuelvan todas las promesas y crear objeto Personaje
Promise.all([rango])
  .then((resultados) => {
    const personajesPos = resultados[0].map((data) => {
      return new Personaje(data.name, data.height, data.mass);
    });

    console.log(personajesPos);
    console.log(Promise.all([rango]));

    // Obtenemos el elemento padre donde deseas agregar la card1P1
    const card1P1Container = document.getElementById("card1P1");
    const card1P2Container = document.getElementById("card1P2");
    const card1P3Container = document.getElementById("card1P3");
    const card1P4Container = document.getElementById("card1P4");
    const card1P5Container = document.getElementById("card1P5");
    const card2P1Container = document.getElementById("card2P1");
    const card2P2Container = document.getElementById("card2P2");
    const card2P3Container = document.getElementById("card2P3");
    const card2P4Container = document.getElementById("card2P4");
    const card2P5Container = document.getElementById("card2P5");
    const card3P1Container = document.getElementById("card3P1");
    const card3P2Container = document.getElementById("card3P2");
    const card3P3Container = document.getElementById("card3P3");
    const card3P4Container = document.getElementById("card3P4");
    const card3P5Container = document.getElementById("card3P5");
    const card3P6Container = document.getElementById("card3P6");

    // Creamos la card1P1 para el primer personaje
    const primerPersonaje = personajesPos[0];
    const cardData1P1 = {
      title: primerPersonaje.nombre,
      description: `Estatura: ${primerPersonaje.altura} cm - Peso: ${primerPersonaje.peso} kg`,
    };

    const segundoPersonaje = personajesPos[1];
    const cardData1P2 = {
      title: segundoPersonaje.nombre,
      description: `Estatura: ${segundoPersonaje.altura} cm - Peso: ${segundoPersonaje.peso} kg`,
    };

    const tercerPersonaje = personajesPos[2];
    const cardData1P3 = {
      title: tercerPersonaje.nombre,
      description: `Estatura: ${tercerPersonaje.altura} cm - Peso: ${tercerPersonaje.peso} kg`,
    };

    const cuartoPersonaje = personajesPos[3];
    const cardData1P4 = {
      title: cuartoPersonaje.nombre,
      description: `Estatura: ${cuartoPersonaje.altura} cm - Peso: ${cuartoPersonaje.peso} kg`,
    };

    const quintoPersonaje = personajesPos[4];
    const cardData1P5 = {
      title: quintoPersonaje.nombre,
      description: `Estatura: ${quintoPersonaje.altura} cm - Peso: ${quintoPersonaje.peso} kg`,
    };

    // Creamos la card2P1 para el primer personaje
    const sextoPersonaje = personajesPos[5];
    const cardData2P1 = {
      title: sextoPersonaje.nombre,
      description: `Estatura: ${sextoPersonaje.altura} cm - Peso: ${sextoPersonaje.peso} kg`,
    };

    const septimoPersonaje = personajesPos[6];
    const cardData2P2 = {
      title: septimoPersonaje.nombre,
      description: `Estatura: ${septimoPersonaje.altura} cm - Peso: ${septimoPersonaje.peso} kg`,
    };

    const octavoPersonaje = personajesPos[7];
    const cardData2P3 = {
      title: octavoPersonaje.nombre,
      description: `Estatura: ${octavoPersonaje.altura} cm - Peso: ${octavoPersonaje.peso} kg`,
    };

    const novenoPersonaje = personajesPos[8];
    const cardData2P4 = {
      title: novenoPersonaje.nombre,
      description: `Estatura: ${novenoPersonaje.altura} cm - Peso: ${novenoPersonaje.peso} kg`,
    };

    const decimoPersonaje = personajesPos[9];
    const cardData2P5 = {
      title: decimoPersonaje.nombre,
      description: `Estatura: ${decimoPersonaje.altura} cm - Peso: ${decimoPersonaje.peso} kg`,
    };

    // Creamos la card3P1 para el primer personaje
    const onceavoPersonaje = personajesPos[10];
    const cardData3P1 = {
      title: onceavoPersonaje.nombre,
      description: `Estatura: ${onceavoPersonaje.altura} cm - Peso: ${onceavoPersonaje.peso} kg`,
    };

    const doceavoPersonaje = personajesPos[11];
    const cardData3P2 = {
      title: doceavoPersonaje.nombre,
      description: `Estatura: ${doceavoPersonaje.altura} cm - Peso: ${doceavoPersonaje.peso} kg`,
    };

    const treceavoPersonaje = personajesPos[12];
    const cardData3P3 = {
      title: treceavoPersonaje.nombre,
      description: `Estatura: ${treceavoPersonaje.altura} cm - Peso: ${treceavoPersonaje.peso} kg`,
    };

    const catorceavoPersonaje = personajesPos[13];
    const cardData3P4 = {
      title: catorceavoPersonaje.nombre,
      description: `Estatura: ${catorceavoPersonaje.altura} cm - Peso: ${catorceavoPersonaje.peso} kg`,
    };

    const quinceavoPersonaje = personajesPos[14];
    const cardData3P5 = {
      title: quinceavoPersonaje.nombre,
      description: `Estatura: ${quinceavoPersonaje.altura} cm - Peso: ${quinceavoPersonaje.peso} kg`,
    };

    const diesciseisavoPersonaje = personajesPos[15];
    const cardData3P6 = {
      title: diesciseisavoPersonaje.nombre,
      description: `Estatura: ${diesciseisavoPersonaje.altura} cm - Peso: ${diesciseisavoPersonaje.peso} kg`,
    };

    // Obtenemos el elemento padre donde deseas agregar las cards
    const card1 = document.getElementById("card1");
    const card2 = document.getElementById("card2");
    const card3 = document.getElementById("card3");

    const svgColor1 = "rgb(255, 83, 83)";
    const svgColor2 = "rgb(139, 237, 139)";
    const svgColor3 = "rgb(148, 208, 228)";

    // Añadimos la información que queremos mostrar en las cards
    const cardData1 = {
      title: Mensaje.estaSeccion,
      description: Mensaje.findInfo + Mensaje.pjPrincipal,
    };
    const cardData2 = {
      title: Mensaje.estaSeccion,
      description: Mensaje.findInfo + Mensaje.pjSecundario,
    };
    const cardData3 = {
      title: Mensaje.estaSeccion,
      description: Mensaje.pjBlue,
    };

    // Creamos las cards de la primera sección
    crearCard(card1, cardData1, svgColor1);
    crearCard(card2, cardData2, svgColor2);
    crearCard(card3, cardData3, svgColor3);
    crearCard(card1P1Container, cardData1P1, svgColor1);
    crearCard(card1P2Container, cardData1P2, svgColor1);
    crearCard(card1P3Container, cardData1P3, svgColor1);
    crearCard(card1P4Container, cardData1P4, svgColor1);
    crearCard(card1P5Container, cardData1P5, svgColor1);
    crearCard(card2P1Container, cardData2P1, svgColor2);
    crearCard(card2P2Container, cardData2P2, svgColor2);
    crearCard(card2P3Container, cardData2P3, svgColor2);
    crearCard(card2P4Container, cardData2P4, svgColor2);
    crearCard(card2P5Container, cardData2P5, svgColor2);
    crearCard(card3P1Container, cardData3P1, svgColor3);
    crearCard(card3P2Container, cardData3P2, svgColor3);
    crearCard(card3P3Container, cardData3P3, svgColor3);
    crearCard(card3P4Container, cardData3P4, svgColor3);
    crearCard(card3P5Container, cardData3P5, svgColor3);
    crearCard(card3P6Container, cardData3P6, svgColor3);
  })
  .catch((error) => {
    console.log("Error al obtener la información:", error);
  });

/*5.- Organizar los bloques de contenido en secciones según los rangos de números indicados en el lado izquierdo de la vista.
Por ejemplo, en la sección "1 - 5", se deben generar los bloques para los personajes del 1 al 5. */

/*6.- Limitar la cantidad de resultados a mostrar a 5 por sección. */

/*7.- Utilizar un generador para la generación dinámica de los bloques de contenido. */

/*8.- Mostrar la información obtenida de la API en los bloques correspondientes. */

/*9.- Opcional: Utilizar recursos como jQuery o animaciones para enriquecer la vista. */

/*10.- Verificar que la aplicación funcione correctamente y cumpla con todos los requisitos. */

/*FIN DE DESARROLLO */
