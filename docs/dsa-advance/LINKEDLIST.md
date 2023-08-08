---
sidebar_position: 10
---

# LINKED LIST

dynamic ds (grow and shrink at run time ..  no memory wastage). it is a collection of nodes(data and address) 

## Singly linked list

### implement node

```cpp
#include<iostream>
using namespace std;

class Node{
    public:
    int data ;
    Node* next;

    //constructor
    Node(int data){
        this->data = data ;
        this->next =NULL;
    }
};

int main(){
    Node* node1 = new Node();
    cout<<node1->data<<endl;
    cout<<node1->next<<endl;
}
```

### Insert At Head/tail/position

```cpp
#include <iostream>
using namespace std;

class Node
{
public:
    int data;
    Node *next;

    // constructor
    Node(int data)
    {
        this->data = data;
        this->next = NULL;
    }
};
//head 
void InsertAtHead(Node *&head, int val)
{
    // new node create
    Node *temp = new Node(val);
    temp->next = head;
    head = temp;
}

//tail
void insertAtTail(Node *&tail, int val)
{
    Node *temp = new Node(val);
    tail->next = temp;
    tail = temp;
}

//position
void InsertAtPosition(Node* &tail, Node* &head, int position, int val){

if(position==1){
    InsertAtHead(head, val);
    return;
} 

Node* temp =head;
int cnt =1; //initially 1 

while(cnt < position -1)// hmlog ko 3rd posn pr insert krna h to jana 2nd tk h
{
temp = temp->next;
cnt++;
}

//agr last posn mein kr re to update bhi to krna pdega na tail
if(temp->next ==NULL){
    insertAtTail(tail, val);
    return ;
}
Node* n = new Node(val);
n->next = temp->next;
temp->next = n;
}

//print
void print(Node *&head)
{
    Node *temp = head;
    while (temp != NULL)
    {
        cout << temp->data << " ";
        temp = temp->next;
    }
    cout << endl;
}

int main()
{
    // create new node
    Node *node1 = new Node(10);
    
    // head
    Node *head = node1;

    // tail
    Node *tail = node1;
    print(head);
    
    insertAtTail(tail, 12);
    print(head);
    
    insertAtTail(tail, 2);
    print(head);
    
    InsertAtPosition(tail, head ,4, 22);
    print(head);
    return 0;
}
```

### deletion

```cpp
//destructor
~Node(){
    int value= this->data;
    if(this->next!=NULL){
        delete next;
        this->next =NULL;
    }
    cout<<"Memory is free";
}

//delete 
void deletion(Node* &head, int val){
    Node*temp=head;
    if(head==NULL) return;
    while(temp->next->data!=val){
        temp=temp->next;

    }
    Node* todelete= temp->next;
    temp->next= temp->next->next;
    delete todelete;
}

//delete at head
void deleteAtHead(Node* &head){
    Node* todelete= head;
    head = head->next;
    delete = todelete;
}
```

### Search

```cpp
bool search( Node* &head , int key){
Node* temp = head;
while(temp!=NULL){
if(temp->data==key){
return true;
}
temp=temp->next;
}
return false;
}
```

## Doubly LINKED LIST

traverse dll

```cpp
#include<iostream>
using namespace std;

class Node{
    public:
    int data;
    Node*prev;
    Node*next;

    //constructor
    Node(int val){
        this->data= val;
        this->prev=NULL;
        this->next= NULL;
    }
};
void print(Node *head){
    Node* temp =head;
    while(temp!=NULL){
        cout<<temp->data;
        temp=temp->next;
    }
    cout<<endl;

}

int main(){
    Node* node1 = new Node(21);

    Node* head = node1;
    print(head);
}
```

### insert at head/ tail/position

```cpp
#include <iostream>
using namespace std;

class Node
{
public:
    int data;
    Node *prev;
    Node *next;

    // constructor
    Node(int val)
    {
        this->data = val;
        this->prev = NULL;
        this->next = NULL;
    }
};

// insert at head
void insertAtHead(Node *&head, int val)
{
    if (head == NULL)
    {
        Node *temp = new Node(val);
        head = temp;
    }
    else
    {
        Node *temp = new Node(val);
        temp->next = head;
        head->prev = temp;
        head = temp;
    }
}

// insertattail
void insertAtTail(Node *&tail, int val)
{
    if (tail == NULL)
    {
        Node *temp = new Node(val);
        tail = temp;
    }
    else
    {
        Node *temp = new Node(val);
        tail->next = temp;
        temp->prev = tail;
        tail = temp;
    }
}
// insertatPosition
void insertAtPosition(Node *&tail, Node *&head, int position, int val)
{
    // insert at start
    if (position == 1)
    {
        insertAtHead(head, val);
        return;
    }
    Node *temp = head;
    int cnt = 1; // initially 1

    while (cnt < position - 1) // hmlog ko 3rd posn pr insert krna h to jana 2nd tk h
    {
        temp = temp->next;
        cnt++;
    }

    // agr last posn mein kr re to update bhi to krna pdega na tail
    if (temp->next == NULL)
    {
        insertAtTail(tail, val);
        return;
    }

    // middle mein krna h
    Node *n = new Node(val);
    n->next = temp->next;
    temp->next->prev = n;
    temp->next = n;
    n->prev = temp;
}

// print
void display(Node *&head)
{
    Node *temp = head;
    while (temp != NULL)
    {
        cout << temp->data << " ";
        temp = temp->next;
    }
    cout << endl;
}

int main()
{
    Node *node1 = new Node(21);

    // head
    Node *head = node1;
    Node *tail = node1;
    display(head);

    // insertathead
    insertAtHead(head, 10);
    display(head);

    // insertattail
    insertAtTail(tail, 1);
    display(head);

    // insertatPosition
    insertAtPosition(tail, head, 2, 100);
    display(head);
    return 0;
}
```

### deletion

```cpp
//destructor
~Node(){
    int data= this->val;
    if(next!=NULL){
        delete next;
        next=NULL;
    }
    cout<<"Memory free";
}

//delete starting node
 if(position==1){
    Node* temp =head;
    temp->next->prev =NULL;
    head= temp->next;
    temp->next=NULL;
    delete temp;
 }
 else{
    //delete any node(middle/last)
    Node* curr=head;
    Node* prev = NULL;

    int cnt=1;
    while(cnt<position){
        prev= curr;
        curr= curr->next;
        cnt++;
    }
    
    curr->prev=NULL;
    prev->next = curr->next;
    curr->next=NULL;
    delete curr;
 }
```

## Circular Linked list

```cpp
#include<iostream>
#include<map>
using namespace std;

class Node {
    public:
    int data;
    Node* next;

    //constrcutor
    Node(int d) {
        this->data = d;
        this->next = NULL;
    }

    ~Node() {
        int value = this->data;
        if(this->next != NULL) {
            delete next;
            next = NULL;
        }
        cout << " memory is free for node with data " << value << endl;
    }

};

void insertNode(Node* &tail, int element, int d) {
    

    //empty list
    if(tail == NULL) {
        Node* newNode = new Node(d);
        tail = newNode;
        newNode -> next = newNode;
    }
    else{
        //non-empty list
        //assuming that the element is present in the list

        Node* curr = tail;

        while(curr->data != element) {
            curr = curr -> next;
        }
        
        //element found -> curr is representing element wala node
        Node* temp = new Node(d);
        temp -> next = curr -> next;
        curr -> next = temp;

    }

}    

void print(Node* tail) {

    Node* temp = tail;

    //empty list
    if(tail == NULL) {
        cout << "List is Empty "<< endl;
        return ;
    }

    do {
        cout << tail -> data << " ";
        tail = tail -> next;
    } while(tail != temp);

    cout << endl;
} 

void deleteNode(Node* &tail, int value) {

    //empty list
    if(tail == NULL) {
        cout << " List is empty, please check again" << endl;
        return;
    }
    else{
        //non-empty

        //assuming that "value" is present in the Linked List
        Node* prev = tail;
        Node* curr = prev -> next;

        while(curr -> data != value) {
            prev = curr;
            curr = curr -> next;
        }

        prev -> next = curr -> next; // curr vala ka link hta dia

        //1 Node Linked List
        if(curr == prev) {
            tail = NULL;
        }

        //>=2 Node linked list
        else if(tail == curr ) {
            tail = prev;
        }

        curr -> next = NULL;
        delete curr;

    }

}

int main() {

    Node* tail = NULL;

    insertNode(tail, 5, 7);
    print(tail);

    insertNode(tail, 7, 9);
    print(tail);

    insertNode(tail, 5, 6);
    print(tail);
    
    insertNode(tail, 9, 10);
    print(tail);

    insertNode(tail, 3, 4);
    print(tail);
   

    deleteNode(tail, 5);
    print(tail);
     
    return 0;
}
```

 

[linked list problems](LINKED%20LIST%20-%2056d0966fd0594ad0bf98c535c9093f53/linked%20list%20problems%2002b5fc39ec934bd8807f8ad6c53b36fa.md)