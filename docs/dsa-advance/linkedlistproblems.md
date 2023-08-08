---
sidebar_position: 15
---

# linked list problems

### Sort 0 , 1,2 in ll

app -1 

1. count krlo 0 1 2 kitni bar h
2. age bdhte jao aur jitne 0 h start se dal do replace krdo

```cpp
Node* sortlist (Node* head){
    int zerocount=0;
     int onecount=0;
      int twocount=0;

      Node* temp=head;
      while(temp!=NULL){
        //sbka count lelo ki kine 0 1 2 h
        if(temp->data ==0)
        zerocount++;
     
       else if(temp->data ==1)
        onecount++;
      
       else (temp->data ==2)
      twocount++;
      temp = temp->next; //temp ko aage bdhate jao
      }

      temp=head; //temp ko head pr krdo
      while(temp!=NULL){
        if(zerocount!=0){ // data ko replace krdo jb tk sare 0 start mein n dal jaye 
            temp->data=0;
            zerocount--;
        }
        else if(onecount!=0){
            temp->data =1;
            onecount--;
        }
        else (twocount!=0){
            temp->data =2;
            twocount--;
        }
        temp=temp->next;

      }
      return head;
}

// TC - O(N)
```

### Reverse a linked list

```cpp
//iterative approach 

struct Node* reverseList(struct Node *head)
    {
        // code here
        // return head of reversed list
        Node* prev = NULL ;
        Node* curr = head ;
        Node* nextptr;

        while(curr!=NULL){
            nextptr= curr->next;
            curr->next = prev ;
            prev= curr;
            curr=nextptr;
            
        }
        return prev ;
    }

TC- O(n)
SC- O(1)

//Recursive

void reverse(Node* head , Node* curr, Node* prev){
    //base case
    if(curr==NULL){
        head=prev;
        return;
    }
Node* nextptr = curr->next;
reverse(head, nextptr , curr); //age ka reverse krdo
curr->next=prev;

}
Node* reverselist(Node* head){
   Node* curr= head;
   Node* prev =NULL;
   reverse(head, curr, prev);
   return head;
}
TC- O(n)
SC- O(1)
```

### Middle of linked list

```cpp
Time Complexity: O(N)

Space Complexity: O(1) 

//slow and fast pointer

class Solution{
    public:
    Node* middleNode(Node* head){
        Node* slow= head;
        Node* fast = head;
        while(fast && fast->next){
            slow = slow->next;
            fast= fast->next->next;
        }
        return slow;
    }
}
```

### Merge 2 sorted LL

```cpp
class Solution{
    public:

    Node* mergeTwo(Node* l1, Node* l2){
        //if l1 is empty return l2
        if(l1==NULL) return l2;

         //if l2 is empty return l1
         if(l2==NULL) return l1;

         // pointing l1 and l2 to smallest and greatest one
         if(l1->val > l2->val)//Pointing l1 to the smaller one among the two.
         swap(l1,l2);

           // act as head of resultant merged list
        Node* res = l1;

        while(l1!=NULL && l2!=NULL){
Node* temp= NULL;
 while(l1 != NULL && l1->val <= l2->val) {

                temp = l1;//storing last sorted node  
                l1 = l1->next;
            }
             temp->next = l2;
             swap(l1,l2);

        }
        return res;
    }
};

TC - So, it remains the same as O(N+M) where N is the number of nodes in list 1 and M is the number of nodes in list 2.
```

### Remove duplicate element from sorted LL

```cpp
Node* removeduplicate(Node* head){
    Node* temp = head;
    while(temp->next!=NULL){
        if(temp->data == temp->next->data){
            Node* curr= temp->next;//duplicate vale mein
            temp->next = temp->next->next;
            delete curr;
            continue;
        }
        temp=temp->next;
    }
    return head;
}
```

### Remove duplicate element from unsorted LL-

```cpp
class Solution
{
    public:
    Node * removeDuplicates( Node *head) 
    {
        map<int, int>mpp; //map creating
 Node* curr= head; //point curr to head
 mpp[curr->data]=1; // phla value dal do map mein
 Node* prev = curr; 
 curr = curr->next;
 while(curr!=NULL){ 
    if(mpp[curr->data]){ //map mein agr vo data h 
prev->next =curr->next; // to prev ke next ko curr ke next krdo
delete(curr);
    }
    else{
        mpp[curr->data]=1; //agr ni h to dal do
        prev=curr; //aur prev ko aage krte jao
    }
    curr= prev->next; // aur curr ko bhi aage krte jao
 }
 return head;

    }
};
```

### Move last element to front

```cpp
if(head==NULL || head->next==NULL){
    return head;
}

Node* pre = NULL;
Node* curr= head;
while(curr->next!=NULL){
    prev=curr;
    curr= curr->next;
}

curr->next=head;
prev->next=NULL;
return curr;
```

### Detect loop

```cpp
Floyd’s Cycle Detection Algorithm

class Solution
{
    public:
    //Function to check if the linked list has a loop.
    bool detectLoop(Node* head)
    {
        // your code here
        if(head==NULL)
        return false;
        
        Node* fast= head;
        Node* slow= head;
           while(fast != NULL && fast->next != NULL){
            fast = fast->next->next;
            slow = slow->next;
            if(fast == slow)
                return true;
        }
        return false;
        
    }
  
};
    Time Complexity: O(N),
```

### Remove loop

```cpp
class Solution
{
    public:
    //Function to remove a loop in the linked list.
  void removeLoop(Node* head)
    {  
       if(head==NULL || head->next== NULL)
        return;
       Node* fast= head;
       Node* slow= head;
       do{
           slow = slow-> next;
           fast=fast->next->next;
           
       }while(slow!=fast);
       fast= head;
       while (slow ->next!=fast->next)
       {
           slow=slow->next;
           fast=fast->next;
       }
       slow ->next = NULL;
    }
};
```

### intersection of y shaped LL

```cpp
Node* intersection(Node* headA , Node* headB){
    if(head A==NULL || head B==NULL){
        return NULL;
    }
    Node* a= head A;
    Node* b= head B;
    while(a!=b){
        a = a==NULL ? head B : a->next; //If a is pointing to NULL, set a to head of B. Else, move to the next node of a.
        b= b== NULL ? head A : b->next; //If b is pointing to NULL, set b to head of A. Else, move to the next node of B.
    }
    return a; 
}

Time Complexity:O(N + M), where N and M is the size of the linked list
```

### **Add two numbers represented as Linked Lists**

```cpp
step 1- Create a dummy node and point its next to head
step 2- Create a node temp, initialise it with dummy.
step-3 Initialize carry to 0. and sum=0
step 4- Loop through lists l1 and l2 until you reach both ends, and until carry is present.
step 5- Set sum=l1.val+ l2.val + carry.
step 6- Update carry=sum/10.
step 7- Create a new node with the digit value of (sum%10) and set it to temp node’s next
step 8- Return dummy’s next node

class Solution {
public:
Node* addtwoNumber(Node* l1, Node* l2){
    Node* dummy = new Node();
 int carry=0;
    Node* temp= dummy;
    while(l1!=NULL || l2!=NULL ||carry){
        int sum=0;
        if(l1!=NULL){
            sum+=l1->val;
            l1=l1->next;
        }
        if(l2!=NULL){
            sum+=l2->val;
            l2=l2->next;
        }
        sum+=carry;
        carry=sum/10;
        Node* node= new node(sum%10);
        temp->next = node;
        temp = temp->next;
    }
    return dummy->next;
}
};
```

### **Reverse Linked List in groups of Size K**

```cpp
class Solution
{
    public:
    struct node *reverse (struct node *head, int k)
    { 
        // Complete this method
        int cnt=0;
        node* nex;
        node* curr= head;
        node* prev=NULL;
        while(curr!=NULL && cnt<k){
            nex=curr->next ;
            curr->next=prev;
            prev=curr;
            curr= nex;
            cnt++;
        }
        
        if(nex!=NULL){
            head->next = reverse(nex,k );
        }
        return prev;
    }
};
```

### Palindrome LL

```cpp
step 1- find middle of linked list 
step-2 reverse LL(RIGHT AFTER MIDDLE)
step 3- move slow by 1
step 4- make dummy node and start moving both simultaneouly and check they are matching and slow reaches null then they are equal hence it is palindrome. 
return true; 

Time Complexity: O(N/2)+O(N/2)+O(N/2)

Reason: O(N/2) for finding the middle element, reversing the list from the middle element, and traversing again to find palindrome respectively.

class solution{
    public:
    bool isPalindrome(Node* head){
        if(head==NULL || head->next==NULL){
            return true;
        }

        //middle of linked list 

        Node* slow= head;
        Node* fast= head;
        while(fast->next!=NULL &&fast->next->next!=NULL){
            slow = slow->next;
            fast= fast->next->next;
        }
        //middle ke bad se reverse krdo 
        slow->next= reverse(slow->next);
        //move slow to next;
slow=slow->next; 

//make dummy node /head and start moving both simultaneouly and check they are matching and slow reaches null then they are equal hence it is palindrome. 
while(slow!=NULL){
    if(head->val!=slow->val){
        return false;
    }
    head= head->next;
    slow=slow->next;
}
return true;
   }

   //reverse function
   Node* reverse(Node* head){
    Node* prev=NULL ;
    Node* curr= head;
    while(curr!=NULL){
        Node* nextptr= curr->next;
        curr->next= prev;
        prev= curr;
        curr=nextptr;
    }
    return prev;
   }
};
```

### **flattening in a Linked List**

```cpp
Time Complexity : O(N), where N is the total number of nodes present

                        Reason : We are visiting all the nodes present in the given list.

                                 // merge two ll
 Node *mergetwoList(Node *a, Node *b)
{
    Node *temp = new Node(0); // new node assign to 0
    Node *res = temp;
    while (a !=NULL && b != NULL)
    {
        if (a->data < b->data)
        {                        // if a chota h
            temp->bottom = a;    // to temp ke neeche a ko dal do
            temp = temp->bottom; // aur temp ko neche krdo
            a = a->bottom;       // a ko aage bdha do
        }

        else
        {
            temp->bottom = b;
            temp = temp->bottom;
            b = b->bottom;
        }
    }
    // element left
    if (a != NULL)
        temp->bottom = a;
    else
        temp->bottom = b;

    return res->bottom;
}
// call recurssion for the rest of linked list
Node *flatten(Node *root)
{
    if (root == NULL || root->next == NULL)
    {
        return root;
    }
    // recyr for list on right
    root->next = flatten(root->next);
    // now merge
    root = mergetwoList(root, root->next);
    it will merge with it left and return root return root;
}
```

### ****Delete without head pointer****

```cpp
class Solution
{
    public:
    //Function to delete a node without any reference to head pointer.
    void deleteNode(Node *del)
    {
       // Your code here
       del->data = del->next->data;
       Node* temp = del->next;
       del->next= del->next->next;
       delete(temp);
    }

};
```

### ****Intersection of two sorted Linked lists****

```cpp
Node* findIntersection(Node* head1, Node* head2)
{
    // Your Code Here
    Node* dummy = new Node(0);
    Node* curr;
    while(head1!=NULL && head2!=NULL){
        if(head1->data<head2->data){
            head1= head1->next;
        }
        else if(head1->data> head2->data){
            head2= head2->next;
        }
        else{
            Node* temp = new Node(head1->data);
            if(dummy->data ==0){
                dummy->data = head1->data;
                curr= dummy;
            }
            else{
                curr->next = temp;
                curr= temp;
            }
            head1= head1->next;
                    head2= head2->next;
        }
    }
    return dummy;
}
```

### ****Remove Nth Node From End of Linked List****

```cpp
class Solution{
public:
    int getNthFromLast(Node *head, int n)
    {
           // Your code here
           Node* dummy = new Node(0);
           Node* slow= dummy;
           Node* fast = dummy ; 
        dummy ->next= head;
        
        for(int i=1;i<=n;i++){
            fast = fast->next;
            if(fast==NULL)return -1;
        }
        while(fast->next!=NULL ){
            fast = fast->next;
            slow= slow->next;
        }
       return slow->next->data;
    }
   
};
```