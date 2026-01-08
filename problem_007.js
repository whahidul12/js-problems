function get_evenNumbers(numbers) {
    let evens = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evens.push(numbers[i]);
        }
    }
    return evens;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(get_evenNumbers(numbers));
