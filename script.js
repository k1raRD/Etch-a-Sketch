let color = "black";
let click = true;
let mode = document.querySelector('.mode');


function popularBoard(size)
{
  let board = document.querySelector('.board');
  let squares = board.querySelectorAll('div')
  squares.forEach((div) => div.remove())
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for(let i = 0; i < amount; i++)
  {
    let square = document.createElement('div');
    square.addEventListener('mouseover', colorSquare)
    square.style.backgroundColor = 'white';
    board.insertAdjacentElement("beforeend", square);
  }
}

popularBoard(16);

function changeSize(input)
{
  if (input >= 2 && input <= 100)
  {
    popularBoard(input);
  }
  else
  {
    console.log("Too many squares");
  }
}


function colorSquare ()
{
  if(click)
  {
    if(color == "random")
    {
      this.style.backgroundColor = `hsl(${Math.random()* 360}, 100%, 50%)`;
    }
    else
    {
      this.style.backgroundColor = color;
    }
  }
}


function changeColor (choice)
{
  color = choice;
}


function resetBoard()
{
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div')
    squares.forEach((div) => div.style.backgroundColor = "white")
}


document.querySelector('body').addEventListener('click', (e) =>
{
  if(e.target.tagName != 'BUTTON')
  {
    click = !click;
    if(click)
    {
      mode.textContent = "Mode: Active";
      mode.style.animationName = "arcoiris";
      mode.style.animationDuration = "6s";
      mode.style.animationIterationCount = "infinite";
    }

    else
    {
      mode.textContent = "Mode: No Active";
      mode.style.animationName = "none";
      mode.style.color = "black"

    }
  }
})