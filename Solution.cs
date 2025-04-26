
public class Solution
{
    private static readonly int ALPHABET_SIZE = 26;
    private static readonly char NO_SINGLE_LETTER = ' ';

    public string SmallestPalindrome(string inputPalindrome)
    {
        int[] frequency = new int[ALPHABET_SIZE];
        foreach (char letter in inputPalindrome)
        {
            ++frequency[letter - 'a'];
        }
        return CreateSmallestPalindrome(inputPalindrome, frequency);
    }

    private String CreateSmallestPalindrome(string inputPalindrome, int[] frequency)
    {
        int index = 0;
        char singleLetter = NO_SINGLE_LETTER;
        char[] smallestPalindrome = new char[inputPalindrome.Length];

        for (int i = 0; i < ALPHABET_SIZE; ++i)
        {
            if (frequency[i] == 0)
            {
                continue;
            }
            char currentLetter = (char)('a' + i);

            if (frequency[i] % 2 == 1)
            {
                singleLetter = currentLetter;
                --frequency[i];
            }

            while (frequency[i] > 0)
            {
                smallestPalindrome[index] = currentLetter;
                smallestPalindrome[inputPalindrome.Length - 1 - index] = currentLetter;
                frequency[i] -= 2;
                ++index;
            }
        }

        if (singleLetter != NO_SINGLE_LETTER)
        {
            smallestPalindrome[index] = singleLetter;
        }

        return new string(smallestPalindrome);
    }
}
