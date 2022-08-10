createResizeButton();
createGrid();


function createGrid() {
    const grid = document.createElement("div");
    grid.id = "grid";

    //grid styling
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = `repeat(16, 1fr)`;
    grid.style.width = "40vw";
    grid.style.height = "40vw";

    //cell creation
    for (let i = 0; i < 256; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.id = `cell${i}`
        cell.addEventListener('mouseover', () => colorInCell(cell.id));

        //cell styling
        cell.style.border = "solid";
        cell.style.padding = "10px";

        grid.appendChild(cell);
    }
    

    const body = document.querySelector("body");
    body.appendChild(grid);
}


//colors in a selected cell
function colorInCell(cellID) {
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
