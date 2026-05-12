let userName=""
var startBtn=document.getElementById("input-btn")
var Inputname=document.getElementById("Input-nm")
var wlcmPage=document.getElementById("welcome-page")
var topicPage=document.getElementById("topic-page")
var quizPage=document.getElementById("quiz-page")
var resultPage=document.getElementById("result-page")
var currentQuestions = []
var currentQuestionIndex = 0
var score=0
const allQuestions = {
  "Arrays": [
    { question: "What is an array in C?", options: ["A single variable", "A collection of elements of the same type stored in contiguous memory", "A key-value pair", "A pointer to a function"], answer: "A collection of elements of the same type stored in contiguous memory" },
    { question: "What is the index of the first element in a C array?", options: ["1", "-1", "0", "Depends on compiler"], answer: "0" },
    { question: "Which is a valid array declaration in C?", options: ["array int a[5]", "int a[5]", "a int[5]", "declare a[5]"], answer: "int a[5]" },
    { question: "How do you access the 3rd element of array a[] in C?", options: ["a[3]", "a[2]", "a(3)", "a{2}"], answer: "a[2]" },
    { question: "What is the time complexity of accessing an element by index in C array?", options: ["O(n)", "O(log n)", "O(n²)", "O(1)"], answer: "O(1)" },
    { question: "What happens if you access an out of bounds index in C?", options: ["Error is thrown", "Returns 0", "Undefined behavior", "Program stops"], answer: "Undefined behavior" },
    { question: "How do you find the length of an array in C?", options: ["array.length()", "sizeof(a)/sizeof(a[0])", "len(a)", "a.size()"], answer: "sizeof(a)/sizeof(a[0])" },
    { question: "Which of these declares and initializes an array in C?", options: ["int a[] = {1,2,3}", "int a[] == {1,2,3}", "array a = {1,2,3}", "int a = [1,2,3]"], answer: "int a[] = {1,2,3}" },
    { question: "What is the time complexity of inserting at the beginning of a C array?", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], answer: "O(n)" },
    { question: "What is a 2D array in C?", options: ["Array with two elements", "Array of arrays", "Array with two data types", "Array with negative index"], answer: "Array of arrays" }
  ],

  "Linked List": [
    { question: "How is a node of a linked list defined in C?", options: ["using array", "using struct with data and pointer", "using class", "using typedef only"], answer: "using struct with data and pointer" },
    { question: "Which keyword is used to define a node structure in C?", options: ["class", "node", "struct", "define"], answer: "struct" },
    { question: "How do you allocate memory for a new node in C?", options: ["new Node()", "malloc(sizeof(struct Node))", "alloc(Node)", "create(Node)"], answer: "malloc(sizeof(struct Node))" },
    { question: "What is the correct way to access next pointer of a node in C?", options: ["node.next", "node->next", "node[next]", "node::next"], answer: "node->next" },
    { question: "What should the last node's next pointer be in C?", options: ["0", "itself", "NULL", "first node"], answer: "NULL" },
    { question: "What is the time complexity of accessing an element in a linked list?", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], answer: "O(n)" },
    { question: "Which function frees allocated memory in C?", options: ["delete()", "remove()", "free()", "clear()"], answer: "free()" },
    { question: "Time complexity of inserting at the beginning of a linked list in C?", options: ["O(n)", "O(log n)", "O(n²)", "O(1)"], answer: "O(1)" },
    { question: "What is a doubly linked list in C?", options: ["List with two head pointers", "Each node has next and previous pointer", "List with two data fields", "Circular list"], answer: "Each node has next and previous pointer" },
    { question: "Which of these is a disadvantage of linked list over array in C?", options: ["Dynamic size", "Easy deletion", "No random access by index", "Easy insertion"], answer: "No random access by index" }
  ],

  "Stack": [
    { question: "What principle does a stack follow?", options: ["FIFO", "FILO", "LIFO", "LILO"], answer: "LIFO" },
    { question: "How is a stack implemented using array in C?", options: ["Using head pointer", "Using top variable to track top element", "Using two pointers", "Using malloc only"], answer: "Using top variable to track top element" },
    { question: "What is the initial value of top in a C stack implementation?", options: ["0", "1", "-1", "NULL"], answer: "-1" },
    { question: "Which condition checks if stack is empty in C?", options: ["top == 0", "top == size", "top == -1", "top == NULL"], answer: "top == -1" },
    { question: "Which condition checks if stack is full in C?", options: ["top == -1", "top == 0", "top == size-1", "top == NULL"], answer: "top == size-1" },
    { question: "What does push operation do in C stack?", options: ["Removes top element", "Adds element at bottom", "Increments top and adds element", "Decrements top"], answer: "Increments top and adds element" },
    { question: "What does pop operation do in C stack?", options: ["Adds element", "Decrements top and returns element", "Increments top", "Clears stack"], answer: "Decrements top and returns element" },
    { question: "Which real-life example represents a stack?", options: ["Queue at a bank", "Pile of plates", "Graph traversal", "Linked list"], answer: "Pile of plates" },
    { question: "Time complexity of push and pop in a stack?", options: ["O(n)", "O(log n)", "O(1)", "O(n²)"], answer: "O(1)" },
    { question: "What happens when you push to a full stack in C?", options: ["Stack underflow", "Stack overflow", "Returns NULL", "Program exits"], answer: "Stack overflow" }
  ],

  "Queue": [
    { question: "What principle does a queue follow?", options: ["LIFO", "FILO", "FIFO", "LILO"], answer: "FIFO" },
    { question: "Which two pointers are used in a C queue implementation?", options: ["top and bottom", "start and end", "front and rear", "head and tail"], answer: "front and rear" },
    { question: "What is the initial value of front and rear in C queue?", options: ["0 and 0", "1 and 1", "-1 and -1", "0 and -1"], answer: "-1 and -1" },
    { question: "Which condition checks if queue is empty in C?", options: ["front == 0", "rear == 0", "front == -1", "rear == -1"], answer: "front == -1" },
    { question: "What does enqueue operation do in C?", options: ["Removes from front", "Adds element at rear", "Adds element at front", "Removes from rear"], answer: "Adds element at rear" },
    { question: "What does dequeue operation do in C?", options: ["Adds element at rear", "Removes and returns element from front", "Removes from rear", "Adds at front"], answer: "Removes and returns element from front" },
    { question: "Which real-life example represents a queue?", options: ["Pile of plates", "Stack of books", "People standing in a line", "Tree traversal"], answer: "People standing in a line" },
    { question: "What is a circular queue in C?", options: ["Queue with no elements", "Queue where rear connects back to front", "Queue with two fronts", "Queue with priority"], answer: "Queue where rear connects back to front" },
    { question: "Which traversal uses a queue?", options: ["DFS", "Inorder", "BFS", "Postorder"], answer: "BFS" },
    { question: "Time complexity of enqueue and dequeue in C?", options: ["O(n)", "O(log n)", "O(n²)", "O(1)"], answer: "O(1)" }
  ],

  "Tree": [
    { question: "How is a tree node defined in C?", options: ["using array", "using struct with data and left/right pointers", "using class", "using linked list"], answer: "using struct with data and left/right pointers" },
    { question: "What is the topmost node of a tree called?", options: ["Leaf", "Child", "Root", "Parent"], answer: "Root" },
    { question: "What are nodes with no children called?", options: ["Root nodes", "Parent nodes", "Leaf nodes", "Branch nodes"], answer: "Leaf nodes" },
    { question: "In a binary tree in C, each node has at most how many children?", options: ["1", "3", "4", "2"], answer: "2" },
    { question: "How do you access left child of a tree node in C?", options: ["node.left", "node->left", "node[left]", "node::left"], answer: "node->left" },
    { question: "Which traversal visits Left → Root → Right in C?", options: ["Preorder", "Postorder", "Inorder", "Level order"], answer: "Inorder" },
    { question: "Which traversal visits Root → Left → Right in C?", options: ["Inorder", "Postorder", "Level order", "Preorder"], answer: "Preorder" },
    { question: "What is a Binary Search Tree in C?", options: ["Tree where left child > root", "Tree where all nodes are equal", "Tree where left child < root < right child", "Tree with only leaf nodes"], answer: "Tree where left child < root < right child" },
    { question: "Time complexity of searching in a balanced BST in C?", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], answer: "O(log n)" },
    { question: "Which function is used to create a new tree node in C?", options: ["new Node()", "malloc(sizeof(struct Node))", "create()", "alloc(Node)"], answer: "malloc(sizeof(struct Node))" }
  ],

  "Graph": [
    { question: "What is a graph?", options: ["A tree with cycles", "A collection of nodes connected by edges", "A linear data structure", "A hierarchical structure"], answer: "A collection of nodes connected by edges" },
    { question: "How is a graph represented in C using a 2D array?", options: ["Linked list", "Adjacency matrix", "Stack array", "Queue array"], answer: "Adjacency matrix" },
    { question: "What is an adjacency list in C?", options: ["Array of integers", "Array of linked lists representing connections", "2D array only", "Single pointer"], answer: "Array of linked lists representing connections" },
    { question: "What is a directed graph?", options: ["Graph with no edges", "Graph where edges have no direction", "Graph where edges have a direction", "Graph with weighted nodes"], answer: "Graph where edges have a direction" },
    { question: "Which algorithm is used for shortest path in a graph?", options: ["DFS", "Binary Search", "Dijkstra's Algorithm", "Bubble Sort"], answer: "Dijkstra's Algorithm" },
    { question: "What does BFS stand for?", options: ["Binary First Search", "Breadth First Search", "Back First Search", "Base First Search"], answer: "Breadth First Search" },
    { question: "What does DFS stand for?", options: ["Data First Search", "Depth First Search", "Direct First Search", "Double First Search"], answer: "Depth First Search" },
    { question: "Which data structure does BFS use in C?", options: ["Stack", "Tree", "Queue", "Array"], answer: "Queue" },
    { question: "Which data structure does DFS use in C?", options: ["Queue", "Heap", "Stack", "Linked List"], answer: "Stack" },
    { question: "What is the space complexity of adjacency matrix in C?", options: ["O(V)", "O(E)", "O(V²)", "O(V+E)"], answer: "O(V²)" }
  ]
}
startBtn.addEventListener("click",function()
{
    userName=Inputname.value;
    wlcmPage.classList.add("hidden")
    topicPage.classList.remove("hidden")
})
var n=document.querySelectorAll(".topic").length
for(var i=0;i<n;i++)
{
    document.querySelectorAll(".topic")[i].addEventListener("click",function()
{
    topicPage.classList.add("hidden")
    quizPage.classList.remove("hidden")
    var selectedTopic=this.textContent;
    currentQuestions = allQuestions[selectedTopic] 
    showQuestion()
})
}
function showQuestion()
{
    questionText=document.getElementById("question-text")
    options=document.querySelectorAll(".option")
    n=options.length
    for(var i=0;i<n;i++)
    {
        options[i].style.backgroundColor=""
    }
    questionText.textContent=currentQuestions[currentQuestionIndex].question
    for(var i=0;i<n;i++)
    {
        options[i].textContent=currentQuestions[currentQuestionIndex].options[i]
    }
}
var clickedBtn=document.querySelectorAll(".option")
var n=clickedBtn.length
for(var i=0;i<n;i++)
{
    clickedBtn[i].addEventListener("click",function()
{
    if(this.textContent===currentQuestions[currentQuestionIndex].answer)
    {
        score++
        this.style.backgroundColor="green"
    }
    else
    {
        this.style.backgroundColor="red"
    }
    setTimeout(function(){

    currentQuestionIndex++;

    if(currentQuestionIndex<10)
    {
        showQuestion()
    }
    else
    {
        quizPage.classList.add("hidden")
        resultPage.classList.remove("hidden")

        document.getElementById("result-text").textContent=userName + "! You scored " + score + "/10!"
    }
},250)
})
}
var nextBtn=document.getElementById("next-btn")
nextBtn.addEventListener("click",function()
{
    currentQuestionIndex=currentQuestionIndex+1
    if(currentQuestionIndex<10)
    {
        showQuestion()
    }
    else{
        quizPage.classList.add("hidden")
        resultPage.classList.remove("hidden")
    }
})