**
 * Travels through tree and adds values into a list of linked lists. Each level
 * of tree is represented in a linked list.
 *
 * N = |tree|
 * Time: O(N)
 * Additional space: O(N)
 */
export function listTreeByDepthOrder(tree) {
  let lists = [];
  addToList(lists, tree.root, 0);
  return lists;
}

function addToList(lists, node, depth) {
  if (node) {
    if (!lists[depth]) {
      lists[depth] = new LinkedList();
    }

    lists[depth].append(node.val);

    addToList(lists, node.left, depth + 1);
    addToList(lists, node.right, depth + 1);
  }
}

//=====
var listOfDepths = function(bst) {
  var listOfLists = [];
  var list = null;
  var newNode;
  var q = new Queue();
  var nextq = new Queue();
  var currNode = bst;

  q.add(currNode);
  while (!q.isEmpty()) {
    currNode = q.remove();
    newNode = new LinkedList(currNode.value);
    newNode.next = list;
    list = newNode;
    if (currNode.left !== null) {
      nextq.add(currNode.left);
    }
    if (currNode.right !== null) {
      nextq.add(currNode.right);
    }
    if (q.isEmpty()) {
      listOfLists.push(list);
      list = null;
      q = nextq;
      nextq = new Queue();
    }
  }
  return listOfLists;
};

/* TEST */
// 1, 2, 3, 4, 5, 6, 7
var tree = new BST(4);
tree.insert(2);
tree.insert(6);
tree.insert(1);
tree.insert(3);
tree.insert(5);
tree.insert(7);

console.log(listOfDepths(tree));