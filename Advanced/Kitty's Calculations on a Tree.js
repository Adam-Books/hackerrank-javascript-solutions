/*
  Title:
    Kitty's Calculations on a Tree
  
  Description:
    
    Kitty has a tree, , consisting of  nodes where each node is uniquely labeled from  to . Her friend Alex gave her  sets, where each set contains  distinct nodes. Kitty needs to calculate the following expression on each set:

where:

 denotes an unordered pair of nodes belonging to the set.
 denotes the number of edges on the unique (shortest) path between nodes  and .
Given  and  sets of  distinct nodes, calculate the expression for each set. For each set of nodes, print the value of the expression modulo  on a new line.

Example



The graph looks like this:

image
There are three pairs that can be created from the query set: . The distance from  to  is , from  to  is , and from  to  is .

Now do the summation:

Input Format

The first line contains two space-separated integers, the respective values of  (the number of nodes in tree ) and  (the number of nodes in the query set).
Each of the  subsequent lines contains two space-separated integers,  and , that describe an undirected edge between nodes  and .
The  subsequent lines define each set over two lines in the following format:

The first line contains an integer, , the size of the set.
The second line contains  space-separated integers, the set's elements.
Constraints

The sum of  over all  does not exceed .
All elements in each set are distinct.
Subtasks

 for  of the maximum score.
 for  of the maximum score.
 for  of the maximum score.
Output Format

Print  lines of output where each line  contains the expression for the  query, modulo .

Sample Input 0

7 3
1 2
1 3
1 4
3 5
3 6
3 7
2
2 4
1
5
3
2 4 5
Sample Output 0

16
0
106
Explanation 0

Tree  looks like this:

image

We perform the following calculations for  sets:

Set : Given set , the only pair we can form is , where . We then calculate the following answer and print it on a new line:
Set : Given set , we cannot form any pairs because we don't have at least two elements. Thus, we print  on a new line.

Set : Given set , we can form the pairs , , and . We then calculate the following answer and print it on a new line:


      
  Link:
    https://www.hackerrank.com/challenges/kittys-calculations-on-a-tree/problem?isFullScreen=true
  
*/

// Solutions:

// Solution 1:
function processData(input) {
  //Enter your code here
} 


// Solution 2:


// Solution 3:

