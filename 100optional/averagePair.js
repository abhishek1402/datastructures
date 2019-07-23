function averagePair(arr,avg){
    let left = 0;
    let right = arr.length-1;
    for (let index = 0; index < arr.length; index++) {
        if((parseInt(arr[left])+parseInt(arr[right]))/2 == avg){
           return ([arr[left],arr[right]])
        }
        else if((parseInt(arr[left])+parseInt(arr[right]))/2 > avg){
            right--;
        }
        else{
            left++;
        }
    }
}

console.log(averagePair([1,3,3,5,6,7,10,12,19], 8))