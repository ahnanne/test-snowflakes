import * as wasm from "@yein/snowflakes";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const PARTICLES_ON_SCREEN = 245;
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight - 10;
let w = canvas.width;
let h = canvas.height;

function clientResize() {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight - 10;

  w = canvas.width;
  h = canvas.height;
}

window.addEventListener("resize", clientResize);

const { SnowCanvas } = wasm;
const test = SnowCanvas.new(w, h, PARTICLES_ON_SCREEN);
console.log(Object.getOwnPropertyNames(wasm.SnowCanvas));

export default test;
