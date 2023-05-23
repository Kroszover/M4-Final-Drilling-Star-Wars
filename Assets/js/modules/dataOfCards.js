import { Mensaje } from "./mensajes.js";
import { Color } from "./colores.js";

export const cardsData = [
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

export const cardsIndiv1 = [
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

export const cardsIndiv2 = [
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

export const cardsIndiv3 = [
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
