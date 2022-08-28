const container = document.querySelector('#container');


function generateGrid(gridSize) {
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    for (let i = 0; i < gridSize * gridSize; i++) {
        const box = document.createElement('div');
        box.classList.add('square');
        container.appendChild(box);
    }
}

generateGrid(16)

// Event listener
container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('square')) {
        e.target.style.backgroundColor = 'purple';
    }
});