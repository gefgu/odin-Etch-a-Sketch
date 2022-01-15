function createGrid() {
    const container = document.querySelector(".container");
    for (let i = 0; i < 16; i++) {
        for (let k = 0; k < 16; k++) {
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
    const activeTiles = document.querySelectorAll(".tile.active");
    activeTiles.forEach(tile => tile.classList.remove("active"));
}

createGrid();
const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", clearGrid);