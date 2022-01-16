function createGrid(size) {
    const container = document.querySelector(".container");

    for (let i = 0; i < size; i++) {
        const tileSection = document.createElement("div");
        tileSection.classList.add("tile-section")
        for (let k = 0; k < size; k++) {
            tileSection.appendChild(createTile());
        }
        container.appendChild(tileSection);
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
    const tileSections = document.querySelectorAll(".tile-section");
    tileSections.forEach(tile => tile.remove());
    let newSize = 16;
    createGrid(newSize);
}

createGrid(16);
const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", clearGrid);