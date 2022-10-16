const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  } 

  root() {
    return this.treeRoot;
  }

  add(data) {
    function addInside(node, data) {
      if (!node) {
        
        return new Node(data);
      }

      if (node.data === data) {

        return node;
      }

      if (data > node.data) {
        node.right = addInside(node.right, data);
      } 
      else {
        node.left = addInside(node.left, data);
      }
      return node;
    }
    this.treeRoot = addInside(this.treeRoot, data);
  }

  has(data) {
    function searchNode(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (data > node.data) {
        return searchNode(node.right, data);
      } 
      else {
        return searchNode(node.left, data);
      }
    }
    return searchNode(this.treeRoot, data);
  }

  find(data) {
    function findNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data > node.data) {
        return findNode(node.right, data);
      } 
      else {
        return findNode(node.left, data);
      }
    }
    return findNode(this.treeRoot, data);
  }

  remove(data) {
    function deleteNode(node, data) {
      if (!node) {
        return null;
      }
      if (data > node.data) {
        node.right = deleteNode(node.right, data);
        return node;
      } 
      else if (data < node.data) {
        node.left = deleteNode(node.left, data);
        return node;
      } 
      else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRightside = node.right;

        while (minFromRightside.left) {
          minFromRightside = minFromRightside.left;
        }

        node.data = minFromRightside.data;
        node.right = deleteNode(node.right, minFromRightside.data);

        return node;
      }
    }
    this.treeRoot = deleteNode(this.treeRoot, data);
  }

  min() {
    if (!this.treeRoot) {
      return null;
    }

    let minNumber = this.treeRoot;
    while(minNumber.left) {
      minNumber = minNumber.left;
    }
    return minNumber.data;
  }

  max() {
    if (!this.treeRoot) {
      return null;
    }

    let maxNumber = this.treeRoot;
    while(maxNumber.right) {
      maxNumber = maxNumber.right;
    }
    return maxNumber.data;
  }
}

module.exports = {
  BinarySearchTree
};