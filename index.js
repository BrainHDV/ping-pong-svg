"use strict";
import { ball } from "./modules/Ball.js";
import { paddleLeft, paddleRight } from "./modules/Paddle.js";

// Turn on timer after page loading
window.addEventListener("load", animate);

// Initialization of rackets\ball
init();

// Start button
export const startButton = document.querySelector(".start-btn");
startButton.addEventListener("click", start);

// Begin to play
export function start() {
  ball.loop();

  addEventListener("keydown", keyDown);
  addEventListener("keyup", keyUp);

  startButton.removeEventListener("click", start);
}

function init() {
  paddleLeft.draw();
  paddleRight.draw();
  ball.draw();
}

// Timer
function animate() {
  paddleLeft.move();
  paddleRight.move();
  ball.update();

  requestAnimationFrame(animate);
}

// Rackets controller
export function keyDown(e) {
  e = e || window.event;
  let paddleSpeed = 4;
  switch (e.key) {
    case "Shift":
      paddleLeft.speedY = -paddleSpeed;
      break;
    case "Control":
      paddleLeft.speedY = paddleSpeed;
      break;
    case "ArrowUp":
      paddleRight.speedY = -paddleSpeed;
      break;
    case "ArrowDown":
      paddleRight.speedY = paddleSpeed;
      break;
  }
}

export function keyUp(e) {
  e = e || window.event;
  let paddleSpeed = 0;
  switch (e.key) {
    case "Shift":
      paddleLeft.speedY = paddleSpeed;
      break;
    case "Control":
      paddleLeft.speedY = paddleSpeed;
      break;
    case "ArrowUp":
      paddleRight.speedY = paddleSpeed;
      break;
    case "ArrowDown":
      paddleRight.speedY = paddleSpeed;
      break;
  }
}
