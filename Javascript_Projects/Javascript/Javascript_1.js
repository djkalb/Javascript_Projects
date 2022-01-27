function Color_function() {
    let Color_Output;
    let color = document.getElementById("choice").value
    let color_string = " is a good color."
    switch(color) {
        case "red":
            Color_Output = "red" + color_string;
        break;
        case "yellow":
            Color_Output = "red" + color_string;
        break;
        case "green":
            Color_Output = "red" + color_string;
        break;
        case "blue":
            Color_Output = "red" + color_string;
        break;
        case "pink":
            Color_Output = "red" + color_string;
        break;
        case "purple":
            Color_Output = "red" + color_string;
        break;
        default: 
        Color_Output = "type it in right"
    }
    document.getElementById("Output").innerHTML = Color_Output;
}
//window.alert(document.getElementsByClassName("test").length)
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d")

let grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "white");
grd.addColorStop(1, "blue")
ctx.fillStyle = grd;
ctx.fillRect(20,20,150, 100);