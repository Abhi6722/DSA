---
sidebar_position: 2
---

# Arrays

## Questions

### Largest Element in an Array

```cpp title="C++"
#include<iostream>
using namespace std;

void largestElement(int arr[], int n){
    int max = arr[0];
    for(int i=0; i<n ; i++){
        if(arr[i]>max)
            max = arr[i];
    }
    cout<<max;
}

int main()
{
    int n;
    cin>>n;
    int arr[n];
    for(int i=0; i<n; i++){
        cin>>arr[i];
    }
    largestElement(arr, n);
    
    return 0;
}
```

