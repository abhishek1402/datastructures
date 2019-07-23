recursiveRange = (num)=>{
   return num == 0 ? 0 : recursiveRange(num-1)+num; 
}
console.log(recursiveRange(10))