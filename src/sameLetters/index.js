/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array  of words
 */
function sameLetters(words) {
    let results = new Map();

    words.forEach(word => {
        console.log("word", word);
        let letterSet = new Set(word.toLowerCase().split(""));
        let sortedString = [...letterSet].sort().join("");
       if(results.has(sortedString)){
         results.get(sortedString).push(word);
       }else{
        results.set(sortedString, [word]);
       }
    });

    return results;
}

module.exports = sameLetters;
