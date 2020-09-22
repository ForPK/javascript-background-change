"use strict";

(function () {
  const body = document.querySelector("body");
  const btn = document.getElementById("btn");

  function changeBackground() {
    const randomBack0 = Math.floor(Math.random() * 255 + 1);
    const randomBack1 = Math.floor(Math.random() * 255 + 1);
    const randomBack2 = Math.floor(Math.random() * 255 + 1);
    body.style.backgroundColor = `rgb(${randomBack0}, ${randomBack1}, ${randomBack2})`;
  }
  btn.addEventListener("click", changeBackground);
})();
