function voteStatus () {
    let age, canVote;
    age = document.getElementById("Age").value;
    canVote = (age > 17) ? "You can vote":"You can not vote";
    document.getElementById("Vote").innerHTML = canVote;
}

function testFunction() {
    document.getElementById("New_and_This").innerHTML = "thoroughly utilized"
}

function Animal (species, age, location) {
    this.Animal_species = species;
    this.Animal_age = age;
    this.Animal_location = location;
}
let garfield = new Animal("cat", 54, "newspapers");

function garfieldFacts () {
    document.getElementById("garfield").innerHTML = garfield.Animal_age + " " + garfield.Animal_location + " " + garfield.Animal_species

}
function startCount() {
    
    function Minus_One (n) {
        let x = 0;
        if (x < n) {
            document.write(n);
            Minus_One(n - 1);
        }
    };
    let n = prompt('Where should i countdown from?');
    n = parseInt(n);
    Minus_One(n);

}
