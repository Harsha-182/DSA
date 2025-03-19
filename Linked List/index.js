// Creation of a Node (JavaScript)
class Node {
    constructor(data){
        this.data = data;
        this.null = this.null;
    }
}

// Insertion in the Linked List
// * Insert at the beginning
class LinkedList{
    constructor(){
        this.head = null;
    }

    insertAtBeginning(data){
        let newNode = new Node(data);
        newNode.next = this.head
        this.head = newNode;
        return newNode;
    }
}

const linked = new LinkedList;

console.log(linked.insertAtBeginning(10));
console.log(linked.insertAtBeginning(20));
console.log(linked.insertAtBeginning(30));

// Output:
// Node { head: 10, next: null }
// Node { head: 20, next: Node { head: 10, next: null } }
// Node {
//   head: 30,
//   next: Node { head: 20, next: Node { head: 10, next: null } }
// }

// * Insert at the end
class LinkedList{
    constructor(){
        this.head = null;
    }

    insertAtEnd(data){
        let newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            return;
        }

        let temp = this.head;
        while(temp.next){
            temp = temp.next;
        }

        temp.next = newNode;
    }

    printList(){
        let temp = this.head;

        while(temp){
            console.log(temp.head);
            temp = temp.next;
        }
    }
}

const linked1 = new LinkedList();

linked1.insertAtEnd(10);
linked1.insertAtEnd(20);
linked1.printList();

// Output:
// 10
// 20

//Search in the Linked List
function searchList(target){
    let temp= this.head;
    
    while(temp){
      if(temp.head === target){
        return true
      } else{
        temp= temp.next
      }
    }
    return false
}

//Count the number of nodes in the Linked List
function countNodes(){
    let temp= this.head;
    let count= 0;
    
    while(temp){
      count++
      temp= temp.next
    }
    return count
}

// Input: 
// 1 2 3 4 5
// Your Output:
// 5
// Expected Output:
// 5

//Add a node at middle of the Linked List
class LinkedList{
    constructor(){
      this.head = null
    }
    
    insertAtBeginning(data){
          let newNode = new Node(data);
          newNode.next = this.head
          this.head = newNode;
          return newNode;
    }
    
    insertNodeAtMid(data){
      let count = 0;
      let temp = this.head;
      // console.log("this.head,,,,", temp.next)
      while(temp){
        count++
        temp = temp.next;
      }
      
      let midIndex = Math.floor(count/2);
      
      temp = this.head
      for(let i=0;i<midIndex;i++){
        temp = temp.next
      }
      
      const newNode = new Node(data)
      newNode.next = temp;
      temp.next = newNode
      console.log( temp)
    }
  } 
  
  const l1 = new LinkedList()
  
  l1.insertAtBeginning(5);
  l1.insertAtBeginning(10);
  l1.insertAtBeginning(30)
  console.log(l1.insertAtBeginning(40))
  
  l1.insertNodeAtMid(20)

// Output:
// Node { head: 5, next: Node { head: 10, next: Node { head: 20, next: Node { head: 30, next: Node { head: 40, next: null } } } } } }