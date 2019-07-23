const { performance } = require('perf_hooks');
const  fs  = require('fs');
arr = fs.readFileSync('../unsortedData.json', 'utf8')
var start = performance.now();
selectionSort = (arr)=>{

    for (let index = 0; index < arr.length; index++) {
        var minIndex = index;
        for (let j = index+1; j < arr.length; j++) {
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }   
        }
        console.log(minIndex,index);
        if(minIndex!=index+1){
            const temp = arr[index];
            arr[index] = arr[minIndex];
            arr[minIndex] = temp
        }
        else{
            break;
        }
       
        
    }
    return arr;
}

selectionSort(arr);
console.log(performance.now() - start)