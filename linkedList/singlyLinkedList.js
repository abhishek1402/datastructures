class Node{
    constructor(val){
        this.val = val;
        this.next  = null;
    }
}

class SinglyLinkedList{
    constructor(){
       this.head = null
       this.tail = null
       this.length = 0;
    }
    push(val){
       if(this.head == null && this.tail == null){
            let newNode = new Node(val);
            this.head = newNode;
            this.tail = newNode;
       }
       else{
            let newNode = new Node(val);
            this.tail.next = newNode
            this.tail = newNode;
       }
       this.length++
    }
    pop(){
        if(!this.length){
            return undefined
        }
        else{
            let current = this.head;
            let pre = current
            while(current.next){
                current = current.next;
                if(current.next)
                pre = current
            }
            pre.next = null;
            this.tail = pre;
            this.length--
            if(this.length == 0){
                this.head = null;
                this.tail = null
            }
            return current.val;
        }
    }
    shift(){
        if(!this.length){
            return undefined
        }
        else{
            let pre = this.head;
            this.head = this.head.next;
            this.length--
            if(this.length == 0){
                this.head = null;
                this.tail = null
            }
            return pre.val
        }
    }
    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.next = this.head;
            this.head = newNode
        }
       this.length++
       return this;
    }
    get(position){
        if(this.length === 0){
            return undefined
        }
        else{
            let i = 0;
            let current = this.head;
            while(current.next){
                if(i == position){
                    return current;
                }
                else{
                    current = current.next
                }
                i++
            }
        }
    }
    set(position,val){
        if(this.length === 0){
            return undefined
        }
        else{
            var foundNode = this.get(position);
            if(foundNode){
                foundNode.val = val;
                return true
            } 
            return false            
        }
    }
    insert(position,val){
        if(this.length === 0){
            return undefined
        }
        else{
            if (position === 0){
                return !!this.unshift(val)
            }
            if(position == this.length){
                return !!this.push(val);
            }
            var foundNode = this.get(position);
            var previosNode = this.get(position-1);
            var newNode = new Node(val)
            newNode.next = foundNode;
            previosNode.next = newNode   
            this.length++    
            return this
        }
    }
    remove(position){
        if (position === 0){
            return !!this.shift(val)
        }
        if(position == this.length){
            return !!this.pop(val);
        }
        var foundNode = this.get(position);
        var previosNode = this.get(position-1);
        previosNode.next = foundNode.next;
        this.length--
        return this
    }
    reverse(){
        let i = 0;
        var node = this.head;
        this.head = this.tail;
        this.tail = node; 
        let previous = null
        let next;
        while(i<this.length){
            next = node.next;
            node.next = previous;
            previous = node;
            node = next
            i++;
        }
    }
}

a = new SinglyLinkedList();
a.push(1);
a.push(2);
a.push(3);
a.push(4);
// console.log(a.pop())
// console.log(a.shift());

// console.log(a.unshift(5));
// console.log(a.remove(2))
// console.log(a.get(2))
a.reverse();
console.log(a);