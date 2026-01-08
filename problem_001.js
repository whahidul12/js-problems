const input = "programing"

function reverse_string(input) {
    const result = []
    for (const i of input) {
        result.unshift(i)
    }
    return result.join("")
}

console.log(reverse_string(input));