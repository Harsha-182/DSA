//https://leetcode.com/problems/palindrome-linked-list/

// Approach:-
// 1. Find the middle of the linked list.
// 2. Reverse the second half of the list.
// 3. Compare first half and reversed second half.

// Time complexity: O(n)
// Space complexity: O(1)

// Took 34m to analyse this problem and write the solution at first attempt.
// Spent 10m/34m debugging due to using prev.data instead of prev.val on leetcode
function isPalindrome(){
    if(!this.head & !this.head.next) // Single node is always palindrome
      return true
    
    // Step 1: Find the middle of the linked list
    let slow = this.head;
    let fast = this.head;
    
    while(fast && fast.next){
      slow = slow.next;
      fast = fast.next.next;
    }
    
    // Step 2: Reverse the second half of the list
    let prev = null;
    let current = slow;
    let next = null;
    
    while(current){
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    
    // Step 3: Compare first half and reversed second half
    let temp = this.head;
    while(prev){
      if(prev.data !== temp.data){
        
        return true
      }
      prev = prev.next;
      temp = temp.next;
    }
    
    return true
  }