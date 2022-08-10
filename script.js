main();

function main() {
    createTitle();
    createResizeButton();
    createGrid();
    styleBody();
}

function styleBody() {
    const body = document.querySelector("body");
    body.style.display = "flex";
    body.style.flexDirection = "column";
    body.style.alignItems = "center";
    body.style.backgroundColor = "red";
}

function createTitle() {
    const header = document.createElement("header");
    header.innerHTML = "<h1>Etch A Sketch V1<h1>";
    header.style.color = "gold";

    const body = document.querySelector("body");
    body.appendChild(header);
}

function createGrid(numSides = 16) {
    const grid = document.createElement("div");
    grid.id = "grid";

    //grid styling
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = `repeat(${numSides}, 1fr)`;
    grid.style.width = "40vw";
    grid.style.height = "40vw";

    //cell creation
    for (let i = 0; i < numSides**2; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.id = `cell${i}`
        cell.addEventListener('mouseover', () => colorInCell(cell.id));

        //cell styling
        cell.style.border = "thin solid black";
        cell.style.padding = `${grid.style.width/numSides}`;
        cell.style.backgroundColor = "ivory";

        grid.appendChild(cell);
    }
    

    const body = document.querySelector("body");
    body.appendChild(grid);
}


//colors in a selected cell
function colorInCell(cellID) {
    const cell = document.querySelector("#" + cellID);
    if (cell.style.backgroundColor == "ivory") {
        cell.style.backgroundColor = "black";
    }
}


function createResizeButton() {
    const btn = document.createElement("button");
    btn.id = "resizeBtn"
    btn.textContent = "Resize";
    btn.style.margin = "2vh"
    btn.addEventListener("click", () => resizeGrid());

    const body = document.querySelector("body");
    body.appendChild(btn);
}


function resizeGrid() {
    let numSides = + prompt("Please enter the number of squares per side: \n" +
                            "(i.e. Enter 20 for a 20x20 grid. Maximum 100.)");
    if(numSides == 0){
        return;
    }
    else if(isNaN(numSides) || numSides < 0 || numSides > 100) {
        alert("Please enter a valid number.");
        resizeGrid();
    }
    else{
        const grid = document.querySelector("#grid");
        const body = document.querySelector("body");

        body.removeChild(grid);
        createGrid(numSides);
    }
}
