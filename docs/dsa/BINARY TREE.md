---
sidebar_position: 5
---

# BINARY TREE

FULL BT - either has 0 or 2 children

Complete BT- all level are completely filled except the last level. the last level has all the nodes in the left as possible 

Perfect BT - all leaf node are at the same level

Balanced BT- height of the tree at max log n

Degenerate - every node has a single child

### Binary tree representation

```cpp
Struct Node{

// Defining value of the node.
int data;

// Left reference ptr to the node.
Struct Node* left;

// Right reference ptr to the node.
Struct Node* right;

// Method to initialize the above values.
Node (int val)
{
  data = val;
  left = right = NULL; 
}

};

main()
{
   // Creating a new node by using dynamic allocation.
   Struct Node* root = new Node(1);
   root -> left = new Node(2);
   root -> right = new Node(3);
   root -> left -> right = new Node(5);

}
```

### DFS (DEPTH FIRST SEARCH)

Recursive approach

1. INORDER TRAVERSAL ( LEFT ROOT RIGHT ) 

```cpp
#include <bits/stdc++.h>

using namespace std;

struct Node {
    int data;
    Node *left;
    Node *right;

    Node(int val) {
        data = val;
        left = right = NULL;
    }
}; 

class Solution {
  public:
    // Function to return a list containing the inorder traversal of the tree.
    
    void inorder(Node* root , vector<int>&ans){
        if(root==NULL)
        return ;
        
        inorder(root->left,ans);
        ans.push_back(root->data);
           inorder(root->right,ans);
    }
    
    vector<int> inOrder(Node* root) {
        // Your code here
        vector<int>ans;
        inorder(root, ans);
        return ans;
    }
};

Time Complexity: O(N).
```

Iterative approach

- We first take an explicit stack data structure and set an infinite loop.
- In every iteration we check whether our current node is pointing to NULL or not.
- If it is not pointing to null, we simply push the current value to the stack and move the current node to its left child.
- If it is pointing to NULL, we first check whether the stack is empty or not. If the stack is empty, it means that we have traversed the tree and we break out of the loop.
- If the stack is not empty, we pop the top value of the stack, print it and move the current node to its right child.

```cpp
class solution{
    public:
    vector < int > inOrderTrav(node * root) {
  vector < int > inOrder; //store inorder
  stack < node *> s;//empty stack
  Node* =  root;  // root pr assign krdia
  while (true) {
    if (root != NULL) {// if root is not null
      s.push(root); // we put in stack
      root = root -> left; // move to left
    } else { //if null
      if (s.empty()) break; // no element
      root = s.top(); // if not empty pick top and print
      inOrder.push_back(root -> data);//ans h
      s.pop();
      root = root -> right; // right pr jao
    }
  }
  return inOrder;
}
};
```

1. Preorder  (ROOT LEFT RIGHT)

 

```cpp

void preOrderTrav(node * curr, vector < int > & ans) {
  if (curr == NULL)
    return;

  ans.push_back(curr -> data);
  preOrderTrav(curr -> left, ans);
  preOrderTrav(curr -> right, ans);
}
```

1. Postorder ( Left right root)

```cpp
void postOrderTrav(node * curr, vector < int > & ans) {
  if (curr == NULL)
    return;

  postOrderTrav(curr -> left, ans);
  postOrderTrav(curr -> right, ans);
  ans.push_back(curr -> data);
}
```

### Level order traversal

```cpp
class Solution
{
    public:
    //Function to return the level order traversal of a tree.
    vector<int> levelOrder(Node* node)
    {
      //Your code here
        vector<int>ans; //stores level wise 
        queue<Node*>q; //queue 
        q.push(node);// root vala push krdia queue mein
      if(node==NULL) return ans ;
      
      while(!q.empty()){
          Node* temp = q.front();
          q.pop();
          ans.push_back(temp->data);
          if(temp->left)
          q.push(temp->left);
            if(temp->right)
          q.push(temp->right);
      }
    
    return ans;
    }
};

Time Complexity: O(N)
```

### **Preorder Inorder Postorder Traversals in One Traversal**

```cpp
void allTraversal(node * root, vector < int > & pre, vector < int > & in , vector < int > & post) {
  stack < pair < node * , int >> st;
  st.push({
    root,  1
  });
  if (root == NULL) return;

  while (!st.empty()) {
    auto it = st.top();
    st.pop();

    // this is part of pre
    // increment 1 to 2 
    // push the left side of the tree
    if (it.second == 1) {
      pre.push_back(it.first -> data);
      it.second++;
      st.push(it);

      if (it.first -> left != NULL) {
        st.push({
          it.first -> left,
          1
        });
      }
    }

    // this is a part of in 
    // increment 2 to 3 
    // push right 
    else if (it.second == 2) {
      in .push_back(it.first -> data);
      it.second++;
      st.push(it);

      if (it.first -> right != NULL) {
        st.push({
          it.first -> right,
          1
        });
      }
    }
    // don't push it back again 
    else {
      post.push_back(it.first -> data);
    }
  }
}
```

## height of tree

recursively

```cpp
class Solution {
public:
    int maxDepth(TreeNode* root) {
        if(root == NULL) return 0; 
        
        int lh = maxDepth(root->left); 
        int rh = maxDepth(root->right); 
        
        return 1 + max(lh, rh); 
    }
};
Time Complexity: O(N)
```

### **Morris Inorder Traversal of a Binary tree(threaded vala)**

```cpp
vector < int > inorderTraversal(node * root) {
  vector < int > inorder;

  node * cur = root;
  while (cur != NULL) {
    if (cur -> left == NULL) {
      inorder.push_back(cur -> data);
      cur = cur -> right;
    } else {
      node * prev = cur -> left;
      while (prev -> right != NULL && prev -> right != cur) {
        prev = prev -> right;
      }

      if (prev -> right == NULL) {
        prev -> right = cur;
        cur = cur -> left;
      } else {
        prev -> right = NULL;
        inorder.push_back(cur -> data);
        cur = cur -> right;
      }
    }
  }
  return inorder;
}
Time Complexity: O(N).

Space Complexity: O(1)
```

### **Morris Preorder Traversal of a Binary Tree**

```cpp
vector < int > preorderTraversal(node * root) {
  vector < int > preorder;

  node * cur = root;
  while (cur != NULL) {
    if (cur -> left == NULL) {
      preorder.push_back(cur -> data);
      cur = cur -> right;
    } else {
      node * prev = cur -> left;
      while (prev -> right != NULL && prev -> right != cur) {
        prev = prev -> right;
      }

      if (prev -> right == NULL) {
        prev -> right = cur;
        preorder.push_back(cur -> data);
        cur = cur -> left;
      } else {
        prev -> right = NULL;
        cur = cur -> right;
      }
    }
  }
  return preorder;
}
```

### **Vertical Order Traversal of Binary Tree**

```cpp
class Solution
{
    public:
    //Function to find the vertical order traversal of Binary Tree.
    vector<int> verticalOrder(Node *root)
    {
        //Your code here
          map<int, vector<int>> m; //level aur uske sare element ko store krne ke liye
        queue<pair<Node*, int>> q; // for storing data and adress
        q.push(make_pair(root, 0)); // root ko push krdo
        
        //Level Order Traversal
        while(!q.empty()){
            Node* node = q.front().first;  // node h
            int level = q.front().second; // aur uska level 
            q.pop();
            
            //store in map
            m[level].push_back(node -> data);  // storing the data at the level
            
            // store next level nodes in q
            if(node -> left) q.push(make_pair(node -> left, level - 1)); // left jayega to left vala ofcourse - hoga
            if(node -> right) q.push(make_pair(node -> right, level + 1));
        }
        
        //returning the ans
        vector<int> ans;
        for(auto i:m)
            {
                for(auto j:i.second)
                {
                    ans.push_back(j);
                }
            }
            return ans;
    }
};
```

### Top view of bT

```cpp
vector<int> topView(Node *root)
    {
        vector<int> ans; 
        if(root == NULL) return ans; 
        map<int,int> mpp; 
        queue<pair<Node*, int>> q; 
        q.push({root, 0}); 
        while(!q.empty()) {
            auto it = q.front(); 
            q.pop(); 
            Node* node = it.first; 
            int line = it.second; 
            if(mpp.find(line) == mpp.end()) mpp[line] = node->data; 
            
            if(node->left != NULL) {
                q.push({node->left, line-1}); 
            }
            if(node->right != NULL) {
                q.push({node->right, line + 1}); 
            }
            
        }
        
        for(auto it : mpp) {
            ans.push_back(it.second); 
        }
        return ans; 
    }

};
```

### right view

```cpp
class Solution {
public:
    void recursion(TreeNode *root, int level, vector<int> &res)
    {
        if(root==NULL) return ;
        if(res.size()==level) res.push_back(root->val);
        recursion(root->right, level+1, res);
        recursion(root->left, level+1, res);
    }
    
    vector<int> rightSideView(TreeNode *root) {
        vector<int> res;
        recursion(root, 0, res);
        return res;
    }
};
Time Complexity: O(N)

Space Complexity: O(H)
```

left view

```cpp
class Solution {
public:
    void recursion(TreeNode *root, int level, vector<int> &res)
    {
        if(root==NULL) return ;
        if(res.size()==level) res.push_back(root->val);
        recursion(root->left, level+1, res);
        recursion(root->right, level+1, res);
    }
    
    vector<int> leftSideView(TreeNode *root) {
        vector<int> res;
        recursion(root, 0, res);
        return res;
    }
};
```

### Balanced bt

```cpp
class Solution {

public:
    bool isBalanced(TreeNode* root) {
        return dfsHeight (root) != -1;
    }

    int dfsHeight (TreeNode *root) {

        if (root == NULL) return 0;
        
        int leftHeight = dfsHeight (root -> left);

        if (leftHeight == -1) 
            return -1;
        
        int rightHeight = dfsHeight (root -> right);

        if (rightHeight == -1) 
            return -1;
        
        if (abs(leftHeight - rightHeight) > 1)  
            return -1;

        return max (leftHeight, rightHeight) + 1;
    }
};

Time Complexity: O(N) 

Space Complexity: O(1) Extra Space + O(H) Recursion Stack space (Where “H”  is the height of binary tree)
```