let x = 0
function errorProne () {
    let y = 0;
    return x + z;
}
function greetMe () {
    if (new Date().getHours() < 11 ) {
        document.getElementById("greeting").innerHTML = "good morning"
    }
    else if (new Date().getHours() > 19 ){
        document.getElementById("greeting").innerHTML = "good night"
    }
    else {
        document.getElementById("greeting").innerHTML = "good afternoon"
    }
}
function ageCheck() {
    let age = document.getElementById("ager").value;
    console.log(age);
    if( age < 100) {
        document.getElementById("answer").innerHTML = 
        "You are not that old yet"
    }
    else {
        document.getElementById("answer").innerHTML = 
        "You are definitely old"
    }
}