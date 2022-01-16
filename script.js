function createGrid(size) {
    const container = document.querySelector(".container");
    for (let i = 0; i < size; i++) {
        for (let k = 0; k < size; k++) {
            container.appendChild(createTile());
        }
    }
}

function createTile() {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.addEventListener("mouseenter", makeActive);
    return tile;
}

function makeActive() {
    this.classList.add("active");
}

function clearGrid() {
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach(tile => tile.remove());
    let newSize = 16;
    createGrid(newSize);
}

createGrid(16);
const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", clearGrid);