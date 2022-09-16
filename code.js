// helloWorld function 
let helloWorld = function() {
    return "Hello, World!";
}
//Exercises 1-9
function sayHello(input){
    if(typeof input !== "string" || input === ""){
        return "Hello, World!"
    } else {
        return "Hello, " + input + "!"
    }
}