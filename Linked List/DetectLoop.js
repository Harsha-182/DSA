// Floyd’s Cycle Detection Algorithm (Tortoise and Hare)
// Time complexity: O(n)
// Space complexity: O(1)

//Refer DetectLoop.txt for explanation
function detectLoop() {
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;       // Move one step
      fast = fast.next.next;  // Move two steps

      if (slow === fast) {
        return true; // Loop detected
      }
    }
    return false; // No loop
}

// Example Usage
const list = new LinkedList();
list.insertAtEnd(1);
list.insertAtEnd(2);
list.insertAtEnd(3);
list.insertAtEnd(4);
list.insertAtEnd(5);

// Creating a loop manually for testing
list.head.next.next.next.next.next = list.head.next; // 5 → 2 (loop)

console.log(list.detectLoop()); // Output: true