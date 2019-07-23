const { performance } = require('perf_hooks');
const  fs  = require('fs');
const arr = fs.readFileSync('../unsortedData.json','utf8');
// console.log(arr);
var start = performance.now();
function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }
    let halfLength = Math.floor(arr.length/2);
    let firstHalf = arr.slice(0,halfLength);
    let secondHalf = arr.slice(halfLength);

    return mergeArr(mergeSort(firstHalf), mergeSort(secondHalf))
    
}
mergeArr = (arr1,arr2) =>{
   
    let a = [];
    
    while( arr1.length && arr2.length){
        if(arr1[0]<arr2[0]){
            a.push(arr1[0])
            arr1 = arr1.slice(1);
        }
        else{
            a.push(arr2[0]);
            arr2 = arr2.slice(1);
        }
    }
    if(arr1.length)
    a = a.concat(arr1)
    else if(arr2.length)
    a = a.concat(arr2)
   return a
}
mergeSort(arr)
console.log(performance.now() - start)