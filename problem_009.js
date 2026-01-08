function calculate_factorial(num) {
    if (num < 0) return "your input is less then zero";
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result = result * i;
    }
    return result;
}

console.log(calculate_factorial(5));