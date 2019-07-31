/**
 * As the list is already sorted the best way to create a balanced tree is by
 * adding the middle node (parent) then the children. The algorithm basically
 * involves adding the middle element of which split of the array so that the
 * parent is added before the left and right children of each subtree.
 *
 * N = |values|
 * Time: O(N lg N)
 * Additional space: O(N)
 */
export function makeBalancedTree(values) {
  let tree = new Tree();
  if (values && values.length) {
    add(tree, values, 0, values.length - 1);
  }
  return tree;
}

function add(tree, values, start, end) {
  if (start === end) {
    tree.add(values[start]);
  }
  else if (start < end) {
    let mid = start + Math.floor((end - start) / 2);
    tree.add(values[mid]);
    add(tree, values, start, mid - 1);
    add(tree, values, mid + 1, end);
  }
}

//======

// Approach: divide and conquer, array and insert into tree
var Queue = require('./../util/Queue');
var BST = require('./../util/BST');

var insertBalanced = function(array) {
  var bst = new BST();
  var q = new Queue();
  var currArr;
  var floor = Math.floor;
  q.add(array);
  while (!q.isEmpty()) {
    currArr = q.remove();
    bst.insert(currArr[floor(currArr.length/2)]);
    if (currArr.slice(0, floor(currArr.length/2)).length > 0) {
      q.add(currArr.slice(0, floor(currArr.length/2)));
    }
    if (currArr.slice(floor(currArr.length/2) + 1).length > 0) {
      q.add(currArr.slice(floor(currArr.length/2) + 1));
    }
  }
  return bst;
};

/* TEST */
var arr1 = [1, 2, 3, 4, 5, 6];
var tree1 = insertBalanced(arr1);
tree1.printLevelOrder();

var arr2 = [1, 2, 3, 4, 5, 6, 7];
var tree2 = insertBalanced(arr2);
tree2.printLevelOrder();