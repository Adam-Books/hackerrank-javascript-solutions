/*
Title:
  Project Euler #1: Multiples of 3 and 5
  
Description:
  If we list all the natural numbers below  that are multiples of  or , we get  and . The sum of these multiples is .

  Find the sum of all the multiples of  or  below .

  Input Format

  First line contains  that denotes the number of test cases. This is followed by  lines, each containing an integer, .

  Constraints

  Output Format

  For each test case, print an integer that denotes the sum of all the multiples of  or  below .

  Sample Input 0

  2
  10
  100
  Sample Output 0

  23
  2318
  Explanation 0

  For , if we list all the natural numbers below  that are multiples of  or , we get  and . The sum of these multiples is .

  Similarly for , we get .

  Link:
    https://www.hackerrank.com/contests/projecteuler/challenges/euler001/problem?isFullScreen=true

*/

// Solutions:
// Solution 1:
function main() {
    var t = parseInt(readLine());
    for (var a0 = 0; a0 < t; a0++){
        var n = BigInt(parseInt(readLine()));
        let result = 0
        n = n-1n
        let a = n/3n
        let b = n/5n
        let c = n/15n
        result = (( a*(a + 1n) ) /2n)*3n
        result += (( b*(b + 1n) ) /2n)*5n
        result -= (( c*(c + 1n) ) /2n)*15n
        console.log(String(result).slice(0, result.length))
    }
}
