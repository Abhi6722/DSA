---
sidebar_position: 1
---

## Searching
Searching refers to the process of finding a specific element or value within a collection of data. The goal is to determine whether the desired element exists in the data structure and, if so, locate its position or retrieve it.

Some of the standard searching technique that is being followed in the data structure is listed below:
- Linear Search or Sequential Search
- Binary Search

## Linear Search
Linear search is also called as **sequential search algorithm.** It is the simplest searching algorithm. In Linear search, we simply traverse the list completely and match each element of the list with the item whose location is to be found. If the match is found, then the location of the item is returned; otherwise, the algorithm returns NULL.

### Algorithm
1. Start at the beginning of the data structure.
2. Compare the target element with the current element.
3. If they match, the search is successful, and the algorithm returns the position or index of the element.
4. If they do not match, move to the next element in the structure.
5. Repeat steps 2-4 until the target element is found or the end of the structure is reached.

### Code
```cpp title=c++
#include<iostream>
using namespace std;

int LinearSearch(int arr[], int size, int key){
    for(int i=0; i<size; i++){
        if(arr[i] == key)
        return i;
    }
    return -1;
}

int main(){
    int arr[] = {1,2,3,4,5,6};
    int size = sizeof(arr)/sizeof(arr[0]);
    int key = 5;
    int result = LinearSearch(arr,size,key);
    if(result == 11){
        cout<<"Element Not Found!";
    }
    else{
        cout<<"Element found at index "<<result;
    }
    return 0;
}
```
### Output
```
Element found at index 4
```

## Linear Search complexity

Now, let's see the time complexity of linear search in the best case, average case, and worst case. We will also see the space complexity of linear search.

### 1. Time Complexity

| Case        | Time Complexity |
|-------------|-----------------|
| Best Case   | O(1)            |
| Average Case| O(n)            |
| Worst Case  | O(n)            |

- **Best Case Complexity** - In Linear search, best case occurs when the element we are finding is at the first position of the array. The best-case time complexity of linear search is O(1).
- **Average Case Complexity** - The average case time complexity of linear search is O(n).
- **Worst Case Complexity** - In Linear search, the worst case occurs when the element we are looking is present at the end of the array. The worst-case in linear search could be when the target element is not present in the given array, and we have to traverse the entire array. The worst-case time complexity of linear search is O(n).
  
The time complexity of linear search is O(n) because every element in the array is compared only once.

### 1. Space Complexity
| Case               | Time Complexity |
|--------------------|-----------------|
| Space Complexity   |        O(1)     |

- The space complexity of linear search is O(1).

