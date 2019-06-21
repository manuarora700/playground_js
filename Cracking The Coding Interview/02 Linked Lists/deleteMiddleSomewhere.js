/**
Approach 1 - If head is not given
1. Copy the value of the next node to the given node.
2. Point the next to the given nodes next ka next :p

Time - O(1)
Space O(1)
*/
function removeMiddle(node, remove) {
  // delete the particular provided node, The head is not provided
  
  remove.data = remove.next.data;
  remove.next = remove.next.next;

  return node;
}

/**
Approach 2 If head is given.
1. Traverse to the given node's 1 node previous.
2. point next value acordingly
Time O(N)
Space O(1)
*/
function removeMiddle(list, node) {
  // Head is given
  curr = list.head
  while(curr.next !== node) curr = curr.next;
  curr.next = curr.next.next; // Skip over the node when found
  return node;
}