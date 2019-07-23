//input will be two array
// output will be true or false

//for loop to put the square of first array of element and their occurence into an obj
// if the
//second for loop to check if the second array contains the square and occurence


function checkFrequecySquare(arr,sqareArr){
    const obj = {};
    const obj2 = {};
    for(ele of arr){
        let square = ele*ele;
        obj[square] = obj[square]||0
    }
    
    for(ele of sqareArr){
        obj2[ele] = obj2[ele]||0
    }
    console.log("obj>>>",obj)
    console.log("obj2>>>",obj2)
    for (const key in obj2) {
        if(obj[key]!=undefined){
            if(obj[key]!=obj2[key]){
                return false
            }
        }
        else{
            return false 
        }
    }
    return true
}

console.log(checkFrequecySquare([1,2,3,5],[1,4,9,11]))