for(let i = 0; i < 16; i++) {
    document.getElementById("container").appendChild(document.createElement("div")).classList.add("flexbox");
}
const flexboxes = document.querySelectorAll("div.flexbox");
flexboxes.forEach(box => {
    for(let i = 0; i < 16; i++) {
        box.appendChild(document.createElement("div")).classList.add("square");
    }
})
