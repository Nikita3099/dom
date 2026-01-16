import './css/style.css';
import goblin from './img/goblin.png';

const game = document.getElementById('game');

// 1. Создаём поле 4×4
const cells = [];

for (let i = 0; i < 16; i += 1) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  game.appendChild(cell);
  cells.push(cell);
}

// 2. Создаём персонажа
const img = document.createElement('img');
img.src = goblin;

// 3. Ставим его в случайную ячейку
let currentIndex = Math.floor(Math.random() * cells.length);
cells[currentIndex].appendChild(img);

// 4. Функция перемещения
setInterval(() => {
  let newIndex;

  do {
    newIndex = Math.floor(Math.random() * cells.length);
  } while (newIndex === currentIndex);

  cells[newIndex].appendChild(img);
  currentIndex = newIndex;
}, 1000);
