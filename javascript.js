const container = document.querySelector(".container");
const grid = document.querySelector(".grid");

const gridWidth = 16;
let gridItem;
for (let i = 0; i < gridWidth * gridWidth; i++) {
    gridItem = document.createElement("div");
    gridItem.classList.toggle("grid-item");
    grid.appendChild(gridItem);
}

grid.style.width = `${gridItem.offsetWidth * gridWidth}px`;
container.style.height = `${window.innerHeight}px`;