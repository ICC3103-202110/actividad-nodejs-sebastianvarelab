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

