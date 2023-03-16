const container = document.querySelector('.container');
const childrenContainer = container.childNodes;
const colorSelector = document.querySelector('input[type="color"]');
const colorPicker = document.querySelector(".colorpick-eyedropper-input-trigger");
const rainbowButton = document.getElementById('rainbowColor');
const buttonStartPainting = document.getElementById('startPainting');
const restartButton = document.getElementById('resetButton');
const selectSize = document.getElementById('selectSize');
let boardSize = selectSize.value;
let typeColor = "nomal";


rainbowButton.addEventListener('click', function() {
    typeColor =  typeColor !== "rainbow" ? "rainbow" : "normal";
})



selectSize.addEventListener('change', () => {
    boardSize = selectSize.value;
    console.log(boardSize);
})

restartButton.addEventListener('click', (e) => {
    createBoard(selectSize.value);
    paintBoard();
    childrenContainer.forEach(element => {
        element.style.backgroundColor = 'white';
    })
})


buttonStartPainting.addEventListener('click', function(e) {
    createBoard(boardSize);    
    paintBoard();
})


function createDiv(max){
    let div = document.createElement('div');
    div.style.height = `${600/max}px`;
    div.style.width = `${600/max}px`;
    container.appendChild(div);
}

function createBoard(max) {
    for(let i = 0; i < max; i++){
        createDiv(max);
        for(let j = 0; j < max; j++){
            createDiv(max);
        }
    }    
}


function paintBoard(){
    Array.from(childrenContainer).forEach((element) => {
        element.addEventListener('mouseover', function(e) {

            if(typeColor === "rainbow"){
                    rainbowButton.textContent = "Quit Rainbow";
                    e.target.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
            }else{
                e.target.style.backgroundColor = colorSelector.value;
                rainbowButton.textContent = "Rainbow";
            }
        })
    })
}


