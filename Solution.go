
package main

const ALPHABET_SIZE int = 26
const NO_SINGLE_LETTER byte = ' '

func smallestPalindrome(inputPalindrome string) string {
    frequency := make([]int, ALPHABET_SIZE)
    for _, letter := range inputPalindrome {
        frequency[letter-'a']++
    }
    return createSmallestPalindrome(inputPalindrome, frequency)
}

func createSmallestPalindrome(inputPalindrome string, frequency []int) string {
    index := 0
    singleLetter := NO_SINGLE_LETTER
    smallestPalindrome := make([]byte, len(inputPalindrome))

    for i := range ALPHABET_SIZE {
        if frequency[i] == 0 {
            continue
        }
        currentLetter := rune('a' + i)

        if frequency[i]%2 == 1 {
            singleLetter = byte(currentLetter)
            frequency[i]--
        }

        for frequency[i] > 0 {
            smallestPalindrome[index] = byte(currentLetter)
            smallestPalindrome[len(inputPalindrome)-1-index] = byte(currentLetter)
            frequency[i] -= 2
            index++
        }
    }

    if singleLetter != NO_SINGLE_LETTER {
        smallestPalindrome[index] = singleLetter
    }

    return string(smallestPalindrome)
}
