function getReceipt() {
    //stores a text receipt of every item
    let text1 = "<h3>You Ordered:</h3>"
    //stores the price
    let runningTotal = 0;
    let sizeTotal = 0;
    let selectedSize
    let sizeArray = document.getElementsByClassName("size");
    for (let i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            console.log(sizeArray[i])
            selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    //selects the chosen pizza size
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 12;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 14;
    }
    runningTotal = sizeTotal;
    console.log(runningTotal);
    getTopping(runningTotal, text1);
};
//counts up all the ordered toppings
function getTopping(runningTotal, text1) {
    let toppingTotal = 0;
    let selectedTopping = [];
    let toppingArray = document.getElementsByClassName("topping")
    //creates array of selected toppings
    for (let j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            
            selectedTopping.push(toppingArray[j].value)
            text1 = text1+toppingArray[j].value+"<br>"
        }
    }
    //counts toppings up and adds them onto the price 1$ per topping after the first
    let toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal)
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+ runningTotal + ".00"+"</strong></h3>"
}