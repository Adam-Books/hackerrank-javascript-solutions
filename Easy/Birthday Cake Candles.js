/*
  Title:
    Birthday Cake Candles
  
  Description:
    You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

    Example
    Candles = [4, 4, 1, 3]

    The maximum height candles are  units high. There are  of them, so return .

    Function Description

    Complete the function birthdayCakeCandles in the editor below.

    birthdayCakeCandles has the following parameter(s):

    int candles[n]: the candle heights
    Returns

    int: the number of candles that are tallest
    Input Format

    The first line contains a single integer, , the size of .
    The second line contains  space-separated integers, where each integer  describes the height of .

    Constraints

    Sample Input 0

    4
    3 2 1 3
    Sample Output 0

    2
    Explanation 0

    Candle heights are [3, 2, 1, 3]. 
    The tallest candles are 3 units, and there are 2 of them.
  
  Link:
    https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true
  
*/

// Solutions:

// Solution 1:
function birthdayCakeCandles(c) {
    const max = Math.max(...c);
    return c.filter(e => e == max).length;
}

// Solution 2:

// Solution 3:
