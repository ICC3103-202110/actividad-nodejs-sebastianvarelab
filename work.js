function fibonacci(number){
    if (number >1){
        return (fibonacci(number-1)+fibonacci(number-2));
    }
    if (number == 0){
        return 0;
    }
    if (number == 1){
        return 1;
    }
}
console.log("Hellow! today we will do fibonacci")
var prompt = require ("prompt-sync")();
var number= prompt("please enter a number: ")
console.log("The result of your fibonacci number is:")
console.log(fibonacci(number))
console.log("if you want to know more numbers please run de code again")
