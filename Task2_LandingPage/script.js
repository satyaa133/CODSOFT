AOS.init();

function selectPlan(el) {
  const cards = document.querySelectorAll('.price-card');
  cards.forEach(card => card.classList.remove('selected'));
  el.classList.add('selected');
}
