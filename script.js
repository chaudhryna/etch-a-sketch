const container = document.querySelector('#container');
const price = document.querySelector('#size');
const output = document.querySelector('.grid-size');

output.textContent = size.value;

function generateGrid(gridSize) {
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    for (let i = 0; i < gridSize * gridSize; i++) {
        const box = document.createElement('div');
        box.classList.add('square');
        container.appendChild(box);
    }
}
// TODO setup selector to allow user to change the grid size from 16 to 100

size.addEventListener('input', () => {
    let gridSize = size.value;
    output.textContent = gridSize;
    generateGrid(gridSize);
});

generateGrid(16)

// Event listener
container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('square')) {
        e.target.style.backgroundColor = 'purple';
    }
});