
/**
 * @param {string} inputPalindrome
 * @return {string}
 */
var smallestPalindrome = function (inputPalindrome) {
    this.ALPHABET_SIZE = 26;
    this.NO_SINGLE_LETTER = ' ';
    this.ASCII_SMALL_CASE_A = 97;

    const frequency = new Array(this.ALPHABET_SIZE).fill(0);
    for (let i = 0; i < inputPalindrome.length; ++i) {
        ++frequency[inputPalindrome.codePointAt(i) - this.ASCII_SMALL_CASE_A];
    }
    return createSmallestPalindrome(inputPalindrome, frequency);
};

/**
 * @param {string} inputPalindrome
 * @param {number[]} frequency
 * @return {string}
 */
function createSmallestPalindrome(inputPalindrome, frequency) {
    let index = 0;
    let singleLetter = this.NO_SINGLE_LETTER;
    const smallestPalindrome = new Array(inputPalindrome.length);

    for (let i = 0; i < this.ALPHABET_SIZE; ++i) {
        if (frequency[i] === 0) {
            continue;
        }
        const currentLetter = String.fromCodePoint(this.ASCII_SMALL_CASE_A + i);

        if (frequency[i] % 2 === 1) {
            singleLetter = currentLetter;
            --frequency[i];
        }

        while (frequency[i] > 0) {
            smallestPalindrome[index] = currentLetter;
            smallestPalindrome[inputPalindrome.length - 1 - index] = currentLetter;
            frequency[i] -= 2;
            ++index;
        }
    }

    if (singleLetter !== this.NO_SINGLE_LETTER) {
        smallestPalindrome[index] = singleLetter;
    }

    return smallestPalindrome.join('');
}
