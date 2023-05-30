/*
frontend src>board001>data>deck2 comments:
"Algorithms"

50, 150, -15
Get out of Debugging Free
Go back 3 spaces
Go to Debugging. Do not pass go.
For each skill pay 25, for each mastery 100.
Take a trip on the position 5.  ERD Estate.  Advance to . . . 
Take a walk on the position 39. Optimization Oasis
Pay each player 50

Advance to Iterate, 
Advance to (position 24, Events Estate), 
Advance to position 11, Javascript Junction
Advance token to nearest skillset ('CRUD Database', 'RESTful APIs',).  If unowned may buy.  If owned, throw dice
and pay 10x
2x Advance to nearest groupskill (['ERD Estates', 'Trello Terrace', 'Wireframes Way', 'Agile Avenue',],)  If unowned may buy. If owned, pay twice normal. 

Implementation and maintenance of AVL tree.  For each skill level, pay $40; for each mastery level, pay $115.  (Individual skill levels are replaced by mastery.)

https://www.analyticsinsight.net/top-10-programming-language-questions-asked-in-faang-interviews/
https://github.com/ombharatiya/FAANG-Coding-Interview-Questions
https://www.linkedin.com/pulse/list-algorithms-computer-programming-pranam-bhat
https://www.tutorialspoint.com/data_structures_algorithms/index.htm
https://www.geeksforgeeks.org/top-algorithms-and-data-structures-for-competitive-programming/

//Array
Maximum Subarray Sum: Kadane's Algorithm
Missing Number: XOR / Gauss's Formula
Array Rotation: Reversal Algorithm or Juggling Algorithm

//String
String Reversal: Two-Pointer Technique
Anagram Check: Frequency Counting or Sorting
Longest Common Prefix: Trie or Horizontal Scanning

//Sorting, Searching
1  Quicksort: Lomuto or Hoare Partition Scheme
2  Mergesort:  Divide and Conquer
3  Kth Largest: Quickselect algorithm
4  Binary Search: Iterative or Recursive Implementation

//Dynamic Programming
5  Knapsack Problem;  0/1 Knapsack or Unbounded Knapsack
6  Longest Increasing Subsequence: Dynamic Programming Approach
7 Fibonacci Numbers: Memoization or Bottom-Up Tabulation

//Graph Algorithms
8  Breadth First Search
9  Depth First Search (also used for Cycle Detection)
10  Shortest Path from source to all vertices (Dijkstra)
11  All pair shortest path (Floyd-Warshall)

//Recursion
12  Factorial: Recursive Function
13  Tree Traversal Order: Inorder, Preorder, Postorder (Recursive)

//Backtracking:
14  Permutations: Backtracking Algorithm
15  N-Queens: Backtracking with Constraint Satisfaction

//System Design:
16  URL Shortener: Base62 Encoding or Hashing with Distributed Key-Value Stores
Distributed Cache: Consistent Hashing or Memcached/Redis Implementation

*/


const deck2 = [
    {
        name: "Counting Sort",
        card_text: "50",
        image: "placeholderGraphicDeck2/countingSort.jpg",
        card_description: "A non-comparison-based algorithm that hashes value in a temporary count array.  Stable property allows use in radix sort.  O(n+k) time, using O(n+k) auxiliary space.",
        link: "https://www.youtube.com/watch?v=OKd534EWcdk",
    },
    {
        name: "Recursion",
        card_text: "150",
        image: "placeholderGraphicDeck2/recursion.jpg",
        card_description: "Recursion applications include Tree and Graph Traversal, Towers of Hanoi, Divide and Conquer algorithms, Merge Sort, Quick Sort, and Binary Search.  Use tail-end recursion where supported to prevent out of memory issues.",
        link: "",
    },
    {
        name: "Backtracking",
        card_text: "-15",
        image: "placeholderGraphicDeck2/backtracking.jpg",
        card_description: "",
        link: "",
    },
    {
        name: "",
        card_text: "Get out of Debugging Free",
        image: "placeholderGraphicDeck2/.jpg",
        card_description: "",
        link: "",
    },
    {
        name: "",
        card_text: "Go back 3 spaces",
        image: "placeholderGraphicDeck2/.jpg",
        card_description: "",
        link: "",
    },
    {
        name: "",
        card_text: "Go to Debugging. Do not pass go.",
        image: "placeholderGraphicDeck2/.jpg",
        card_description: "",
        link: "",
    },
    {
        name: "",
        card_text: "For each skill pay 25, for each mastery 100.",
        image: "placeholderGraphicDeck2/.jpg",
        card_description: "",
        link: "",
    },
    {
        name: "",
        card_text: "Take a trip on the position 5.  ERD Estate.  Advance to . . . ",
        image: "placeholderGraphicDeck2/.jpg",
        card_description: "",
        link: "",
    },
    {
        name: "",
        card_text: "Take a walk on the position 39. Optimization Oasis",
        image: "placeholderGraphicDeck2/.jpg",
        card_description: "",
        link: "",
    },
    {
        name: "",
        card_text: "Pay each player 50",
        image: "placeholderGraphicDeck2/.jpg",
        card_description: "",
        link: "",
    },
    {
        name: "",
        card_text: "Advance to Iterate, ",
        image: "placeholderGraphicDeck2/.jpg",
        card_description: "",
        link: "",
    },
    {
        name: "",
        card_text: "Advance to (position 24, Events Estate), ",
        image: "placeholderGraphicDeck2/.jpg",
        card_description: "",
        link: "",
    },
    {
        name: "",
        card_text: "Advance token to nearest skillset ('CRUD Database', 'RESTful APIs',).  If unowned may buy.  If owned, throw dice and pay 10x",
        image: "placeholderGraphicDeck2/.jpg",
        card_description: "",
        link: "",
    },
    {
        name: "",
        card_text: "Advance to nearest groupskill (['ERD Estates', 'Trello Terrace', 'Wireframes Way', 'Agile Avenue',],)  If unowned may buy. If owned, pay twice normal. ",
        image: "placeholderGraphicDeck2/.jpg",
        card_description: "",
        link: "",
    },
    {
        name: "",
        card_text: "Advance to nearest groupskill (['ERD Estates', 'Trello Terrace', 'Wireframes Way', 'Agile Avenue',],)  If unowned may buy. If owned, pay twice normal. ",
        image: "placeholderGraphicDeck2/.jpg",
        card_description: "",
        link: "",
    },
];
export default deck2;