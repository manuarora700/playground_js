/**
Approach:
1. Create two pointers, fast and slow.
2. Move fast pointer at a rate of two steps and slow at a rate of 1 step.
3. When they colide, move slowpointer to the head of the linked list, Keep fastpointer where it is.
4. Move slow pointer and fast pointer at the same rate. Return the new collision point.
*/
function loopDetection(list) {
	let slow = list.head;
	let fast = list.head;

// Find meeting point
	while(fast !== null && fast.next !== null) {
		slow = slow.next;
		fast = fast.next.next;
		if(slow === fast) break; // collission detected and we have location of loop.
	}

	// Error check if no meeting point then no loop 
	if(fast === null || fast.next === null) return null;

	// meaty part -- set slow to head and keep fast there itself. increment both 1 step at a time and return new collision point.
	slow = list.head;
	while(slow !== fast) {
		slow = slow.next;
		fast = fast.next;
	}

	// both now point at the start of the loop
	// return any pointer
	return fast;
}


const list = new LinkedList();
list.insertLast(4);
list.insertLast(5);
list.insertLast(6);
list.insertLast(7);
list.insertLast(8);
list.insertLast(9);
list.insertLast(10);