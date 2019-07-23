
import {fs} from "fs";
var numToText = function(str) {
    return str == "" ? '' : (()=>{
        let valueArr = str.split(" ")
        value = valueArr.pop()
        value.pars
        value = typeof value === 'Number' ? text[value] : value;
        return numToText(valueArr.join(" ")) + value
    })()
};
let text = {
    5:"Five",6:"Six"
}
console.log(numToText("I have 5 dogs and 6 ponies")); // "I have five dogs and six ponies"