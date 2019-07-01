/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function(root) {
    let result = [];
    traversalInorder(root);
    
    function traversalInorder(root) {
        if(root) {
            traversalInorder(root.left);
            result.push(root.val);
            traversalInorder(root.right);
        }
    }
    
    return result;
};