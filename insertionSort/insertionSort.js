insertionSort = (arr) =>{
    for (let index = 0; index < arr.length; index++) {
        let sort = false;
      for (let j = index+1; j < arr.length-index; j++) {
         if(arr[j-1]>arr[j]){
             temp = arr[j-1]
             arr[j-1] = arr[j]
             arr[j] = temp;
             sort = true
         }
        
      }
      console.log(arr);
      if(sort === false){
        break;
      }
    }
    return arr;
}

insertionSort2 = (arr)=>{
    for (let index = 1; index < arr.length; index++) {
        const element = arr[index];
        for(var j = index-1 ; j>=0 && arr[j]>element ;j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = element
    }
    return arr
}

console.log(insertionSort2([2,1,9,76,4]))