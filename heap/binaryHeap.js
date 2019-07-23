class BinaryHeap{
    constructor(){
        this.value = [];
    }
    insert(val){
        this.value.push(val);
        let currentIndex = this.value.length-1
        while(true){
            let parentIndex = Math.floor(currentIndex/2)
            let parent = this.value[parentIndex]
            if(parent && parent<this.value[currentIndex]){
                let temp = parent;
                this.value[parentIndex] = val;
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

const a  = new BinaryHeap();
a.insert(2)
a.insert(4)
a.insert(1)
a.insert(6)
a.insert(8)
a.insert(5)
a.insert(3)
//        8
//     /     \  
//    6        5
//   / \      /  \
//  3   1    4     2 
console.log(a.extractMax())
console.log(a.extractMax())
console.log(a.value)

