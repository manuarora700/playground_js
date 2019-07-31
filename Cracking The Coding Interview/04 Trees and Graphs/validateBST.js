
/**
 * To check if a tree is a valid BST we need to check that all the values under
 * a node are within the ranges defined by the path we took to get there. For
 * example, initially the root can have any value, every time we go down a left
 * child that sets an upper bound on the valid values of their children by that
 * nodes value. Every time you travel down the right child you lower bound the
 * valid values of their children by that nodes value.
 *
 * N = |tree|
 * Time: O(N)
 * Additional space: O(lg N) - due to recursion. Assumes a balanced tree, worst
 * case is O(N)
 */
export function isValidBST(tree) {
  if (!tree) {
    throw new Error('invalid tree');
  }
  return isValidBSTRecursive(tree.root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}

function isValidBSTRecursive(node, min, max) {
  if (node) {
    if (node.val < min || node.val > max) {
      return false;
    }
    return isValidBSTRecursive(node.left, min, node.val) &&
      isValidBSTRecursive(node.right, node.val, max);
  }
  return true;
}


//========

var BinaryTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

var validateBST = function(bt) {
  // traverse the tree depth first, while
  // using a array with stack like behavior to check each node's validity
  // * assume values do not repeat
  var validateRecurse = function(currBt, stackArr) {
    for (var i = 0; i < stackArr.length; i++) {
      if (stackArr[i].side === 'left' && currBt.value > stackArr[i].node.value) {
        return false;
      } else if (stackArr[i].side === 'right' && currBt.value < stackArr[i].node.value) {
        return false;
      }
    }
    var left = currBt.left === null ? true : validateRecurse(currBt.left, stackArr.concat([{ node:currBt, side:'left'}]));
    var right = currBt.right === null ? true : validateRecurse(currBt.right, stackArr.concat([{ node:currBt, side:'right'}]));
    return true && left && right;
  };
  return validateRecurse(bt, []);
};

/* TESTS */

var bt1a = new BinaryTree(5);
var bt1b = new BinaryTree(4);
var bt1c = new BinaryTree(6);
var bt1d = new BinaryTree(1);
var bt1e = new BinaryTree(100);

bt1a.left = bt1b;
bt1a.right = bt1c;
bt1b.left = bt1d;
bt1b.right = bt1e;

console.log(validateBST(bt1a), false);

var bt2a = new BinaryTree(5);
var bt2b = new BinaryTree(3);
var bt2c = new BinaryTree(6);
var bt2d = new BinaryTree(1);
var bt2e = new BinaryTree(4);

bt2a.left = bt2b;
bt2a.right = bt2c;
bt2b.left = bt2d;
bt2b.right = bt2e;

console.log(validateBST(bt2a), true);