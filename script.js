createButton();
createGrid();

function createGrid() {
    const grid = document.createElement("div");
    grid.id = "grid";

    for (let i = 0; i < 256; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.id = `cell${i}`
        cell.addEventListener('mouseover', () => colorIn(cell.id));
        grid.appendChild(cell);
    }

    const body = document.querySelector("body");
    body.appendChild(grid);
}

//colors in a selected cell
function colorIn(cellID) {
    const cell = document.querySelector("#" + cellID);
    if (cell.style.backgroundColor == "") {
        cell.style.backgroundColor = "black";
    }
}

function createResizeButton() {
    const btn = document.createElement("button");
    btn.id = "resizeBtn"
    btn.textContent = "Resize";

    const body = document.querySelector("body");
    body.appendChild(btn);

}
