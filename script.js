const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');

let index = 0;
const itemsPerView = () => window.innerWidth <= 768 ? 1 : 3;
const maxIndex = () => Math.max(0, items.length - itemsPerView());

const updateCarousel = () => {
  track.style.transform = `translateX(-${index * items[0].getBoundingClientRect().width}px)`;
};

const moveCarousel = step => {
  index += step;
  if (index > maxIndex()) index = 0; // reinicia suavemente
  if (index < 0) index = maxIndex();
  updateCarousel();
};

// Botões
nextButton.addEventListener('click', () => moveCarousel(itemsPerView()));
prevButton.addEventListener('click', () => moveCarousel(-itemsPerView()));

// Avanço automático
setInterval(() => moveCarousel(itemsPerView()), 3000);

// Ajusta carrossel ao redimensionar
window.addEventListener('resize', updateCarousel);

// Inicializa
updateCarousel();
