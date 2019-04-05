// 242. Valid Anagram
// Easy

// 649

// 96

// Favorite

// Share
// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?
var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    
    const firstCharMap = buildCharMap(s);
    const secondCharMap = buildCharMap(t);
    
    for(let char in firstCharMap) {
        if(firstCharMap[char] !== secondCharMap[char]) {
            return false;
        }
    }
    return true

};

let buildCharMap = function(str) {
    const charMap = {};
    str = str.replace(/[^\w]/g,'').toLowerCase();
    
    for(let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap
}

Approach #2 (Hash Table) [Accepted]
Algorithm

To examine if tt is a rearrangement of ss, we can count occurrences of each letter in the two strings and compare them. Since both ss and tt contain only letters from a-za−z, a simple counter table of size 26 is suffice.

Do we need two counter tables for comparison? Actually no, because we could increment the counter for each letter in ss and decrement the counter for each letter in tt, then check if the counter reaches back to zero.

public boolean isAnagram(String s, String t) {
    if (s.length() != t.length()) {
        return false;
    }
    int[] counter = new int[26];
    for (int i = 0; i < s.length(); i++) {
        counter[s.charAt(i) - 'a']++;
        counter[t.charAt(i) - 'a']--;
    }
    for (int count : counter) {
        if (count != 0) {
            return false;
        }
    }
    return true;
}
Or we could first increment the counter for ss, then decrement the counter for tt. If at any point the counter drops below zero, we know that tt contains an extra letter not in ss and return false immediately.

public boolean isAnagram(String s, String t) {
    if (s.length() != t.length()) {
        return false;
    }
    int[] table = new int[26];
    for (int i = 0; i < s.length(); i++) {
        table[s.charAt(i) - 'a']++;
    }
    for (int i = 0; i < t.length(); i++) {
        table[t.charAt(i) - 'a']--;
        if (table[t.charAt(i) - 'a'] < 0) {
            return false;
        }
    }
    return true;
}


// Complexity analysis

// Time complexity : O(n)O(n). Time complexity is O(n)O(n) because accessing the counter table is a constant time operation.

// Space complexity : O(1)O(1). Although we do use extra space, the space complexity is O(1)O(1) because the table's size stays constant no matter how large nn is.

// Follow up

// What if the inputs contain unicode characters? How would you adapt your solution to such case?

// Answer

// Use a hash table instead of a fixed size counter. Imagine allocating a large size array to fit the entire range of unicode characters, which could go up to more than 1 million. A hash table is a more generic solution and could adapt to any range of characters.