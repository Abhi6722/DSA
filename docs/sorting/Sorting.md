---
sidebar_position: 1
---

Sorting refers to the operation or technique of arranging and rearranging sets of data in some specific order. 

Sorting is the operation performed to arrange the records of a table or list in some order according to some specific ordering criterion. Sorting is performed according to some key value of each record.

## Categories of Sorting

The techniques of sorting can be divided into two categories. These are:

- Internal Sorting
- External Sorting

**Internal Sorting:** If all the data that is to be sorted can be adjusted at a time in the main memory, the internal sorting method is being performed.

**External Sorting:** When the data that is to be sorted cannot be accommodated in the memory at the same time and some has to be kept in auxiliary memory such as hard disk, floppy disk, magnetic tapes etc, then external sorting methods are performed.

## The Complexity of Sorting Algorithms

The complexity of sorting algorithm calculates the running time of a function in which 'n' number of items are to be sorted. The choice for which sorting method is suitable for a problem depends on several dependency configurations for different problems. The most noteworthy of these considerations are:

- The length of time spent by the programmer in programming a specific sorting program
- Amount of machine time necessary for running the program
- The amount of memory necessary for running the program
- The Efficiency of Sorting Techniques

To get the amount of time required to sort an array of 'n' elements by a particular method, the normal approach is to analyze the method to find the number of comparisons (or exchanges) required by it. Most of the sorting techniques are data sensitive, and so the metrics for them depends on the order in which they appear in an input array.

Various sorting techniques are analyzed in various cases and named these cases as follows:

- Best case
- Worst case
- Average case

Hence, the result of these cases is often a formula giving the average time required for a particular sort of size 'n.' Most of the sort methods have time requirements that range from O(nlog n) to O(n2).

## Types of Sorting Techniques

- Selection Sort
- Bubble Sort
- Merge Sort
- Insertion Sort
- Quick Sort
- Heap Sort

## Sorting Techniques in the most basic
### Selection Sort
Selection Sort is a comparision based sorting technique in which we take the ith element as the smallest element and then we store its position in temporary variable and then we start the next loop from the next element and check if that ith element is larger than any other element and if we find that we replace it and after that we swap the elements. In this for ith iteration the i element is at correct position. 

### Bubble Sort
Bubble Sort is a comparision based sorting technique in which we run the first loop and then the second loop will run 1 time less than the first loop and check for adjacent elements and if any of the element is smaller than its adjacent element we swap it. In this way we get the largest element at its correct position for the first iteration and in the same manner we perform for other elements.

### Insertion Sort
Insertion Sort is a comparision based sorting technique in which we divide the array into two part. We take the second element as key and then consider the first as sorted and then we run the loop and take the key and compare in the sorted part of array and place it at the correct position and run the loop until j>=0 and shift each element one place forward and outside the second loop assign the j+1 position to the key.

