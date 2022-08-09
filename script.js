createGrid();

function createGrid() {
    const grid = document.querySelector("#grid");

    for (let i = 0; i < 256; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        grid.appendChild(cell);
    }
}
