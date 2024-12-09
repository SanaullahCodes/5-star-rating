"use stricts";

const card = document.querySelector(".thanku-card");
const submit = document.querySelector(".btn");
const count = document.querySelectorAll(".circle");
const description = document.querySelector(".description");
const text = document.querySelector(".txt");

function option(value) {
  text.textContent = `You selected ${value} out of 5`;
}

count.forEach((options) => {
  options.addEventListener("click", function () {
    options.style.backgroundColor = "#fb7413";
    options.style.color = " #121417";
    option(options.textContent);
  });
});

submit.addEventListener("click", function () {
  card.classList.remove("hidden");
});
