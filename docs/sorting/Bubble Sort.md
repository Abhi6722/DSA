---
sidebar_position: 3
---

Bubble Sort is a simple comparison-based sorting algorithm. It repeatedly checks through the list and check the adjancent element and if the element is smaller then it swaps the element. In this process for ith round we get our ith element at the end of the array.

### Algorithm:
1. Start from the first element (index 0) and compare it with the next element (index 1).
2. If the next element is smaller, swap them.
3. Move to the next pair of elements and repeat step 2.
4. Continue this process until the end of the list is reached.
5. Repeat steps 1-4 for a total of N-1 passes, where N is the number of elements in the array.

### Code
Here's an example of Bubble Sort implemented in C++:

```cpp title=c++
#include<iostream>
using namespace std;

void BubbleSort(int arr[], int size){
    for(int i=0; i<size; i++){
        for(int j=0; j<size-1-i; j++){
            if(arr[j] > arr[j+1])
            swap(arr[j], arr[j+1]);
        }
    }
}

int main(){
    int arr[] = {10,22,1,43,23};
    int size = sizeof(arr)/sizeof(arr[0]);
    BubbleSort(arr, size);
    for(int i=0; i<size; i++)
    cout<<arr[i]<<" ";
    return 0;
}
```

### Output:
```
1 10 22 23 43
```

## Bubble Sort Complexity
### 1. Time Complexity:

| Case        | Time Complexity |
|-------------|-----------------|
| Best Case   | O(n)            |
| Average Case| O(n^2)          |
| Worst Case  | O(n^2)          |

- **Best Case Complexity**: The best-case scenario occurs when the input array is already sorted. In this case, Bubble Sort only needs to perform one pass through the array without any swaps. The time complexity in the best case is O(n).

- **Average Case Complexity**: The average case time complexity of Bubble Sort is O(n^2). On average, Bubble Sort requires approximately (n^2)/2 comparisons and swaps to sort an array of size n.

- **Worst Case Complexity**: The worst-case scenario occurs when the input array is in reverse sorted order. In this case, Bubble Sort needs to perform the maximum number of comparisons and swaps for each pair of elements. The time complexity in the worst case is O(n^2).

### 2. Space Complexity:

| Case        | Space Complexity |
|-------------|------------------|
| Best Case   | O(1)             |
| Average Case| O(1)             |
| Worst Case  | O(1)             |

Bubble Sort has a space complexity of O(1) because it only uses a constant amount of additional space to perform the sorting. The space usage remains constant regardless of the size of the input array.

It's important to note that Bubble Sort has a quadratic time complexity, which makes it inefficient for large datasets. Other sorting algorithms like Merge Sort or Quick Sort generally offer better performance. However, Bubble Sort can still be useful in certain scenarios, such as when the number of elements is small or when minimizing the number of swaps is important.
