function validAnagram(str1,str2){
    arr1 = str1.split('');
    arr2 = str2.split('');
    if(arr1.length !== arr2.length) 
    return false
    let obj = {};
    for (const ele of arr1) {
        obj[ele]  = obj[ele]++ || 1
    }
    for (const ele of arr2) {
       if(!obj[ele])
       return false
       obj[ele] = obj[ele]--
    }
    
    return true
}

console.log(validAnagram("anagram","naramga"))