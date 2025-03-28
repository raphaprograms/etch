const userInteract = document.querySelector('.prompt');
const userInput = document.querySelector('input');
const container = document.querySelector('.container');

const button = document.createElement('button');
button.textContent = "Draw New Grid";
userInteract.appendChild(button);

button.addEventListener('click', () => {
        const userNum = userInput.value;
        userInput.value = "";
        container.textContent = "";

        drawGrid(userNum);
    });

    function drawGrid(gridSize) {

        const squareSize = 500 / gridSize;

        for (let i = 0; i < (gridSize * gridSize); i++) {
            const square = document.createElement('div');
            square.classList.add('grid-item');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            container.appendChild(square);
        }
    }