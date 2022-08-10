createGrid();

function createGrid() {
    const grid = document.querySelector("#grid");

    for (let i = 0; i < 256; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.id = `cell${i}`
        cell.addEventListener('mouseover', () => colorIn(cell.id));
        grid.appendChild(cell);
    }
}

//colors in a selected cell
function colorIn(cellID) {
    const cell = document.querySelector("#" + cellID);
    if (cell.style.backgroundColor == "") {
        cell.style.backgroundColor = "black";
    }
}
