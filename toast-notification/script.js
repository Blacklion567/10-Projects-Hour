const btn = document.getElementById('btn');
const container = document.getElementById('container');


btn.addEventListener('click', () => {
  notification();
});


const notification = () => {

  const notif = document.createElement('div');
  notif.classList.add('toast');

  notif.innerText = 'You have a new message';

  container.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);

};
