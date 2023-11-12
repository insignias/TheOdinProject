const sketchpad = document.querySelector(".sketchpad");
const colorpicker = document.querySelector("#colorpicker");
const eraser = document.querySelector(".erase");
const clear = document.querySelector(".clear")

function buildGrid(val) {
    sketchpad.style.gridTemplateColumns = `repeat(${val}, 2fr)`;
    sketchpad.style.gridTemplateRows = `repeat(${val}, 2fr)`;
    for(let i=0; i< val*val; i++) {
        let box = document.createElement("div");
        box.className = "box"  
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = colorpicker.value
        })
        
        colorpicker.addEventListener("input", () => {
            box.addEventListener("mouseover", () => {
                box.style.backgroundColor = colorpicker.value 
            })
        })

        // Eraser
        eraser.addEventListener("click", () => {
            box.addEventListener("mouseover", () => {
                box.style.backgroundColor = "white"
            })
        })

        // Clear
        clear.addEventListener("click", () => {
            box.style.backgroundColor = "white"
        })
        sketchpad.appendChild(box)
    }
}

function cleanupGrid() {
    while(sketchpad.firstChild) sketchpad.removeChild(sketchpad.firstChild)
    colorpicker.value = "#0000ff"
}

const range = document.querySelector("#range")
const screenValue = document.querySelector(".value");
range.addEventListener("input", () => {
    let val = document.getElementById('range').value;
    console.log(val)
    screenValue.textContent = val
    cleanupGrid()
    buildGrid(val)
})


buildGrid(20)
