const container = document.querySelector('#container');
const price = document.querySelector('#size');
const output = document.querySelector('.grid-size');
const color = document.querySelector('#color');
const reset = document.querySelector('#reset');
const randomColor = document.querySelector('.random-color');

output.textContent = size.value;
let randomColorChoice = false;

const randomizer = () => {
    return (
        '#' +
        Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, '0')
            .toUpperCase()
    );
};

// Resets the grid and creates new grid based on grid size
function generateGrid(gridSize) {
    container.innerHTML = '';
    randomColorChoice = false;
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    for (let i = 0; i < gridSize * gridSize; i++) {
        const box = document.createElement('div');
        box.classList.add('square');
        container.appendChild(box);
    }
}
// Beginning grid 
generateGrid(16);

// Event listeners
// Checks for random color selection and sets random color to true
randomColor.addEventListener('click', () => {
    randomColorChoice = true;
    console.log(randomizer());
})

color.addEventListener('click', () => {
    randomColorChoice = false;
})

// Checks for a change in grid sizen from range input and regenerates grid
size.addEventListener('input', () => {
    let gridSize = size.value;
    output.textContent = gridSize;
    generateGrid(gridSize);
});

reset.addEventListener('click', () => {
    let gridSize = size.value;
    generateGrid(gridSize);
})

// Checks for 'hover' over the grid and changes the color of each div
container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('square')) {
        e.target.style.backgroundColor = color.value;
        if (randomColorChoice === true) {
            e.target.style.backgroundColor = randomizer();
        }
    }
});