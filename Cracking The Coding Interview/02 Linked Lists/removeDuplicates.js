// Import linked list class from definitionOfLinkedListAndNode.js

/*
Approach 1
1. Initialize a hash table to set true to every value which is seen for the first time.
2. For ever node we check, we see if its there in the table. If yes then delete the node, else move one node further.

Time - O(N)
Space - O(N)
*/
function removeDuplicates(list) {
  // return list.printList();
  let seen = {};

  let current = list.head;
  let previous = null;
  // console.log(current);

  while(current) {
    
    if(seen[current.data]) {
      previous.next = current.next;
    } else {
      seen[current.data] = true;
      previous = current;
    }
    
    current = current.next;

  }
  return list.printList();
}

const list = new LinkedList();
// list.head = new Node(10);

list.insertFirst(10);
list.insertFirst(20);
list.insertFirst(30);
list.insertFirst(40);
list.insertFirst(50);
list.insertFirst(60);
list.insertAt(30, 4);
list.insertAt(60, 1);
list.printList();
removeDuplicates(list);

// Better way to write the same above code
/**
 * Iterate through list keeping a Set of all the values seen. If a seen value is
 * seen again in the list then skip over it.
 *
 * N = |list|
 * Time: O(N) -> Assuming Set is a HashSet structure with O(1) access times
 * Additional space: O(N)
 */
export function removeDuplicatesSet(list) {
  if (!list) {
    return list;
  }

  let seen = new Set(),
    node = list;

  // add head
  seen.add(node.val);
  while (node.next) {
    if (seen.has(node.next.val)) {
      // skip next node
      node.next = node.next.next;
    }
    else {
      seen.add(node.next.val);
      node = node.next;
    }
  }

  return list; // return list, head will never change
}

/*
Approach 2
If we are not allowed a buffer/Hash table then we can have two pointers
1. current which is the current node
2. Runner which checks all the rest of the nodes for same data element. If found same then remove
Time - O(N^2)
Space - O(1)
*/


function removeDuplicates(list) {
  let current = list.head;

  while(current) {
    // remove all future nodes which have the same value.
    let runner = current;
    while(runner.next) {
      if(runner.next.data === current.data) {
        // duplicate found, perform removal
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    current = current.next;
  }
  return list.printList();
}
