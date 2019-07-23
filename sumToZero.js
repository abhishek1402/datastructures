function sum(arr){
    for (let index = 0; index < arr.length/2; index++) {
      if(arr[index] + arr[arr.length-1-index] == 0){
        return [arr[index]]
      }
    }
    return false;
}

console.log(sum([1,0,-1]))