class QNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class Queue{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }
    enqueue(val){
        const newNode = new QNode(val)
        if(this.length == 0){
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        }
        else{
            let temp = this.tail;
            temp.next = newNode;
            this.tail = newNode;
            this.length++
        }
        return this;
    }
    dequeue(){
        if(this.length==0)return undefined;
        let temp = this.head;
        this.head = this.head.next;
        this.length--
        return temp.val
    }
}
module.exports = Queue;