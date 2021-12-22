/*
Title:
  Big Sorting
  
Description:
  Consider an array of numeric strings where each string is a positive number with anywhere from  to  digits. 
  Sort the array's elements in non-decreasing, or ascending order of their integer values and return the sorted array.

  Example

  Return the array ['1', '3', '150', '200'].

  Function Description

  Complete the bigSorting function in the editor below.

  bigSorting has the following parameter(s):

  string unsorted[n]: an unsorted array of integers as strings
  Returns

  string[n]: the array sorted in numerical order
  Input Format

  The first line contains an integer, , the number of strings in .
  Each of the  subsequent lines contains an integer string, .

  Constraints

  Each string is guaranteed to represent a positive integer.
  There will be no leading zeros.
  The total number of digits across all strings in  is between  and  (inclusive).
  Sample Input 0

  6
  31415926535897932384626433832795
  1
  3
  10
  3
  5
  Sample Output 0

  1
  3
  3
  5
  10
  31415926535897932384626433832795
  Explanation 0

  The initial array of strings is . 
  When we order each string by the real-world integer value it represents, we get:

  We then print each value on a new line, from smallest to largest.

  Sample Input 1

  8
  1
  2
  100
  12303479849857341718340192371
  3084193741082937
  3084193741082938
  111
  200
  Sample Output 1

  1
  2
  100
  111
  200
  3084193741082937
  3084193741082938
  12303479849857341718340192371
  
Link:
  https://www.hackerrank.com/challenges/big-sorting/problem?isFullScreen=true

*/

// Solutions:
// Solution1:
const bigSorting = unsorted => 
unsorted.sort((a, b) => a.length == b.length ? a > b ? 1 : -1 : a.length - b.length);

// Solution 2:
function bigSorting(unsorted) {
  return unsorted.sort((a, b) => {
    if (a.length == b.length) {
      return a > b ? 1 : -1;
    }

    return a.length - b.length;
  });
}



