---
sidebar_position: 12
---

# Stack problems

### Reverse a string using stack

```cpp
#include <iostream>  
#include <string.h>
#include <stack>
using namespace std;  
int main(){
string str= "go";
stack<char>st;

for(int  i=0;i<str.length();i++){
char ch = str[i];
st.push(ch);
}
int i=0;
while(!st.empty()){
str[i++]= st.top();

st.pop();
}
cout<< str;
}
```

### delete middle element from stack

```cpp
#include<bits/stdc++.h>
using namespace std;

void solve (stack<int>&s , int n , int count){
if(count==n/2){
s.pop();
return ;
}
int num = s.top(); 
s.pop();
count =count+1;
solve(s, n , count);
s.push(num);
}

int main(){
stack<int>s;
s.push(4);
 s.push(3);
 s.push(0);
 s.push(2);
 s.push(1);
int count=0;
int n=s.size();
solve(s, n, count);
while(!s.empty()){ // printing ans 
cout<<s.top()<<" " ;
s.pop();
}
return 0;
}
```

### insert at bottom of stack

```cpp
#include <bits/stdc++.h>
using namespace std;
 
stack<int> solve(stack<int> S, int N)
{
    // If stack is empty
    if (S.empty())
        S.push(N);
 
    else {
 
     
        int X = S.top();
        S.pop();
        S = solve(S, N);
        S.push(X);
    }
    return S;
}
 
// Function to insert an element
// at the bottom of stack
void insertToBottom( stack<int> S, int N)
   
{
 
    // Recursively insert
    // N at the bottom of S
    S = solve(S, N);
 
    // Print the stack S
    while (!S.empty()) {
        cout << S.top() << " ";
        S.pop();
    }
}
 
// Driver Code
int main()
{
    // Input
    stack<int> S;
    S.push(5);
    S.push(4);
    S.push(3);
    S.push(2);
    S.push(1);
 
    int N = 7;
 
    insertToBottom(S, N);
 
    return 0;
}
```

### reverse a stack

```cpp
#include <iostream>
#include <stack>
using namespace std;
void insertAtBottom(stack<int>&st, int x){
if(st.empty()){
st.push(x);
return;
}
int n= st.top();
st.pop();
insertAtBottom(st, x);
st.push(n);
}

void reverseStack(stack<int>&st){
if(st.empty()){
return;
}
int num=st.top();
st.pop();
reverseStack(st);
insertAtBottom(st, num);
}

int main(){
stack<int>st;
for(int i=1;i<=5;i++){
st.push(i);
}
reverseStack(st);
cout<<"reverse stack"<<" ";
while(!st.empty()){
cout<<st.top()<<"";
st.pop();
}
return 0;
}
```

### Sort a stack

```cpp
#include <iostream>
#include <stack>
using namespace std;

void sortedInsert(stack<int>&st, int num){
    if(st.empty()){
        st.push(num);

    }

    int n = st.top();
    st.pop();
    sortedInsert(st, num);
    st.push(n);
}
void sortstack(stack<int>&st){
    if(st.empty()){
        return; 
    }

    int num = st.top();
    st.pop();
    sortstack(st);
sortedInsert(st,num);

}

int main() {
    // Create a stack
    stack<int> st;
     
    // Push elements into the stack
    st.push(34);
    st.push(3);
    st.push(31);
    st.push(98);
    st.push(92);
    st.push(23);
     
    // Sort the stack
    sortstack(st);
     
    // Print the sorted elements
    cout << "Sorted numbers are: ";
    while (!st.empty()) {
        cout << st.top() << " ";
        st.pop();
    }
    return 0;
}
```

### Balance Parenthesis

```cpp
#include<bits/stdc++.h>
using namespace std;
bool isValid(string s) {
        stack<char>st; 
        for(auto it: s) {
            if(it=='(' || it=='{' || it == '[') st.push(it); 
            else {
                if(st.size() == 0) return false; 
                char ch = st.top(); 
                st.pop(); 
                if((it == ')' and ch == '(') or  (it == ']' and ch == '[') or (it == '}' and ch == '{')) continue;
                else return false;
            }
        }
        return st.empty(); 
    }
int main()
{
    string s="()";
    if(isValid(s))
    cout<<"True"<<endl;
    else
    cout<<"False"<<endl;
}
```

### Implement a stack using single queue

```cpp
#include<bits/stdc++.h>
using namespace std;

class Stack{
    queue<int>q;
    public:
    void push(int x){
        int s= q.size(); 
        q.push(x); //push the element 
        for(int i=0;i<s;i++){ //size -1 tk iterate 
            q.push(q.front()); //push krdo jo uske neeche ho upr 
            q.pop(); // pop krdo vha se 
        }
    }

    int pop(){
        int n = q.front();
        q.pop();
        return n;

    }
    int top(){
        return q.front();
    }
    int size(){
        return q.size();
    }
};

int main(){
    Stack s;
  s.push(3);
  s.push(2);
  s.push(4);
  s.push(1);
  cout << "Top of the stack: " << s.top() << endl;
  cout << "Size of the stack before removing element: " << s.size() << endl;
  cout << "The deleted element is: " << s.pop() << endl;
  cout << "Top of the stack after removing element: " << s.top() << endl;
  cout << "Size of the stack after removing element: " << s.size();
}

tc- o(n)
sc- o(n)
```

### Largest rectangle in histogram

```cpp
#include <bits/stdc++.h>

using namespace std;
// Brute Force Approach to find largest rectangle area in Histogram
int largestarea(int arr[], int n) {
  int maxArea = 0;
  for (int i = 0; i < n; i++) {
    int minHeight = INT_MAX;
    for (int j = i; j < n; j++) {
      minHeight = min(minHeight, arr[j]);
      maxArea = max(maxArea, minHeight * (j - i + 1));
    }
  }
  return maxArea;
}
int main() {
  int arr[] = {2, 1, 5, 6, 2, 3, 1};
  int n = 7;
  cout << "The largest area in the histogram is " << largestarea(arr, n); // Printing the largest rectangle area
  return 0;
}

Time Complexity: O(N*N )
```