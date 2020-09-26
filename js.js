"use strict";

(function () {
  const body = document.querySelector("body");
  const btn = document.getElementById("btn");

  function changeBackground() {
    const randomBack = function () {
      return Math.floor(Math.random() * 255);
    };

    body.style.backgroundColor = `rgb(${randomBack()}, ${randomBack()}, ${randomBack()})`;
  }
  btn.addEventListener("click", changeBackground);
})();
