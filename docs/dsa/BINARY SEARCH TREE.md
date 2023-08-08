---
sidebar_position: 4
---

# BINARY SEARCH TREE

left guy will be lesser than root and right guy will be greeater than root .

all nodes in the lest are also smaleer than right 

duplicates are not allowed 

### Search in a binary tree

```cpp
class Solution {
public:
    TreeNode* searchBST(TreeNode* root, int val) {
         while(root != NULL && root->val != val){ // jb tk val ni milti
            root = val<root->val? root->left:root->right; //val ka chota h left ni to right
        }
        return root;
    }
};
TC- height of tree(log2 n)
```

### Ceil in a bst ( key =8 search val≥ key ) 8 se bada dhoodho agr 8 ni h

```cpp
int findCeil(BinaryTreeNode<int> *root, int key){

	int ceil = -1; 
    while (root) {

        if (root->data == key) {
            ceil = root->data;
            return ceil;
        }
 
        if (key > root->data) {
            root = root->right;
        }
        else {
            ceil = root->data; 
            root = root->left;
        }
    }
    return ceil; 
}

TC- height of tree(log2 n)
```

### Floor in BST - ( key =7 search val≤ key ) 7 se chota dhoodho agr 7 ni h

```cpp
int floorInBST(TreeNode<int> * root, int key)
{
    int floor = -1; 
    while (root) {
 
        if (root->val == key) {
            floor = root->val;
            return floor;
        }
 
        if (key > root->val) {
            floor = root->val;
            root = root->right;
        }
        else {
            root = root->left;
        }
    }
    return floor;
}
```

### Insert a given node in BST

```cpp
class Solution {
public:
    TreeNode* insertIntoBST(TreeNode* root, int val) {
        if(root == NULL) return new TreeNode(val);
        TreeNode *cur = root;
        while(true) {
            if(cur->val <= val) {
                if(cur->right != NULL) cur = cur->right;
                else {
                    cur->right = new TreeNode(val);
                    break;
                }
            } else {
                if(cur->left != NULL) cur = cur->left;
                else {
                    cur->left = new TreeNode(val);
                    break;
                }
            }
        }
        return root;
    }
};
```

### Delete a node in BST

first search then delete 

```cpp
// Function to delete a node from BST.
Node *helper(Node *root) {

    if(root->left == NULL)

        return root->right;

    else if(root->right == NULL)

        return root->left;

    Node *leftChild = root->left;

    Node *lastLeftChild = root->right;

    while(lastLeftChild->left != NULL)

        lastLeftChild = lastLeftChild->left;

    lastLeftChild->left = leftChild;

    return root->right;

}

 

Node *deleteNode(Node *root, int X) {

    if(!root)

        return NULL;

    if(root->data == X)

        return helper(root);

    Node *curr = root;

    while(root) {

        if(X < root->data) {

            if(root->left != NULL and root->left->data == X) {

                root->left = helper(root->left);

                break;

            }

            else

                root = root->left;

        }

        else {

            if(root->right != NULL and root->right->data == X) {

                root->right = helper(root->left);

                break;

            }

            else

                root = root->right;

        }

    }

    return curr;

}
```