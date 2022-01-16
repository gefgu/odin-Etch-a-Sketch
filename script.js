function createGrid() {
    const container = document.querySelector(".container");
    const areaSlider = document.querySelector("#grid-size-slider");
    let size = areaSlider.value;
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
    createGrid();
}

function updateGridSize() {
    const label = document.querySelector("label");
    label.textContent = `${this.value}x${this.value}`
    clearGrid();
}

createGrid(16);
const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", clearGrid);
const areaSlider = document.querySelector("#grid-size-slider");
areaSlider.addEventListener("input", updateGridSize);