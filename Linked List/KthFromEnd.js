// Source: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

//Normal approach
function getKthFromLast(k) {
    let count = 0;
    let temp = this.head;
    
    // Count total nodes
    while (temp) {
        count++;
        temp = temp.next;
    }
    
    if(count-k < 0){
      console.log("Invalid k value");
      return null
    }
    
    let current = this.head;

    for(let i=0;i<count-k;i++){
      current = current.next
    }
    
    console.log(current.data);
    return current.data
  }