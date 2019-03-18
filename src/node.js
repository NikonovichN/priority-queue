class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		this.parent = node;
		/*if( this.parent == null ){
			this.parent = node;
		} */
		if( this.left == null ){			
			this.left = node;
		}else if( this.right == null ){
			this.right = node;
		}
	}

	removeChild(node) {
		if( this.parent == node ){
			this.parent = node;
		} 
		if( this.left == node ){
			this.left = null;
		}else if( this.right == node ){
			this.right = null;
		}else{
			throw Error(error);
		}
	}

	remove() {
		console.log( this );
		if( this.parent != null ){
			Node.removeChild(this.parent);
			console.log( 'remove' );
		}
	}

	swapWithParent() {
		
	}
}

module.exports = Node;
