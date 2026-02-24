"use script";

console.log("Hello");

const h1 = document.getElementById("main-heading");
h1.textContent = "Google!";

h1.addEventListener("click", function () {});

function onEvent(id, event, func) {

  try {
    const element = document.getElementById(id);
    element.addEventListener(event, func);
  } catch (error) {
    console.warn("Bad ID");
  }
}

onEvent("main-heading", "click", function () {
  console.log("Clicking on the H1");
});
