setContainerSize();
drawGrid();


function setContainerSize() {
    const container = document.querySelector(".container");
    container.style.height = `${window.innerHeight}px`;
}

function drawGrid() {
    const grid = document.querySelector(".grid");

    const gridWidth = 16;
    let gridItem;
    for (let i = 0; i < gridWidth * gridWidth; i++) {
        gridItem = document.createElement("div");
        gridItem.classList.toggle("grid-item");
        gridItem.addEventListener("mouseenter", toggleHighlightedClass);
        grid.appendChild(gridItem);
    }

    grid.style.width = `${gridItem.offsetWidth * gridWidth}px`;
}

function toggleHighlightedClass(event) {
    event.target.classList.add("highlighted");
}