const open = document.getElementById('open');
const close = document.getElementById('close');
const display = document.getElementById('container');


open.addEventListener('click', () => {
  display.classList.add('active');
});


close.addEventListener('click', () => {
  display.classList.remove('active');
});
