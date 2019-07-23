class Node{
    constructor(val,priority){
        this.val = val;
        this.priority = priority
    }
}
class PriorityQueue{
    constructor(){
        this.value = [];
    }
    insert(val,priority){
        let node = new Node(val,priority)
        this.value.push(node);
        let currentIndex = this.value.length-1
        while(true){
            let parentIndex = Math.floor(currentIndex/2)
            let parentPriority = this.value[parentIndex].priority
            if(parentPriority && parentPriority<this.value[currentIndex].priority){
                let temp = this.value[parentIndex];
                this.value[parentIndex] = this.value[currentIndex];
                this.value[currentIndex] = temp;
                currentIndex = parentIndex
            }
            else{
                return this;
            }
        }

    }
    extractMax(){
        let temp = this.value[0];
        this.value[0] = this.value[this.value.length-1] 
        this.value[this.value.length-1] = temp;
        let max = this.value.pop();
        let currentIndex = 0; 
        while(true){
            let firstChildIndex =  2*currentIndex+1;
            let secondChildIndex = 2*currentIndex+2;
            if(this.value[firstChildIndex]>this.value[secondChildIndex]){
                if(this.value[currentIndex]<this.value[firstChildIndex]){
                    let temp = this.value[currentIndex]
                    this.value[currentIndex] =  this.value[firstChildIndex]; 
                    this.value[firstChildIndex] = temp;
                    currentIndex = firstChildIndex
                }
                else{
                    return max
                }
            } 
            else{
                if(this.value[currentIndex]<this.value[secondChildIndex]){
                    let temp = this.value[currentIndex]
                    this.value[currentIndex] =  this.value[secondChildIndex]; 
                    this.value[secondChildIndex] = temp;
                    currentIndex = secondChildIndex
                }
                else{
                    return max
                }
            }
        }
    }
}

const a  = new PriorityQueue();
a.insert(2,1)
a.insert(4,0)
a.insert(1,3)
a.insert(6,4)
a.insert(8,5)
a.insert(5,6)
a.insert(3,9)
//        8
//     /     \  
//    6        5
//   / \      /  \
//  3   1    4     2 
// console.log(a.extractMax())
// console.log(a.extractMax())
console.log(a.value)

