const text = "I will be a Better Programmer someday.";

let index = 0;

const autoText = () => {
  document.body.innerText = text.slice(0, index);

  index++;

  if (index > text.length) {
    index = 0;
  }

};


setInterval(autoText, 150);
