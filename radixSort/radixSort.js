
function getDigit(number,position){
    while(position>0){
        number = (number - number%10)/10
        position--
    }
    return number%10
    
}

function getLargestDigit(arr){
    largest = 0
    count = 0;
    arr.forEach(element => {
        if(element>largest)
        largest = element
    });
    while(largest>0){
        count++;
        largest = parseInt(largest/10)
    }
    return count;
}

function radixSort(arr){
    n = getLargestDigit(arr)
   
    position = 0

    for(let i=0;i<=n;i++){
        elementArr = [];
        for (let index = 0; index < arr.length; index++) {
            digit =  getDigit(arr[index],i);
            if(elementArr[digit]){
                elementArr[digit].push(arr[index])
            }
            else{
                elementArr[digit] = [arr[index]];
            }
             
        } 
        arr = [].concat(...elementArr)
        console.log(arr)
    }
}

// console.log(getDigit(1234,3))
console.log(radixSort([1,4,5,2,3,15332,323,1556]))