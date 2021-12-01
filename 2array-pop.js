// Popping Function On Array

function callPop(){
    var country = ['japan','singapore','indonesia','malaysia','korea']
    console.log("Array member = " + country);
    console.log("====Popping====");
    
    
    var countryshift = country.pop();
    
    console.log("Pop From Array ->" + countryshift);
    return country;
}

console.log("Remaining Array Member " + callPop());