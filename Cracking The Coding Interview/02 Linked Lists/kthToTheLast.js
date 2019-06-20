/*
Approach 1 - TRIVIAL
1. Find the size of the LL by iterating first.
2. Find the length - kth element and iterate towards it and print it. Simple
Time O(N)
*/

function fromLast(list, k) {
  // find the length of the linked list
  if(!list) return;
  let length = 0;
  let current = list.head;
  let wantIndex;
  while(current) {
    length++;
    current = current.next;
  }
  // return length;

  wantIndex = length - k; // kth from last is (k - length)th from beginning

  // console.log(wantIndex);
  let counter = 0;
  current = list.head;
  // console.log(current);
  while(counter < wantIndex) {
      // console.log(counter);
      counter++;
      current = current.next;
  }
  console.log(current.data);
  return list.printList();
  // return current.data;

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
// removeDuplicates(list);

let k = 3
fromLast(list, k);

/*
Aproach 3
1. Begin with 2 pointers initialized to heads.
2. Move the first pointer for K iterations
3. Now move the second pointer and the first pointer with same pace until it hits the end
4. Second will be pointing at k - 1st element
TIme O(N) space O(1)

*/

function fromLast(list, k) {
  
  let first = list.head;
  let second = list.head;

  // Move first K nodes into the list
  for(let i = 0; i < k; i++) {
    if(first === null) return null;
    first = first.next;
  }

  // Now move both first and second at the same pace. When first hits the end second will be pointing at (k - 1)th element
  while(first) {
    first = first.next;
    second = second.next;
  }

  return second;

}

/*
Approach 4 RECURSION.
Didnt really come up with the correct implementation altough the code is correct.
*/

var findKthToLast = function(k, head) {
  // do recursively
  if (head === null || k < 1) {
    return;
  } else if (k === 1) {
    console.log(head.value);
    findKthToLast(k, head.next);
  } else {
    findKthToLast(k-1, head.next);
  }
};

