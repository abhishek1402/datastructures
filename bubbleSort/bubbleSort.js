const { performance } = require('perf_hooks');
const  fs  = require('fs');
const arr = fs.readFileSync('../unsortedData.json','utf8');
var start = performance.now();
bubble1 = (arr) =>{
   for (let index = 0; index < arr.length; index++) {
        for (let j = index; j < arr.length; j++) {
            if(arr[j]>arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        } 
   }
   return arr;
}

// code being timed...


bubble2 = (arr) =>{
    noSwap = true;
    for (let index = arr.length; index >0 ; index--) {
         for (let j = 0; j < index-1; j++) {
             if(arr[j]>arr[j+1]){
                 temp = arr[j];
                 arr[j] = arr[j+1];
                 arr[j+1] = temp;
                 noSwap = false
             }
         } 
        
        if(noSwap){
            console.log("noswap>>",index)
            break;
        }
       
    }
    return arr;
 }

console.log(bubble2(arr))
console.log(performance.now() - start)
