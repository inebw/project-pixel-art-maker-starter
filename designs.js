const gridHeight = document.querySelector('#inputHeight');
const gridWidth = document.querySelector('#inputWidth');
const colorChoice = document.querySelector('#colorPicker');
// Declared three variables to store the height, width and color element.

function makeGrid() {
    const mainTable = document.querySelector('#pixelCanvas');
    // mainTable stores the table element of html with id #pixelCanvas.
    mainTable.innerHTML = null;
    // Making the innerHTML of mainTable null resets the grid.
    if (gridHeight.value >= 1 && gridHeight.value <= 100 && gridWidth.value >= 1 && gridWidth.value <= 100) {
    // To check the grid size is reasonable.
        for (var i = 1; i <= gridHeight.value; i++) {
            const row = document.createElement('tr')
            mainTable.appendChild(row)
            for (var j = 1; j <= gridWidth.value; j++) {
                const column = document.createElement('td');
                row.appendChild(column);
            }
        }
        // Creates the grid based on the user provided width and height.
    } else {
        alert("Please enter a number between 1 to 100");
        // Creates an alert when the user enters a number outside 1 to 100.
    }
}

function changeColor(evt) {
    if (evt.target.nodeName === "TD") {
        evt.target.style.backgroundColor = colorChoice.value;
    }
}
// Checks if the element clicked is an <td> element.
// Changes the background color based on the colorPicker.

document.addEventListener('click', changeColor);
// Adds an event on the table.
// When clicked the changeColor() function is called
