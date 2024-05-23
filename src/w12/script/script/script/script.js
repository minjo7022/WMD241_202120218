let elemBody = document.body;
elemBody.style.backgroundColor = "#ff0000";
let container = document.querySelector(".container");
let cards = document.querySelectorAll(".card");
for (let i = 0; i < cards.length; i++) {
  let eachCard = cards[i];
  eachCard.dataset.nth = i + 1;
  eachCard.addEventListener("click", function (evt) {
    container.dataset.selected = evt.currentTarget.dataset.nth;
  });
}
