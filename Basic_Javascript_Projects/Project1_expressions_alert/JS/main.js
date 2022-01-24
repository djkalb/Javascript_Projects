let a = "string"; b=11; c= false; d="eight";
//concatenating b and d since js assumes 11 is supposed to be a string
window.alert(b + d);
//expression displayed in html
document.write(11 + 22);
//prints a with the color green
document.write(a.fontcolor("green"))
//when the button is clicked in browser the text is changed into the str called in the function
function My_First_Function() {
    let str = "this is the button text";
    document.getElementById("Button_Text").innerHTML = str;
}


