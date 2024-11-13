const fibDP = (n) => {
    if (n === 0 || n === 1) return n;

    const dp = [0,1];

    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[dp.length-1];
}

const fibSwapVars = (n) => {
    if (n === 0 || n === 1) return n;

    let fib1 = 0;
    let fib2 = 1;
    let sum;

    for (let i = 1; i < n; i++) {
        sum = fib1 + fib2;
        fib1 = fib2;
        fib2 = sum;
    }

    return sum;
}

console.log(fibSwapVars(1000));
