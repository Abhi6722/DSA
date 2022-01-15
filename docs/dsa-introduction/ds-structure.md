---
sidebar_position: 5
---
# DS Structure

## Structure
A structure is a composite data type that defines a grouped list of variables that are to be placed under one name in a block of memory. It allows different variables to be accessed by using a single pointer to the structure.

### Syntax
```
struct structure_name   
{  
    data_type member1;  
    data_type member2;  
    .  
    .  
    data_type memeber;  
};  
```

### Advantages
- It can hold variables of different data types.
- We can create objects containing different types of attributes.
- It allows us to re-use the data layout across programs.
- It is used to implement other data structures like linked lists, stacks, queues, trees, graphs etc.

### Program
```
#include<stdio.h>  
#include<conio.h>  
void main( )  
{  
struct employee  
{  
int id ;  
float salary ;  
int mobile ;  
} ;  
struct employee e1,e2,e3 ;  
clrscr();  
printf ("\nEnter ids, salary & mobile no. of 3 employee\n"  
scanf ("%d %f %d", &e1.id, &e1.salary, &e1.mobile);  
scanf ("%d%f %d", &e2.id, &e2.salary, &e2.mobile);  
scanf ("%d %f %d", &e3.id, &e3.salary, &e3.mobile);  
printf ("\n Entered Result ");  
printf ("\n%d %f %d", e1.id, e1.salary, e1.mobile);  
printf ("\n%d%f %d", e2.id, e2.salary, e2.mobile);  
printf ("\n%d %f %d", e3.id, e3.salary, e3.mobile);  
getch();  
}  
```