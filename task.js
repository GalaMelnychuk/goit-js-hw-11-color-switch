"use strict";
// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

let timerId;

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
  body: document.querySelector("body")
};

function changeColor() {
  refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 6)];
}

function hendlerClick(event) {
  hendlerStop(event);
  timerId = setInterval(changeColor, 1000);
  refs.btnStart.removeEventListener("click", hendlerClick);

  console.log(timerId);
}

function hendlerStop(event) {
  clearInterval(timerId);
  refs.btnStart.addEventListener("click", hendlerClick);
}

refs.btnStart.addEventListener("click", hendlerClick);
refs.btnStop.addEventListener("click", hendlerStop);
