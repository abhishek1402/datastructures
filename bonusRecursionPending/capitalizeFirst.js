capitalizeFirst = (arr)=>{
   return arr.length === 0 ? [] :
   (()=>{
    let lastElement = arr.pop();
    let value = lastElement[0].toUpperCase() + lastElement.slice(1);
    return arr.concat(capitalizeFirst(arr),value)
   })()
}

console.log(capitalizeFirst(["abhi","singh"]))