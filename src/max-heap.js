const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		let nodeNew = new Node(data, priority);
		this.insertNode(nodeNew);
		this.shiftNodeUp(nodeNew);
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		return this.root == null ? true : false;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {

		if( this.root == null ){
			this.root = node;
			//this.parentNodes.push(new Node(node.data, node.priority));
			this.parentNodes.push(node);
			return;
		}

		if( this.root.right == null ){
			this.root.appendChild(node);

			if( this.root.right != null ){
				this.parentNodes.shift();
				//this.parentNodes.push(new Node(node.data, node.priority));
				this.parentNodes.push(node);
			}else{
				//this.parentNodes.push(new Node(node.data, node.priority));
				this.parentNodes.push(node);
			}
		}else{
			if( this.root.left.right == null ){
				if( this.root.left.left == null ){
					//this.parentNodes.push(new Node(node.data, node.priority));
					this.parentNodes.push(node);
					this.root.left.appendChild(node);
				}else{
					this.root.left.appendChild(node);

					if( this.root.left.right != null ){
						this.parentNodes.shift();
						//this.parentNodes.push(new Node(node.data, node.priority));
						this.parentNodes.push(node);
					}else{
						this.parentNodes.shift();
						//this.parentNodes.push(new Node(node.data, node.priority));
						this.parentNodes.push(node);
					}
				}
			}else{
				if( this.root.right.left == null ){
					//this.parentNodes.push(new Node(node.data, node.priority));
					this.parentNodes.push(node);
					this.root.right.appendChild(node);
				}else{
					this.root.right.appendChild(node);

					if( this.root.right.right != null ){
						this.parentNodes.shift();
						//this.parentNodes.push(new Node(node.data, node.priority));
						this.parentNodes.push(node);
					}else{
						this.parentNodes.shift();
						//this.parentNodes.push(new Node(node.data, node.priority));
						this.parentNodes.push(node);
					}
				}
				//console.log(this.parentNodes);
			}
		}

		
	}

	shiftNodeUp(node) {
		
		this.root = node;

	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
