function remove_duplicates(numbers) {
    let uniqueNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (!uniqueNumbers.includes(numbers[i])) {
            uniqueNumbers.push(numbers[i]);
        }
    }
    return uniqueNumbers;
}

const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(remove_duplicates(numbers));