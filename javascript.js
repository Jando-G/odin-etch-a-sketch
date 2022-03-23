function generateGrid(size) {
    let squares = document.querySelectorAll("div.square");
    squares.forEach(square => {
        square.remove();
    })
    let flexboxes = document.querySelectorAll("div.flexbox");
    flexboxes.forEach(box => {
        box.remove();
    })
    for(let i = 0; i < size; i++) {
        document.getElementById("container")
        .appendChild(document.createElement("div"))
        .classList.add("flexbox");
    }
    flexboxes = document.querySelectorAll("div.flexbox");
flexboxes.forEach(box => {
    for(let i = 0; i < size; i++) {
        box.appendChild(document.createElement("div")).style
        .cssText = `width: ${800 / size}px; height: ${800 / size}px;`;
    }
})
    squares = document.querySelectorAll("div.flexbox > div");
squares.forEach(square => {
    for(let i = 0; i < squares.length; i++) {
        square.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = 'black';
        })
    }
})
}

generateGrid(16);

document.getElementById("reset").addEventListener("click", (e) => {
    let size = prompt("Enter size of new grid (max: 30)\nLong loading time :(", 16)
    if(size > 30 || size < 0 || isNaN(size)) {
        alert("Invalid Value")
        return;
    }
    generateGrid(size)
})