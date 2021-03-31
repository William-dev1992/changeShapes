const shape = document.querySelector('div.change');

function toTri(){
  shape.classList.remove('square');
  shape.classList.remove('circle');
  shape.classList.remove('triangle');

  shape.classList.add('triangle');
}

function toCircle(){
  shape.classList.remove('square');
  shape.classList.remove('circle');
  shape.classList.remove('triangle');

  shape.classList.add('circle');
}

function toSquare(){
  shape.classList.remove('square');
  shape.classList.remove('circle');
  shape.classList.remove('triangle');

  shape.classList.add('square');
}