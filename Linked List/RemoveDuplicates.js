//Given a sorted linked list, delete all duplicates such that each element appears only once.

// Remove duplicates in sorted linked list(Two Pointers)
// Time complexity: O(n)
// Space complexity: O(1)
//Took 10m to write the solution at first attempt with approach and code
function removeDuplicatesInSortedList(){
    let current = this.head;
    
    while(current && current.next){
      if(current.data === current.next.data){
        current.next = current.next.next;
      } else {
        current = current.next
      }
    }
    
    return this.head
  }

// Remove Duplicates in unsorted linked list
// Time complexity: O(n)
// Space complexity: O(n)
//Took 10m to write the solution at first attempt with approach and code
function removeDuplicatesInUnsortedList(){
    if(!this.head) return null;
    
    let set = new Set();
    let current = this.head;
    let prev = null;
    
    while(current){
      if(set.has(current.data)){
        prev.next = current.next; //Remove Duplicates;
      } else {
        set.add(current.data);
        prev = current;
      }
      current = current.next
    }
    return this.head;
}


// 1️⃣ current Points to this.head
// When we start the loop:

// let current = this.head;
// current now holds a reference to this.head, which means both current and this.head point to the same memory address.