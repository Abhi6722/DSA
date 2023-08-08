---
sidebar_position: 2
---

# Array

### Find the duplicate number  - if there is only one duplicate element

```cpp
#include<bits/stdc++.h>

using namespace std;
int findDuplicate(vector < int > & nums) {
  int slow = nums[0];
  int fast = nums[0];
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow != fast);
  fast = nums[0];
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
}
int main() {
  vector < int > arr;
  arr = {1,3,4,2,2};
  cout << "The duplicate element is " << findDuplicate(arr) << endl;
}

Time complexity: O(N)
Space complexity: O(1).
```

### Sort 0 1 2

```cpp
#include <bits/stdc++.h>
using namespace std;

void sortArray(vector<int>& arr, int n) {

    int low = 0, mid = 0, high = n - 1; // 3 pointers

    while (mid <= high) {
        if (arr[mid] == 0) {
            swap(arr[low], arr[mid]);
            low++;
            mid++;
        }
        else if (arr[mid] == 1) {
            mid++;
        }
        else {
            swap(arr[mid], arr[high]);
            high--;
        }
    }
}

int main()
{
    int n = 6;
    vector<int> arr = {0, 2, 1, 2, 0, 1};
    sortArray(arr, n);
    cout << "After sorting:" << endl;
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    return 0;
}

TC- O(N)
SC- O(1)
```

### Remove duplicate from sorted array

```cpp
#include<bits/stdc++.h>

using namespace std;
int removeDuplicates(int arr[], int n)
{
  int i = 0;
  for (int j = 1; j < n; j++) {
    if (arr[i] != arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
int main() {
  int arr[] = {1,1,2,2,2,3,3};
  int n = sizeof(arr)/sizeof(arr[0]);
  int k = removeDuplicates(arr, n);
  cout << "The array after removing duplicate elements is " << endl;
  for (int i = 0; i < k; i++) {
    cout << arr[i] << " ";
  }
}

Time Complexity: O(N)

Space Complexity: O(1)
```

### Move zeroes to end

```cpp
#include<bits/stdc++.h>
using namespace std;

  void pushZerosToEnd(int arr[], int n) {
        // code here
        int i=0;
        int j=1;
        while(j<n)
        {
            if(arr[j]!=0 && arr[i]==0)
            {
                swap(arr[i], arr[j]);
                i++;
                j++;
                
            }
            else if(arr[i]!=0)
            {
                i++;
                j++;
            }
            else
            {
                j++;
            }
            
            
        }
    }

int main(){
   
   int arr[] ={3, 5, 0, 0, 4};

    int n=5;
    pushZerosToEnd(arr, n);
    cout<<"Sorted"<<endl;
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
    return 0;
}
```

### Set Matrix Zeroes

```cpp
#include<bits/stdc++.h>
using namespace std;

 
 vector<vector<int>> zeroMatrix(vector<vector<int>> &matrix){
     int n = matrix.size();
    int m = matrix[0].size();

     int col0 = 1;
    // step 1: Traverse the matrix and
    // mark 1st row & col accordingly:
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if (matrix[i][j] == 0) {
                // mark i-th row:
                matrix[i][0] = 0;

                // mark j-th column:
                if (j != 0)
                    matrix[0][j] = 0;
                else
                    col0 = 0;
            }
        }
    }

  // Step 2: Mark with 0 from (1,1) to (n-1, m-1):
     for (int i = 1; i < n; i++) {
        for (int j = 1; j < m; j++) {
            if (matrix[i][j] != 0) {
                // check for col & row:
                if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                    matrix[i][j] = 0;
                }
            }
        }
    }

    //step 3: Finally mark the 1st col & then 1st row:
      if (matrix[0][0] == 0) {
        for (int j = 0; j < m; j++) {
            matrix[0][j] = 0;
        }
    }
    if (col0 == 0) {
        for (int i = 0; i < n; i++) {
            matrix[i][0] = 0;
        }
    }

    return matrix;
}

int main(){
    vector<vector<int>> matrix = {{1, 1, 1}, {1, 0, 1}, {1, 1, 1}};
    vector<vector<int>> ans = zeroMatrix(matrix);

   cout << "The Final matrix is:";
   for (auto it : ans) {
        for (auto ele : it) {
            cout << ele << " ";
        }
        cout <<endl;
    }
    return 0;
}
```

### Buy and sell

```cpp
#include<bits/stdc++.h>
using namespace std;

 
int maxProfit(vector<int> &prices){
    int maxPro=0;
    int miniprice=INT_MAX;
    int n= prices.size();
    for(int i=0;i<n;i++){
        miniprice = min(miniprice ,prices[i]);
        maxPro= max(maxPro, prices[i]- miniprice);
    }
    return maxPro;
}
int main(){
   vector<int> prices = { 7, 1,5,3,6 ,4};
   int maximum = maxProfit(prices);
   cout<<"Max profit is"<<maximum<<endl;
    
}

Time complexity: O(n)

Space Complexity: O(1)
```

### 2 sum

```cpp
#include <bits/stdc++.h>
using namespace std;

vector<int> twoSum(int n, vector<int> &arr, int target) {
    vector<int> ans;
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (arr[i] + arr[j] == target) {
                ans.push_back(i);
                ans.push_back(j);
                return ans;
            }
        }
    }
    return { -1, -1};
}

int main()
{
    int n = 5;
    vector<int> arr = {2, 6, 5, 8, 11};
    int target = 14;
    vector<int> ans = twoSum(n, arr, target);
    cout << "This is the answer" << ans[0] << ", "
         << ans[1] << endl;
    return 0;
}

Time Complexity: O(N^2)
```

or 

```cpp
string twoSum(int n, vector<int> &arr, int target) {
    sort(arr.begin(), arr.end());
    int left = 0, right = n - 1;
    while (left < right) {
        int sum = arr[left] + arr[right];
        if (sum == target) {
            return "YES";
        }
        else if (sum < target) left++;
        else right--;
    }
    return "NO";
}
```

### Sub array sum divisible by K

```cpp
int subArray(vector<int>&nums , int k){
     unordered_map<int,int> mp;
	    int ans=0,cursum=0;
 int rem=0; 
		    mp[0]=1;//key value pair //rem and count with rem =0 and count 1 
	    for(int i=0;i<N;i++){
	        cursum+=arr[i]; //sum ko add krte gye
	        rem=cursum%K; //rem 
	        if(rem<0){ //negative
	            rem+=K;
	        }
	        if(mp.find(rem)!=mp.end()){ //map mein ye remiander kbhi dekha h 
	            ans+=mp[rem]; // present jo count h usko ans mein dalenge
	          
	        }
	       
	            mp[rem]++; //uske bad bdha denge ki jo rem mila h uski frewuncy h phle se map mein 
	        
	    }
	    return ans;
	}

tc- O(n)
```

### find all duplicates in an array

```cpp
vector<int> duplicates(int arr[], int n) {
        // code here
        vector<int>v;
        unordered_map<int,int>mpp;
        
        for(int i=0;i<n;i++){
            mpp[arr[i]]++;
        }
        
        for(auto it:mpp){
            if(it.second>1){
                v.push_back(it.first);;
            }
        }
        
        if(v.size()==0){
            return {-1};
        }
        
        sort(v.begin(), v.end());
        return v;
    }
```

### Largest Element in an Array

```cpp
#include<bits/stdc++.h>
using namespace std;

int largest(int arr[], int n){
    int maxi=0;
    for(int i=0;i<n;i++){
        if(maxi<arr[i]){
            maxi=arr[i];
        }
    }
    return maxi;
}

int main(){
    int arr[]= {10,3,5,7,9,2};
    int n=6;
    int ans= largest(arr,n);
    cout<<"Largest element is "<<ans<<endl;
    return 0;
}
```

### Second largest element

```cpp
#include<bits/stdc++.h>
using namespace std;

int secondLargest(int arr[], int n){
    int largest = arr[0];
    int s_largest=-1;
    for(int i=0;i<n;i++){
        if(arr[i]>largest){
            s_largest=largest;
            largest=arr[i];
        }
        else if(arr[i]>s_largest && arr[i]<largest){
            s_largest=arr[i];
        }
    }
    return s_largest;
}

int main(){
    int arr[]= {10,3,5,7,9,2};
    int n=6;
    int ans= secondLargest(arr,n);
    cout<<"Largest element is "<<ans<<endl;
    return 0;
}
```

### Left rotate by 1 index

```cpp
int temp=arr[0];
for(int i=1;i<n;i++){
    arr[i]=arr[i-1];
}
arr[n-1]=temp;
```

### Intersection of 2 sorted array(element present in both)

```cpp
#include<bits/stdc++.h>
using namespace std;

  vector<int> intersectionOfArrays(vector<int>A, vector<int>B){

int i=0, j=0;
vector<int>ans;
while(i<A.size() &&j<B.size()){
    if(A[i]<B[j]){
        i++;
    }
    else if(A[i]>B[j]){
        j++;
    }
    else {
        ans.push_back(A[i]);
        i++;
        j++;
    }
}
return ans;
  }

  int main() {
    
  // Array Initialisation.
  vector < int > A {1,2,3,3,4,5,6,7};
  vector < int > B {3,3,4,4,5,8};

  vector<int> ans = intersectionOfArrays(A,B);
  
  for (int i = 0; i < ans.size(); i++) {
    cout << ans[i] << " ";
  }

  return 0;
}
```

### Union of two sorted array(delete duplicate)

```cpp
#include <bits/stdc++.h>

using namespace std;

vector < int > FindUnion(int arr1[], int arr2[], int n, int m) {
  int i = 0, j = 0; // pointers
  vector < int > Union; // Uninon vector
  while (i < n && j < m) {
    if (arr1[i] <= arr2[j]) // Case 1 and 2
    {
      if (Union.size() == 0 || Union.back() != arr1[i])
        Union.push_back(arr1[i]);
      i++;
    } else // case 3
    {
      if (Union.size() == 0 || Union.back() != arr2[j])
        Union.push_back(arr2[j]);
      j++;
    }
  }
  while (i < n) // IF any element left in arr1
  {
    if (Union.back() != arr1[i])
      Union.push_back(arr1[i]);
    i++;
  }
  while (j < m) // If any elements left in arr2
  {
    if (Union.back() != arr2[j])
      Union.push_back(arr2[j]);
    j++;
  }
  return Union;
}

```

### Maximize number of 1’s

```cpp
//m is given that how many time 0 can be changed to 1
//n = size of array
int findZeroes(int arr[], int n, int m) {
        int i=0, j=0;
        int cnt=0, maxlen=0;
        while(j<n){
            if(cnt<=m){
                if(arr[j]==0) cnt++;
                maxlen=max(maxlen, j-i);
                j++;
            }
            else{
                if(arr[i]==0) cnt--;
                i++;
            }
        }
        if(cnt<=m) maxlen=max(maxlen, j-i);
        return maxlen;
    }
```

### Longest subarray with sum k

```cpp
int maxlen=0;
for(int i=0;i<n;i++){
    int sum=0;
    for(int j=i;i<n;j++){
        sum+=arr[j];
        if(sum==k){
            maxlen=max(maxlen, j-i+1);
        }
    }
    return maxlen;
}

tc- O(N^2)
```

### Find the element that appears once -sorted array

```cpp
#include <bits/stdc++.h>
using namespace std;

int singleNonDuplicate(vector<int>& arr) {
    int n = arr.size(); //size of the array.
    int ans = 0;
    // XOR all the elements:
    for (int i = 0; i < n; i++) {
        ans = ans ^ arr[i];
    }
    return ans;
}

int main()
{
    vector<int> arr = {1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6};
    int ans = singleNonDuplicate(arr);
    cout << "The single element is: " << ans << "\n";
    return 0;

}

Time Complexity: O(N)
```

### majority element that occur N/2 times

```cpp
#include <bits/stdc++.h>
using namespace std;
int majorityElement(vector<int> v) {

    //size of the given array:
    int n = v.size();

    for (int i = 0; i < n; i++) {
        //selected element is v[i]
        int cnt = 0;
        for (int j = 0; j < n; j++) {
            // counting the frequency of v[i]
            if (v[j] == v[i]) {
                cnt++;
            }
        }

        // check if frquency is greater than n/2:
        if (cnt > (n / 2))
            return v[i];
    }

    return -1;
}

int main()
{
    vector<int> arr = {2, 2, 1, 1, 1, 2, 2};
    int ans = majorityElement(arr);
    cout << "The majority element is: " << ans << endl;
    return 0;
}

// Time Complexity: O(N2),

```

```cpp
#include <bits/stdc++.h>
using namespace std;
int majority(vector<int> v){
    int n = v.size();
    map<int,int> mpp;
    for(int i=0 ;i<n;i++){
        mpp[v[i]]++;
    }

    for(auto it: mpp){
        if(it.second>(n/2)){
            return it.first;
        }
    }
    return -1;
}

int main()
{
    vector<int> v = {2, 2, 1, 1, 1, 2, 2};
    int ans = majority(v);
    cout << "The majority element is: " << ans << endl;
    return 0;
}

Time Complexity: O(N*logN) + O(N), where N = size of the given array.
Reason: We are using a map data structure. Insertion in the map takes logN time. And we are doing it for N elements. So, it results in the first term O(N*logN). The second O(N) is for checking which element occurs more than floor(N/2) times. If we use unordered_map instead, the first term will be O(N) for the best and average case and for the worst case, it will be O(N2).#include <bits/stdc++.h>
using namespace std;
int majorityElement(vector<int> v) {

    //size of the given array:
    int n = v.size();

    for (int i = 0; i < n; i++) {
        //selected element is v[i]
        int cnt = 0;
        for (int j = 0; j < n; j++) {
            // counting the frequency of v[i]
            if (v[j] == v[i]) {
                cnt++;
            }
        }

        // check if frquency is greater than n/2:
        if (cnt > (n / 2))
            return v[i];
    }

    return -1;
}

int main()
{
    vector<int> arr = {2, 2, 1, 1, 1, 2, 2};
    int ans = majorityElement(arr);
    cout << "The majority element is: " << ans << endl;
    return 0;
}

// Time Complexity: O(N2),
```

### appear N/3 TIME

```cpp
#include <bits/stdc++.h>
using namespace std;
int majority(vector<int> v){
    int n = v.size();
    map<int,int> mpp;
    for(int i=0 ;i<n;i++){
        mpp[v[i]]++;
    }

    for(auto it: mpp){
        if(it.second>(n/3)){
            return it.first;
        }
    }
    return -1;
}

int main()
{
    vector<int> v = {2, 2, 1, 1, 1, 2, 2};
    int ans = majority(v);
    cout << "The majority element is: " << ans << endl;
    return 0;
}
```

### **Kadane’s Algorithm : Maximum Subarray Sum in an Array**

```cpp
#include <bits/stdc++.h>
using namespace std;

long long maxSubarraySum(int arr[], int n) {
    long long maxi = LONG_MIN; // maximum sum
    long long sum = 0;

    for (int i = 0; i < n; i++) {

        sum += arr[i];

        if (sum > maxi) {
            maxi = sum;
        }

        // If sum < 0: discard the sum calculated
        if (sum < 0) {
            sum = 0;
        }
    }

    // To consider the sum of the empty subarray
    // uncomment the following check:

    //if (maxi < 0) maxi = 0;

    return maxi;
}

int main()
{
    int arr[] = { -2, 1, -3, 4, -1, 2, 1, -5, 4};
    int n = sizeof(arr) / sizeof(arr[0]);
    long long maxSum = maxSubarraySum(arr, n);
    cout << "The maximum subarray sum is: " << maxSum << endl;
    return 0;
}

Time Complexity: O(N)
```

### ADD 2 array

```cpp
int calc_Sum(int *a,int n,int *b,int m)
    {
        vector<int>ans;
        int i=n-1;
        int j=m-1;
        int carry=0;
        while(i>=0 && j>=0)
        {
            int val1 = a[i];
            int val2 = b[j];
            
            int sum = val1+val2+carry;
            carry = sum/10;
            sum = sum%10;
        ans.push_back(sum);
            
            i--;
            j--;
        }
        //phla array bacha
        while(i>=0)
        {
            int sum = a[i] + carry;
            carry = sum/10;
            sum = sum%10;
           ans.push_back(sum);
            
            i--;
        }
        //j bacha
        while(j>=0)
        {
            int sum = b[j] + carry;
            carry = sum/10;
            sum = sum%10;
            ans.push_back(sum);
            
            j--;
        }
        
        //carry mein h abhi 
        if(carry!=0)
        {
            
            int sum = carry;
            carry = sum/10;
            sum = sum%10;
            ans.push_back(sum);
        }
        
       return  reverse(ans);
        

        vector<int>reverse(vector<int>v){
            int s=0, e=v.size()-1;
            while(s<e){
                swap(v[s++],v[e--]);
            }
            return v;
        }
  
};
```

### Rotate matrix by 90 degree clockwise

```cpp
#include<bits/stdc++.h>

using namespace std;
void rotate(vector < vector < int >> & matrix) {
    int n = matrix.size();
    //transposing the matrix
    for (int i = 0; i < n; i++) {
    for (int j = 0; j < i; j++) {
        swap(matrix[i][j], matrix[j][i]);
    }
    }
    //reversing each row of the matrix
    for (int i = 0; i < n; i++) {
    reverse(matrix[i].begin(), matrix[i].end());
    }
}

int main() {
    vector < vector < int >> arr;
    arr =  {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    rotate(arr);
    cout << "Rotated Image" << endl;
    for (int i = 0; i < arr.size(); i++) {
    for (int j = 0; j < arr[0].size(); j++) {
        cout << arr[i][j] << " ";
    }
    cout << "n";
    }

}
O(N*N)
```

### 3 sum

```cpp
#include<bits/stdc++.h>

using namespace std;
vector < vector < int >> threeSum(vector < int > & nums) {
  vector < vector < int >> ans;
  vector < int > temp;
  int i, j, k;
  for (i = 0; i < nums.size() - 2; i++) {
    for (j = i + 1; j < nums.size() - 1; j++) {
      for (k = j + 1; k < nums.size(); k++) {
        temp.clear();
        if (nums[i] + nums[j] + nums[k] == 0) {
          temp.push_back(nums[i]);
          temp.push_back(nums[j]);
          temp.push_back(nums[k]);
        }
        if (temp.size() != 0)
          ans.push_back(temp);
      }
    }
  }

  return ans;
}

int main() {
  vector < int > arr= { -1, 0, 1, 2, -1, -4};
  vector < vector < int >> ans;
  ans = threeSum(arr);
  cout << "The triplets are as follows: " << endl;
  for (int i = 0; i < ans.size(); i++) {
    for (int j = 0; j < ans[i].size(); j++) {
      cout << ans[i][j] << " ";
    }
    cout << endl;
  }
  return 0;
}

Time Complexity : O(n^3)
```

OR

```cpp
#include<bits/stdc++.h>
using namespace std;
 vector<vector<int>> threeSum(vector<int>& num) {
        vector<vector<int>> res; 
        sort(num.begin(), num.end()); 
        
        // moves for a
        for (int i = 0; i < (num.size())-2; i++) {
            
            if (i == 0 || (i > 0 && num[i] != num[i-1])) { //first guy 
                
                int lo = i+1, hi = (int)(num.size())-1, sum = 0 - num[i];
                
                while (lo < hi) {
                    if (num[lo] + num[hi] == sum) {
                        
                        vector<int> temp; 
                        temp.push_back(num[i]); 
                        temp.push_back(num[lo]); 
                        temp.push_back(num[hi]); 
                        res.push_back(temp);
                        
                        while (lo < hi && num[lo] == num[lo+1]) lo++;//ignore duplicates
                        while (lo < hi && num[hi] == num[hi-1]) hi--;
                        
                        lo++; hi--;
                    } 
                    else if (num[lo] + num[hi] < sum) lo++;
                    else hi--;
               }
            }
        }
        return res;
    }
int main() {
  vector < int > arr{-1,0,1,2,-1,-4};
  vector < vector < int >> ans;
  ans = threeSum(arr);
  cout << "The triplets are as follows: "<< endl;
  for (int i = 0; i < ans.size(); i++) {
    for (int j = 0; j < ans[i].size(); j++) {
      cout << ans[i][j] <<" ";
    }
    cout << endl;
  }
  return 0;
}

O(n^2)
Space Complexity : O(3*k)  // k is the no.of triplets.
```

### subset with xor value

```cpp
int subsetXOR(vector<int> arr, int N, int K) {
        // code here
        long long count=0;
        for(int i=0;i<N;i++){
            int XOR=0;
            for(int j=i;i<N;j++){
                XOR^=arr[j];
                if(XOR==K){
                    count++;
                }
            }
        }
        return count;
    }

```

### merge overlapping subinterval

```cpp
vector<vector<int>> overlappedInterval(vector<vector<int>>& intervals) {
        
        sort(intervals.begin(), intervals.end());
        vector<vector<int>> ans;
        
        ans.push_back(intervals[0]);
        int ctr = 0;
        
        for(int i=1; i<intervals.size(); i++)
        {
            if(intervals[i][0] <= ans[ctr][1])
                ans[ctr][1] = max(intervals[i][1], ans[ctr][1]);
            else
            {
                ans.push_back(intervals[i]);
                ctr++;
            }
        }
        
        return ans;
    }
```

### Maximum product in subarray

```cpp
int result = INT MIN; // maximum sum

for (int i = 0; i < n; i++)
{
    for (int j = i + 1; j < n; j++)
    {
        int prod = 1;
        for (int k = i; k <= j; k++)
        {
            prod *= nums[k];
            result = max(result, prod);
        }
    }
    return result;
}

TC- O(N^3)
```

### Move all negative element at end

```cpp
void segregateElements(int arr[],int n)
    {
        // Your code goes here
        
        vector<int>v;
        
        
        for(int i=0;i<n;i++){ //phle sara positive push krega
            if(arr[i]>0){
                v.push_back(arr[i]);
            }
        }
        
          for(int i=0;i<n;i++){// phir sara negative
            if(arr[i]<0){
                v.push_back(arr[i]);
            }
        }
        
        
        
        for(int i=0;i<n;i++){ // aur phir print 
            arr[i]=v[i];
        }
```

or

use queue (maintain order) -phle positive sare push krdenge phir neagtive kunkii queue h

```cpp
void segregateElements(int arr[],int n)
    {
        queue<int> q;
        for(int i=0; i<n; i++)
        {
            if(arr[i] >= 0)
            {
                q.push(arr[i]);
            }
        }
        for(int i=0; i<n; i++)
        {
            if(arr[i] < 0)
            {
                q.push(arr[i]);
            }
        }
        int i=0;
        while(!q.empty())
        {
            arr[i] = q.front();
            q.pop();
            i++;
        }
        
    }
```

### Merge two sorted array without extra space

```cpp
#include<bits/stdc++.h>
using namespace std;

void merge(int arr1[], int arr2[], int n, int m) 
        { 
            // code here 
               int i=n-1,j=0; // i chlega arr1 ke last se and j arr2 le first element se

            while(i>=0&&j<m){

                if(arr1[i]>=arr2[j]){

                    swap(arr1[i],arr2[j]);

                    i--,j++;

                }

                else{

                    break;

                }

                

            }

            sort(arr1,arr1+n);

            sort(arr2,arr2+m);

        } 
        

int main(){
    int arr1[]={9, 2, 4,1 };
    int arr2[]={0 , 7, 3};
    int n=4, m=3;

    merge(arr1,arr2, n , m);
    cout<<"the merged array are :";
    for(int i=0;i<n;i++){
        cout<<arr1[i]<<" ";
    }
    for(int i=0;i<m;i++){
        cout<<arr2[i]<<" ";
    }
    cout<<endl;
    return 0;
}

Time Complexity: O(min(n, m)) + O(n*logn) + O(m*logm), where n and m are the sizes of the given arrays.
Reason: O(min(n, m)) is for swapping the array elements. And O(n*logn) and O(m*logm) are for sorting the two arrays.

Space Complexity: O(1) as we are not using any extra space.
```

### 4 sum

```cpp
#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> foursum(vector<int> &nums, int target)
{
    int n = nums.size();
    vector<vector<int>> ans;

    sort(nums.begin(), nums.end());

    for (int i = 0; i < n; i++)
    {
        if (i > 0 && nums[i] == nums[i - 1])
            continue; // avoid duplicates
        for (int j = i + 1; j < n; j++)
        {
            if (j > i + 1 && nums[j] == nums[j - 1])
                continue; // avoid duplicates
            int k = j + 1;
            int l = n - 1;
            while (k < l)
            {
                int sum = nums[i];
                sum += nums[j];
                sum += nums[k];
                sum += nums[l];
                if (sum == target)
                {
                    vector<int> temp = {nums[i], nums[j], nums[k], nums[l]};
                    ans.push_back(temp);
                    k++;
                    l--;

                    // skip the duplicates
                    while (k < l && nums[k] == nums[k - 1])
                        k++;
                    while (k < l && nums[l] == nums[l + 1])
                        l--;
                }
                else if (sum < target)
                    k++;
                else
                    l--;
            }
        }
    }
    return ans;
}

int main()
{
    vector<int> nums = {0, 0, 2, 1, 1};
    int target = 3;
    vector<vector<int>> ans = foursum(nums, target);
    for (auto it : ans)
    {
        for (auto ele : it)
        {
            cout << ele << " ";
        }
    }
}
```

### next permutation

```cpp
#include<bits/stdc++.h>
using namespace std ;

vector<int> nextGreaterPermutation(vector<int> &A) {
    int n = A.size(); // size of the array.

    // Step 1: Find the break point: Break-point means the first index i from the back of the given array where arr[i] becomes smaller than arr[i+1].
    int ind = -1; // break point
    for (int i = n - 2; i >= 0; i--) {
        if (A[i] < A[i + 1]) {
            // index i is the break point
            ind = i;
            break;
        }
    }

    // If break point does not exist:  i.e. if the array is sorted in decreasing order
    if (ind == -1) {
        // reverse the whole array:
        reverse(A.begin(), A.end());
        return A;
    }

    // Step 2: Find the next greater element
    //         and swap it with arr[ind]:

    for (int i = n - 1; i > ind; i--) {
        if (A[i] > A[ind]) {
            swap(A[i], A[ind]);
            break;
        }
    }

    // Step 3: reverse the right half:
    reverse(A.begin() + ind + 1, A.end());

    return A;
}

int main()
{
    vector<int> A = {1, 3, 2};
    vector<int> ans = nextGreaterPermutation(A);

    cout << "The next permutation is:";
    for (auto it : ans) {
        cout << it << " ";
    }
    
    return 0;
}

Time Complexity: O(3N)
```

[matrix/2d array](Array%20f837327b50da4f7997c00d4c8a985ef9/matrix%202d%20array%204ab978a9715043378a8ea2f73df8a945.md)

### ****Max Sum Subarray of size K****

```cpp
long maximumSumSubarray(int K, vector<int> &Arr , int N){
        // code here 
           long long  sum=0; 
        int j=0;
        int i=0;
           long long  mx= 0;
        while(j<N){
            sum+=Arr[j];
            if(j-i+1<K){
                j++;
            }
            else if(j-i+1==K){
                mx= max(mx, sum);
                sum-=Arr[i];
                i++;
                j++;
            }
        }
        return mx;
      
    }
```