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
    return tile;
}