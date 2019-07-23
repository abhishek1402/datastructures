reverseString = (str)=>{
    reverse = (str) => {
        return str.length === 0 ? '' : reverse(str.slice(1)) + str[0]
    }
    return reverse(str)
}

console.log(reverseString('tacoca'))