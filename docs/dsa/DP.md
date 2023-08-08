---
sidebar_position: 6
---

# DP

**How to Identify a DP problem?**

- Count the total number of ways
- Given multiple ways of doing a task, which way will give the minimum or the maximum output.

We can try to apply recursion. Once we get the recursive solution, we can go ahead to convert it to a dynamic programming one.

**Steps To Solve The Problem After Identification**

Once the problem has been identified, the following three steps comes handy in solving the problem:

- Try to represent the problem in terms of indexes.
- Try all possible choices/ways at every index according to the problem statement.
- If the question states
    - Count all the ways – return sum of all choices/ways.
    - Find maximum/minimum- return the choice/way with maximum/minimum output.

### 1D

### Climbing stairs -

**Problem Statement:** Given a number of stairs. Starting from the 0th stair we need to climb to the “Nth” stair. At a time we can climb either one or two steps. We need to return the total number of distinct ways to reach from 0th to Nth stair.

1. RECURSSION- TOP - DOWN APPROACH 

```cpp
int solve(int ind){
    //base case
    if(ind==0){
        return 1 ; //ek hi stair h
    }
   
    
    return solve(ind-1)+ solve(ind-2);
}
int countways(int n){
    return solve(ind);
}
```

1. MEMOIZATION- top-down
```
STEPS- 

1. if(dp[n]!= -1) return dp[n];// if previously computed
2. return the value from the dp array. // return dp[n]= f(n-1,dp) + f(n-2,dp);
3. vector<int> dp(n+1,-1); (declare the size of n+1 basically n is the changing parameter);
```

```cpp
int solve(int ind, vector<int>&dp){
    //base case
    if(ind==0){
        return 1 ; //ek hi stair h
    }
   if(dp[n]!= -1) return dp[n];
    
    return dp[n]= solve(ind-1,dp)+ solve(ind-2,dp);
}
int countways(int n){
    vector<int> dp(n,-1);
    return solve(n,dp);
}
```

1. Tabulation- Bottom up

```cpp
int main() {

  int n=3;
  vector<int> dp(n+1,-1);
  
  dp[0]= 1;
  dp[1]= 1;
  
  for(int i=2; i<=n; i++){
      dp[i] = dp[i-1]+ dp[i-2];
  }
  cout<<dp[n];
  return 0;
}
O(N)
```

### **Frog Jump - jump by 1 or 2 step . find min energy**

1. recurssion

```cpp
int f(int ind, vector<int> &heights)
{
    if (ind == 0)
        return 0;

    int left = f(ind - 1, heights) + abs(heights[ind] - heights[ind - 1]);
    int right = INT_MAX; // NOT GOING TO HAPPEN ALWAYS

    if (ind > 1)
        right = f(ind - 2, heights) + abs(heights[ind] - heights[ind - 2]);

    return min(left, right);
}
int frogJump(int n vector<int> &height)
{
    return f(n - 1, heights); // n-1 = last index
}
```

1. Memoization

```cpp
int solve(int ind, vector<int>& height, vector<int>& dp){
    if(ind==0) return 0;
    if(dp[ind]!=-1) return dp[ind];
    int jumpTwo = INT_MAX;
    int jumpOne= solve(ind-1, height,dp)+ abs(height[ind]-height[ind-1]);
    if(ind>1)
        jumpTwo = solve(ind-2, height,dp)+ abs(height[ind]-height[ind-2]);
    
    return dp[ind]=min(jumpOne, jumpTwo);
}

int main() {

  vector<int> height{30,10,60 , 10 , 60 , 50};
  int n=height.size();
  vector<int> dp(n,-1);
  cout<<solve(n-1,height,dp);
}
```

1. T**abulation approach**
- Declare a dp[] array of size n.
- First, initialize the base condition values, i.e dp[0] as 0.
- Set an iterative loop that traverses the array( from index 1 to n-1) and for every index calculate jumpOne and jumpTwo and set dp[i] = min(jumpOne, jumpTwo).

```
1. initialize dp[n]->0 
2. base case likho
3. run for loop 
4. look in recusrrsion by replacing the function with dp
5. store dp[ind]
```

```cpp
int frogJump(int n vector<int> &height)
{
    // step 1
    vector<int> dp(n, 0); // dp vector  and initialized it with 1

    // step 2
    // base case
    dp[0] = 0;
    // step 3
    for (int i = 1; i < n; i++)
    {
        int left = dp[i - 1] + abs(heights[i] - heights[i - 1]);
        int right = INT_MAX;
        if (ind > 1)
            right = dp[i - 2] + abs(heights[i] - heights[i - 2]);
        // step 4
        dp[i] = min(left, right);
    }
    return dp[n - 1;]
}

tc/sc- o(n)
```

### ****Maximum Sum of Non-Adjacent Elements | House Robber |→ return max sum of subsequnce none of the element must be adjancent****

1. recusrrsion

```cpp
int f(int ind, vector<int> &arr)
{

    if (ind == 0)
        return arr[ind];
    if (ind < 0)
        return 0;

    int pick = arr[ind] + f(ind - 2, arr);
    int nonPick = 0 + f(ind - 1, arr);

    return max(pick, nonPick);
}

int maximumsum(vector<int> &nums)
{
    int n = arr.size();

    return f(n - 1, arr);
}

```

```cpp
MEMOIZATION- 

int f(int ind, vector<int> &arr, vector<int> &dp)
{

    if (dp[ind] != -1)
        return dp[ind];

    if (ind == 0)
        return arr[ind];
    if (ind < 0)
        return 0;

    int pick = arr[ind] + f(ind - 2, arr, dp);
    int nonPick = 0 + f(ind - 1, arr, dp);

    return dp[ind] = max(pick, nonPick);
}

int maximumsum(vector<int> &nums)
{
    int n = arr.size();
    vector<int> dp(n, -1);
return f(n-1, arr,dp);
   
}

```

### Tabulation

```cpp
int f(int n, vector<int>& arr, vector<int>& dp){
    vector<int> dp(n,-1);
    dp[0]= arr[0];
    
    for(int i=1 ;i<n; i++){
        int pick = arr[i];
        if(i>1)
            pick += dp[i-2];
        int nonPick = 0+ dp[i-1];
        
        dp[i]= max(pick, nonPick);
    }
    
    
    return dp[n-1];
}
```

### 2d

### ****Ninja's Training-  the same activity can’t be performed on two consecutive days. We need to find the maximum merit points the ninja can attain in N Days.****

f(ind, last day) -  task performed on last day   

1. Recurssion

```cpp
int f(int day , int last, vector<vector<int>>&points){
    if(day==0){ // last day
        int maxi=0;
        //go across all task (there are 3 task)
        for(int task=0;task<3; task++){
            //this task is not done at last
            if(task!=last){
                maxi=max(maxi, poitns[0][task]);// day=0
            }
        }
        return maxi;
    }
    //if that's not case 
    int maxi=0;
    for(int task=0;task<3;task++){
        if(task!=last){
            int point =points [day][task]+ f(day-1, task , points); 
            maxi=max(maxi,points);
        }
    }
    return maxi;
}
int ninja(int n , vector<vector<int>>&points){
    return f(n-1,3,points);
}
```

 

memoization

```cpp
int f(int day , int last, vector<vector<int>>&points, vector<vector<int>>&dp){
      if (dp[day][last] != -1) return dp[day][last];
    if(day==0){ // last day
        int maxi=0;
        //go across all task (there are 3 task)
        for(int task=0;task<3; task++){
            //this task is not done at last
            if(task!=last){
                maxi=max(maxi, poitns[0][task]);// day=0
            }
        }
        return dp[day][last] = maxi;
    }
    //if that's not case 
    int maxi=0;
    for(int task=0;task<3;task++){
        if(task!=last){
            int point =points [day][task]+ f(day-1, task , points,dp); 
            maxi=max(maxi,points);
        }
    }
    return  dp[day][last] = maxi;
}
int ninja(int n , vector<vector<int>>&points){
    vector<vector<int>>dp(n, vector<int>(4,-1));//n+1  size 
    return f(n-1,3,points);
}
```

# **Grid Unique Paths : DP on Grids**

We need to find the total unique paths from the top-left cell (matrix[0][0]) to the rightmost cell (matrix[M-1][N-1]).

At any cell we are allowed to move in only two directions:- bottom and right.

recurssion

```cpp
int f(int i, int j){
    if(i==0 && j==0)return 1; //reached its destination
    if(i<0 && j<0 ) return 0; // out of boundary
    int up= f(i-1, j);
    int left= f(i,j-1);
    return up+left;
}
int uniquepath(int m , int n){
    return f(m-1,n-1);
}
```

memoization- 

1. Create a dp array of size [m][n] - kunki m-1 aur n-1 tk jana h to ek jyda declare krte h

```cpp
int f(int i, int j, vector<vector<int>> &dp){
    if(i==0 && j==0)return 1; //reached its destination
    if(i<0 && j<0 ) return 0; // out of boundary
    if(dp[i][j]!=-1) return dp[i][j];
    int up= f(i-1, j, dp);
    int left= f(i,j-1, dp);
    return dp[i][j]= up+left;
}
int uniquepath(int m , int n){
    vector<vector<int>> dp(m, vector<int>(n,-1)); // 2d vector 
    return f(m-1,n-1, dp);
}

Time Complexity: O(M*N)

Reason: At max, there will be M*N calls of recursion.

Space Complexity: O((N-1)+(M-1)) + O(M*N)

Reason: We are using a recursion stack space:O((N-1)+(M-1)), here (N-1)+(M-1) is the path length and an external DP Array of size ‘M*N’.
```

tabulation

```cpp
int unique(int m, int n) {
    int dp[m][n];
  for(int i=0; i<m ;i++){
      for(int j=0; j<n; j++){
          
          //base condition
          if(i==0 && j==0){
              dp[i][j]=1;
              continue;
          }
          
          int up=0;
          int left = 0;
          
          if(i>0) 
            up = dp[i-1][j];
          if(j>0)
            left = dp[i][j-1];
            
          dp[i][j] = up+left;
      }
  }
  
  return dp[m-1][n-1];

  
}

Time Complexity: O(M*N)

Reason: There are two nested loops

Space Complexity: O(M*N)

Reason: We are using an external array of size ‘M*N’’.
```

### **Minimum Path Sum In a Grid**

We need to find a path from the top-left corner to the bottom-right corner of the matrix, such that there is a minimum cost past that we select.

At every cell, we can move in only two directions: right and bottom. The cost of a path is given as the sum of values of cells of the given matrix.

recurssion

```cpp
inf f(int i, int j, vector<vector<int>> &grid)
{
    if (i == 0 && j == 0)
        return arr[0][0];

    if (i < 0 && j < 0)
        return INT_MAX; // out of boundary

    int up = grid[i][j] + f(i - 1, j, grid);
    int left = grid[i][j] + f(i, j - 1, grid);

    return min(up, left);
}

int minsum(vector<vector<int>> &grid)
{
    int n = grid.size();

    int m = grid[0].size();
    return f(n - 1, m - 1, grid);
}
```

memoization

```cpp
inf f(int i, int j, vector<vector<int>>&grid, vector<vector<int>> &dp){
    if(i==0 && j==0) return arr[0][0];

    if(i<0 && j<0 ) return INT_MAX; // out of boundary
    if(dp[i][j]!=-1) return dp[i][j];

    int up = grid[i][j] + f( i-1, j , grid, dp);
    int left = grid[i][j] + f(i, j-1, grid,dp);

    return dp[i][j] = min(up, left);
}

int minsum(vector<vector<int>>&grid){
    int n= grid.size();
    vector<vector<int>> dp (n, (m,-1));
    int m =grid[0].size();
    return f(n-1, m-1, grid);
}

Time Complexity: O(N*M)

Reason: At max, there will be N*M calls of recursion.

Space Complexity: O((M-1)+(N-1)) + O(N*M)

Reason: We are using a recursion stack space:O((M-1)+(N-1)), here (M-1)+(N-1) is the path length and an external DP Array of size ‘N*M’.
```

tabulation

```cpp
int minSumPath(int n, int m, vector<vector<int> > &grid){
    int n = grid.size();
    int m = grid[0].size();
    vector<vector<int> > dp(n,vector<int>(m,0));
    for(int i=0; i<n ; i++){
        for(int j=0; j<m; j++){
            if(i==0 && j==0) dp[i][j] = grid[i][j];
            else{
                
                int up = matrix[i][j];
                if(i>0) up += dp[i-1][j];
                else up += 1e9; // neglect
                
                int left = matrix[i][j];
                if(j>0) left+=dp[i][j-1];
                else left += 1e9;
                
                dp[i][j] = min(up,left);
            }
        }
    }
    
    return dp[n-1][m-1];
    
}

Time Complexity: O(N*M)

Reason: There are two nested loops

Space Complexity: O(N*M)

Reason: We are using an external array of size ‘N*M’’.
```

### **Minimum path sum in Triangular Grid-  Fixed Starting and  variable Ending Point**

We need to find the minimum path sum from the first row to the last row.

At every cell we can move in only two directions: either to the bottom cell (↓) or to the bottom-right cell

recurssion

```cpp
int f(int i, int j, vector<vector<int>>&triangle, int n){
    if(i==n-1) return triangle[n-1][j]; // reach any col 
    d= triangle[i][j]+f(i+1, j, triangle , n);
    dg  = triangle[i][j]+f(i, j+1, triangle , n);
    return min(d, dg);
 }

 int minimumpath(vector<vector<int>>&triangle){
    return f(0, 0 , triangle , n);
 }
```

memoization

```cpp
int minimumPath(int i, int j, vector<vector<int> > &triangle,int n, 
vector<vector<int> > &dp) {
  
  if(dp[i][j]!=-1)
  return dp[i][j];
  
  if(i==n-1) return triangle[i][j];
    
  int down = triangle[i][j]+minimumPath(i+1,j,triangle,n,dp);
  int diagonal = triangle[i][j]+minimumPath(i+1,j+1,triangle,n,dp);
  
  return dp[i][j] = min(down, diagonal);
  
}

int minimumPathSum(vector<vector<int> > &triangle, int n){
    vector<vector<int> > dp(n,vector<int>(n,-1));
    return minimumPath(0,0,triangle,n,dp);
    
}
```

### **Minimum path sum in Triangular Grid-  variable Starting and  fixed ending Point**

recurssion- down to top

```cpp
int f(int i, int j, int m, vector<vector<int>> &matrix){
    
    // Base Conditions
    if(j<0 || j>=m)
        return -1e9; //out of boundary
    if(i==0)
        return matrix[0][j];
    

    
    int up = matrix[i][j] + f(i-1,j,m,matrix);
    int leftDiagonal = matrix[i][j] + f(i-1,j-1,m,matrix);
    int rightDiagonal = matrix[i][j] + f(i-1,j+1,m,matrix);
    
    return max(up,max(leftDiagonal,rightDiagonal));
    
}

int getMaxPathSum(vector<vector<int> > &matrix){
    
    int n = matrix.size();
    int m = matrix[0].size();
    
    
    
    int maxi = INT_MIN;
    
    //call all the column from the last row
    for(int j=0; j<m;j++){
        int ans = f(n-1,j,m,matrix);
        maxi = max(maxi,ans);
    }
    
    return maxi;
}
```

memoization

```cpp
int f(int i, int j, int m, vector<vector<int>> &matrix, 
vector<vector<int> > &dp){
    
    // Base Conditions
    if(j<0 || j>=m)
        return -1e9; //out of boundary
    if(i==0)
        return matrix[0][j];
    
    if(dp[i][j]!=-1) return dp[i][j];
    
    int up = matrix[i][j] + f(i-1,j,m,matrix,dp);
    int leftDiagonal = matrix[i][j] + f(i-1,j-1,m,matrix,dp);
    int rightDiagonal = matrix[i][j] + f(i-1,j+1,m,matrix,dp);
    
    return dp[i][j]= max(up,max(leftDiagonal,rightDiagonal));
    
}

int getMaxPathSum(vector<vector<int> > &matrix){
    
    int n = matrix.size();
    int m = matrix[0].size();
    
    vector<vector<int>> dp(n,vector<int>(m,-1)); //dp vector
    
    int maxi = INT_MIN;
    
    //call all the column from the last row
    for(int j=0; j<m;j++){
        int ans = f(n-1,j,m,matrix,dp);
        maxi = max(maxi,ans);
    }
    
    return maxi;
}

Time Complexity: O(N*N)

Reason: At max, there will be M*N calls of recursion to solve a new problem,

Space Complexity: O(N) + O(N*M)

Reason: We are using a recursion stack space: O(N), where N is the path length and an external DP Array of size ‘N*M’.
```

### DP ON SUBSEQUENCE  - any contiguous (follow order)

### ****Subset Sum Equals to Target**** →

generate all subsequence and check if any of them gives sum K

 

recurssion

```cpp
int f(int ind, int target, vector<int>&arr){
    if(target==0) return true;
    if(ind==0) return (arr[0]==target); 

    bool nottake = f(ind-1, target, arr);
    bool take= false;
    if(arr[ind]<=target){
        take= f(ind-1, target-arr[ind], arr);

    }
    return take | nottake ;
}

bool subsetsum(int n , int k, vector<int>&arr){
    return f(n-1, k , arr);
}

TC- O(2^n) , sc - O(n)
```

memoization

```cpp
TC- O(Nx target) , Sc - O(NX Target )+ O(n)

int f(int ind, int target, vector<int>&arr,  vector<vector<int>>&dp){
    if(target==0) return true;
    if(ind==0) return (arr[0]==target); 
if(dp[ind][target]!=-1) return dp[ind][target];
    bool nottake = f(ind-1, target, arr, dp);
    bool take= false;
    if(arr[ind]<=target){
        take= f(ind-1, target-arr[ind], arr, dp);

    }
    return dp[ind][targte] = take | nottake ;
}

bool subsetsum(int n , int k, vector<int>&arr){
    vector<vector<int>>dp (n, vector<int>(k+1, -1));
    return f(n-1, k , arr, dp);
}
```

### Count subset with sum k

We are given an array ‘ARR’ with N positive integers and an integer K. We need to find the number of subsets whose sum is equal to K.

recurssion

```cpp
inf f(int ind, int target, vector<int> &arr)
{
    if (target == 0)
        return 1;
    if (ind == 0)
        return (arr[0] == target);

    int notpick = f(ind - 1, target, arr);
    int pick = 0;
    if (arr[ind] <= target)
    {
        pick = f(ind - 1, target - arr[i], arr);
    }
    return pick + notpick;
}
int findways(vector<int> &arr, int target)
{

    int n = arr.size();

    return f(n - 1, target, arr);
}
```

memoization

```cpp
inf f( int ind , int target, vector<int>&arr,  vector<vector<int>>&dp){
    if(target==0) return 1;
    if(ind==0) return (arr[0]==target);
if(dp[ind][taregt]!=-1) return dp[ind][target];
    int notpick= f(ind-1, target, arr, dp);
    int pick=0;
    if(arr[ind]<=target){
        pick= f(ind-1, target-arr[i], arr, dp);
    }
    return dp[ind][target]= pick + notpick;
}
int findways(vector<int>& arr, int target){

    int n = arr.size();
    vector<vector<int>>dp(n , vector<int>(target+1,-1));
    return f(n-1, target, arr, dp);
}
```

### 0/1 knapsack

items has wt and val and a bag wt is given theif can steal only item till it does not exceed that bag weight. steal in such a way that value must be maximize

 

recurssion

```cpp
TC - 2^n
sC - o(N)

int f(int ind, int bagwt, vector<int>&wt, vector<int>&val){
    if(ind==0){
        if(wt[0]<= bagwt) return val[0];// agr ek hi value h aur bag wt se choti h to pick to krega hi 
        else return 0;

    }
    int nottake= 0+ f(ind-1, bagwt, val);
    int take=INT_MIN;// km hoga tbhi to pick krega
    if(wt[ind]<=bagwt){
        take= val[ind]+ f(ind-1, bagwt-wt[ind], val);
    }
    return max(nottake, take);
}
int knapsack(vector<int>weight , vector<int>value , int n , int maxweight){
    return f(n-1,maxweight , weight , value );
}
```

tabulation

```cpp
int knapsack(vector<int>wt , vector<int>val , int n , int maxweight){
    vector<vector<int>>dp(n,vector<int>(maxweight+1, 0));
    for(int W =wt[0]; W<=maxweight ; W++ ){
        dp[0][W]= val[0]; //base case
    }

    for(int ind=1;ind<n;i++){
        for(int W=0; W<=maxweight ; W++){
            int nottake= dp[ind-1] [W];
    int take=INT_MIN;// km hoga tbhi to pick krega
    if(wt[ind]<=W){
        take= val[ind] + dp[ind-1][W-wt[ind]];
    }
    return dp[ind][W]= max(nottake, take);
        }
    }
    return dp[n-1][maxweight];
}
Time Complexity: O(N*W)

Reason: There are two nested loops

Space Complexity: O(N*W)

Reason: We are using an external array of size ‘N*W’. Stack Space is eliminated.
```

### Minimum coins

min coins to form target 

recurssion

```cpp
int f(vector<int> &arr, int ind, int T)
{

    if (ind == 0)
    {
        if (T % arr[0] == 0)
            return T / arr[0];
        else
            return 1e9;
    }

    int notTaken = 0 + f(arr, ind - 1, T);

    int taken = 1e9; // max
    if (arr[ind] <= T)
        taken = 1 + f(arr, ind, T - arr[ind]);

    return min(notTaken, taken);
}

int minimumElements(vector<int> &arr, int T)
{

    int n = arr.size();

    int ans = f(arr, n - 1, T);
    if (ans >= 1e9)
        return -1;
    return ans;
}
```

### **Unbounded Knapsack-. INFINITE SUPPLY**

He can take a single item any number of times he wants and put it in his knapsack.

recurssion

```cpp
int f(vector<int>& wt, vector<int>& val, int ind, int W,)
{
//W is the bag weight 
    if(ind == 0){
        return ((int)(W/wt[0])) * val[0]; //no of time it can steel * val at index 0 
    }
    

    int notTaken = 0 + f(wt,val,ind-1,W);
    
    int taken = INT_MIN;
    if(wt[ind] <= W)
        taken = val[ind] + f(wt,val,ind,W-wt[ind]);
        
    return  max(notTaken,taken);
}

int unboundedKnapsack(int n, int W, vector<int>& val,vector<int>& wt) {
    
  
    return f(wt, val, n-1, W);
}

TC - exponential 
Sc - O(W)
```

tabulation

```cpp
int unboundedKnapsack(int n, int W, vector<int>& val,vector<int>& wt) {
    
    vector<vector<int>> dp(n,vector<int>(W+1,0));
    
    //Base Condition
    
    for(int i=wt[0]; i<=W; i++){
        dp[0][i] = ((int) i/wt[0]) * val[0];
    }
    
    for(int ind =1; ind<n; ind++){
        for(int cap=0; cap<=W; cap++){
            
            int notTaken = 0 + dp[ind-1][cap];
            
            int taken = INT_MIN;
            if(wt[ind] <= cap)
                taken = val[ind] + dp[ind][cap - wt[ind]];
                
            dp[ind][cap] = max(notTaken, taken);
        }
    }
    
    return dp[n-1][W];
}
```

### Rod cutting problem

memoization

```cpp
int f(vector<int>& price, int ind, int N, vector<vector<int>>& dp){

    if(ind == 0){
        return N*price[0];
    }
    
    if(dp[ind][N]!=-1)
        return dp[ind][N];
        
    int notTaken = 0 + f(price,ind-1,N,dp);
    
    int taken = INT_MIN;
    int rodLength = ind+1;
    if(rodLength <= N)
        taken = price[ind] + f(price,ind,N-rodLength,dp);
        
    return dp[ind][N] = max(notTaken,taken);
}

int cutRod(vector<int>& price,int N) {

    vector<vector<int>> dp(N,vector<int>(N+1,-1));
    return f(price,N-1,N,dp);
}

Time Complexity: O(N*N)

Reason: There are N*(N+1) states therefore at max ‘N*(N+1)’ new problems will be solved.

Space Complexity: O(N*N) + O(N)

Reason: We are using a recursion stack space(O(N)) and a 2D array ( O(N*(N+1)).
```

### DP ON STRINGS

### Longest common subsequence - maintain order- THIS PRINT LENGTH

generate all subsequence and compare 

```cpp
int f(int i, int j , string &s1 , string &s2){
    if(i<0 || j<0 ) return 0 ; //negative

    if(s1[i]==s2[j]) 
    return 1+ f(i-1, j-1, s1, s2); // match , both i and j will move one back

    return max(f(i-1, j, s1, s2) /*not match ek hi pointer jayega peeche,*/ f(i-1,j-1,s1,s2));
}

int lcs(string s1, string s2){
    int  n = s1.size();
    int m= s2.size();

    return f(n-1, m-1, s1, s2);
}
```

memoization

```cpp
int f(int i, int j, string &s1, string &s2, vector<vector<int>> &dp)
{
    if (i < 0 || j < 0)
        return 0; // negative
    if (dp[i][j] != -1)
        return dp[i][j];
    if (s1[i] == s2[j])
        return dp[i][j] = 1 + f(i - 1, j - 1, s1, s2, dp); // match , both i and j will move one back

    return dp[i][j] = max(f(i - 1, j, s1, s2, dp) /*not match ek hi pointer jayega peeche,*/ f(i - 1, j - 1, s1, s2, dp));
}

int lcs(string s1, string s2)
{
    int n = s1.size();
    int m = s2.size();
    vector<vector<int>> dp(n, vector<int>(m, -1));
    return f(n - 1, m - 1, s1, s2, dp);
}

Tc - O(NXM)
SC-  O(NXM) + O(N+M) - AUXILARY STACK SPACE
```

### ****Longest Repeating Subsequence****

Given string str, find the length of the longest repeating subsequence such that it can be found twice in the given string.

```cpp
class Solution {
	public:
		    int recur(int i,int j,string &str,int &n, vector<vector<int>> &dp){
	        if(i==n || j==n || i>j) return 0;
	        
	        if(dp[i][j] !=-1) return dp[i][j];
	        int Not_take=0,Take=0;
	        
	        Not_take = recur(i,j+1,str,n,dp);
	        
	        if(str[i]!=str[j] || i==j)
    	        Take = recur(i+1,j,str,n,dp);
    	        
	        else if(str[i] == str[j])
	            Take = 1+recur(i+1,j+1,str,n,dp);

	        
	        return dp[i][j] = max(Not_take,Take);
	    }
		int LongestRepeatingSubsequence(string str){
		    // Code here
		    int n = str.size();
		    vector<vector<int>> dp(n,vector<int>(n,-1));
		    
		    return recur(0,0,str,n,dp);
		}

};
```

### DP ON STOCKS

### **Stock Buy and Sell |**

1. We can [buy and sell a stock](https://takeuforward.org/data-structure/stock-buy-and-sell/) only once.
2. We can buy and sell the stock on any day but to sell the stock, we need to first buy it on the same or any previous day.

 keep track of minimal on the left 

```cpp
int maximumprofit(vector<int>&prices){
    int mini= prices[0]; // phla element ko mini man lia
    int maxpro=0;
    int n= prices.size();
    for(int i=1;i<n;i++){
        int cost = prices[i]- mini; //buying - selling 
        int maxpro= max(maxpro, cost);
        mini= min(mini, maxpro);
    }
    return maxpro;
}

TC - O(n)
```

### **Buy and Sell Stock – II**

1. We can buy and sell the stock any number of times.
2. In order to sell the stock, we need to first buy it on the same or any previous day.
3. We can’t buy a stock again after buying it once. In other words, we first buy a stock and then sell it. After selling we can buy and sell again. But we can’t sell before buying and can’t buy before selling any previously bought stock.

 recurssion

```cpp
TC- 2^n
SC - O(n)

int f(int ind, int buy, int n, int *value){
    if(ind==n) return 0;
int profit =0;
    if(buy){
profit = max(-values[ind]/*- bcoz we are buying */  + f(ind+1, 0) /* buy so next day we cannot buy we will sell(take) */, 0 +f(ind+1,1)/* not intrested in buy and next day we can buy (not take)*/);
    }
    else{
        profit = max(values[ind] +f(ind+1, 1),/* sell krdia to next day i can buy */ 0+ f(ind+1, 0)/* still holding a stock dont buy next*/);
    }
    return profit;
}

int getmax( int* value, int n){
    return f(0,1,values, n);
}
```

memoization

```cpp
TC- O(Nx2)
SC - O(nx2)+ auxilary stack space

int f(int ind, int buy, int n, int *value, vector<vector<int>>&dp){
    if(ind==n) return 0;

    if(dp[ind][buy]!=-1) return dp[ind][buy];
int profit =0;
    if(buy){
profit = max(-values[ind]/*- bcoz we are buying */  + f(ind+1, 0, , n , values, dp) /* buy so next day we cannot buy we will sell(take) */, 0 +f(ind+1,1, n , values, dp)/* not intrested in buy and next day we can buy (not take)*/);
    }
    else{
        profit = max(values[ind] +f(ind+1, 1, n , values, dp),/* sell krdia to next day i can buy */ 0+ f(ind+1, 0, n , values, dp)/* still holding a stock dont buy next*/);
    }
    return dp[ind][buy]=  profit;
}

int getmax( int* value, int n){
    vector<vector<int>>dp(n, vector<int>(2,-1));//2 bcoz ya to buy kr re ya sell
    return f(0,1,values, n, dp);
}
```

### **Buy and Sell Stock – III**

1. We can buy and sell the stock any number of times.
2. In order to sell the stock, we need to first buy it on the same or any previous day.
3. We can’t buy a stock again after buying it once. In other words, we first buy a stock and then sell it. After selling we can buy and sell again. But we can’t sell before buying and can’t buy before selling any previously bought stock.
4. We can do at most 2 transactions.

```cpp
int f(vector<int>& Arr, int n, int ind, int buy, int cap, vector<vector<vector<int>>>& dp ){

    if(ind==n || cap==0) return 0; //base case
    
    if(dp[ind][buy][cap]!=-1)
        return dp[ind][buy][cap];
        
    int profit;
    
    if(buy==0){// We can buy the stock
        profit = max(0+f(Arr,n,ind+1,0,cap,dp)// not buy, 
                    -Arr[ind] + f(Arr,n,ind+1,1,cap,dp)//buy);
    }
    
    if(buy==1){// We can sell the stock
        profit = max(0+f(Arr,n,ind+1,1,cap,dp)//not sell,
                    Arr[ind] + f(Arr,n,ind+1,0,cap-1,dp)//sell);
    }
    
    return dp[ind][buy][cap] = profit;
}

int maxProfit(vector<int>& prices, int n)
{
    // Creating a 3d - dp of size [n][2][3]
    vector<vector<vector<int>>> dp(n,
                                    vector<vector<int>> 
                                            (2,vector<int>(3,-1)));
    
    return f(prices,n,0,0,2,dp);//cap=2
   
}
```

### ****Buy and Sell Stocks With Cooldown****

1. We can’t buy a stock again after buying it once. In other words, we first buy a stock and then sell it. After selling we can buy and sell again. But we can’t sell before buying and can’t buy before selling any previously bought stock.
2. We can’t buy a stock on the very next day of selling it. This is the **cooldown** clause.

```cpp
int f(vector<int> Arr, int ind, int buy, int n, vector<vector<int>> &dp ){

    if(ind>=n) return 0; //base case //outof boundary
    
    if(dp[ind][buy]!=-1)
        return dp[ind][buy];
        
    int profit;
    
    if(buy==0){// We can buy the stock
        profit = max(0+f(Arr,ind+1,0,n,dp), -Arr[ind]+f(Arr,ind+1,1,n,dp));
    }
    
    if(buy==1){// We can sell the stock
        profit = max(0+f(Arr,ind+1,1,n,dp), Arr[ind]+f(Arr,ind+2,0,n,dp)); //2md index pr jayega
    }
    
    return dp[ind][buy] = profit;
}

int stockProfit(vector<int> &Arr)
{
    int n = Arr.size();
    vector<vector<int>> dp(n,vector<int>(2,-1));
    
    int ans = f(Arr,0,0,n,dp);
    return ans;
}
```