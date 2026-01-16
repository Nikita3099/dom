import './css/style.css';
import goblin from './img/goblin.png';

const FIELD_SIZE = 4;
const CELLS_COUNT = FIELD_SIZE * FIELD_SIZE;
const MOVE_INTERVAL = 1000;

const game = document.getElementById('game');

const cells = [];

for (let i = 0; i < CELLS_COUNT; i += 1) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  game.append(cell);
  cells.push(cell);
}

const goblinImg = document.createElement('img');
goblinImg.src = goblin;
goblinImg.alt = 'Goblin';

let currentIndex = Math.floor(Math.random() * cells.length);
cells[currentIndex].append(goblinImg);

setInterval(() => {
  let newIndex;

  do {
    newIndex = Math.floor(Math.random() * cells.length);
  } while (newIndex === currentIndex);

  cells[newIndex].append(goblinImg);
  currentIndex = newIndex;
}, MOVE_INTERVAL);
