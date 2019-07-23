// mergeArr = (arr1,arr2) =>{
//     a = [];
    
//     while( arr1.length && arr2.length){
//         if(arr1[0]<arr2[0]){
//             a.push(arr1[0])
//             arr1 = arr1.slice(1);
//         }
//         else{
//             a.push(arr2[0]);
//             arr2 = arr2.slice(1);
//         }
//     }
//     if(arr1.length)
//     a = a.concat(arr1)
//     else if(arr2.length)
//     a = a.concat(arr2)
//     console.log(a);
// }

mergeArr2 = (arr1,arr2) =>{
    newArr = []
    firstIndex = 0;
    secondIndex = 0;
    while(firstIndex != arr1.length && secondIndex != arr2.length){
        if(arr1[firstIndex]<arr2[secondIndex]){
            newArr.push(arr1[firstIndex]);
            firstIndex++
        }
        else{
            newArr.push(arr2[secondIndex])
            secondIndex++
        }
    }
    while(firstIndex<arr1.length){
        newArr.push(arr1[firstIndex])
        firstIndex++
    }
    while(secondIndex<arr2.length){
        newArr.push(arr2[secondIndex])
        secondIndex++
    }
    console.log(newArr);
}

mergeArr2([1,2,5,9],[3,4,6])


