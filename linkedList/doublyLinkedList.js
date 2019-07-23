class Node{
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val)
        if(!this.length){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            var temp = this.tail;
            temp.next = newNode;
            newNode.prev = temp;
            this.tail = newNode;
        }
        this.length++
        return this;
    }
    pop(){
       if(!this.length) return undefined;
       else{
           this.tail = this.tail.prev;
           this.tail.next = null
       }
       this.length--
       return this;
    }
    shift(){
        if(!this.length) return undefined;
        else{
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--
       return this;
    }
    unshift(val){
        var newNode = new Node(val);
        if(!this.length){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            var temp = this.head;
            newNode.next = temp;
            temp.prev = newNode;
            this.head = newNode;
        }
        this.length++
        return this
    }
    get(postion){
        if(this.length-postion<postion-0){
            //done on the basis of previous
            let i = this.length
            let currentNode = this.tail;
            while(currentNode.prev){
                if(postion === i){
                    return currentNode.val;
                }else{
                    currentNode = currentNode.prev;
                }
                i--
            }
        }
        else{
            //done on the basis of next
            let i = 0
            let currentNode = this.head;
            while(currentNode.next){
                if(postion === i){
                    return currentNode.val;
                }else{
                    currentNode = currentNode.next;
                }
                i++
            }
        }
    }
    set(postion,val){
        if(this.length-postion<postion-0){
            //done on the basis of previous
            let i = this.length
            let currentNode = this.tail;
            while(currentNode.prev){
                if(postion === i){
                    currentNode.val = val
                }else{
                    currentNode = currentNode.prev;
                }
                i--
            }
        }
        else{
            //done on the basis of next
            let i = 0
            let currentNode = this.head;
            while(currentNode.next){
                if(postion === i){
                    currentNode.val = val
                }else{
                    currentNode = currentNode.next;
                }
                i++
            }
        }
        return this;
    }
    insert(postion,val){
        var newNode = new Node(val)
        if(this.length-postion<postion-0){
            //done on the basis of previous
            let i = this.length
            let currentNode = this.tail;
            while(currentNode.prev){
                if(postion === i){
                    newNode.prev = currentNode.prev;
                    newNode.next = currentNode;
                    let previous = currentNode.prev;
                    previous.next =newNode;
                    currentNode.prev = newNode
                    return this;
                }else{
                    currentNode = currentNode.prev;
                }
                i--
            }
        }
        else{
            //done on the basis of next
            let i = 0
            let currentNode = this.head;
            while(currentNode.next){
                if(postion === i){
                    newNode.prev = currentNode.prev;
                    newNode.next = currentNode;
                    let previous = currentNode.prev;
                    previous.next =newNode;
                    currentNode.prev = newNode
                    return this
                }else{
                    currentNode = currentNode.next;
                }
                i++
            }
        }
        return this;
    }
}
//8->2->4->6
var a  = new DoublyLL();
console.log(a.push(2))
console.log(a.push(4))
console.log(a.push(6))
console.log(a.unshift(8))
console.log(a.insert(3,99))