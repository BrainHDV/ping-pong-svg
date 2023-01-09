// Game size
const width = 800;
const height = 520;
const gameSize = document.querySelector(".pong__body");
gameSize.setAttribute("width", width);
gameSize.setAttribute("height", height);

const fieldSize = document.querySelector(".field");
fieldSize.setAttribute("width", width);
fieldSize.setAttribute("height", height);

// Playground size
export const field = {
  width: parseInt(fieldSize.getAttribute("width")),
  height: parseInt(fieldSize.getAttribute("height")),
};
