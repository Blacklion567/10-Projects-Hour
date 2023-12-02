const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  document.body.style.backgroundColor = changeColor();
});

const changeColor = () => {
  return `hsl(${Math.floor(Math.random() * 360)} 100%, 50%)`;
};

document.addEventListener('click', () => {
  btn.style.background = changeColor();
});
