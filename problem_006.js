function sum_array(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

const numbers = [10, 20, 30, 40];
console.log(sum_array(numbers));