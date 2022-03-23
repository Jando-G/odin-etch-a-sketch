for(let i = 0; i < 16; i++) {
    document.getElementById("container")
    .appendChild(document.createElement("div"))
    .classList.add("flexbox");
}
const flexboxes = document.querySelectorAll("div.flexbox");
flexboxes.forEach(box => {
    for(let i = 0; i < flexboxes.length; i++) {
        box.appendChild(document.createElement("div"))
        .classList.add("square");
    }
})
const squares = document.querySelectorAll("div.square");
squares.forEach(square => {
    for(let i = 0; i < squares.length; i++) {
        square.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = 'black';
        })
    }
})
