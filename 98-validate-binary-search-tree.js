/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return checkSubtree(root).valid;
};

function checkSubtree(node) {
    if (node==null) return {valid: true, min: null, max: null};
    const left = checkSubtree(node.left);
    const right = checkSubtree(node.right);
    return {
        valid: left.valid && 
            right.valid && 
            (left.max ?? node.val - 1) < node.val && 
            (right.min ?? node.val + 1) > node.val,
        min: left.min ?? node.val,
        max: right.max ?? node.val,
    };
}
