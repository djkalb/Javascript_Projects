function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
let Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
let Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White and Black");
let Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("keywords").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + " colored " + Erik.Vehicle_Year + " " + 
    Erik.Vehicle_Make + " " + Erik.Vehicle_Model;  
}