---
sidebar_position: 3
---

# Basics


# Hashing

```c
// To run this program use cmd+shift+b

#include<iostream>
using namespace std;

int main()
{
    //Number Hashing
    int n;
    cin>>n;
    int arr[n];
    for(int i=0; i<n; i++){
        cin>>arr[i];
    }

    //Hashing
    int hash[1000] = {0};
    for(int i=0; i<n; i++){
        hash[arr[i]]++;
    }

    int q;
    cin>>q;
    while(q--){
        int x;
        cin>>x;
        cout<<hash[x]<<endl;
    }

    return 0;
}
```