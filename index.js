const btn = document.querySelector("button");
const div = document.querySelector("div");

function klikket() {
  div.classList.toggle("min-klasse");
}

btn.addEventListener("click", klikket);
