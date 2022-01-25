function myDictionary () {
    //makes a dictionary
    const dog = {
        age: 3,
        breed: "labrador",
        sound: "Woof",

    }
    //deletes an entry
    delete dog.sound;
    //calls a deleted entry
    document.getElementById("dict").innerHTML = dog.sound;
}