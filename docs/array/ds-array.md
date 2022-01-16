---
sidebar_position: 1
---
# DS Array

## Definition
- Arrays are defined as the collection of similar type of data items stored at contiguous memory locations.
- Arrays are the derived data type in C programming language which can store the primitive type of data such as int, char, double, float, etc.
Array is the simplest data structure where each data element can be randomly accessed by using its index number.
- For example, if we want to store the marks of a student in 6 subjects, then we don't need to define different variable for the marks in different subject. instead of that, we can define an array which can store the marks in each subject at a the contiguous memory locations.
- The array marks[10] defines the marks of the student in 10 different subjects where each subject marks are located at a particular subscript in the array i.e. marks[0] denotes the marks in first subject, marks[1] denotes the marks in 2nd subject and so on.

## Properties of the Array
Each element is of same data type and carries a same size i.e. int = 4 bytes.
Elements of the array are stored at contiguous memory locations where the first element is stored at the smallest memory location.
Elements of the array can be randomly accessed since we can calculate the address of each element of the array with the given base address and the size of data element.
for example, in C language, the syntax of declaring an array is like following:
```
int arr[10]; char arr[10]; float arr[5]   
```

## Need of using Array
In computer programming, the most of the cases requires to store the large number of data of similar type. To store such amount of data, we need to define a large number of variables. It would be very difficult to remember names of all the variables while writing the programs. Instead of naming all the variables with a different name, it is better to define an array and store all the elements into it.

Following example illustrates, how array can be useful in writing code for a particular problem.

In the following example, we have marks of a student in six different subjects. The problem intends to calculate the average of all the marks of the student.

In order to illustrate the importance of array, we have created two programs, one is without using array and other involves the use of array to store marks.

### Program without array:
```
#include <stdio.h>  
void main ()  
{  
    int marks_1 = 56, marks_2 = 78, marks_3 = 88, marks_4 = 76, marks_5 = 56, marks_6 = 89;   
    float avg = (marks_1 + marks_2 + marks_3 + marks_4 + marks_5 +marks_6) / 6 ;   
    printf(avg);   
}  
```

### Program by using array:
```
#include <stdio.h>  
void main ()  
{  
    int marks[6] = {56,78,88,76,56,89);  
    int i;    
    float avg;  
    for (i=0; i<6; i++ )   
    {  
        avg = avg + marks[i];   
    }    
    printf(avg);   
}   
```

## Complexity of Array operations
Time and space complexity of various array operations are described in the following table.

## Time Complexity

Algorithm | Average Case | Worst Case
----------|--------------|------------
Access	  |     O(1)     |  O(1)
Search    |     O(n)     |  O(n)
Insertion |	    O(n)     |  O(n)
Deletion  |	    O(n)     |  O(n)

**Space Complexity**
In array, space complexity for worst case is O(n).

## Advantages of Array
Array provides the single name for the group of variables of the same type therefore, it is easy to remember the name of all the elements of an array.
Traversing an array is a very simple process, we just need to increment the base address of the array in order to visit each element one by one.
Any element in the array can be directly accessed by using the index.

## Memory Allocation of the array
As we have mentioned, all the data elements of an array are stored at contiguous locations in the main memory. The name of the array represents the base address or the address of first element in the main memory. Each element of the array is represented by a proper indexing.

The indexing of the array can be defined in three ways.
1. 0 (zero - based indexing) : The first element of the array will be arr[0].
2. 1 (one - based indexing) : The first element of the array will be arr[1].
3. n (n - based indexing) : The first element of the array can reside at any random index number.

In the following image, we have shown the memory allocation of an array arr of size 5. The array follows 0-based indexing approach. The base address of the array is 100th byte. This will be the address of arr[0]. Here, the size of int is 4 bytes therefore each element will take 4 bytes in the memory.

![Imgur](https://i.imgur.com/wZ0bfAq.png)

In 0 based indexing, If the size of an array is n then the maximum index number, an element can have is n-1. However, it will be n if we use 1 based indexing.

## Accessing Elements of an array
To access any random element of an array we need the following information:

1. Base Address of the array.
2. Size of an element in bytes.
3. Which type of indexing, array follows.
Address of any element of a 1D array can be calculated by using the following formula:
```
Byte address of element A[i]  = base address + size * ( i - first index)   
```

**Example :**
```
In an array, A[-10 ..... +2 ], Base address (BA) = 999, size of an element = 2 bytes,   
find the location of A[-1].  
L(A[-1]) = 999 + [(-1) - (-10)] x 2  
       = 999 + 18   
       = 1017   
```

### Passing array to the function :
As we have mentioned earlier that, the name of the array represents the starting address or the address of the first element of the array. All the elements of the array can be traversed by using the base address.

The following example illustrate, how the array can be passed to a function.

**Example:**
```
#include <stdio.h>  
int summation(int[]);  
void main ()  
{  
    int arr[5] = {0,1,2,3,4};  
    int sum = summation(arr);   
    printf("%d",sum);   
}   
  
int summation (int arr[])   
{  
    int sum=0,i;   
    for (i = 0; i<5; i++)   
    {  
        sum = sum + arr[i];   
    }   
    return sum;   
}  
```
The above program defines a function named as summation which accepts an array as an argument. The function calculates the sum of all the elements of the array and returns it.
