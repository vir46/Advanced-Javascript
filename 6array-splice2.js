// Function Splice Array in Javascript

function callsplice(){
    var country = ['japan','singapore','indonesia','malaysia'];
    
    console.log(country);

    console.log("Using splice for deleting")

    country.splice(2,1);

    // 2 For data number, 1 for deleting 1 data after data number 2
    
    console.log(country);
}

callsplice();