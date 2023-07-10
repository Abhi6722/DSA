---
sidebar_position: 2
---

## Binary Search
Binary search is a more efficient searching algorithm compared to linear search, especially for sorted data structures. It follows a **`divide-and-conquer approach`** and reduces the search space by half at each iteration. Binary search works by repeatedly dividing the sorted array into two halves and narrowing down the search range until the target element is found or the search range is empty.

### Algorithm
1. Initialize variables: `start` pointing to the first element and `end` pointing to the last element of the sorted array.
2. Calculate the `mid` index as the floor value of `(start + end) / 2`.
3. Compare the element at the `mid` index with the target element.
   - If they match, the search is successful, and the algorithm returns the index of the element.
   - If the target element is smaller, update `end = mid - 1` to search in the left half.
   - If the target element is larger, update `start = mid + 1` to search in the right half.
4. Repeat steps 2-3 until the target element is found or `start` becomes greater than `end`.
5. If the target element is not found, return a special value (e.g., -1) or indicate that the element is not present.

### Code
Here's an example of implementing binary search in C++:

```cpp title=c++
#include<iostream>
using namespace std;

int BinarySearch(int arr[], int size, int key){
    int start = 0;
    int end = size-1;
    while(start <= end){
        int mid = start + (end - start)/2;
        if(arr[mid] == key){
            return mid;
        }
        else if(arr[mid] > key){
            end = mid - 1;
        }
        else
            start = mid + 1;
    }
    return -1;
}

int main(){
    int arr[] = {1,2,3,4,5,6};
    int size = sizeof(arr)/sizeof(arr[0]);
    int key = 5;
    int result = BinarySearch(arr,size,key);
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

### Advantage
Binary search is particularly efficient for large sorted arrays and can be much faster than linear search. However, it requires the data structure to be sorted beforehand. If the array is not sorted or needs frequent updates, sorting overhead may outweigh the benefits of binary search.


## Binary Search Complexity
Now, let's see the time complexity of binary search in the best case, average case, and worst case. We will also see the space complexity of binary search.

### 1. Time Complexity:

| Case        | Time Complexity |
|-------------|-----------------|
| Best Case   | O(1)            |
| Average Case| O(log n)        |
| Worst Case  | O(log n)        |

- **Best Case Complexity**: The best-case scenario occurs when the target element is found at the middle position of the sorted array. In this case, the algorithm can immediately return the index without any further iterations. The time complexity in the best case is O(1).

- **Average Case Complexity**: In the average case, binary search repeatedly divides the search range in half, narrowing down the search space. With each iteration, the algorithm eliminates half of the remaining elements. The average time complexity is O(log n), where n is the size of the sorted array.

- **Worst Case Complexity**: The worst-case scenario occurs when the target element is either the first or the last element of the array, or when it is not present in the array at all. In such cases, binary search needs to keep dividing the search space until only one element remains. The worst-case time complexity is O(log n), where n is the size of the sorted array.

### 2. Space Complexity:

| Case               | Time Complexity |
|--------------------|-----------------|
| Space Complexity   |        O(1)     |

Binary search has a space complexity of O(1) because it does not require any additional space that grows with the size of the input. The space complexity remains constant, regardless of the size of the array.

It's important to note that the above time and space complexities of binary search assume that the array is already sorted. If the array is unsorted, sorting it beforehand using an efficient sorting algorithm would add an additional time complexity of O(n log n) or O(n^2), depending on the sorting algorithm used.