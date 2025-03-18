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