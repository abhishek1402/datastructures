function duplicate(arr){
    obj = {};
    for (const element of arr) {
        if(obj[element]){
            return true;
        }
        else{
            obj[element] =  1
        }
    }
    console.log(obj)
    return false
}



console.log(duplicate([1,2,3]))