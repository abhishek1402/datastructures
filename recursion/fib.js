function fib(num){
    return num <= 2 ? 1 : fib(num - 2) + fib(num - 1);
}

console.log(fib(4))