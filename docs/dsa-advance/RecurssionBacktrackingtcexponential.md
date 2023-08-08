---
sidebar_position: 11
---

# Recurssion/Backtracking - tc - exponential

### Power of (x,n) - x raised to power n

```cpp
#include <bits/stdc++.h>
using namespace std;
 
int power(int x, int n)
{
    // If x^0 return 1
    if (n == 0)
        return 1;
    // If we need to find of 0^y
    if (x == 0)
        return 0;
    // For all other cases
    return x * power(x, n - 1);
}
 
// Driver Code
int main()
{
    int x = 2;
    int n = 3;
 
    // Function call
    cout << (power(x, n));
}

```

### Combination sum-1

print the subsequence which give sum=7 (pick and not pick) 

i/p - [2,3,6,7] , target =7

o/p - [2,2,3] ,[7] 

```cpp
class solution{
    public: 
void combinationsum( int ind, int target , vector<int>&arr , vector<vector<int>>&ans, vector<int>&ds){
    if(ind==arr.size()){
        if(target==0){
            ans.push_back(ds);
        }
        return ;
    }
    //pick
    if(arr[ind]<=target){
        ds.push_back(arr[ind]);
    combinationsum(ind, target-arr[ind], arr, ans , ds);
    ds.pop_back();
    }
    //not pick
    combinationsum(ind+1 , target , arr, ans , ds);
}

public: 
vector<vector<int>>combination( vector<int>&candidate, int target ){
    vector<vector<int>>ans;
    vector<int> ds;
    combinationsum(0 , target, arr, ans, ds);
}
};

TC- 2^t * k
```

### combination sum-2 (each number should be used once)

```cpp
class solution{
    public:
    void findcombination(int ind , int target , vector<int>&arr , vector<vector<int>>&ans, vector<int>&ds){

        if(target==0){
            ans.push_back(ds);
            return; 
        }

        for(int i=ind;i<arr.size();i++){
            if(i>ind && arr[i]==arr[i-1])continue;
            if(arr[i]>target)break;
            ds.push_back(arr[i]);
            findcombination(i+1, target-arr[i] , arr, ans, ds);
            ds.pop_back();
        }
    }

    public: 
    vector<vector<int>combination(vector<int>&candidate , int target){
        sort(candidate.begin(), candidate.end());
        vector<vector<int>>ans;
        vector<int>ds;
        findcombination(0,target , candidate, ans , ds);
        return ans;
    }
}
```

### **Palindrome Partitioning -reads the same backward as forward.**

```cpp
class solution{
    public:
    vector<vector<string>> partition(string s ){
    vector<vector<string>>res;
    vector<string> path; //storing individual partinioning
    func(0, s, path , res);
    return res;
 }

 void func(int ind , string s, vector<string>&path , vector<vector<string>>&res){
    if(ind == s.size()){
        res.push_back(path);
        return ;
    }

    for(int i=ind ;i<s.size();i++){
        if (isPalindrome(s, ind, i)){
            path.push_back(s.substr(ind, i-ind+1));
            func(i+1, s, path, res);
            path.pop_back();
        }
    }
 }

 bool isPalindrome(string s, int start, int end){
    while(start<=end){
        if(s[start++]!=s[end--])
        return false;
    }
    return true;
 }
 };
```

### Subset sum 1  -sum of the subset generated from it, in the increasing order.

```cpp
class Solution {
  public:
    void subsetSumsHelper(int ind, vector < int > & arr, int n, vector < int > & ans, int sum) {
      if (ind == n) {
        ans.push_back(sum);
        return;
      }
      //element is picked
      subsetSumsHelper(ind + 1, arr, n, ans, sum + arr[ind]);
      //element is not picked
      subsetSumsHelper(ind + 1, arr, n, ans, sum);
    }
  vector < int > subsetSums(vector < int > arr, int n) {
    vector < int > ans;
    subsetSumsHelper(0, arr, n, ans, 0);
    sort(ans.begin(), ans.end());
    return ans;
  }
};
```

### subset sum 2- must not contain duplicate subset

```cpp
class solution{
    public:
void findsubset(int ind, vector<int>&nums,vector<int>&ds vector<vector<int>>&ans){
    ans.push_back(ds);
    for(int i=ind;i<nums.size();i++){
        if(i!=ind && nums[i]==nums[i-1])continue;//if if first time it is picked then continue 
        ds.push_back(nums[i]);
        findsubset(i+1, nums , ds, ans);
        ds.pop_back();
    }
}

    public:
    vector<vector<int>> subset(vector<int>&nums ){
        vector<vector<int>>ans;
        vector<int>ds;
        sort(nums.begin(), nums.end());// logic will not be applied duplicates
        findsubset(0, nums , ds , ans);
        return ans;
    }
}

//there is no base case it automatically gets over
```

### print all permutation in array

```cpp
class Solution {
  private:
    void recurPermute(int index, vector < int > & nums, vector < vector < int >> & ans) {
      if (index == nums.size()) {
        ans.push_back(nums);
        return;
      }
     for(int i=ind;i<nums.size();i++){
            swap(nums[index], nums[i]);//swap 1 with 1 , 1 with 2 and 1 with 3 
            recurpermute(ind+1,nums , ans); //pointer move krdo aage 
            swap(nums[index], nums[i]); // come back from recurssion
        }
    }
  public:
    vector < vector < int >> permute(vector < int > & nums) {
      vector < vector < int >> ans;
      recurPermute(0, nums, ans);
      return ans;
    }
};

Time Complexity: O(N! X N)
```

### N- queen

```cpp
class Solution {
  public:
    bool isSafe1(int row, int col, vector < string > board, int n) {
      // check upper element
      int duprow = row;
      int dupcol = col;

      while (row >= 0 && col >= 0) {// move upward
        if (board[row][col] == 'Q') // if there is queen 
          return false;
        row--;
        col--;
      }
//check left
      col = dupcol;
      row = duprow;
      while (col >= 0) {
        if (board[row][col] == 'Q')
          return false;
        col--;
      }
//check lower diagonal
      row = duprow;
      col = dupcol;
      while (row < n && col >= 0) {
        if (board[row][col] == 'Q')
          return false;
        row++;
        col--;
      }
      return true;
    }

  public:
    void solve(int col, vector < string > & board, vector < vector < string >> & ans, int n) {
      if (col == n) {
        ans.push_back(board);
        return;
      }
      for (int row = 0; row < n; row++) {//try every row
        if (isSafe1(row, col, board, n)) { 
          board[row][col] = 'Q';
          solve(col + 1, board, ans, n);
          board[row][col] = '.';//backtrack
         }
      }
    }

  public:
    vector < vector < string >> solveNQueens(int n) {
      vector < vector < string >> ans;
      vector < string > board(n); //board of size n
      string s(n, '.'); //n size string with empty dot
      for (int i = 0; i < n; i++) {
        board[i] = s;
      }
      solve(0, board, ans, n);
      return ans;
    }
};
```

 

### sudoku solver - 9x9 (3x3)

1-9 appear once in row

1-9 once in any 3x3 board

```cpp
bool isValid(vector < vector < char >> & board, int row, int col, char c) {
  for (int i = 0; i < 9; i++) {
    if (board[i][col] == c)
      return false;

    if (board[row][i] == c)
      return false;

    if (board[3 * (row / 3) + i / 3][3 * (col / 3) + i % 3] == c)
      return false;
  }
  return true;
}

bool solveSudoku(vector < vector < char >> & board) {
  for (int i = 0; i < board.size(); i++) {
    for (int j = 0; j < board[0].size(); j++) {
      if (board[i][j] == '.') {//empty
        for (char c = '1'; c <= '9'; c++) { // try 1-9 
          if (isValid(board, i, j, c)) { if it is valid
            board[i][j] = c; //place it

            if (solveSudoku(board)) //recursion come and again loop runs
              return true;
            else
              board[i][j] = '.';  //remove //none of them get placed 
          }
        }

        return false; //none of them get placed 
      }
    }
  }
  return true;
}

int main() {
    vector<vector<char>>board{
        {'9', '5', '7', '.', '1', '3', '.', '8', '4'},
        {'4', '8', '3', '.', '5', '7', '1', '.', '6'},
        {'.', '1', '2', '.', '4', '9', '5', '3', '7'},
        {'1', '7', '.', '3', '.', '4', '9', '.', '2'},
        {'5', '.', '4', '9', '7', '.', '3', '6', '.'},
        {'3', '.', '9', '5', '.', '8', '7', '.', '1'},
        {'8', '4', '5', '7', '9', '.', '6', '1', '3'},
        {'.', '9', '1', '.', '3', '6', '.', '7', '5'},
        {'7', '.', '6', '1', '8', '5', '4', '.', '9'}
    };
   
    solveSudoku(board);
        	
    for(int i= 0; i< 9; i++){
        for(int j= 0; j< 9; j++)
            cout<<board[i][j]<<" ";
            cout<<"\n";
    }
    return 0;
}
```

### m coloring - donot color same color in adjancent node

```cpp
bool isSafe(int node, int color[], bool graph[101][101], int n, int col//color im trying to do) {
  for (int k = 0; k < n; k++) {
    if (k != node && graph[k][node] == 1 && color[k] == col) { // check adjancent
      return false; // not possible
    }
  }
  return true;
}
bool solve(int node, int color[], int m, int N, bool graph[101][101]) {
  if (node == N) { // base case color all nodes
    return true;
  }

  for (int i = 1; i <= m; i++) {
    if (isSafe(node, color, graph, N, i)) {
      color[node] = i; // color krdo
      if (solve(node + 1, color, m, N, graph)) return true; //next node
      color[node] = 0; //backtrack
    }

  }
  return false;
}

//Function to determine if graph can be coloured with at most M colours such
//that no two adjacent vertices of graph are coloured with same colour.
bool graphColoring(bool graph[101][101], int m, int N) {
  int color[N] = {0};
  if (solve(0, color, m, N, graph)) return true;
  return false;
}
```

### rat in a maze - lexicographical order - D<L<R<U

```cpp
class Solution {
  void findPathHelper(int i, int j, vector < vector < int >> & a, int n, vector < string > & ans, string move,
    vector < vector < int >> & vis) {
    if (i == n - 1 && j == n - 1) { //endpoint
      ans.push_back(move);
      return;
    }

    // downward
    if (i + 1 < n && !vis[i + 1][j] && a[i + 1][j] == 1) {
      vis[i][j] = 1; //mark as visited
      findPathHelper(i + 1, j, a, n, ans, move + 'D', vis); 
      vis[i][j] = 0; //backtrack
    }

    // left
    if (j - 1 >= 0 && !vis[i][j - 1] && a[i][j - 1] == 1) {
      vis[i][j] = 1;
      findPathHelper(i, j - 1, a, n, ans, move + 'L', vis);
      vis[i][j] = 0;
    }

    // right 
    if (j + 1 < n && !vis[i][j + 1] && a[i][j + 1] == 1) {
      vis[i][j] = 1;
      findPathHelper(i, j + 1, a, n, ans, move + 'R', vis);
      vis[i][j] = 0;
    }

    // upward
    if (i - 1 >= 0 && !vis[i - 1][j] && a[i - 1][j] == 1) {
      vis[i][j] = 1;
      findPathHelper(i - 1, j, a, n, ans, move + 'U', vis);
      vis[i][j] = 0;
    }

  }
  public:
    vector < string > findPath(vector < vector < int >> & m, int n) { // m is the matrix, n is the no of rows and column
      vector < string > ans;
      vector < vector < int >> vis(n, vector < int > (n, 0)); // n x n vector - check if it is visited or not

      if (m[0][0] == 1) findPathHelper(0, 0, m, n, ans, "", vis);
      return ans;
    }
};
```