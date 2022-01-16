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
    tile.addEventListener("mouseenter", addColor);
    return tile;
}

function addColor() {
    const activeMode = document.querySelector(".buttons .active");
    if (activeMode.id == "color-mode") {
        const selectedColor = document.querySelector(".color-picker").value;
        this.style.backgroundColor = selectedColor;
    } else if (activeMode.id == "rainbow-mode") {
        this.style.backgroundColor = generateRandomColor();
    } else if (activeMode.id == "eraser-mode") {
        this.style.backgroundColor = "#ffffff";
    }
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

function generateRandomColor() {
    const randomColor = Math.floor((Math.random() * 16**6)).toString(16);
    return `#${randomColor}`;
}

function activeButton() {
    const buttons = document.querySelectorAll(".buttons button");
    buttons.forEach(button => button.classList.remove("active"));
    this.classList.add("active");
}

createGrid(16);

const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", clearGrid);

const areaSlider = document.querySelector("#grid-size-slider");
areaSlider.addEventListener("input", updateGridSize);

const buttons = document.querySelectorAll(".buttons .modes");
buttons.forEach(button => button.addEventListener("click", activeButton));