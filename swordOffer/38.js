// 输入一棵二叉树，求该树的深度。
// 从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
// function TreeDepth(pRoot)
// {
   
//     if(pRoot == null) {
//         return 0;
//     }
//     let left = TreeDepth(pRoot.left);
//     let right = TreeDepth(pRoot.right);

//     return left > right ? left + 1 : right + 1
// }


function TreeDepth(pRoot){
    if(pRoot === null) {
        return 0;
    }
    let arr = [];
    arr.push(pRoot);
    let depth = 0;
    while(arr.length != 0) {
        let size = arr.length; 
        width = size;// 二叉树宽度
        depth ++; // 二叉树高度
        for(let i = 0; i < size; i++){
            let node = arr.shift();
            if(node.left) {
                arr.push(node.left);
            }
            if(node.right) {
                arr.push(node.right);
            }
        }
    }
    return depth
}
