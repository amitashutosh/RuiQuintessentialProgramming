/**
    Problem: Test if a given string is a palindrome.
    Example: "abccba" is a palindrome. "racecar" is a palindrome. "abcde" is not a palindrome.

    Variation 1: Given a string with white spaces and alpha numerics characters, test that a string is a palindrome. Note that any numeric and white spaces characters does not count into consideration and can be ignored. For example, "a bcba".

    Variation 2: Given an integer, test that 121 is a palindrome, 123 is NOT, 1023201 is a palindrome.
**/

function isPalindrome(str) {
    var str = str;
    var i  = 0;
    var j = str.length - 1;

    while (i < j) {
        if (str[i] != str[j]) {
            console.log("The given string", str, "is NOT a palindrome.");
            return false;
        }
        console.log("i, j before: ", i, j);
        i++; --j;
        console.log("i, j after: ", i, j);
    }

    console.log("The given string", str, "is a palindrome.");
    return true;
}


// Test cases
isPalindrome("");
isPalindrome("a");
isPalindrome("aba");
isPalindrome("aaaa");

isPalindrome("abcde");
isPalindrome("ab");
isPalindrome("123");
