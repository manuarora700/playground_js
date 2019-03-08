// Implement a simple hash table in Js 
// It should have the following methods
// constructor(size) to set the size of constructor
// _hash(keys) hash function
// set(key, value) set a value at an address
// get(key) get a value from an address
// keys() print all keys 

// Although we have Objects in JavaScript for the same purpose but let's just implement everything from scratch.

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for(let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash
  }

  set(key, value) {
    let address = this._hash(key);
    if(!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }


  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if(currentBucket) {
      for(let i = 0; i < currentBucket.length; i++) {
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    // prints all keys
    const keysArray = [];

    for(let i = 0; i < this.data.length; i++) {
      if(this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

// calling all functions

let myHashTable = new HashTable(50);
myHashTable.set('Manu', 1);
myHashTable.set('Arora', 20);
myHashTable.set('Saluja', 30);
myHashTable.set('Yash', 40);
myHashTable.get('Saluja');

myHashTable.keys();