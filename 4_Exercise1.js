// Buat Array dengan isi  Banana , Orange , Apple , Mango
// Print Array sebelum Command
// Gunakan Pop Shift Command, Hasil Akhir Menjadi Banana , Orange , Apple lalu Orange , Apple

function arrayExercise(){
    var fruit = ["Banana","Orange","Apple","Mango"];
    
    console.log(fruit);
    console.log("~Popping~");
    fruit.pop();
    console.log(fruit);
    console.log("~Shifting~");
    fruit.shift();
    return fruit;
}

console.log(arrayExercise());