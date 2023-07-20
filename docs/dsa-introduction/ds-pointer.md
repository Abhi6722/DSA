---
sidebar_position: 4
---
# DS Pointer

## Pointer
Pointer is used to points the address of the value stored anywhere in the computer memory. To obtain the value stored at the location is known as dereferencing the pointer. Pointer improves the performance for repetitive process such as:

- Traversing String
- Lookup Tables
- Control Tables
- Tree Structures
![DS Pointer Performance](https://i.imgur.com/O1kvbeT.png)

## Pointer Details
- Pointer arithmetic: There are four arithmetic operators that can be used in pointers: ++, --, +, -
- Array of pointers: You can define arrays to hold a number of pointers.
- Pointer to pointer: C allows you to have pointer on a pointer and so on.
- Passing pointers to functions in C: Passing an argument by reference or by address enable the passed argument to be changed in the calling function by the called function.
- Return pointer from functions in C: C allows a function to return a pointer to the local variable, static variable and dynamically allocated memory as well.

![DS Pointer](https://i.imgur.com/aD2dI0e.png)

### Program
#### Pointer
```
#include <stdio.h>  
  
int main( )  
{  
int a = 5;  
int *b;  
b = &a;  
  
printf ("value of a = %d\n", a);  
printf ("value of a = %d\n", *(&a));  
printf ("value of a = %d\n", *b);  
printf ("address of a = %u\n", &a);  
printf ("address of a = %d\n", b);  
printf ("address of b = %u\n", &b);  
printf ("value of b = address of a = %u", b);  
return 0;  
}
```  

#### Output
```
value of a = 5                                                                                                                   
value of a = 5                                                                                                                   
address of a = 3010494292                                                                                                        
address of a = -1284473004                                                                                                       
address of b = 3010494296                                                                                                        
value of b = address of a = 3010494292  
```

### Program
#### Pointer to Pointer
```
#include <stdio.h>  
  
int main( )  
{  
int a = 5;  
int *b;  
int **c;  
b = &a;  
c = &b;  
printf ("value of a = %d\n", a);  
printf ("value of a = %d\n", *(&a));  
printf ("value of a = %d\n", *b);  
printf ("value of a = %d\n", **c);  
printf ("value of b = address of a = %u\n", b);  
printf ("value of c = address of b = %u\n", c);  
printf ("address of a = %u\n", &a);  
printf ("address of a = %u\n", b);  
printf ("address of a = %u\n", *c);  
printf ("address of b = %u\n", &b);  
printf ("address of b = %u\n", c);  
printf ("address of c = %u\n", &c);  
return 0;  
}  
```
#### Pointer to Pointer
```
value of a = 5
value of a = 5
value of a = 5
value of a = 5
value of b = address of a = 2831685116
value of c = address of b = 2831685120
address of a = 2831685116
address of a = 2831685116
address of a = 2831685116
address of b = 2831685120
address of b = 2831685120
address of c = 2831685128
```
