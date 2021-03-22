const alphabet = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const f =(text)=> {
    // split text into an array of characters
    const characters = text.split("");

    let response = characters.map((ch, index)=>{
        // check that character is alphabet
        const charCode = ch.charCodeAt(0)
        if((charCode>= 97 && charCode <= 122) || (charCode >= 65 && charCode <= 90)){ // character is alphabet
            const char = ch.toLowerCase();

            // check for character positio(index)
            const index = alphabet.indexOf(char);
            let resultingIndex = 25 - index;
            return alphabet[resultingIndex]
        }
        return ch;
    })
    return response.join("")
}

console.log(f("a"))
