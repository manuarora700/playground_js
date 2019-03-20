// Implement priority queue -- Heap DS

class QElement { 
    constructor(element, priority) 
    { 
        this.element = element; 
        this.priority = priority; 
    } 
} 
  
// PriorityQueue class 
class PriorityQueue { 
  
    // An array is used to implement priority 
    constructor() 
    { 
        this.items = []; 
    } 
  
    // functions to be implemented 
enqueue(element, priority) 
{ 
    // creating object from queue element 
    var qElement = new QElement(element, priority); 
    var contain = false; 
  
    // iterating through the entire 
    // item array to add element at the 
    // correct location of the Queue 
    for (var i = 0; i < this.items.length; i++) { 
        if (this.items[i].priority > qElement.priority) { 
            // Once the correct location is found it is 
            // enqueued 
            this.items.splice(i, 0, qElement); 
            contain = true; 
            break; 
        } 
    } 
  
    // if the element have the highest priority 
    // it is added at the end of the queue 
    if (!contain) { 
        this.items.push(qElement); 
    } 
} 
// dequeue method to remove 
// element from the queue 
dequeue() 
{ 
    // return the dequeued element 
    // and remove it. 
    // if the queue is empty 
    // returns Underflow 
    if (this.isEmpty()) 
        return "Underflow"; 
    return this.items.shift(); 
} 
// front function 
front() 
{ 
    // returns the highest priority element 
    // in the Priority queue without removing it. 
    if (this.isEmpty()) 
        return "No elements in Queue"; 
    return this.items[0]; 
} 
// rear function 
rear() 
{ 
    // returns the lowest priorty 
    // element of the queue 
    if (this.isEmpty()) 
        return "No elements in Queue"; 
    return this.items[this.items.length - 1]; 
} 

// isEmpty function 
isEmpty() 
{ 
    // return true if the queue is empty. 
    return this.items.length == 0; 
} 


// printQueue function 
// prints all the element of the queue 
printPQueue() 
{ 
    var str = ""; 
    for (var i = 0; i < this.items.length; i++) 
        str += this.items[i].element + " "; 
    return str; 
} 
 
}
// creating object for queue classs 
var priorityQueue = new PriorityQueue(); 
  
// testing isEmpty and front on an empty queue 
// return true 
console.log(priorityQueue.isEmpty()); 

// returns "No elements in Queue" 
console.log(priorityQueue.front()); 
  
// adding elements to the queue 
priorityQueue.enqueue("Sumit", 2); 
priorityQueue.enqueue("Gourav", 1); 
priorityQueue.enqueue("Piyush", 1); 
priorityQueue.enqueue("Sunny", 2); 
priorityQueue.enqueue("Sheru", 3); 
  
// prints [Gourav Piyush Sumit Sunny Sheru] 
console.log(priorityQueue.printPQueue()); 
  
// prints Gourav 
console.log(priorityQueue.front().element); 
  
// pritns Sheru 
console.log(priorityQueue.rear().element); 
  
// removes Gouurav 
// priorityQueue contains 
// [Piyush Sumit Sunny Sheru] 
console.log(priorityQueue.dequeue().element); 
  
// Adding another element to the queue 
priorityQueue.enqueue("Sunil", 2); 
  
// prints [Piyush Sumit Sunny Sunil Sheru] 
console.log(priorityQueue.printPQueue()); 