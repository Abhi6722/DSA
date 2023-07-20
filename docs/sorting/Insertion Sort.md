---
sidebar_position: 4
---

Insertion Sort is a simple comparison-based sorting algorithm. It divides the array into a sorted and an unsorted part. The sorted part initially contains only the first element, and the unsorted part contains the remaining elements. In each iteration, Insertion Sort takes the first element from the unsorted part and places it at its correct position in the sorted part.

### Algorithm:
1. Start with the second element (index 1) and consider it as the current element.
2. Compare the current element with the elements in the sorted part, moving from right to left.
3. If the current element is smaller than the compared element, shift the compared element one position to the right.
4. Repeat step 3 until a smaller or equal element is found or until the beginning of the sorted part is reached.
5. Insert the current element at the position found in step 4.
6. Move to the next element in the unsorted part and repeat steps 2-5.
7. Repeat steps 2-6 until the entire array is sorted.

### Code:
```cpp title=c++
#include<iostream>
using namespace std;

void InsertionSort(int arr[], int size){
    for(int i=1; i<size; i++){
        int key = arr[i];
        int j = i-1;
        while(arr[j] > key && j>=0){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1] = key;
    }
}

int main(){
    int arr[] = {15, 24, 13, 22, 11};
    int size = sizeof(arr)/sizeof(arr[0]);
    InsertionSort(arr, size);
    for(int i=0; i<size; i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}
```

### Output:
```
11 13 15 22 24
```

## Insertion Sort Complexity
### 1. Time Complexity:

| Case        | Time Complexity |
|-------------|-----------------|
| Best Case   | O(n)            |
| Average Case| O(n^2)          |
| Worst Case  | O(n^2)          |

- **Best Case Complexity**: The best-case scenario occurs when the input array is already sorted. In this case, Insertion Sort makes only one comparison per element. The time complexity in the best case is O(n).

- **Average Case Complexity**: The average case time complexity of Insertion Sort is O(n^2). On average, it requires approximately (n^2)/4 comparisons and swaps to sort an array of size n.

- **Worst Case Complexity**: The worst-case scenario occurs when the input array is in reverse sorted order. In this case, Insertion Sort needs to make the maximum number of comparisons and swaps for each element. The time complexity in the worst case is O(n^2).

### 2. Space Complexity:
| Case        | Space Complexity |
|-------------|------------------|
| Best Case   | O(1)             |
Insertion Sort has a space complexity of O(1) because it uses only a constant amount of additional space to perform the sorting. The space usage does not grow with the size of the input array.

Insertion Sort can be efficient for small arrays or partially sorted inputs, but it becomes inefficient for large datasets. Other sorting algorithms like Merge Sort or Quick Sort generally offer better performance for larger arrays.
