---
sidebar_position: 8
---

# Greedy

### N meeting in one room

1. 1 base indexing 
2. sort the given meeting in order of finishing time
3. take vector(start, end , position)

TC - O(N)+ O(N log N) == O(N LOG N )

SC- o(N)

```cpp
struct meeting {
   int start;
   int end;
   int pos;
};

class Solution {
   public:
      bool static comparator(struct meeting m1, meeting m2) {
         if (m1.end < m2.end) return true; // finishing time
         else if (m1.end > m2.end) return false;
         else if (m1.pos < m2.pos) return true;// if end is equal sort acc to position
         return false;
      }
   void maxMeetings(int s[], int e[], int n) { //max meeting
      struct meeting meet[n]; // ds 
      for (int i = 0; i < n; i++) {
         meet[i].start = s[i], meet[i].end = e[i], meet[i].pos = i + 1; // put sart, end posn in ds 
      }

      sort(meet, meet + n, comparator); //sort 

      vector < int > answer; 

      int limit = meet[0].end; //first will be performed
      answer.push_back(meet[0].pos);// add meeting number

      for (int i = 1; i < n; i++) { // check from first index
         if (meet[i].start > limit) { // start time is greater than the finishing time of prev
            limit = meet[i].end; //update the limit 
            answer.push_back(meet[i].pos);
         }
      }
      cout<<"The order in which the meetings will be performed is "<<endl;
      for (int i = 0; i < answer.size(); i++) {
         cout << answer[i] << " ";
      }

   }

};
int main() {
   Solution obj;
   int n = 6;
   int start[] = {1,3,0,5,8,5};
   int end[] = {2,4,5,7,9,9};
   obj.maxMeetings(start, end, n);
   return 0;
}
```

### **Minimum number of platforms required for a railway**

We need to find the minimum number of platforms needed at the railway station so that no train has to wait.

1. sort all the starting time and sort all the departure time in ascending order 

 **Time Complexity:** O(nlogn) Sorting takes O(nlogn) and traversal of arrays takes O(n) so overall time complexity is O(nlogn).

```cpp
#include<bits/stdc++.h>
 using namespace std;
 
 int countPlatforms(int n,int arr[],int dep[])
 {
    sort(arr,arr+n); // sort in ascending order
    sort(dep,dep+n);
 
    int ans=1;  // initially one train has taken
    int count=1;//oth index wil take 1 platform
    int i=1,j=0; //2nd arrival and first departure train 
    while(i<n && j<n)
    {
        if(arr[i]<=dep[j]) //one more platform needed
        {
            count++;
            i++;
        }
        else //one platform can be reduced
        {
            count--;
            j++;
        }
        ans=max(ans,count); //updating the value with the current maximum
    }
    return ans;
 }
 
 int main()
 {
    int arr[]={900,945,955,1100,1500,1800};
    int dep[]={920,1200,1130,1150,1900,2000};
    int n=sizeof(dep)/sizeof(dep[0]);
    cout<<"Minimum number of Platforms required "<<countPlatforms(n,arr,dep)<<endl;
 }
```

### ****Job Sequencing Problem****

Find the **number of jobs** done and the **maximum profit** that can be obtained. Each job takes a **single unit** of time and only **one job** can be performed at a time.

1. sort all according to profit in descending order
2. if performing the job perform it in last deadline 

```cpp
#include<bits/stdc++.h>

using namespace std;
// A structure to represent a job 
struct Job {
   int id; // Job Id 
   int dead; // Deadline of job 
   int profit; // Profit if job is over before or on deadline 
};
class Solution {
   public:
      bool static comparison(Job a, Job b) {
         return (a.profit > b.profit);
      }
   //Function to find the maximum profit and the number of jobs done
   pair < int, int > JobScheduling(Job arr[], int n) {

      sort(arr, arr + n, comparison);
      int maxi = arr[0].dead;  // find max deadline
      for (int i = 1; i < n; i++) {
         maxi = max(maxi, arr[i].dead);
      }

      int slot[maxi + 1];  //create array

      for (int i = 0; i <= maxi; i++)
         slot[i] = -1; // initially no job performed

      int countJobs = 0, jobProfit = 0;

      for (int i = 0; i < n; i++) { // job id 
         for (int j = arr[i].dead; j > 0; j--) { //start from last deadline
            if (slot[j] == -1) { // day empty
               slot[j] = i; // perform job in empty day
               countJobs++;
               jobProfit += arr[i].profit;
               break;
            }
         }
      }

      return make_pair(countJobs, jobProfit);
   }
};
int main() {
   int n = 4;
   Job arr[n] = {{1,4,20},{2,1,10},{3,2,40},{4,2,30}};

   Solution ob;
   //function call
   pair < int, int > ans = ob.JobScheduling(arr, n);
   cout << ans.first << " " << ans.second << endl;

   return 0;
}

Time Complexity: O(N log N) + O(N*M).
```

### **Fractional Knapsack Problem**

weight and value will be given put item in bag having capacity put max value in that bag 

```cpp
struct Item {
   int value;
   int weight;
};
class Solution {
   public:
      bool static comp(Item a, Item b) {
         double r1 = (double) a.value / (double) a.weight;
         double r2 = (double) b.value / (double) b.weight;
         return r1 > r2;
      }
   // function to return fractionalweights
   double fractionalKnapsack(int W, Item arr[], int n) {

      sort(arr, arr + n, comp); //sort in descending order(val/wt)

      int curWeight = 0;
      double finalvalue = 0.0; //keep count of value im picking

      for (int i = 0; i < n; i++) {

         if (curWeight + arr[i].weight <= W) { 
            curWeight += arr[i].weight; 
            finalvalue += arr[i].value;// take value 
         } else {
            int remain = W - curWeight; // if bag is full ( cal the remaining amount)
            finalvalue += (arr[i].value / (double) arr[i].weight) * (double) remain;  //pick fraction of it (val/weight)* remaining 
            break;
         }
      }

      return finalvalue;

   }
};

Time Complexity: O(n log n + n). O(n log n) to sort the items and O(n) to iterate through all the items for calculating the answer.
```