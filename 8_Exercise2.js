// Buat Array dengan isi  Apple , Mango
// Print Array sebelum Command
// Gunakan UnShift Command, Hasil Akhir Menjadi Banana , Orange , Apple , Mango

function arrayExercise(){
    var fruit = ["Apple","Mango"];
    
    console.log(fruit);
    console.log("~ unshifting ~");
    fruit.unshift("Banana","Orange");
    console.log(fruit);
}

arrayExercise();