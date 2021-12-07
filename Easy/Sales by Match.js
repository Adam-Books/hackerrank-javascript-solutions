/*
Title:
  Sales by Match
  
Description:
  There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

  Example


  There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

  Function Description

  Complete the sockMerchant function in the editor below.

  sockMerchant has the following parameter(s):

  int n: the number of socks in the pile
  int ar[n]: the colors of each sock
  Returns

  int: the number of pairs
  Input Format

  The first line contains an integer , the number of socks represented in .
  The second line contains  space-separated integers, , the colors of the socks in the pile.

  Constraints

   where 
  Sample Input

  STDIN                       Function
  -----                       --------
  9                           n = 9
  10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
  Sample Output

  3
  Explanation

  sock.png

  There are three pairs of socks.

  Language
  JavaScript (Node.js)

  More
  3233343536373839404142434445
   *  2. INTEGER_ARRAY ar


  function sockMerchant(n, ar) {
      // Write your code here
      const s = ar.reduce((a, b) => (a & b));
      return +s.length / 2;
  }

  function main() {

  Line: 36 Col: 24

  Submit Code

  Run Code

  Upload Code as File

  Test against custom input
  Wrong Answer :(

  2/2 test cases failed


  Sample Test case 0

  Sample Test case 1
  Compiler Message
  Wrong Answer
  Input (stdin)

  Download
  9
  10 20 20 10 10 30 50 10 20
  Your Output (stdout)
  NaN
  Expected Output

  Download
  3
  Contest CalendarBlogScoring

Link:
  https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true

*/

// Solutions:
// Solution1:
