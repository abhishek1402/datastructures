productOfArr=(arr)=>{
    return arr.length == 0 ? 1 : arr[0]*productOfArr(arr.slice(1))
}

console.log(productOfArr([1,2,3,10]))