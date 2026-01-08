function capitalize_words(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(" ");
}

const mySentence = "programming hero jindabad!!!";
console.log(capitalize_words(mySentence));
