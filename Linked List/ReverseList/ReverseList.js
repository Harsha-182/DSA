// Approach to Reverse a Linked List
// Given a singly linked list, we need to reverse it in-place (i.e., without using extra space).

// Approach:-
// 1.  Iterative Method (Efficient)
// prev (initially null)
// current (initially head)
// next (to store current.next before modifying it)

// Traverse the linked list while current is not null.
// Store the next node (next = current.next).
// Reverse the current.next pointer to point to prev (current.next = prev).
// Move prev and current one step forward.
// After the loop, prev will be the new head of the reversed list.

// (Took 1h 58m to analyse this problem and write the solution at first attempt)
function reverseList(){
    let prev = null;
    let current = this.head;
    let next = null;
    
    while(current){
        next = current.next;  // Store next node
        current.next = prev;  // Reverse the link
        prev = current;       // Move prev to current node
        current = next;       // Move current to next node
    }
  
    this.head = prev;  // Update head to new first node

    return this.head;
}