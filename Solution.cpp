
#include <span>
#include <array>
#include <string>
#include <string_view>
using namespace std;


class Solution {

    static const int ALPHABET_SIZE = 26;
    static const char NO_SINGLE_LETTER = ' ';

public:
    string smallestPalindrome(const string& inputPalindrome) const {
        array<int, ALPHABET_SIZE> frequency{};
        for (const auto& letter : inputPalindrome) {
            ++frequency[letter - 'a'];
        }
        return createSmallestPalindrome(inputPalindrome, frequency);
    }

private:
    string createSmallestPalindrome(string_view inputPalindrome, span<int> frequency) const {
        int index = 0;
        char singleLetter = NO_SINGLE_LETTER;
        string smallestPalindrome(inputPalindrome.length(), ' ');

        for (int i = 0; i < ALPHABET_SIZE; ++i) {
            if (frequency[i] == 0) {
                continue;
            }
            char currentLetter = (char)('a' + i);

            if (frequency[i] % 2 == 1) {
                singleLetter = currentLetter;
                --frequency[i];
            }

            while (frequency[i] > 0) {
                smallestPalindrome[index] = currentLetter;
                smallestPalindrome[inputPalindrome.length() - 1 - index] = currentLetter;
                frequency[i] -= 2;
                ++index;
            }
        }

        if (singleLetter != NO_SINGLE_LETTER) {
            smallestPalindrome[index] = singleLetter;
        }

        return smallestPalindrome;
    }
};
