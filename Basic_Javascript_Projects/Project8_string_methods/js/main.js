
function addStrings() {
    let a = "asdf"
let b = "zxcv"
let c = "qwer"
document.getElementById("asdf").innerHTML =  a.concat(b, c);

}
function slicer() {
    let letters = "carts go behind horses"
    document.getElementById("return").innerHTML = 
    letters.slice(0, 5).toUpperCase();
}
function searcher() {
    let test = "heeps of fun";
    document.getElementById("search").innerHTML = test.search("haystack")
}
let numbers = 123;
function stringer (n) {
    return n.toString();
}
function preciser(n) {
    return n.toPrecision(4);
}


document.write(stringer(numbers ));
document.write(preciser(1672348));

let text = "hello world"
document.write(text.valueOf());