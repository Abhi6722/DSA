---
sidebar_position: 16
---

# matrix/2d array

### search in 2d matrix

gfg problem - row and column wise sorted .

```cpp
int i=0, j=m-1; // first row and last col
while(i<n && j>=0){ // move till it does not exceed boundary
    if(mat[i][j]==x){
        cout<<"element found"<<i<<j;
        return 1;
    }
    if(mat[i][j]>x)
    j--;
    else i++ ;
}
```

```cpp
LEETCODE - integer in each row are sorted from left to right and the first integer of each row is greater than the last integer of the previous row

class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
      if(!matrix.size())return false; //empty matrix
int n= matrix.size();
int m= matrix[0].size();
int lo=0;
int hi = (n*m)-1; // imaginary last index

while(lo<=hi){
    int mid= (lo+(hi-lo)/2);
    if(matrix[mid/m][mid%m]==target){ // imaginary index (row, col)
        return true;
    }
  if(matrix[mid/m][mid%m]<target){
    lo=mid+1;
  }
  else{
    hi= mid-1;
  }
}
return false;
}
};

Time complexity: O(log(m*n))

Space complexity: O(1)
```

### spiral traversal of matrix

```cpp
vector<int> spirallyTraverse(vector<vector<int> > matrix, int r, int c) 
    {
        int left = 0, right = c - 1;
        int top = 0,  bottom = r - 1;
        
        vector <int> ans;
        
        while(top <= bottom && left <= right) {
            
        
        // for right 
        for(int i=left; i<=right; i++) {
            ans.push_back(matrix[top][i]);
        }
        top++;
        
        // for bottom
        for(int i=top; i<=bottom; i++) {
            ans.push_back(matrix[i][right]);
        }
        right--;
        
        // for left
        if(top <= bottom) {
        for(int i=right; i>=left; i--) {
            ans.push_back(matrix[bottom][i]);
        }
        bottom--;
        }
        
        // for top
        if(left <= right) {
        for(int i=bottom; i>=top; i--) {
            ans.push_back(matrix[i][left]);
        }
        left++;
        }
        
       }
       return ans;
    }
};
```

### grid unique path(dp)

```cpp
int countPaths(int i,int j,int n,int m,vector<vector<int>> &dp)
    {
        if(i==(n-1)&&j==(m-1)) return 1;
        if(i>=n||j>=m) return 0;
        if(dp[i][j]!=-1) return dp[i][j];
     else return dp[i][j]=countPaths(i+1,j,n,m,dp)+countPaths(i,j+1,n,m,dp);
        
    }
```