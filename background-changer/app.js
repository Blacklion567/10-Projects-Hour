const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  document.body.style.background = backGroundChanger();
});

const backGroundChanger = () => {
  return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
};
