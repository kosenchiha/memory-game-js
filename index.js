allCards = document.querySelectorAll(".memory-card");

function flipCard() {
  this.classList.toggle("flip");
  console.log(this);
}

allCards.forEach(card => card.addEventListener("click", flipCard));
//console.log(allCards);
