const DEFAULT_NUM_GRID_ITEMS_PER_ROW = 16;

setEventHandlers();
drawGrid(DEFAULT_NUM_GRID_ITEMS_PER_ROW);

function adjustGridSize() {
    let numGridItemsPerRow = prompt("Please enter a new number of pixels per "
        + "row between 1 and 50:");

    if (numGridItemsPerRow !== null) {
        numGridItemsPerRow = Number(numGridItemsPerRow);
        if (!Number.isInteger(numGridItemsPerRow) || numGridItemsPerRow < 1
            || numGridItemsPerRow > 50) {
            alert("Please enter an integer between 1 and 50.");
        } else {
            drawGrid(numGridItemsPerRow);
        }
    }
}

function drawGrid(numGridItemsPerRow) {
    const grid = document.querySelector(".grid");

    removeAllChildren(grid);

    for (let i = 0; i < numGridItemsPerRow * numGridItemsPerRow; i++) {
        
        const gridItem = document.createElement("div");
        
        gridItem.classList.toggle("grid-item");
        
        const gridItemWidthHeight = grid.clientWidth / numGridItemsPerRow;
        gridItem.style.width = `${gridItemWidthHeight}px`
        gridItem.style.height = `${gridItemWidthHeight}px`
        
        gridItem.addEventListener("mouseenter", toggleHighlightedClass);
        
        grid.appendChild(gridItem);
    }
}

function toggleHighlightedClass(event) {
    event.target.classList.add("highlighted");
}

function removeAllChildren(parentElement) {
    let lastElement = parentElement.lastElementChild;
    while(lastElement) {
        parentElement.removeChild(lastElement);
        lastElement = parentElement.lastElementChild;
    }
}

function setEventHandlers() {
    const btnAdjustGridSize = document.querySelector("#btnAdjustGridSize");
    btnAdjustGridSize.addEventListener("click", adjustGridSize);
}