searchString = (longstring,shortString) =>{
    j = 0;
    count = 0;
    for (let index = 0; index < longstring.length; index++) {
       if(longstring[index] === shortString [j]){
           j++
          if(shortString.length === j){
              count++;
              j = 0
          }
       }
       else{
           j == 0
       }
    }
    return count;
}

console.log(searchString("wos wow wow",'wow'))