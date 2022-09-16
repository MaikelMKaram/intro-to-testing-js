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

//Exercise 10
function isFive(){
    return isFive()
}

//Exercise 11
function isEven(){
    return "";
}