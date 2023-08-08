---
sidebar_position: 13
---

# String

### Length of string

```cpp
#include<bits/stdc++.h>
using namespace std;

int getlength(char name[]){
    int count=0;
    for(int i=0;name[i]!='\0';i++){
        count++;

    }
    return count;
}

int main(){
    char name[20] = "ishani";
    cout<<getlength(name)<<endl;
    return 0;
}
```

### reverse a string

```cpp
void reversing(char name[] , int n){
int st=0;
int end=
while(st<end){
swap(name[st++], name[end--]);
}
}
```

### check palindrome

```cpp
//two pointer approad- only valid for uppercase

bool checkPalindrome(char a[], int n){
    int s=0;
    int e=n-1;
    while(s<=e){
        if(a[s]!=a[e]){
            return 0;
        }
        else{
            s++;
            e--;
        }
    }
    return 1;
}
```

```cpp
char tolowerCase(char ch){
    if(ch>='a'&& ch<='z'){
        return ch;
    }
    else{
        char temp = ch-'A'+'a';
        return temp;
    }
}

bool checkPalindrome(char a[], int n){
    int s=0;
    int e=n-1;
    if(tolowerCase(a[s])!=tolowerCase(a[e])){
        return 0;
    }
    else{
s++;
e--;
    }
    
    return 1;
}
```

### Reverse word in string

```cpp
#include<bits/stdc++.h>
using namespace std;

void reverseWord( string str){
    stack<string>st ;
    for(int i=0;i<str.length();i++){
        if(str[i]!=' ')//space 
        st.push(str[i])//jb tk space ni tb tk push krdo
        else{
            while(st.empty()==false){
                cout<<st.top();
                st.pop();
            }
            cout<<' ';
        }
    }

    //last word kunki space ni hoga na

    while(!st.empty()){
        cout<<st.top();
        st.pop();

    }
}
```

### Maximum ocuring character

```cpp
//hashing - use the unordered map to store the frquency of every character while adding character to map and increment count

char getMaxOccuringChar(string str)
    {
        // Your code here
        map<char,int> m;
        char ch;
        
        for(int i=0;i<str.size();i++)
        {
            m[str[i]]++;
        }
        
        int maxii=0;
        for(auto i:m)
        {
            if(maxii<i.second)
            {
            maxii=i.second;
            ch=i.first;
            }
        }
        return ch;
    }
```

### remove all occurance of substring

```cpp
class Solution {
public:
    string removeOccurrences(string s, string part) 
    {
        while(s.length() && s.find(part)<s.length())
        {
            s.erase(s.find(part),part.length());
        }

        return s;
        
    }
};
```

### remove all duplicate of string

```cpp
#include<bits/stdc++.h>
using namespace std;

void removeDuplicates(string s,int n){
    map<char,int> m;  
    string ans="";
    int i;
    for(i=0;i<n;i++){
        m[s[i]]=1;       // Initializing frequency of every character equal to 1
    }
    for(i=0;i<n;i++){
        if(m[s[i]]>0){    // If the frequency is not 0, then add it to the answer,
        
            ans+=s[i];    // beacause it is the first occurence of this character
        }
        m[s[i]]=0;        // Updating the frequency of every character to 0
    }
    cout<<ans;
}

int main(){
    string s="geeksforgeeks";
    removeDuplicates(s,s.size());
}
```

## second most repeated string

```cpp
class Solution
{
  public:
    string secFrequent (string arr[], int n)
    {
        //code here.
        unordered_map<string, int>mp;
        for(int i=0;i<n;i++){
         mp[arr[i]]++;
        }
        int max=0; int max1=0;
        string s;
        for(auto it:mp){
               if(it.second>max){
                max=it.second;
        }
    }
    
    for(auto it: mp){
        if(it.second>max1 && it.second!=max){
            max1=it.second;
            s=it.first;
        }
    }
    return s;
    }
};
```

## longest common prefix in an array

```cpp
class Solution{
  public:
    
    string longestCommonPrefix (string arr[], int N)
    {
        // your code here
        
        int maxi = arr[0].length();
        for(int i=1 ; i<N;i++){
            for(int j=0 ; j<maxi ; j++){
                if(arr[i][j]!= arr[0][j]){
                    maxi =min(maxi , j);
                }
              
            }
        }
        if(maxi==0){
          return "-1";
        }
        
        return arr[0].substr(0, maxi);
    }
    
};

N = 4
arr[] = {geeksforgeeks, geeks, geek,
         geezer}
Output: gee
Explanation: "gee" is the longest common
prefix in all the given strings.
```

### reverse word in given string

```cpp
class Solution
{
    public:
    //Function to reverse words in a given string.
    string reverseWords(string s) 
    { 
        // code here 
    string ans="";
         stack<char>st;
         
         int n=s.size();
         
         for(int i=n-1;i>=0;i--){
             if(s[i]=='.'){
                 if(!st.empty()){
                    while(!st.empty()){
                        ans+=st.top();
                        st.pop();
                    }
                 }
                 ans+='.';
             }
             else st.push(s[i]);
         }
         while(!st.empty()){
            ans+=st.top();
            st.pop();
         }
         return ans;
    } 
};
```

### permutation of string

```cpp
class Solution
{
    
    private:
    void solve(vector<string> &ans,string s,int index,int n){
        if(index>=n){
            ans.push_back(s);
            return;
        }
        
        for(int j=index; j<n; j++){
            swap(s[index], s[j]);
            solve(ans,  s, index+1, n);
            //backtracking
            swap(s[index], s[j]);
        }
    }
	public:
		vector<string>find_permutation(string S)
		{
		    // Code here there
		    vector<string>ans;
		    solve(ans, S , 0 , S.size() );
		     sort(ans.begin(),ans.end());
		    ans.erase(unique(ans.begin(),ans.end()),ans.end());
		return ans; 
		}
};

```

### Valid anagram

```cpp
class Solution
{
    public:
    //Function is to check whether two strings are anagram of each other or not.
    bool isAnagram(string a, string b){
        
        // Your code here
        unordered_map<char,int>mp;
        if(a.length()!=b.length())
        return false;
        
        for(int i=0;i<a.length(); i++){
            mp[a[i]]++;
            mp[b[i]]--;
        }
        
        for(int i=0 ; i<a.length(); i++){
            if(mp[a[i]]!=0)
            return false;
        }
        
        return true ;
        
    }

};

Input:a = geeksforgeeks, b = forgeeksgeeks
Output: YES
Explanation: Both the string have same characters with
        same frequency. So, both are anagrams.
```