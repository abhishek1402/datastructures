function bs(arr,num){
    length = Math.floor(arr.length/2)
    firstHalf = arr.slice(0,length);
    secondHalf = arr.slice(length,arr.length);
    if(arr[length] === num){
        return length
    }
    if(num<arr[length]){
        return  bs(firstHalf,num)
    }
    else{
        return length + bs(secondHalf,num)
    }

}

console.log(bs([1,2,3,4,5,6,7,8,9,10],2))
