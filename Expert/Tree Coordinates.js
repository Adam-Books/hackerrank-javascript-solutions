/*
  Title:
    Tree Coordinates
  
  Description:
    We consider metric space to be a pair, , where  is a set and  such that the following conditions hold:

    where  is the distance between points  and .

    Let's define the product of two metric spaces, , to be  such that:

    , where , .
    So, it follows logically that  is also a metric space. We then define squared metric space, , to be the product of a metric space multiplied with itself: .

    For example, , where  is a metric space. , where .

    In this challenge, we need a tree-space. You're given a tree, , where  is the set of vertices and  is the set of edges. Let the function  be the distance between two vertices in tree  (i.e.,  is the number of edges on the path between vertices  and ). Note that  is a metric space.

    You are given a tree, , with  vertices, as well as  points in . Find and print the distance between the two furthest points in this metric space!

    Input Format

    The first line contains two space-separated positive integers describing the respective values of  (the number of vertices in ) and  (the number of given points).
    Each line  of the  subsequent lines contains two space-separated integers,  and , describing edge  in .
    Each line  of the  subsequent lines contains two space-separated integers describing the respective values of  and  for point .

    Constraints

    Scoring

    This challenge uses binary scoring, so you must pass all test cases to earn a positive score.

    Output Format

    Print a single non-negative integer denoting the maximum distance between two of the given points in metric space .

    Sample Input 0

    2 2
    1 2
    1 2
    2 1
    Sample Output 0

    2
    Explanation 0

    The distance between points  and  is .

    Sample Input 1

    7 3
    1 2
    2 3
    3 4
    4 5
    5 6
    6 7
    3 6
    4 5
    5 5
    Sample Output 1

    3
    Explanation 1

    The best points are  and , which gives us a distance of .
        
          
  Link:
    https://www.hackerrank.com/challenges/tree-coordinates/problem?isFullScreen=true
  
*/

// Solutions:

// Solution 1:
function treeCoordinates(n, edges, points) {
  // Write your code here

}

// Solution 2:


// Solution 3:

