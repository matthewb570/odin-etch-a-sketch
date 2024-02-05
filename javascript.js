setContainerSize();
drawGrid();


function setContainerSize() {
    const container = document.querySelector(".container");
    container.style.height = `${window.innerHeight}px`;
}

function drawGrid() {
    const grid = document.querySelector(".grid");
    const numGridItemsPerRow = 16;

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