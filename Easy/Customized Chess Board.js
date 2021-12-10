/*
Title
  Customized Chess Board
  
Description
  Since all chess boards available in the market are  boards, Alex decides to paint a customised  board. Given the painted chess board, can you tell if it is painted correctly or not ? A chess board is considered valid if every  adjacent cells are painted with different color. Two cells are considered adjacent if they share a boundary e.g.

  image

  Chess board in figure I is painted correctly though chess board in figure II is not.

  Input Format

  First line of input contains a single integer  denoting the number of test cases.
  First line of each test contains a single integer  denoting the size of the board.
  Next  lines of each test case contains  space separated integers. If the  integer in  line is , it means that cell is painted in black color otherwise it is painted in white color and is represented with .

  Constraints

  Output Format

  For each test case, Print Yes if the chess board is painted correctly, Print No otherwise in a new line.

  Sample Input 0

  2
  2
  0 0
  0 0
  2
  0 1
  1 0
  Sample Output 0

  No
  Yes
  Explanation 0

  In the first test case, adjacent cells are painted with same color making painted configuration invalid.
  In the second test case, every pair of adjacent cells is painted with different color making chess board configuration valid.
  
  Link:
    https://www.hackerrank.com/contests/hourrank-29/challenges/customized-chess-board/problem?isFullScreen=true

*/

// Solutions:
// Solution 1:
const solve = board => {

let base = board[0][0];

for(let i =0; i <board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
        if((i +j) % 2 == 0) {
            if (board[i][j] != base) return "No";
        } else if(board[i][j] == base) return "No";
    }
}
return "Yes";
}

