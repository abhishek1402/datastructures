
const events = require('events');
const eventEmitter = new events.EventEmitter();
eventEmitter.on('updateCity',(data)=>{console.log(data)});
eventEmitter.emit('updateCity',"abhishek");
eventEmitter.on('demo',(datae)=>console.log(datae));
eventEmitter.on('updateCity',(data2)=>{console.log("2",data2)})
eventEmitter.emit('updateCity',"singht")
// binarySearch = (arr,num) =>{
//     if(arr.length === 0){
//         return false
//     }
//     median = Math.floor((arr.length)/2);
//     if(arr[median] == num){
//         return true
//     }
//     LeftArr = arr.slice(0,median);
//     RightArr = arr.slice(median,arr.length);
//     if(num<arr[median]){
//         return binarySearch(LeftArr,num);
//     }
//     else{
//         return binarySearch(RightArr,num);
//     }
// }

// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],2))