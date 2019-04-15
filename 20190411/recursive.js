let fibo = function(n) {
    if(n < 2) return n;
    return fibo(n-1) + fibo(n-2);
};

let facto = function(n) {
    if(n < 2) return n;
    return n * facto(n-1);
};

console.log(fibo(7));
console.log(facto(4));
