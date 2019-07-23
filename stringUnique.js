function stringUnique(str){
    strArr = str.split('');
    lastCount = 0;
    let uniqueArr = [];
    for (const ele of strArr) {
      
       if(uniqueArr.length == 0){
           uniqueArr.push(ele);
       }
       else{
           c = 0 ;
           for (const element of uniqueArr) {
            if(element === ele){
                c = 1;
                break;
              }
           }
           if(c == 1){
               if(lastCount<=uniqueArr.length){
                   lastCount = uniqueArr.length;
                   uniqueArr = []
               }
           }
           else{
               uniqueArr.push(ele);
           }
       }
    }
    if(lastCount>uniqueArr.length){
        return lastCount
    }
    else{
        return uniqueArr.length
    }
}

function stringUniqSliding(str){
    let strArr = str.split('');
    for (let index = 0; index < strArr.length; index++) {
       
    }
}

console.log(stringUnique("abhisheksingh"))

