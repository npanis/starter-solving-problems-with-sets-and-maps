/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */
function sumPairs(A, N) {
    const numbers = new Map();
    const solutions = new Map();

    A.forEach(element => {
        numbers.set(element);
    });

    A.forEach(element => {
        let diff = N - element;
        if ( diff !== element){
            if(numbers.has(diff)){
                solutions.set(Math.min(element, diff), Math.max(element, diff));
            }
        }
    })
    return [...solutions];

}

module.exports = sumPairs;
