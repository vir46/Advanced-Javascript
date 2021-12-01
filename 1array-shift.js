// Shifting Function On Array

function callShift(){
    var country = ['japan','singapore','indonesia','malaysia','korea']
    console.log("Array member = " + country);
    console.log("====Shifting====");
    
    
    var countryshift = country.shift();
    
    console.log("Shifted From Array ->" + countryshift);
    return country;
}

console.log("Remaining Array Member " + callShift());