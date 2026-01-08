function find_largest(numbers) {
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

const numbers = [5, 1, 9, 3];
console.log(find_largest(numbers)); 