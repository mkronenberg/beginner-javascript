// access to the elements
const shakeBtn = document.querySelector('button.shake');

// set up drawing capability
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext("2d");
// destructure canvas properties
const { width, height } = canvas;

// line styles
const MOVE_AMOUNT = 20;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;
let hue = 0;

// Randomized start point
function randomIntZeroToMax(max) {
  return Math.floor(Math.random() * max);
}

let x = randomIntZeroToMax(width);
let y = randomIntZeroToMax(height);

// draw function
function draw({ key } = {}) {
  console.log(key)

  ctx.beginPath();
  ctx.strokeStyle = `hsl(${hue} 100% 50%)`;
  ctx.moveTo(x, y);
  ctx.stroke();

  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }    
  
  ctx.lineTo(x, y);
  ctx.stroke();

  hue += 2;

}

// clear shake handler
function handleShake() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  const removeShake = () => {canvas.classList.remove('shake')};
  canvas.addEventListener('animationend', removeShake, { once: true });
}

// handler for keys
function handleKey(event) {
  
  if (event.key.includes('Arrow')) {
    event.preventDefault();
    draw({ key: event.key })
  } 
  else if (event.key === 's') {
    handleShake();
  } 
}

// listeners
shakeBtn.addEventListener('click', handleShake);
window.addEventListener('keydown', handleKey);