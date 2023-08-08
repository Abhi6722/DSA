---
sidebar_position: 3
---

# BINARY SEARCH PROBLEMS

### FIND FIRST AND LAST OCCURENCES

```cpp
#include<iostream>
#include<bits/stdc++.h>
using namespace std;

int firstoccur(vector<int> &arr, int n , int key){
int low=0, high =n-1, first =-1;
while(low<=high){
int mid = low+ (high-low)/2;
if(arr[mid]==key){
first =mid;
high =mid-1; // kunki first occurence to peeche milega na
}
else if(arr[mid]<key){
low=mid+1;
}
else high =mid-1;
}
return first ;
}

int lastoccur(vector<int> &arr, int n , int key){
int low=0, high =n-1, last=-1;
while(low<=high){
int mid = low+ (high-low)/2;
if(arr[mid]==key){
last=mid;
low= mid +1 ; // kunki last occurence to age milega na
}
else if(arr[mid]>key){
high =mid-1;
}
else low=mid+1;
}
return last;
}

pair<int, int> occur(vector<int> &arr, int n , int key) {
int first = firstoccur(arr, n , key);
if(first==-1) return {-1,-1};
int last = lastoccur(arr, n, key);
return {first, last};
}

```

### Find total no of occurences

```cpp
same as above 
int count(vector<int>& arr, int n, int key) {
    pair<int, int> ans =occur(arr, n, key);
    if (ans.first == -1) return 0;
    return (ans.second - ans.first + 1);
}

int main()
{
    vector<int> arr =  {2, 4, 6, 8, 8, 8, 11, 13};
    int n = 8, key = 8;
    int ans = count(arr, n, key);
    cout << "The number of occurrences is: "
         << ans << "\n";
    return 0;
}
```

### Search in a rotated sorted array

```cpp
#include<bits/stdc++.h>

using namespace std;

int search(vector<int>&arr, int n, int key){
    int low=0, high =n-1;
    while(low<=high){
        int mid= (low+high)/2;

        if(arr[mid]==key)
        return mid;

        //if left part is sorted

        if(arr[low]<=arr[mid]){
            if(arr[low]<=key && key<=arr[mid]){
                high = mid-1;
            }
            else low=mid+1; //element not exist
        }
        //right part sorted h
        else {
        if(arr[mid]<=key && key<=arr[high]){
            low=mid+1;
        }
        else  high = mid-1;
    }
    }
    return -1;
}

int main(){
    vector<int>arr={7, 8,9,1,2,3,4,5,6};
    int n=9, key =0;
    int ans=search (arr, n , key);
    if(ans==-1)
    cout<<"Target is not present.\n";
    else cout<<"the index is :"<<ans<<" "<<endl;
    return 0;
}
```

### BOOK Allocation

```cpp
#include<bits/stdc++.h>

using namespace std;

bool isPossible(vector<int>&arr, int n , int m, int mid){
    int studentcount=1;
    int pagesum=0;
    for(int i=0;i<n;i++){
        if(pagesum+arr[i]<=mid){ //10+20+60 
pagesum+=arr[i]; //dal do page
        }
        else{
            studentcount++;
            if(studentcount>m || arr[i]>mid){
                return false;
            }
             //student bdahaya page sum bdhao
             pagesum=0;
            pagesum +=arr[i];

        }
    }
    return true;
}

int allocateBooks(vector<int>&arr, int n , int m){
    int s=0 , sum=0;
    for(int i=0;i<n;i++){
        sum+=arr[i];
    }
    int e= sum;
    int ans=-1;
    int mid= s+(e-s)/2;

    while(s<=e){
        if(isPossible(arr, n , m , mid)){
            ans=mid;
            e= mid-1;
        }
        else{
            s= mid+1;
        }
        mid= s+(e-s)/2;
    }
    return ans;
}

int main() {
vector<int> arr = {12,34,67,90};
  int n = 4;
  int m = 2;
  cout << "Minimum Possible Number is " << allocateBooks(arr, n, m);
  return 0;
}

TC- O(N LOG N)
```

OR

```cpp
#include<bits/stdc++.h>

using namespace std;
//to check if allocation of books among given students is possible.
int isPossible(vector < int > & A, int pages, int students) {
  int cnt = 0;
  int sumAllocated = 0;
  for (int i = 0; i < A.size(); i++) {
    if (sumAllocated + A[i] > pages) {
      cnt++;
      sumAllocated = A[i];
      if (sumAllocated > pages) return false;
    } else {
      sumAllocated += A[i];
    }
  }
  if (cnt < students) return true;
  return false;
}
int books(vector < int > & A, int B) {
  if (B > A.size()) return -1;
  int low = A[0];
  int high = 0;
  //to find minimum value and sum of all pages
  for (int i = 0; i < A.size(); i++) {
    high = high + A[i];
    low = min(low, A[i]);
  }
  //binary search
  while (low <= high) {
    int mid = (low + high) >> 1;
    if (isPossible(A, mid, B)) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
}
int main() {
  vector<int> A = {12,34,67,90};
  int B = 2;
  cout << "Minimum Possible Number is " << books(A, B);
  return 0;
}
```

### PEAK element - A peak element is one such that it is either greater than or equal to its neighbours. For the first and last element, it is enough to look at its only one neighbour.

**Approach:**

- This is a brute force approach. We traverse each element and check whether it is greater than or equal to its neighbours.
- If we find one, we return it.
- Else we move on.

```cpp
#include<iostream>
using namespace std;

int peakEleBruteForce(int arr[], int n) {
  if (arr[0] >= arr[1])
    return arr[0];

  for (int i = 1; i < n - 1; i++)
    if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1])
      return arr[i];

  return arr[n - 1];
}

int main() {

  int arr[] = {3, 5, 4, 1, 1};
  int n = sizeof(arr) / sizeof(arr[0]);

  cout << "Peak Element is " << peakEleBruteForce(arr, n);

  return 0;
}
```