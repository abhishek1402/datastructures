function power(num,pow){
   return pow==0 ? 1 : power(num,pow-1)*num
}

console.log(power(5,2))