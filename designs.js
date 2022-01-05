const gridHeight = document.querySelector('#inputHeight');
const gridWidth = document.querySelector('#inputWidth');
const colorChoice = document.querySelector('#colorPicker');

function makeGrid() {
  const mainTable = document.querySelector('#pixelCanvas');
  mainTable.innerHTML = null;
  if(gridHeight.value>=1 && gridHeight.value<=100 && gridWidth.value>=1 && gridWidth.value<=100) {
    for(var i = 1; i<=gridHeight.value; i++){
      const row = document.createElement('tr')
      mainTable.appendChild(row)
      for(var j = 1; j<=gridWidth.value; j++){
        const column = document.createElement('td');
        row.appendChild(column);
      }
    }
  }
  else {
    alert("Please enter a number between 1 to 100");
  }
}

function changeColor(evt){
  if(evt.target.nodeName === "TD"){
    evt.target.style.backgroundColor = colorChoice.value;
  }
}

document.addEventListener('click', changeColor);
