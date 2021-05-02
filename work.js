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
var prompt = require ("prompt-sync")();
var number= prompt("please enter a number")
console.log("The result of your fibonacci number is:")
console.log(fibonacci(number))
