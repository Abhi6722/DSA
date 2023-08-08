---
sidebar_position: 9
---

# Heap

Heap is a complete binary tree that comes with a heap order property

MAX HEAP-  store in descending order

MIN HEAP - store in ascending order(top pr chota) 

**MAX HEAP - INERSTION**

**NOTE-  1 based index  NODE - ith index pr h to , left child - 2*i  index , right child= 2*i+1**

0 based index - **NODE - ith index pr h to , left child - 2*i+1  index , right child= 2*i+2**

1. insert at end 
2. take it to its correct position
3. compare with parent and swap 

 

```cpp
#include <bits/stdc++.h>
using namespace std;

class heap
{
public:
    int arr[100]; // array ka size 100
    int size = 0; // size ko 0
    heap()
    {
        arr[0] = -1; // abhi koi element ni h
        size = 0;
    }
    void insert(int value)
    {
        size = size + 1; // size ko aage badha dia
        int index = size;
        arr[index] = value; // aur uss index mein value dal di

        while (index > 1)
        {
            int parent = index / 2; // parent se compare kro
            if (arr[parent] < arr[index])
            { // parent chota h to swap
                swap(arr[parent], arr[index]);
                index = parent;
            }
            else
            {
                return;
            }
        }
    }

    void print()
    {
        for (int i = 1; i <= size; i++)
        {
            cout << arr[i] << " ";
        }
        cout << endl;
    }
//delete root node 
    void deletefromheap(){
        if(size==0){
            cout<<" nothing to delete ";
            return ;
        }
        arr[1]=arr[size];// last node ko utha kr phle mein dal do
        //remove last element
        size--;

        //take root node to its correct position
        int i=1;
        while(i<size){
            int leftindex= 2*i;
            int rightindex=2*i+1;

            //taking root node uski shi jgh
if(leftindex< size && arr[i]<arr[leftindex]){
    swap(arr[i],arr[leftindex]);
    i= leftindex;
}
else if(rightindex< size && arr[i]<arr[rightindex]){
    swap(arr[i],arr[rightindex]);
    i= rightindex;
}
else {
     return;
}

        }

    }
};

int main()
{
    heap h;
    h.insert(50);
    h.insert(55);
    h.insert(53);
    h.insert(52);
    h.insert(54);
    h.print();
    h.deletefromheap();
    h.print();
    return 0;
}

// TC - O(LOG N);
```

### HEAPIFY-

Heapify is the process of creating a heap data structure from a binary tree. It is used to create a Min-Heap or a Max-Heap.

convert into heap .

1-n/2 ko process krna h 

```cpp
#include <bits/stdc++.h>
using namespace std;
//1 based index
void heapify(int arr[], int n, int i) //i is the current index
{
    int largest = i;
    int left = 2 * i;
    int right = 2 * i + 1;

    if (left <= n && arr[largest] < arr[left])
    {
        largest = left;
    }
    if (right <= n && arr[largest] < arr[right])
    {
        largest = right;
    }

    if (largest != i)
    {                               // largest agr  update hua h to i pr ni hoga
        swap(arr[largest], arr[i]); // update hogya
        heapify(arr, n, largest);  // next i ke liye 
    }
}

int main()
{
    int arr[6] = {-1, 54, 53, 55, 52, 50}; // 1 index se start hota h isliye -1 zero index pr
    int n = 5;
    for (int i = n / 2; i > 0; i--) // right to left 
    {
        heapify(arr, n, i);
    }
    for (int i = 1; i <= n; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}

o(log n)

```

### MIN HEAP

```cpp
#include <bits/stdc++.h>
using namespace std;
void heapify(int arr[], int n, int i)
{
    //0 based index
    int smallest = i;
    int left = 2 * i+1 ;
    int right = 2 * i + 2;

    if (left < n && arr[smallest] > arr[left])
    {
        smallest = left;
    }
    if (right < n && arr[smallest] >arr[right])
    {
        smallest = right;
    }

    if (smallest != i)
    {                               // smaleest agr  update hua h to i pr ni hoga
        swap(arr[smallest], arr[i]); // update hogya
        heapify(arr, n, smallest);
    }
}

int main()
{
    int arr[5] = { 54, 53, 55, 52, 50}; // 1 index se start hota h isliye -1 zero pr
    int n = 5;
    for (int i = n / 2; i >= 0; i--)
    {
        heapify(arr, n, i);
    }
    for (int i = 0; i <= n; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}

// o( n)
```

### HEAP SORT -O (N LOG N )  (MIN HEAP)

1. build heap
2. SWAP ROOT WITH LAST 
3. SIZE  - -  KRDO (MTLB LAST NODE DELETE)
4. ROOT KO CORRECT POSITION PR LE JAO

```cpp
void heapsort(int arr[], int n){
    int size=n;
    while( size>1){
        //swap root to last
        swap(arr[size], arr[1]);
        size--;
        heapify(arr,size , 1);
    }
}

o(n log n)
```

### priority queue — heap sort use  ke jgh use this . default max heap banata h. import queue header file

  

```cpp
//max heap

priority_queue<int>pq;
```

```cpp
//min heap
priority_queue<int , vector<int> , greater<int>> minheap;
```

### kth smallest  - max heap bna kr kro

```cpp
int kth smallest( int arr[] , int l, int r , int k){
    priority_queue<int>pq;
// k tk
    for(int i=0;i<k;i++){
        pq.push(arr[i]);
    }
//k se r tk ur compare kro 
    for(int i=k; i<=r;i++){
        if(arr[i]<pq.top()){
            pq.pop();
            pq.push(arr[i]);
        }
    }

    int ans = pq.top();
    return ans;
}
```