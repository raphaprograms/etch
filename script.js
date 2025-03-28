const container = document.querySelector(".container");

const userInput = 4;

function drawGrid(gridSize) {
    container.textContent = "";

    const squareSize = 500 / gridSize;

    for (let i = 0; i < (gridSize * gridSize); i++) {
        const square = document.createElement('div');
        square.classList.add('grid-item');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }
}

drawGrid(userInput);