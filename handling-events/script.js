let offset = 2;
const bomb = '&#128163;';

document.addEventListener('keydown', (ev) => {
  const baloon = document.querySelector('.baloon');

  if (offset === 18) {
    baloon.innerHTML = bomb;
    return;
  }

  if (offset === 20) {
    return;
  }

  if (ev.key === 'ArrowUp') {
    offset += 2;
    baloon.style.fontSize = `${offset}rem`;
  }

  if (ev.key === 'ArrowDown') {
    offset = Math.max(2, offset-2);
    baloon.style.fontSize = `${offset}rem`;
  }
});