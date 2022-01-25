//adds to user submitted numbers together and
function addition () {
    let x = prompt("please input a number");
    let y = prompt("please input a second number");
    document.getElementById("Math").innerHTML = parseInt(x) + parseInt(y);
}
//subtracts two user submitted numbers together and
function subtraction() {
    let x = prompt("please input a number");
    let y = prompt("please input a second number");
    document.getElementById("Math2").innerHTML = parseInt(x) - parseInt(y);
}
//timeseses two user submitted numbers together and
function multiplication() {
    let x = prompt("please input a number");
    let y = prompt("please input a second number");
    document.getElementById("Math3").innerHTML =parseInt(x) * parseInt(y);
}
//divides two user submitted numbers together and
function division() {
    let x = prompt("please input a number");
    let y = prompt("please input a second number");
    document.getElementById("Math4").innerHTML = parseInt(x) / parseInt(y);
}
//just alot of operators on the same line returns to doc
function multipleOperation() {
    let x = 5 * 3 + 11 / 3 - 4;
    document.getElementById("Math5").innerHTML = "5 * 3 + 11 / 3 -4 = " + x;
}
//returns the mode of 15 and a random number less than 10
function mode() {
    let x = Math.floor(Math.random() * 10);
    document.getElementById("Math6").innerHTML = "15 % " + x +" = " + 15 % x
}
//makes a number negative after adding and subtracting 1
function unary() {
    let x = 15;
    x ++;
    
    x --;
    document.getElementById("Math7").innerHTML = "negative " + -x 
}

