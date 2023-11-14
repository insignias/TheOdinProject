const sketchpad = document.querySelector(".sketchpad");
const colorpicker = document.querySelector("#colorpicker");
const random = document.querySelector(".random");
const eraser = document.querySelector(".erase");
const clear = document.querySelector(".clear");
const range = document.querySelector("#range")
const screenValue = document.querySelector(".value");

function randomColorGenerator() {
    color = '#'
    letters = 'abcdef0123456789';
    for(let i=0; i<6; i++) {
        color += letters.charAt(Math.floor(Math.random()*letters.length))
    }
    return color;
}

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

        // Random
        random.addEventListener("click", () => {
            colorpicker.value = randomColorGenerator()
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

range.addEventListener("input", () => {
    let val = range.value;
    screenValue.textContent = val
    cleanupGrid()
    buildGrid(val)
})

buildGrid(20);