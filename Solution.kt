
class Solution {

    private companion object {
        const val ALPHABET_SIZE = 26
        const val NO_SINGLE_LETTER = ' '
    }

    fun smallestPalindrome(inputPalindrome: String): String {
        val frequency = IntArray(ALPHABET_SIZE)
        for (letter in inputPalindrome) {
            ++frequency[letter - 'a']
        }
        return createSmallestPalindrome(inputPalindrome, frequency)
    }

    private fun createSmallestPalindrome(inputPalindrome: String, frequency: IntArray): String {
        var index = 0
        var singleLetter = NO_SINGLE_LETTER
        val smallestPalindrome = CharArray(inputPalindrome.length)

        for (i in 0..<ALPHABET_SIZE) {
            if (frequency[i] == 0) {
                continue
            }
            val currentLetter = ('a' + i).toChar()

            if (frequency[i] % 2 == 1) {
                singleLetter = currentLetter
                --frequency[i]
            }

            while (frequency[i] > 0) {
                smallestPalindrome[index] = currentLetter
                smallestPalindrome[inputPalindrome.length - 1 - index] = currentLetter
                frequency[i] -= 2
                ++index
            }
        }

        if (singleLetter != NO_SINGLE_LETTER) {
            smallestPalindrome[index] = singleLetter
        }

        return String(smallestPalindrome)
    }
}
