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
const rango1_5 = obtenerInformacionPersonajes(1, 5);
const rango6_11 = obtenerInformacionPersonajes(6, 11);
const rango12_17 = obtenerInformacionPersonajes(12, 17);

// Esperar a que se resuelvan todas las promesas y mostrar los resultados
Promise.all([rango1_5, rango6_11, rango12_17])
  .then((resultados) => {
    console.log("Rango 1-5:", resultados[0]);
    console.log("Rango 6-11:", resultados[1]);
    console.log("Rango 12-17:", resultados[2]);
  })
  .catch((error) => {
    console.log("Error al obtener la información:", error);
  });

/*3.- Implementar la lógica para obtener la información de los personajes de Star Wars. */

rango1_5
  .then((resultados) => {
    // Obtener la información del primer personaje (índice 0)
    const personaje1 = resultados[0];
    console.log("Información del personaje 1:", personaje1);

    // Obtener la información del segundo personaje (índice 1)
    const personaje2 = resultados[1];
    console.log("Información del personaje 2:", personaje2);

    // ... y así sucesivamente
  })
  .catch((error) => {
    console.log("Error al obtener la información:", error);
  });

/*4.- Generar dinámicamente los bloques de contenido que muestran el nombre, estatura y peso de los personajes. */

/*5.- Organizar los bloques de contenido en secciones según los rangos de números indicados en el lado izquierdo de la vista.
Por ejemplo, en la sección "1 - 5", se deben generar los bloques para los personajes del 1 al 5. */

/*6.- Limitar la cantidad de resultados a mostrar a 5 por sección. */

/*7.- Utilizar un generador para la generación dinámica de los bloques de contenido. */

/*8.- Mostrar la información obtenida de la API en los bloques correspondientes. */

/*9.- Opcional: Utilizar recursos como jQuery o animaciones para enriquecer la vista. */

/*10.- Verificar que la aplicación funcione correctamente y cumpla con todos los requisitos. */

/*FIN DE DESARROLLO */
