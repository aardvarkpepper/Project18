/*
frontend src>board001>data>deck1 comments: 
"Data Structures"

O(n) time on data structures: 
https://dev.to/iuliagroza/complete-introduction-to-the-30-most-essential-data-structures-algorithms-43kd

General reference:
https://www.geeksforgeeks.org/introduction-to-data-structures/
https://www.tutorialspoint.com/data_structures_algorithms/index.htm
https://www.freecodecamp.org/news/algorithms-and-data-structures-free-treehouse-course/
https://www.programiz.com/dsa

Arrays, linked lists, stacks, queues, trees, graphs, hash tables, heaps, tries, sets, maps.  Some not used.
*/
const deck1 = [
    {
        name: "Array",
        card_text: "Accidentally attempt to use different data type in an array.  Pay $50 to debug.",
        image: "placeholderGraphicDeck1/array.jpg",
        card_description: "An array is a linear data structure. A collection of same-type data in contiguous memory locations.  Calculation of element position by applying offset to memory location of first element in array.  Fixed number of nodes.  Underlying data structure for stacks and queues.  Used in bubble, merge, and quicksort.",
        link: "https://www.geeksforgeeks.org/applications-advantages-and-disadvantages-of-array-data-structure/",
    },
    {
        name: "Linked List",
        card_text: "Use a linked list's pointer references to improve performance of an algorithm that frequently inserts and delets items in a large data collection. Collect $10 from each player.",
        image: "placeholderGraphicDeck1/linkedList.jpg",
        card_description: "Linear data structure.  Similar to array, but elements not stored in contiguous memory and number of nodes not fixed.  Insertion and deletion faster than array.  Elements linked using pointers.",
        link: "https://www.geeksforgeeks.org/applications-advantages-and-disadvantages-of-linked-list/",
    },
    {
        name: "Stack",
        card_text: "Stack overflow! Pay $50 to debug.",
        image: "placeholderGraphicDeck1/stack.jpg",
        card_description: "A stack is a linear data structure, insertion and deletion permitted only at one end.  LIFO (Last In First Out) or FILO (First In Last Out).",
        link: "https://www.geeksforgeeks.org/applications-advantages-and-disadvantages-of-stack/",
    },
    {
        name: "Queue",
        card_text: "Stuck in queue.  Pay $100",
        image: "placeholderGraphicDeck1/queue.jpg",
        card_description: "A queue is a linear data structure, items inserted one end, deleted other end. FIFO (First In First Out).",
        link: "https://www.geeksforgeeks.org/applications-advantages-and-disadvantages-of-queue/",
    },
    {
        name: "Binary Tree",
        card_text: "Find a near-ideal balanced use case for binary tree.  Collect $10",
        image: "placeholderGraphicDeck1/binaryTree.jpg",
        card_description: "Binary tree is a hierarchical data structure, each node at most two children.  May be unbalanced, space inefficient with pointer references, slow if many with only one child node.  Balancing algorithms add overhead.",
        link: "https://www.geeksforgeeks.org/applications-advantages-and-disadvantages-of-binary-tree/",
    },
    {
        name: "Binary Search Tree",
        card_text: "Get paid $200 to implement algorithm to sort and re-order nodes in binary search tree.",
        image: "placeholderGraphicDeck1/binarySearchTree.jpg",
        card_description: "Binary search tree is a type of binary tree, a hierarchical data structure.  Left part of root contains keys less than root node.  Right part of root contains keys greater than root node.  No duplicate keys.",
        link: "https://www.geeksforgeeks.org/applications-advantages-and-disadvantages-of-binary-search-tree/",
    },
    {
        name: "Binary Heap",
        card_text: "Collect $100 using heap in implementing heapsort (O(n log n)).",
        image: "placeholderGraphicDeck1/binaryHeap.jpg",
        card_description: "Binary heap is a hierarchical data structure tree.  Max-heap, root greatest among keys of children.  Min-heap, root minimum among keys of children.",
        link: "https://www.geeksforgeeks.org/applications-advantages-and-disadvantages-of-heap/",
    },
    {
        name: "Graph",
        card_text: "Use a graph data structure to quickly find shortest path.  Move to 'Iterate'.  (Collect $200 on entering square as usual.)",
        image: "placeholderGraphicDeck1/graph.jpg",
        card_description: "Graphs use non-linear data structure of nodes (vertices) and edges (lines).  Undirected (all edges bi-directional) or directed (all edges uni-directional).  Weighted (each edge has value) or unweighted.",
        link: "https://www.geeksforgeeks.org/applications-advantages-and-disadvantages-of-graph/",
    },
    {
        name: "String",
        card_text: "Use versatile string data structures to Get Out of Debugging Free.  This card may be kept until used, or sold to another player.",
        image: "placeholderGraphicDeck1/string.jpg",
        card_description: "Strings are widely supported, allowing string manipulation operations.",
        link: "https://www.geeksforgeeks.org/introduction-to-strings-data-structure-and-algorithm-tutorials/",
    },
    {
        name: "Hash Table",
        card_text: "Collect $50 while using unique (usually integer) keys associated with values in a hash table.",
        image: "placeholderGraphicDeck1/hashtable.jpg",
        card_description: "Hash table hash collisions must be resolved where there are multiple identical keys.",
        link: "https://www.programiz.com/dsa/hash-table",
    },
    {
        name: "Fibonacci Heap",
        card_text: "Use Fibonacci heap in implementation of Djikstra's algorithm.  Collect $100.",
        image: "placeholderGraphicDeck1/fibonacciHeap.jpg",
        card_description: "A Fibonacci heap is a set of min-heap ordered trees, each tree's root linked.  Node deletion and list concatenation takes O(1) time.  Used in graph algorithms or elsewhere for 'decrease key', changing value of key and updating heap structure to maintain Fibonacci heap properties.",
        link: "https://www.programiz.com/dsa/fibonacci-heap",
    },
    {
        name: "B Tree",
        card_text: "Reduce hard disk access time with a B tree! Collect $100.",
        image: "placeholderGraphicDeck1/bTree.jpg",
        card_description: "Shares some similarities with binary search tree, but a single node may have multiple keys, and more than two children.",
        link: "https://www.programiz.com/dsa/b-tree",
    },
    {
        name: "AVL Tree",
        card_text: "Implementation and maintenance of AVL tree.  For each skill level, pay $40; for each mastery level, pay $115.  (Individual skill levels are replaced by mastery.)",
        image: "placeholderGraphicDeck1/avlTree.jpg",
        card_description: "AVL trees use a self-balancing binary search tree using 'balance factor' for each node; the difference between height of left and right sub-trees.",
        link: "https://www.programiz.com/dsa/avl-tree",
    },
    {
        name: "Circular Queue",
        card_text: "Solve non-usable empty space after insertion/deletion issue of normal queues.  Collect $20.",
        image: "placeholderGraphicDeck1/circularQueue.jpg",
        card_description: "With circular queue, modulo division with queue size and two pointers allow efficient use of memory",
        link: "https://www.programiz.com/dsa/circular-queue",
    },
    {
        name: "Priority Queue",
        card_text: "Use a priority queue data structure to build a task scheduling algorithm.  Collect $25.",
        image: "placeholderGraphicDeck1/priorityQueue.jpg",
        card_description: "Elements in a priority queue also have a priority value.  Highest priority values are removed first, same order priority values are removed by order in queue.",
        link: "https://www.programiz.com/dsa/priority-queue",
    },
    {
        name: "Bad Data Structure",
        card_text: "Bad testing procedures and data structure combine to create serious bugs. Go to Debugging.  Do not pass Iterate, do not collect $200.",
        image:  "placeholderGraphicDeck1/badDataStructure.jpg",
        card_description: "Incorrect data structures can be costly!",
        link: "https://www.geeksforgeeks.org/10-famous-bugs-in-the-computer-science-world/",
    }
];
export default deck1;