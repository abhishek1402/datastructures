function isSubsequence(subSequence,str){
    subSequenceArr = subSequence.split("");
    strArr = str.split("");
    j = 0 ;
    for (let index = 0; index < strArr.length; index++) {
        if(strArr[index] == subSequenceArr[j]){
            j++;
            if(j == subSequenceArr.length){
                return true;
            }
        }
        else{
            j = 0;
        }
    }
    return false;
}
console.log(isSubsequence('hello', 'by he llo in lo world'));