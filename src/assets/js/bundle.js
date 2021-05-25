'use strict';

// Constantes
const btnGames = document.querySelectorAll('.options_game');
const btnContainer = document.querySelector('.game-options');
const tabs = document.querySelectorAll('.modal');
const ventana = document.getElementById('modales');
const footer = document.querySelector('footer');
const windowModal = document.querySelector('.window');
const juegoModal = document.querySelector('.game');
const overlay = document.querySelector('.overlay');
const gameContent = document.querySelector('.games-content');
const headerPrincipal = document.querySelector('.heading-principal');
const mainContainer = document.querySelector('main');

// Funciones
const activarTab = clicked => {
  btnGames.forEach(t => t.classList.remove('options_game--active'));
  clicked.classList.add('options_game--active');
  btnContainer.classList.add('game-options__open');
  tabs.forEach(t => t.classList.remove('active'));
  document
    .querySelector(`.modal__${clicked.dataset.game}`)
    .classList.add('active');
  headerPrincipal.classList.add('hidding');
  headerPrincipal.classList.remove('showing');
  mainContainer.classList.add('main--active');
};

const exitGame = () => {
  windowModal.classList.remove('window--open');
  overlay.style.display = 'none';
};

const abrirIframe = iframe => {
  window.open(iframe,'_blank');
};

const cerrarTab = () => {
  tabs.forEach(t => t.classList.remove('active'));
  btnGames.forEach(t => t.classList.remove('options_game--active'));
  btnContainer.classList.remove('game-options__open');
  headerPrincipal.classList.remove('hidding');
  headerPrincipal.classList.add('showing');
  mainContainer.classList.remove('main--active');
};

// Event Listeners
tabs.forEach(function (e) {
  e.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.closest('.game')) {
      const openModal = e.target.closest('.game');
      const iframe = openModal.dataset.iframe;
      if (!openModal || openModal === e.target.closest('.upcoming')) return;
      abrirIframe(iframe);
    }
    if (e.target.closest('.closeBtn')) {
      const closed = e.target.closest('.closeBtn');
      if (!closed) return;
      cerrarTab(closed);
    }
  });
});

windowModal.addEventListener('click', function (e) {
  const exit = e.target.closest('.closeBtn-modal');
  if (!exit) return;
  e.preventDefault();
  exitGame();
});

btnContainer.addEventListener('click', e => {
  e.preventDefault();
  const clicked = e.target.closest('.options_game');
  if (!clicked) return;
  activarTab(clicked);
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && windowModal.classList.contains('window--closed')) {
    exitGame();
  }
});
