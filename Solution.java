
public class Solution {

    private static final int ALPHABET_SIZE = 26;
    private static final char NO_SINGLE_LETTER = ' ';

    public String smallestPalindrome(String inputPalindrome) {
        int[] frequency = new int[ALPHABET_SIZE];
        for (char letter : inputPalindrome.toCharArray()) {
            ++frequency[letter - 'a'];
        }
        return createSmallestPalindrome(inputPalindrome.toCharArray(), frequency);
    }

    private String createSmallestPalindrome(char[] inputPalindrome, int[] frequency) {
        int index = 0;
        char singleLetter = NO_SINGLE_LETTER;
        char[] smallestPalindrome = new char[inputPalindrome.length];

        for (int i = 0; i < ALPHABET_SIZE; ++i) {
            if (frequency[i] == 0) {
                continue;
            }
            char currentLetter = (char) ('a' + i);

            if (frequency[i] % 2 == 1) {
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

        if (singleLetter != NO_SINGLE_LETTER) {
            smallestPalindrome[index] = singleLetter;
        }

        return String.valueOf(smallestPalindrome);
    }
}
