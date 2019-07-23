function maxSubarraySum(arr,lenOfNumber){
    let maxSum = 0;
    let j = 0;
    for (let index = 0; index < lenOfNumber; index++) {
        maxSum = maxSum + arr[index]
    }
    for (let index = lenOfNumber; index < arr.length; index++) {
       tempSum = 0;
       tempSum = maxSum+arr[index]-arr[j]
       console.log(tempSum)
       maxSum = Math.max(maxSum,tempSum);
       j++;
    }
    return maxSum;

}

console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))

