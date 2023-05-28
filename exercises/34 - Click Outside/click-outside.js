const cardButtons = document.querySelectorAll('button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function openModalHandler(event) {
  const card = event.currentTarget.closest('.card');
  const imgSrc = card.querySelector('img').src;
  const name = card.querySelector('h2').innerText;
  const desc = card.dataset.description;
  modalInner.innerHTML = `
    <img src="${imgSrc.replace('200', '600')}" alt="${name}" >
    <p>${desc}</p>
  `;
  modalOuter.classList.add('open');
}

cardButtons.forEach(button => {
  button.addEventListener('click', openModalHandler);
})

function closeModal() {
  modalOuter.classList.remove('open');
}

function closeModalClickHandler(event) {
  const isOutside = !event.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
}

function closeModalKeyHandler(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

modalOuter.addEventListener('click', closeModalClickHandler);
window.addEventListener('keydown', closeModalKeyHandler);