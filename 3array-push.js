// Pushing to Array

function callPush(){
    var data = [1,2,3,4,5,6,7,8];

    console.log("Array > " + data);
    console.log("==Pushing 9 to array==")
    data.push(9);
    console.log("Array > " + data);
    console.log("==Pushing word 'Hello World' to array==")
    data.push("Hello World");
    return data;
}

console.log("Array > " + callPush());