let test = "hello i am aafd"
function Call_Loop() {
    let digit = ""
    let i = 0
    while (i < test.length) {
        digit += i + "<br>"
        document.getElementById("Loop").innerHTML = digit;
        i++;
    }
}
let spacer = ""
let instruments = ["Guitar", "Drums", "Piano", "Bass"]
function looper () {
    for (let i = 0; i < instruments.length; i++) {
        if(i >3) {
            break;
        }
        if(i == 2) {
            continue;
        }
        spacer += instruments[i] + "<br>";
    }
    document.getElementById("list").innerHTML = spacer;
    
}

function array_Function() {
    let arr = [3, "dog", 8, 17]
    return document.getElementById("Array").innerHTML = arr[1]
}
const ardvar = {
    type: "brown",
    size: "massive",
    
}
function constantFunction() {
    document.getElementById("Constant").innerHTML = ardvar.type
}

let obj = {
    brick: "red ",
    size: "medium ",
    concater: function conc () {
       document.getElementById("object").innerHTML = this.brick.concat(this.size)
    }
}