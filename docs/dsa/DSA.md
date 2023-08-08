---
sidebar_position: 1
---

# DSA

[DSA COMPLEXITY CHEATSHEET .pdf](DSA%20932c7dd9e7c64f9ea9af3bbbe088ee2b/DSA_COMPLEXITY_CHEATSHEET_.pdf)

### BUBBLE SORT - repeatedly swap two adjancent element if they are in wrong order

1st round mein jo max element h vo apni shi jgh pr pahuch jata h

 n-i iteration to get sorted array 

<aside>
💡 In Bubble Sort we repeteadly checks through the list and check the adjacent element, if the adjacent element is smaller then we swap the element and in this way we push the largest element to the end for each iteration. For ith iteration we the ith element at the correct position.

</aside>

```cpp
#include<iostream>
using namespace std; 

void bubbleSort(int arr[], int n)
{

    for(int i=1;i<n;i++){
        for(int j=0;j<n-i;j++){
            if(arr[j]>arr[j+1]){
                swap(arr[j],arr[j+1]);
            }
        }
    }
}

void printArray(int arr[], int size)
{
   
    for (int i = 0; i < size; i++)
        cout << " " << arr[i];
}
int main()
{
    int arr[] = { 64, 34, 25, 12, 22, 11, 90 };
    int N = sizeof(arr) / sizeof(arr[0]);
    bubbleSort(arr, N);
    cout << "Sorted array: \n";
    printArray(arr, N);
    return 0;
}

TC - O(n)// BEST CASE
O(n^2) //WORST CASE 

Bubble sort is easy to understand and implement.
It does not require any additional memory space.
```

### SELECTION SORT

get the minimum and place it at the first

<aside>
💡 In Selection sort algorithm we take the ith element as minimum and then for the unsorted array we compare the ith element with the remaining unsorted array and when we find any element smaller than ith element we swap it. In this manner for ith iteration of first loop we get the ith elements in current position.

</aside>

```cpp
#include<bits/stdc++.h>
using namespace std;

void selection_sort( int arr[] , int n){
for(int i=0;i<n-1;i++){ //loop to find minimum
int mini =i;
for(int j=i+1; j<n ; j++){
if(arr[mini]>arr[j]){
mini =j;
}
}
//swap
int temp = arr[mini];
arr[mini]= arr[i];
arr[i]=temp;
}
}

void printArray(int arr[] , int n){
for(int i=0;i<n;i++){
cout<<arr[i]<<" ";
}
}

int main(){
int arr[]= {13 , 56 , 78, 32};
int N=  sizeof(arr) / sizeof(arr[0]);
selection_sort(arr, N);
cout<<"sorted array" <<" "; 
printArray(arr, N);
return 0;
}

TC - O(n^2) //BEST AND WORST CASE 
SC - O(1)

Simple and easy to understand.
Works well with small datasets.
```

### INSERTION SORT

```cpp
// 4 , 12 , 11 , 20 

//4 ko sorted man ke chlo

//4 | 12 ,11 , 20
//i=1, j=0;
// 12>4 -> 4 right side mein hi rhega break mar do bada element h;

// i=2, j=1; 
// 4 , 12| 11, 20
// 12>11 -> shift krdo 12 ko to array hogya -> 4 , 12 ,12 ,20 ... temp =11;
// phir 11>4-> break loop se bhr 
// arr[j+1]=temp ;
// arr[1]=11;
// 4 ,11,12, 20
```

```cpp
#include<bits/stdc++.h>
using namespace std;

void insertion_sort(int arr[], int n){
for(int i=1;i<n;i++){
int temp=arr[i];
int j;
for(j=i-1;j>=0;j--){
if(arr[j]>temp){
arr[j+1] = arr[j];
}
else{
break;
}
}
arr[j+1]=temp;
}
}

void printArray(int arr[], int n){
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
}

int main(){
    int arr[]= {23 , 56 , 32 , 7 , 1};
    int N = sizeof(arr)/sizeof(arr[0]);
   insertion_sort(arr, N);
    cout<<"Sorted array"<<endl;
    printArray(arr, N);
    return 0;
}

TC- O(n) -BEST CASE
O(n^2) - WORST CASE

Number of swaps reduced than bubble sort.
```

### MERGE  SORT

```cpp
#include <bits/stdc++.h>
using namespace std;

void merge(vector<int> &arr, int low, int mid, int high) {
    vector<int> temp; // temporary array
    int left = low;      // starting index of left half of arr
    int right = mid + 1;   // starting index of right half of arr

    //storing elements in the temporary array in a sorted manner//

    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push_back(arr[left]);
            left++;
        }
        else {
            temp.push_back(arr[right]);
            right++;
        }
    }

    // if elements on the left half are still left //

    while (left <= mid) {
        temp.push_back(arr[left]);
        left++;
    }

    //  if elements on the right half are still left //
    while (right <= high) {
        temp.push_back(arr[right]);
        right++;
    }

    // transfering all elements from temporary to arr //
    for (int i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
}

void mergeSort(vector<int> &arr, int low, int high) {
    if (low >= high) return;
    int mid = (low + high) / 2 ;
    mergeSort(arr, low, mid);  // left half
    mergeSort(arr, mid + 1, high); // right half
    merge(arr, low, mid, high);  // merging sorted halves
}

int main(){
vector<int> arr = {9, 4, 7, 6, 3, 1, 5}  ;
    int n = 7;
   mergeSort(arr, 0, n - 1);
    cout<<"Sorted array"<<endl;
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " "  ;
    }
    cout << endl;
    return 0 ;
}

Time complexity: O(nlogn)
Space complexity: O(n)

Merge sort is a stable sorting algorithm, 
which means it maintains the relative order of equal elements in the input array.
```

### QUICK SORT

```cpp
#include <bits/stdc++.h>
using namespace std;

int partition(vector<int> &arr, int low, int high) {
    int pivot = arr[low];
    int i = low;
    int j = high;

    while (i < j) {
        while (arr[i] <= pivot && i <= high - 1) {
            i++;
        }

        while (arr[j] > pivot && j >= low + 1) {
            j--;
        }
        if (i < j) 
				swap(arr[i], arr[j]);  //i me chota aur j me bada hota h isliye swap
    }
    swap(arr[low], arr[j]);  
    return j;
}

void qs(vector<int> &arr, int low, int high) {
    if (low < high) {
        int pIndex = partition(arr, low, high);
        qs(arr, low, pIndex - 1);
        qs(arr, pIndex + 1, high);
    }
}

vector<int> quickSort(vector<int> arr) {
    qs(arr, 0, arr.size() - 1);
    return arr;
}

int main()
{
    vector<int> arr = {4, 6, 2, 5, 7, 9, 1, 3};
    int n = arr.size();
    
    arr = quickSort(arr);
    cout << "After Using quick sort: " << "\n";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << "\n";
    return 0;
}

TC - O (N LOG N) // BEST CASE
Worst Case Time complexity: O(n^2)

Space Complexity: O(1) + O(N)

It is a divide-and-conquer algorithm that makes it easier to solve problems.
It is efficient on large data sets.
```

### LINEAR SEARCH

```cpp
//TC - O(N)
//SC- O(1)

#include<iostream>
using namespace std;

int linear(int arr[], int n , int key){
for(int i=0;i<n;i++){
    if(arr[i]==key){
        return i+1;
    }
   
}
 return -1;
}
int main(){
    int arr[]={ 1,2,3,5,60};
    int n= 5;
    int key = 1;
    int ans= linear(arr, n , key);
    if(ans==-1){
        cout<<"element not found";
    }
    else {
        cout<<"element found at"<<" " <<ans<<" ";

    }
}
```

### BINARY SEARCH

```cpp
//TC - O(log N)
//SC- O(1)

#include<iostream>
using namespace std;

int   binary(int arr[], int n , int key){
    int low =0, high = n-1;
    int mid= low+(high-low)/2;
    while(low<=high){
        if(arr[mid]==key){
            return mid+1;
        }
        if(key>arr[mid]){
            low=mid+1;
        }
        else
        high=mid-1;
        mid= low+(high-low)/2;
    }
    return -1;
}

int main(){
    int arr[]= {1 ,2 ,6 ,8 ,9};
    int N = sizeof(arr)/sizeof(arr[0]);
int key= 0;
int ans= binary(arr, N , key);
if(ans==-1)
cout<<"element not found";
else
cout<<"Element is present at"<<" "<<ans<<" "<<"position";

return 0;
}
```

### LOWER BOUND

```cpp
//TC - O(log 2N)
//SC- O(1)

#include<iostream>
using namespace std;

int lower_bound(int arr[], int n , int key){
    int low=0, high =n-1 , ans =n;
    while(low<=high){
        int mid= low+high/2;
        if(arr[mid]>=key){    // in uppercase arr[mid]>key 
            ans=mid;
            high = mid-1;
        }
        else low=mid+1;
    }
    return ans;
}

int main(){
    int arr[]= {6 ,6 ,6 ,8 ,9};
    int N = sizeof(arr)/sizeof(arr[0]);
int key= 6;
int res= lower_bound(arr, N , key);
if(res==-1)
cout<<"element not found";
else
cout<<"Element is present at"<<" "<<res<<" "<<"position";

return 0;
}

SHORTCUT-  lower_bound(arr.begin() , arr.end() , key ) - arr.begin() 
```

[BINARY SEARCH PROBLEMS](DSA%20932c7dd9e7c64f9ea9af3bbbe088ee2b/BINARY%20SEARCH%20PROBLEMS%2086454223a904470294485efe7f4cabf7.md)

### STACK  -0(1)

1. STACK IMPLEMENTATION

```cpp
#include<iostream> 
#include<bits/stdc++.h>
using namespace std;

int main(){
    stack<int> st ;
    st.push(2);
    st.push(3);
    st.push(8);
    st.pop();
    while(!st.empty()){
        cout<<st.top()<<" ";
        st.pop();

    }
    return 0;

}
```

1. STACK IMPLEMENTATION USING ARRAY 

```cpp
#include<iostream>
#include<stack>
using namespace std;

class Stack {
    //properties
    public:
        int *arr;
        int top;
        int size;

    // behaviour
    Stack(int size) {
        this -> size = size;
        arr = new int[size];
        top = -1;
    }

    void push( int x) {
        if(size - top > 1) {
            top++;
            arr[top] = x;
        }
        else{
            cout << "Stack OverFlow" << endl;
        }
    }

    void pop() {
      
    if(top==-1)
cout << "Stack UnderFlow" << endl;
else{
 arr[top];
top--;

}
}

    int peek() { //top
        if(top >=0 )
            return arr[top];
        else
        {
            cout << "Stack is Empty" << endl;
            return -1;
        }
    }

    bool isEmpty() {
        if( top == -1) {
            return true;
        }
        else{
            return false;
        }
    }

};

int main() {
    
    
    //creation of stack
    stack<int> s;

    //push operation
    s.push(2);
    s.push(3);

    //pop
    s.pop();

    cout << "Printing top element " << s.top() << endl;

    if(s.empty()){
        cout << "Stack is empty " << endl;
    }
    else{
        cout << "stack is not empty " << endl;
    }

    cout << "size of stack is " << s.size() << endl;

    

    return 0;
}
```

### stack using linked list

```cpp
#include <bits/stdc++.h>
using namespace std;
 
// creating a linked list;
class Node {
public:
    int data;
    Node* link;
   
    // Constructor
    Node(int n)
    {
        this->data = n;
        this->link = NULL;
    }
};
 
class Stack {
    Node* top;
 
public:
    Stack() { top = NULL; }
 
    void push(int data)
    {
 
        // Create new node temp and allocate memory in heap
        Node* temp = new Node(data);
 
        // Check if stack (heap) is full.
        // Then inserting an element would
        // lead to stack overflow
        if (!temp) {
            cout << "\nStack Overflow";
            exit(1);
        }
 
        // Initialize data into temp data field
        temp->data = data;
 
        // Put top pointer reference into temp link
        temp->link = top;
 
        // Make temp as top of Stack
        top = temp;
    }
 
    // Utility function to check if
    // the stack is empty or not
    bool isEmpty()
    {
        // If top is NULL it means that
        // there are no elements are in stack
        return top == NULL;
    }
 
    // Utility function to return top element in a stack
    int peek()
    {
        // If stack is not empty , return the top element
        if (!isEmpty())
            return top->data;
        else
            exit(1);
    }
 
    // Function to remove
    // a key from given queue q
    void pop()
    {
        Node* temp;
 
        // Check for stack underflow
        if (top == NULL) {
            cout << "\nStack Underflow" << endl;
            exit(1);
        }
        else {
 
            // Assign top to temp
            temp = top;
 
            // Assign second node to top
            top = top->link;
 
            // This will automatically destroy
            // the link between first node and second node
 
            // Release memory of top node
            // i.e delete the node
            free(temp);
        }
    }
 
    // Function to print all the
    // elements of the stack
    void display()
    {
        Node* temp;
 
        // Check for stack underflow
        if (top == NULL) {
            cout << "\nStack Underflow";
            exit(1);
        }
        else {
            temp = top;
            while (temp != NULL) {
 
                // Print node data
                cout << temp->data;
 
                // Assign temp link to temp
                temp = temp->link;
                if (temp != NULL)
                    cout << " -> ";
            }
        }
    }
};
 
// Driven Program
int main()
{
    // Creating a stack
    Stack s;
 
    // Push the elements of stack
    s.push(11);
    s.push(22);
    s.push(33);
    s.push(44);
 
    // Display stack elements
    s.display();
 
    // Print top element of stack
    cout << "\nTop element is " << s.peek() << endl;
 
    // Delete top elements of stack
    s.pop();
    s.pop();
 
    // Display stack elements
    s.display();
 
    // Print top element of stack
    cout << "\nTop element is " << s.peek() << endl;
 
    return 0;
}
```

[Stack problems](DSA%20932c7dd9e7c64f9ea9af3bbbe088ee2b/Stack%20problems%207232cec507f140739c9aa007d48afa8d.md)

### Queue

```cpp
#include<bits/stdc++.h>
using namespace std;

class Queue{
    int *arr;
    int front;
    int size;
    int rear;
public:
    Queue (){
  size = 100001;
  front =0;
  rear=0;
  arr= new int [size];
    }

    bool isempty(){
        if(front==rear){
            return true;
        }
        else{
            return false;
        }
    }

    int enqueue(int data){
        if(rear==size){
            cout<<"queue is full";
        }
        else{
            arr[rear]=data;
            rear++;
        }
    }

    int dequeue(){
        if(front == rear){
            return -1;
        }
        else{
            int ans= arr[front];
           arr [front] =-1;
           front ++;
           if(front==rear){
            front =0;
            rear=0;
           }
           return ans;
        }
    }

    int qfront(){
        if(front==rear){
            return -1;
        }
        else{
            return arr[front];
        }
    }
};

int main(){
    queue<int>q;
    q.push(11);
    q.push(12);
    q.push(10);
    q.pop();
    cout << "front of queue is : " << q.front() << endl;
    cout << "size of queue is : " << q.size() << endl;

    if(q.empty()) {
        cout << "Queue is empty " << endl;
    }
    else{
        cout << "queue is not empty " << endl;
    }
    return 0;
}
```

### Circular Queue

```cpp
#include<iostream>
#include<queue>
using namespace std;

class CircularQueue{
    int *arr;
    int front;
    int rear;
    int size;
    
    public:
    // Initialize your data structure.
    CircularQueue(int n){
        size = n;
        arr = new int[size];
        front = rear = -1;
    }

    // Enqueues 'X' into the queue. Returns true if it gets pushed into the stack, and false otherwise.
    bool enqueue(int value){
        //to check whther queue is full
        if( (front == 0 && rear == size-1) || (rear == (front-1)%(size-1) ) ) {
            //cout << "Queue is Full";
            return false;
        }
        else if(front == -1) //first element to push
        {
			front = rear = 0;
            
        }
        else if(rear == size-1 && front != 0) {
            rear = 0; //to maintain cyclic nature
        }
        else
        {//normal flow
            rear++;
        }
        //push inside the queue
        arr[rear] = value;
        
        return true;
    }

    // Dequeues top element from queue. Returns -1 if the stack is empty, otherwise returns the popped element.
    int dequeue(){
        if(front == -1){//to check queue is empty
            //cout << "Queue is Empty " << endl;
            return -1;
        }
        int ans = arr[front];
        arr[front] = -1;
        if(front == rear) { //single element is present
            front = rear = -1;
        }
        else if(front == size - 1) {
            front = 0; //to maintain cyclic nature
        }
        else
        {//normal flow
            front++;
        }
        return ans;
    }
};

int main() {
  
    
    //create a queue
    queue<int> q;
    int n=5;

    q.push(14);
     q.push(22);
      q.push(13);
       q.push(-6);
    cout << "front of q is: " << q.front() << endl;
    cout << "size of queue is : " << q.size() << endl;
    q.pop();
     q.pop();
     cout << "front of q is: " << q.front() << endl;
     cout << "size of queue is : " << q.size() << endl;
    q.push(9);
     q.push(20);
      q.push(5);
  
    cout << "front of q is: " << q.front() << endl;
    cout << "size of queue is : " << q.size() << endl;
  
    q.push(20);
    cout << "size of queue is : " << q.size() << endl;
   

    if(q.empty()) {
        cout << "Queue is empty " << endl;
    }
    else{
        cout << "queue is not empty " << endl;
    }
    

    return 0;
}
```

### Dequeue

```cpp
class Dequeue
{	
    int *arr;
    int front;
    int rear;
    int size;
public:
    // Initialize your data structure.
    Deque(int n)
    {
        size = n;
        arr = new int[n];
        front = -1;
        rear = -1;
    }

    // Pushes 'X' in the front of the deque. Returns true if it gets pushed into the deque, and false otherwise.
    bool pushFront(int x)
    {
        //check full or not
        if( isFull() ) {
            return false;
        }
        else if(isEmpty()) {
            front  = rear = 0;
        }
        else if(front == 0 && rear != size-1) {
            front = size-1;
        } 
        else
        {
            front--;
        }
        arr[front] = x;
        return true;
    }

    // Pushes 'X' in the back of the deque. Returns true if it gets pushed into the deque, and false otherwise.
    bool pushRear(int x)
    {
        if( isFull() ) {
            return false;
        }
        else if(isEmpty()) {
            front  = rear = 0;
        }
        else if(rear == size-1 && front != 0) {
            rear = 0;
        } 
        else
        {
             rear++;
        }
        arr[rear] = x;
        return true;
    }

    // Pops an element from the front of the deque. Returns -1 if the deque is empty, otherwise returns the popped element.
    int popFront()
    {
        if(isEmpty()){//to check queue is empty
            //cout << "Queue is Empty " << endl;
            return -1;
        }
        
        int ans = arr[front];
        arr[front] = -1;
        
        if(front == rear) { //single element is present
            front = rear = -1;
        }
        else if(front == size - 1) {
            front = 0; //to maintain cyclic nature
        }
        else
        {//normal flow
            front++;
        }
        return ans;
    }

    // Pops an element from the back of the deque. Returns -1 if the deque is empty, otherwise returns the popped element.
    int popRear()
    {
         if(isEmpty()){//to check queue is empty
            //cout << "Queue is Empty " << endl;
            return -1;
        }
        
        int ans = arr[rear];
        arr[rear] = -1;
        
        if(front == rear) { //single element is present
            front = rear = -1;
        }
        else if(rear == 0) {
            rear = size-1; //to maintain cyclic nature
        }
        else
        {//normal flow
            rear--;
        }
        return ans;
    }

    // Returns the first element of the deque. If the deque is empty, it returns -1.
    int getFront()
    {
        if(isEmpty()){
            return -1;
        }
        return arr[front];
    }

    // Returns the last element of the deque. If the deque is empty, it returns -1.
    int getRear()
    {
       if(isEmpty()){
            return -1;
        }
        return arr[rear];
    }

    // Returns true if the deque is empty. Otherwise returns false.
    bool isEmpty()
    {
        if(front == -1)
            return true;
        else
            return false;
    }

    // Returns true if the deque is full. Otherwise returns false.
    bool isFull()
    {
		if( (front == 0 && rear == size-1) || (front != 0 && rear == (front-1)%(size-1) ) ) {
            return true;
        }
        else
        {
            return false;
        }
    }
};
```

[LINKED LIST - ](DSA%20932c7dd9e7c64f9ea9af3bbbe088ee2b/LINKED%20LIST%20-%2056d0966fd0594ad0bf98c535c9093f53.md)

[Array](DSA%20932c7dd9e7c64f9ea9af3bbbe088ee2b/Array%20f837327b50da4f7997c00d4c8a985ef9.md)

[String](DSA%20932c7dd9e7c64f9ea9af3bbbe088ee2b/String%20032615c012f64108b63b0fa4779b3bb9.md)

[ Heap](DSA%20932c7dd9e7c64f9ea9af3bbbe088ee2b/Heap%20f4dc3214a3484139b56f5c33a808a9f9.md)

[Recurssion/Backtracking - tc - exponential](DSA%20932c7dd9e7c64f9ea9af3bbbe088ee2b/Recurssion%20Backtracking%20-%20tc%20-%20exponential%20e41baa2eb37c470cbabac07209817d94.md)

[DP](DSA%20932c7dd9e7c64f9ea9af3bbbe088ee2b/DP%20b95d9a362e654c7daab028e64fc65c82.md)

[Greedy](DSA%20932c7dd9e7c64f9ea9af3bbbe088ee2b/Greedy%20fdb3dc11af43413dbce203e80d80b385.md)

[BINARY TREE](DSA%20932c7dd9e7c64f9ea9af3bbbe088ee2b/BINARY%20TREE%20763d3a60377540d38ee9fa7c21c11460.md)

[BINARY SEARCH TREE](DSA%20932c7dd9e7c64f9ea9af3bbbe088ee2b/BINARY%20SEARCH%20TREE%20195070962f3a44afbc240f918773bc29.md)

[TRIE](DSA%20932c7dd9e7c64f9ea9af3bbbe088ee2b/TRIE%20798c2ba62bf54927826a81232c4fa4e4.md)

[Graph](DSA%20932c7dd9e7c64f9ea9af3bbbe088ee2b/Graph%2035cad55382d34da6bd44e1fb876242bc.md)

### ****Is Binary Number Multiple of 3****

```cpp
int isDivisible(string s)
	{
	    
	    int odd=0;
	    int even=0;
	    for(int i=1;i<s.size();i=i+2) // odd set bits
	    {
	        if(s[i]=='1')
	        {
	            odd++;
	        }
	    }
	    
	    for(int i=0;i<s.size();i=i+2) // even set bits
	    {
	        if(s[i]=='1')
	        {
	            even++;
	        }
	    }
	    
	    if(((odd-even)%3)==0)
	    {
	        return 1;
	    }
	    return 0;
	}
```

### Sliding window

****Chocolate Distribution Problem-****

Given an array **A[ ]** of positive integers of size **N**, where each value represents the number of chocolates in a packet. Each packet can have a variable number of chocolates. There are **M** students, the task is to distribute chocolate packets among **M** students such that :

1. Each student gets **exactly** one packet.2. The difference between maximum number of chocolates given to a student and minimum number of chocolates given to a student is minimum.

**Example 1:**

```
Input:
N = 8, M = 5
A = {3, 4, 1, 9, 56, 7, 9, 12}
Output:6
Explanation:The minimum difference between maximum chocolates and minimum chocolates is 9 - 3 = 6 by choosing following M packets :{3, 4, 9, 7, 9}.
```

```cpp
long long findMinDiff(vector<long long> a, long long n, long long m){
    //code
    long long mini= INT_MAX;
    sort(a.begin(), a.end());
    int i = 0;
        int j = m-1;
    while(j<n){
        long long diff = a[j]-a[i];
        mini= min(mini, diff);
        i++;
        j++;
        
    }
    return mini;
    }

```