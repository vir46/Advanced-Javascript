// Function Unshifting in Javascript

function callUnshift(){
    var country = ['japan','singapore','indonesia','malaysia'];

    console.log(country);

    console.log("~~ Unshifting ~~");
    country.unshift("india","philipine");
    console.log(country)
}

callUnshift();