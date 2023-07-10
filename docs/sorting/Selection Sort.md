---
sidebar_position: 2
---

Selection Sort is a simple comparison-based sorting algorithm. It selects the smallest element from an unsorted list in each iteration and places that element at the beginning of the unsorted list.

No of Rounds = N-1
where,
N is size of array

### Algorithm:
1. Start with the first element as the current minimum.
2. Iterate through the unsorted part of the array.
3. For each iteration, find the minimum element from the unsorted part.
4. Swap the minimum element with the first element of the unsorted part.
5. Move the boundary of the sorted part one element ahead.
6. Repeat steps 2-5 until the array is completely sorted.

### Code
Here's an example of Selection Sort implemented in C++:

```cpp title=c++
#include<iostream>
using namespace std;

void SelectionSort(int arr[], int size){
    for(int i=0; i<size-1; i++) {
        int min = i;
        for(int j=i+1; j<size; j++){
            if(arr[min] > arr[j])
                min = j;
        }
        swap(arr[i], arr[mini]);
    }
}

int main(){
    int arr[] = {10,22,1,43,23};
    int size = sizeof(arr)/sizeof(arr[0]);
    SelectionSort(arr, size);
    for(int i=0; i<size; i++)
    cout<<arr[i]<<" ";
    return 0;
}
```

### Output:
```
1 10 22 23 43
```

## Selection Sort Complexity
### 1. Time Complexity:

| Case        | Time Complexity |
|-------------|-----------------|
| Best Case   | O(n^2)          |
| Average Case| O(n^2)          |
| Worst Case  | O(n^2)          |

- **Best Case Complexity**: The best-case scenario occurs when the input array is already sorted. However, even in the best case, Selection Sort requires comparisons and potential swaps for each pair of elements. Therefore, the time complexity remains O(n^2).

- **Average Case Complexity**: The average case time complexity of Selection Sort is O(n^2). This is because, on average, the algorithm needs to make approximately n/2 comparisons for each of the n elements in the array.

- **Worst Case Complexity**: The worst-case scenario occurs when the input array is in reverse sorted order. In this case, Selection Sort requires the maximum number of comparisons and swaps for each pair of elements. Thus, the time complexity is O(n^2).

### 2. Space Complexity:
| Case        | Space Complexity |
|-------------|------------------|
| Best Case   | O(1)             |
Selection Sort has a space complexity of O(1) because it uses only a constant amount of additional space to perform the sorting. The space usage does not grow with the size of the input array.

It's important to note that Selection Sort has a quadratic time complexity, which makes it inefficient for large datasets. Other sorting algorithms like Merge Sort or Quick Sort generally offer better performance. However, Selection Sort can still be useful in certain scenarios, such as when the number of elements is small or when minimizing the number of swaps is important.