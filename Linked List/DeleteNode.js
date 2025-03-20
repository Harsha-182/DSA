class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Insert at the end
    insertAtEnd(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }
        temp.next = newNode;
    }

    // Delete a node by value
    deleteNode(value) {
        if (!this.head) return; // Empty list

        // Case 1: Deleting the head node
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let temp = this.head;
        let prev = null;

        // Search for the node to delete
        while (temp !== null && temp.value !== value) {
            prev = temp;
            temp = temp.next;
        }

        // If node not found
        if (temp === null) return;

        // Case 2 & 3: Delete middle or last node
        prev.next = temp.next;
    }

    // Print the linked list
    printList() {
        let temp = this.head;
        let result = "";
        while (temp) {
            result += temp.value + " -> ";
            temp = temp.next;
        }
        console.log(result + "null");
    }
}

// Example Usage
let list = new LinkedList();
list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
list.insertAtEnd(40);
list.insertAtEnd(50);

console.log("Before Deletion:");
list.printList(); // 10 -> 20 -> 30 -> 40 -> 50 -> null

list.deleteNode(30);
console.log("After Deleting 30:");
list.printList(); // 10 -> 20 -> 40 -> 50 -> null

list.deleteNode(10);
console.log("After Deleting Head (10):");
list.printList(); // 20 -> 40 -> 50 -> null

list.deleteNode(50);
console.log("After Deleting Last Node (50):");
list.printList(); // 20 -> 40 -> null
