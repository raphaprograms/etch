const userInteract = document.querySelector('.prompt');
const container = document.querySelector('.container');

const button = document.createElement('button');
button.textContent = "Draw New Grid";
userInteract.appendChild(button);

button.addEventListener('click', () => {
        const userNum = prompt('Enter grid size!');
        if (userNum > 100 || userNum <= 0 || isNaN(userNum)) {
            alert(`Enter a number no larger than 100!`)
            return;
        }
        
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

            const randomColor = getRandomColor();

            square.addEventListener('mouseenter', e => {
                square.style.backgroundColor = randomColor
               /* square.classList.add('write'); */
            });
        }
    }

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`
    }

    console.log(getRandomColor());