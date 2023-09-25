---
sidebar_position: 2
---

# Sorting

Sorting is a fundamental operation in computer science and data processing that arranges elements in a specific order, often in ascending or descending order. It is crucial for various applications, including searching and data analysis. There are many sorting algorithms, each with its own approach and efficiency characteristics. Some common sorting algorithms include:


## Selection Sort

Selection Sort is a simple comparison-based sorting algorithm that operates by dividing the input array into two parts: a sorted region and an unsorted region. It repeatedly selects the smallest (or largest) element from the unsorted region and moves it to the end of the sorted region.
:::note
We take the minimum element and then compare the adjancent elements and then place the minimum at the front.
:::

```cpp title="C++"
#include<iostream>
using namespace std;

void selectionSort(int arr[], int n){
    for(int i=0; i<n; i++){
        int min = i;
        for(int j=i+1; j<n; j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        swap(arr[i], arr[min]);
    }
}

int main()
{
    int n;
    cin>>n;
    int arr[n];
    for(int i=0; i<n; i++){
        cin>>arr[i];
    }
    selectionSort(arr, n);
    for(int i=0; i<n; i++){
        cout<<arr[i]<<" ";
    }

    return 0;
}
```

| Complexity       | Best Case          | Average Case       | Worst Case         | Space Complexity  |
|------------------|--------------------|--------------------|--------------------|-------------------|
| Time Complexity  | O(n^2)             | O(n^2)             | O(n^2)             | O(1)              |


## Bubble Sort

Bubble Sort is a simple comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. It continues these steps until no more swaps are needed, indicating that the list is sorted. For each iteration the maximum number in the list is at the last position.

:::note
We check the  adjancent elements and then swap the element if they are in wrong order. The largest is at the right position after each iteration.
:::

```cpp title="C++"
void bubbleSort(int arr[], int n){
    for(int i=0; i<n; i++){
        for(int j=0; j<n-i-1; j++){
            if(arr[j]>arr[j+1]){
                swap(arr[j], arr[j+1]);
            }
        }
    }
}

// For case when array is already sorted
void bubbleSortImproved(int arr[], int n){
    int didswap = 0;
    for(int i=0; i<n; i++){
        for(int j=0; j<n-i-1; j++){
            if(arr[j]>arr[j+1]){
                swap(arr[j], arr[j+1]);
                didswap = 1;
            }
        }
        if(didswap == 0) break;
    }
}
```

| Complexity       | Best Case          | Average Case       | Worst Case         | Space Complexity  |
|------------------|--------------------|--------------------|--------------------|-------------------|
| Time Complexity  | O(n)               | O(n^2)             | O(n^2)             | O(1)              |


## Insertion Sort

Insertion Sort is a simple comparison-based sorting algorithm that builds the sorted array one element at a time by repeatedly taking an element from the unsorted part and inserting it into its correct position within the sorted part. It is similar in concept to sorting a hand of playing cards.

:::note
Take an element and place it at its correct order.
:::

```cpp title="C++"
void insertionSort(int arr[], int n){
    for(int i=0; i<n; i++){
        int j=i;
        while(j>0 && arr[j-1]>arr[j]){
            swap(arr[j], arr[j-1]);
            j--;
        }
    }
}
```

| Complexity       | Best Case          | Average Case       | Worst Case         | Space Complexity  |
|------------------|--------------------|--------------------|--------------------|-------------------|
| Time Complexity  | O(n)               | O(n^2)             | O(n^2)             | O(1)              |


## Merge Sort

Insertion Sort is a simple comparison-based sorting algorithm that builds the sorted array one element at a time by repeatedly taking an element from the unsorted part and inserting it into its correct position within the sorted part. It is similar in concept to sorting a hand of playing cards.

:::note
Divide and Merge
:::

```cpp title="C++"
void insertionSort(int arr[], int n){
    for(int i=0; i<n; i++){
        int j=i;
        while(j>0 && arr[j-1]>arr[j]){
            swap(arr[j], arr[j-1]);
            j--;
        }
    }
}
```

| Complexity       | Best Case          | Average Case       | Worst Case         | Space Complexity  |
|------------------|--------------------|--------------------|--------------------|-------------------|
| Time Complexity  | O(n)               | O(n^2)             | O(n^2)             | O(1)              |
