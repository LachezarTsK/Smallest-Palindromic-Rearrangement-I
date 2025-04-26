
const ALPHABET_SIZE = 26;
const NO_SINGLE_LETTER = ' ';
const ASCII_SMALL_CASE_A = 97;

function smallestPalindrome(inputPalindrome: string): string {
    const frequency: number[] = new Array(ALPHABET_SIZE).fill(0);
    for (let i = 0; i < inputPalindrome.length; ++i) {
        ++frequency[inputPalindrome.codePointAt(i) - ASCII_SMALL_CASE_A];
    }
    return createSmallestPalindrome(inputPalindrome, frequency);
};

function createSmallestPalindrome(inputPalindrome: string, frequency: number[]): string {
    let index = 0;
    let singleLetter = NO_SINGLE_LETTER;
    const smallestPalindrome: string[] = new Array(inputPalindrome.length);

    for (let i = 0; i < ALPHABET_SIZE; ++i) {
        if (frequency[i] === 0) {
            continue;
        }
        const currentLetter = String.fromCodePoint(ASCII_SMALL_CASE_A + i);

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

    if (singleLetter !== NO_SINGLE_LETTER) {
        smallestPalindrome[index] = singleLetter;
    }

    return smallestPalindrome.join('');
}
