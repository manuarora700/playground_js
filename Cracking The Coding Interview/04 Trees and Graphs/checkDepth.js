/**
 * This function attempts to check if the tree is completely balanced by finding
 * the shortest and longest paths from root to leaf. If the difference between
 * these two paths is greater than 1 then the tree is not balanced.
 *
 * N = |tree|
 * Time: O(N)
 * Additional space: O(lg N) - space cost is due to call stack size while using
 * recursion, this may be O(N) in the worst case.
 */
export function isBalanced(tree) {
  if (!tree || !tree.root) {
    return true;
  }

  let node = tree.root,
    cache = {
      min: Number.MAX_SAFE_INTEGER,
      max: Number.MIN_SAFE_INTEGER
    };

  findDepth(cache, node, 0);
  return cache.max - cache.min <= 1;
}

function findDepth(cache, node, depth) {
  if (!node) {
    if (depth < cache.min) {
      cache.min = depth;
    }
    if (depth > cache.max) {
      cache.max = depth;
    }
  } else {
    findDepth(cache, node.left, depth + 1);
    findDepth(cache, node.right, depth + 1);
  }
}

//======

var checkBalanced = function(bst) {
  // case where left is null and right is not null
  if (bst.left === null && bst.right !== null) {
    if (bst.right.left !== null || bst.right.right !== null) {
      return false;
    }
  }
  // case where left is not null and right is null
  if (bst.left !== null && bst.right === null) {
    if (bst.left.left !== null || bst.left.right !== null) {
      return false;
    }
  }
  // initialize answer variable as true
  var answer = true;
  //  if bst.left is not null, recursively call checkBalanced on bst.left
  if (bst.left !== null) {
    answer = answer && checkBalanced(bst.left);
  }
  //  if bst.left is not null, recursively call checkBalanced on bst.left
  if (bst.right !== null) {
    answer = answer && checkBalanced(bst.right);
  }
  // return answer
  return answer;
};

/* TEST */

var b1 = new BST(1);
b1.insert(2);
b1.insert(3);
b1.insert(4);
console.log(checkBalanced(b1), false);

var b2 = new BST(4);
b2.insert(2);
b2.insert(6);
b2.insert(1);
b2.insert(3);
b2.insert(5);
b2.insert(7);
console.log(checkBalanced(b2), true);