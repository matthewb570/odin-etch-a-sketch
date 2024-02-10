const DEFAULT_NUM_GRID_ITEMS_PER_ROW = 16;

let rainbowMode = false;

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

function toggleRainbowMode() {
    const btnToggleRainbowMode = document.querySelector("#btnToggleRainbowMode");
    
    rainbowMode = !rainbowMode;
    btnToggleRainbowMode.textContent = `Rainbow Mode: ${rainbowMode ? "On" : "Off"}`;
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
        
        gridItem.addEventListener("mouseenter", setBackgroundColor);
        
        grid.appendChild(gridItem);
    }
}

function setBackgroundColor(event) {
    if (rainbowMode) {
        event.target.style.backgroundColor =
            `rgb(${getRandomIntegerInRange(0, 255)}, ` +
                `${getRandomIntegerInRange(0, 255)}, ` +
                `${getRandomIntegerInRange(0, 255)})`;
    } else {
        event.target.style.backgroundColor = "black";
    }
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

    const btnToggleRainbowMode = document.querySelector("#btnToggleRainbowMode");
    btnToggleRainbowMode.addEventListener("click", toggleRainbowMode);
}

/*
    Returns a random integer between min (inclusive) and max (inclusive)
*/
function getRandomIntegerInRange(min, max) {
    return Math.floor((Math.random() * (max - min + 1))) + min;
}