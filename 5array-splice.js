// Function Splice Array in Javascript

function callsplice(){
    var country = ['japan','singapore','indonesia','malaysia'];
    
    console.log(country);

    console.log("Using splice put Korea index 2 without deleting after data")

    country.splice(2,0,"Korea");

    // 2 For data number, 0 for putting without delete
    
    console.log(country);
}

callsplice();