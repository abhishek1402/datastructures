const Queue = require('../queue/queue')
class Node{
    constructor(val){
        this.val = val;
        this.smallLeft = null;
        this.largerRight = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(val){
        var newNode = new Node(val);
        if(this.root === null){
            this.root = newNode;
        }
        else{
            var currnetNode = this.root;
            while(currnetNode){
                if(currnetNode.val>val){
                    if(currnetNode.smallLeft){
                        currnetNode = currnetNode.smallLeft
                    }
                    else{
                        currnetNode.smallLeft = newNode;
                        return this
                    }
                }
                else{
                    if(currnetNode.largerRight){
                        currnetNode = currnetNode.largerRight
                    }
                    else{
                        currnetNode.largerRight = newNode;
                        return this
                    }
                }
            }
        }
    }
    find(val){
        var currnetNode = this.root;
        while(currnetNode){
            if(currnetNode.val == val){
                return true
            }
            else{
                if(currnetNode.val>val){
                    currnetNode = currnetNode.smallLeft;
                }
                else{
                    currnetNode = currnetNode.largerRight
                }
            }
        }
        return false
    }
    breathFirst(){
        const queue = new Queue();
        const visited = [];
        queue.enqueue(this.root);
        while(queue.length){
            let temp = queue.dequeue();
            visited.push(temp);
            if(temp.smallLeft){
                queue.enqueue(temp.smallLeft);
            }
            if(temp.largerRight){
                queue.enqueue(temp.largerRight)
            }
        }
    }
    depthFirstPreOrder(){
        const visited = [];
        function helper(val,visited) {
            visited.push(val);
            if(val.smallLeft){
                helper(val.smallLeft,visited); 
            }
            if(val.largerRight){
                helper(val.largerRight,visited);
            }

        }
        console.log(helper(this.root,visited));
    }
    depthFirstPostOrder(){
        const visited = [];
        function helper(val) {
            if(val.smallLeft){
               helper(val.smallLeft)
            }
            if(val.largerRight){
               helper(val.largerRight)
            }
            visited.push(val)
        }
        console.log(helper(this.root));
    }
    depthFirstInOrder(){
        const visited = [];
        function helper(val) {
            if(val.smallLeft){
               helper(val.smallLeft)
            }
            visited.push(val)
            if(val.largerRight){
               helper(val.largerRight)
            }
            
        }
        console.log(helper(this.root));
    }
}

        //     2
        //  /      \
        // 1        4
        //         / \   
        //        3   5
var a = new BinarySearchTree();
a.insert(2);
a.insert(4);
a.insert(3);
a.insert(5)

a.insert(1)
// a.depthFirstPreOrder();  //2,1,4,3,5
//a.depthFirstPostOrder();  //1,3,5,4,2
a.depthFirstInOrder()//1,2,3,4,5
console.log(a.find(25))