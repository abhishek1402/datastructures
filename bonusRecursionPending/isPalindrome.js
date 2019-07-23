function isPalindrome(str){
    const reverse = (s) => s.length === 0 ? '' : reverse(s.slice(1)) + s[0];
    let reversed = reverse(str);
    return reversed === str;
}

isPalindrome('tacoca');