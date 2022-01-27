function changeColor(color) {
    let newColor = color.getAttribute("data-color-type");
    console.log(document.getElementById(newColor))
    document.getElementById(newColor).style.color = newColor;
}