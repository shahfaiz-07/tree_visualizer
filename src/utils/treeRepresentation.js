class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null; // Left child
    this.right = null; // Right child
  }
}

// In-order Traversal (Left, Root, Right)
function inOrderTraversal(node) {
  if (node === null) return;
  inOrderTraversal(node.left);
  console.log(node.value); // Visit the node
  inOrderTraversal(node.right);
}

// Pre-order Traversal (Root, Left, Right)
function preOrderTraversal(node) {
  if (node === null) return;
  console.log(node.value); // Visit the node
  preOrderTraversal(node.left);
  preOrderTraversal(node.right);
}

// Post-order Traversal (Left, Right, Root)
function postOrderTraversal(node) {
  if (node === null) return;
  postOrderTraversal(node.left);
  postOrderTraversal(node.right);
  console.log(node.value); // Visit the node
}

// Level-order Traversal (BFS)
function levelOrderTraversal(root) {
  if (root === null) return;
  
  const queue = [root];
  
  while (queue.length > 0) {
    const currentNode = queue.shift();
    console.log(currentNode.value); // Visit the node
    
    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }
    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }
  }
}

function buildTreeFromLevelOrder(values) {
  if (values.length === 0 || values[0] === "N") return null;

  const root = new TreeNode(values[0]);
  const queue = [root];
  let i = 1;

  while (queue.length > 0 && i < values.length) {
    const currentNode = queue.shift();

    if (values[i] !== "N") {
      currentNode.left = new TreeNode(values[i]);
      queue.push(currentNode.left);
    }
    i++;

    if (i < values.length && values[i] !== "N") {
      currentNode.right = new TreeNode(values[i]);
      queue.push(currentNode.right);
    }
    i++;
  }

  return root;
}

export {TreeNode, buildTreeFromLevelOrder};