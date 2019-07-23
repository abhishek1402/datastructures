function sumOfN(arr,n){
    let sum = 0;
    for (let index = 0; index < n ; index++) 
       sum = arr[index] + sum

    let tempSum = sum
    console.log("sum>>>",tempSum)
    for (let index = 0; index < arr.length; index++) {
        tempSum = sum - arr[index] + arr[n + index]
        console.log(tempSum)
        if(tempSum > sum)
            sum = tempSum 
    }
    
}

sumOfN([1,2,3,4,5,6,7,8],2)

// 3-1+3
// 5-2+4