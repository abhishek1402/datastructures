function countUniqueValues(arr){
    let length = arr.length 
    let count = 0 ;
    let obj = {};
    for (let index = 0; index < length/2; index++) {
        if(!obj[arr[index]]){
            obj[arr[index]] = arr[index]
            count++
        }  
        
        if(!obj[arr[length-1-index]]){
            obj[arr[length-1-index]] = arr[length-1-index]
            count++
        }
        
    }
    return count
}

function countUniqueValues2(arr){
    var i = 0;
    var count = 1;
    for (let index = 1; index < arr.length; index++) {
      if(arr[index]!==arr[i]){
          count++;
          i++;
         
          arr[i] = arr[index];
      }
    }

    console.log(count);

}

countUniqueValues2([1,1,2,2,3,3])
// console.log(countUniqueValues2([1,2,3,4,2,3,1,7,8,7,7,1,1,1,1,7]))