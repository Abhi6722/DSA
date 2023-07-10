---
sidebar_position: 1
---

# Operating System

Operating system is defined as an interface between a hardware and a user . The purpose of OS is to provide an environment in which the user can execute a program conveniently and efficiently. It basically manages all the resources of the computer . The function of OS is to manage all the resources , process , memory and file .

Eg- Windows , Linux , MacOS , Android 

**There are 7 types of OS:**

**Few of them are-** 

**Multitasking OS** - In this more than one CPU is used for the execution .  ADV - If the one Processor fails we can proceed with the another processor.  DIS- Due to more CPU it is complex and difficult to  understand. 

**Time Sharing OS-** 

Each task is given a certain amount of time to execute so that all the task works smoothly . Each user gets the time of the CPU. The time that each task get to execute is called quantum . 

ADV - each task get an equal opportunity . 

CPU idle time can be reduced .

DIS- Reliability problem 

**Batch OS -**

This type of OS doesn’t directly interact with the computer . There is an operator which takes similar jobs having same requirement and group them into batches . Basically it is responsible to sort the jobs of the similar needs. 

**Multi Programming OS** 

One program is present in the memory and any one of them can be kept in execution. 

**Real time OS-**

They are used when there are time  requirements that are very strict  eg- missile system . 

Types-

1. Hard RTOS  - time ekdum exact hona chahiye .. if time miss to failure
2. Firm RTOS- same bus thoda time age ja skta h
3. Soft RTOS- no system failure

### Socket

Socket is defined as the endpoint of the communication. It is identified by an IP address concatenated with a Port Number. The server waits for the incoming client request by listening to a specified port. Once a request is received , the server accepts a connection from the client socket to complete the connection .

### Kernel

It manages the operation of the computer and the hardware. It establishes a communication between a user level application and a hardware . Manages memory and CPU time.

### Monolithic Kernel

It provides good performance but a lot of lines of code. It is one of the type of kernel where all OS services operate in kernel space .EG - UNIX , LINUX.

### Process

It is a program under execution . EG- web browser is a process . for eg - We write a program in a text file and when we execute a program it becomes a process which perform all the task mentioned in the program .

### Process table

To keep track of all the process . OS maintained a table called Process table.

### Program

Set of instruction to perform a certain task .

### Thread

It is a lightweight  process . A process can perform  multiple task at the same time by including multiple threads. Thread has its own Program counter , Stack . It shares the resources with other thread having the same process.

### Thrashing

It is a situation where the performance of the computer degrades or collapse. It occurs when the system spends more time in processing page faults .  

### Virtual Memory

A computer can have more memory than the amount of physically installed on the system . This extra memory is called virtual memory . 

It has two purpose -

1. Allows to extend the use of physical memory using a disk 
2. it allows to have a memory protection , each virtual address is translated to physical address .

### RAID

redundant array of Independent Disk . It is a technique which uses a combination of multiple disk instead of using single disk to increase performance and data redundancy means in case of disk failure if the same data is also backed up in another disk we can retrieve from there and go with the operation .

### Deadlock

It is a situation where a set of process are blocked because each process is holding a resource and waiting for another resource acquired by some other process. 

Deadlock occur in - 

Mutual exclusion 

Hold and wait

No preemption - a resource cannot be taken by another resource until and unless it is released. 

Circular wait 

### Fragmentation

Processes are loaded and unloaded from memory and the free space is fragmented. Processes can’t be assigned to memory blocks due to their small size , and due to this the memory block stay unused . 

Two type of fragmentation 

1. Internal -  It happens when the  process is larger than the memory .
2. External - It happens when the process is removed. 

### Spooling

Simultaneous peripheral operations online.  It is a process in which data is held temporarily and used to execute by system . There is no interaction between I/O device and CPU . This means there is no need for the CPU to wait for the I/O operations . EG- printing. The document that are to be printed are stored in SPOOL and then added to the queue for printing . 

### Semaphore and Mutex

SEMAPHORE- Processes perform wait and signal operation to indicate whether they are acquiring or releasing the resource. It is a signalling mechanism .

MUTEX- It is a locking mechanism . If it wants to acquire the resource then it can lock .

Binary semaphore- It is also known as mutex lock . It can only have two value - 0 and 1 

### Belady’s ANAMOLY

Increasing the number of page frame result in increasing the number of page faults . 

 SOLUTION - 

1. Implementing alternative page replacement algorithm helps to eliminate Belady’s anamoly .
2. Use of stack based algorithm such as Optimal Page replacement Algorithm , Least recently used algorithm 

### Starvation

It is also called Lived lock . It is the problem that occur when low priority processed get jammed as the high priority processes keep executing . 

SOLUTION -

Ageing is the technique of gradually increasing the priority of the processes that wait in the system for long time.

### Paging

It is a method / technique which is used for non contiguous memory allocation . It is used for faster access to data . When the program need a page it is available in the main memory . 

 

### Demand Paging

Pages should only brought to the memory if the executing process demand them . Demand paging works opposite to the principle of loading all pages immediately . 

### Overlays

Whenever a process is running it will not execute the complete program at the same time. Overlays say that whatever part you required , you load it once the part is done .

### Segmentation

It is a technique in which memory is divided into the variable size parts .

The detail about each segment is stored in a table called segment table . It consist of about two information of segment 

1. address of the segment .
2. Length of the segment .

### Main / secondary memory

Secondary memory is non volatile . This means it retains data even when the power is off. but main/primary memory is opposite of it.

### Static and Dynamic Binding

Static binding happens when the code is compiled . As the required information is known before the run time , it increases the program efficiency and enhance the speed of execution.

Dynamic binding happens when the code is executed at the run time. 

### Disk Scheduling

It is known as I/O scheduling . It is done by OS to schedule I/O request arriving for the disk.

**SEEK TIME** - time taken to locate the disk arm to a specified track where the data is to be read or write.

**Rotational Latency** - time taken by the desired sector of disk to rotate in a position so that it can access read/write head.

**Transfer time** - time taken to transfer the data .

**Disk access time** - SEEK TIME + ROTATIONAL LATENCY +  TRANSFER TIME

**Disk response time**- Average time spent by request waiting to perform operation.

### Disk scheduling ALGORITHM

1. **FCFS -**  First come First serve . The request are addressed in the order they arrive in the disk queue. 
2. **SSTF -**  Shortest Seek Time First . Request having shortest seek time are executed first . So the  seek time of every request is calculated in advance in the queue and then they are scheduled according to their calculated seek time. 
3. **SCAN -** It is also known as elevator algorithm . Hence the disk arm move in the particular direction and service the request and after reaching the end of the disk it reverses its direction and again serves the request . 
4.  **CSAN-** In Scan , it serves two time . so it may be possible that there are too many request are waiting at other end . So , to avoid these situation CSCAN is used  in which instead of reversing its direction it goes to the other end and start serving the request from there. 
5. **LOOK -** Similar to SCAN  , instead of disk arm going to the end it goes only to the last request to be serviced and then reverses it direction from there. It prevent delay.
6. **CLOOK-** Similar to CSAN , It goes directly to the last request to be serviced and then from there goes to the other end ‘s last request . It prevent delay 

### Process Scheduling

Arrival time - time at which process arrives.

Completion time - time taken to complete the execution

Burst time - time required by CPU process for execution.

Time around time- Completion - Arrival time.

Waiting time - Time around - Burst time

### Scheduling algorithm

1. FCFS - First come first serve . The job that arrived first in the CPU is allocated to CPU first.
2. SJF - shortest Job first . Shortest burst time are scheduled first .
3. SRTF - shortest Remaining time first . In this the execution of the process can be stopped after a certain amount of time. At the arrival of process the Short term scheduler schedules the process with least remaining burst time .
4. LRTF- Longest remaining time first . 
5. Priority scheduling - Scheduling is based on priority . The process with higher priority should be carried first .
6. Round Robin Scheduling - It allocates a fair time slot to every process . Each process is assigned a fixed time in a cyclic way . so, Starvation doesn’t occur. No priority is given to important task . Also known as time slicing scheduling .

### Banking Algorithm

Used to avoid deadlock and allocate resources safely to each process. It is named on banking system where bank never allocates available cash in such a manner that it can no longer satisfy the requirement of all the customer.

### Cache

It is an extremely fast memory type that act as a buffer between RAM and the CPU .It holds frequently requested data so that they are immediately available to CPU when needed.

## Direct / Associative mapping

In direct mapping, only one possible place in the cache is available for each block in the main memory. In associative mapping, any place in the cache is available for each block in the main memory.

### Multitasking/ threading / processing

**Multitasking**: When a single resource is used to process multiple tasks then it is multitasking. **Multithreading**: It is an extended form of multitasking.

**Multiprocessing**: When more than one processing unit is used by a single computer then it is called multiprocessing.
