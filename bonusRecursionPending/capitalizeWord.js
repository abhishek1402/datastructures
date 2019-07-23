capitalize = (str)=>{
   return str.length == 0 ? '' : capitalize(str.slice(0,str.length-1)) + str[str.length-1].toUpperCase();
}    

console.log(capitalize("abhishek"))