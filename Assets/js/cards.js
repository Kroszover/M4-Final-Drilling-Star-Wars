export function crearCard(cardContainer, cardData, svgColor) {
  // Creamos los elementos HTML necesarios para la card
  const card = document.createElement("div");
  card.classList.add("single-timeline-content", "d-flex", "wow", "fadeInLeft");
  card.setAttribute("data-wow-delay", "0.3s");
  card.style.visibility = "visible";
  card.style.animationDelay = "0.3s";
  card.style.animationName = "fadeInLeft";

  const icon = document.createElement("div");
  icon.classList.add("timeline-icon");
  const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  iconSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  iconSvg.setAttribute("width", "25");
  iconSvg.setAttribute("height", "25");
  iconSvg.setAttribute("fill", svgColor);
  iconSvg.classList.add("bi", "bi-circle-fill");
  iconSvg.setAttribute("viewBox", "0 0 16 16");
  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  circle.setAttribute("cx", "8");
  circle.setAttribute("cy", "8");
  circle.setAttribute("r", "8");
  iconSvg.appendChild(circle);
  icon.appendChild(iconSvg);

  const text = document.createElement("div");
  text.classList.add("timeline-text");
  const title = document.createElement("h6");
  title.textContent = cardData.title;
  const description = document.createElement("p");
  description.textContent = cardData.description;
  text.appendChild(title);
  text.appendChild(description);

  // Agrega los elementos creados al contenedor padre
  card.appendChild(icon);
  card.appendChild(text);
  cardContainer.appendChild(card);
}
