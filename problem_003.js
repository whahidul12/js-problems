const input = "madam";

function is_palindrome(input) {
    for (let i = 0; i < input.length / 2; i++) {
        if (input[i] !== input[input.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(is_palindrome(input)); 