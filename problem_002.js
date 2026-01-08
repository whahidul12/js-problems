const input = "bangladesh"

function is_vowel_include(input) {
    let count = 0
    for (const l of input) {
        const letter = l.toLowerCase()
        switch (letter) {
            case "a":
                count++
                break;
            case "e":
                count++
                break;
            case "i":
                count++
                break;
            case "o":
                count++
                break;
            case "u":
                count++
                break;
        }
    }
    return count
}

console.log(is_vowel_include(input));