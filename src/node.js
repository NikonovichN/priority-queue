class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if( this.left === null ){
			/*if( this.left ){
				this.left.parent = null;
			}*/

			this.left = node;
			this.left.parent = this;
			//console.log(this);
			/*if( this.left ){
				this.left.parent = this;
			}	*/		
			console.log('left');
		}else if( this.right === null ){
			/*if( this.right ){
				this.right.parent = null;
			}*/

			this.right = node;
			this.right.parent = this;
			//console.log(this);

			/*if( this.left ){
				this.right.parent = this;
			}	*/	
			console.log('right');	
		}else{
			return;
		}
	}

	removeChild(node) {
		if( this.left == node ){
			this.left.parent = null;
			this.left = null;
		}else if( this.right == node ){
			this.right.parent = null;
			this.right = null;
		}else if( this.right != node && this.left != node ){
			throw Error(error);
		}
	}

	remove() {
		if( this.parent != null ){
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if( this.parent == null ){
            return;
		}

		var copyThiNode = this;
		var rootOfThis = this.parent;
		var leftOfThis = this.left;
		var rightOfThis = this.right;

		if( rootOfThis.left == this ){ // If I`m left
			//console.log( '--- L E F T ---- Of This' );
			if( this.parent.parent ){
				console.log(this);
				if( this.parent.parent.right == this.parent ){
					this.parent = this.parent.parent;
					this.parent.right = this;
					rootOfThis.left = this.left;
					rootOfThis.right = this.right;
					rootOfThis.parent = this;
					this.left = rootOfThis;
				}else{
					this.parent = this.parent.parent;
					this.parent.left = this;

					rootOfThis.left = this.left;
					rootOfThis.right = this.right;
					rootOfThis.parent = this;
					this.left = rootOfThis;
				}
			}else{
				if( this.parent.right != null ){
					this.right = this.parent.right;
				}
		
				if( leftOfThis != null ){
					leftOfThis.parent = rootOfThis;
				}

				if( rightOfThis != null ){
					rightOfThis.parent = rootOfThis;
				}

				if( rootOfThis != null ){
					rootOfThis.parent = this;
					rootOfThis.left = leftOfThis;
					rootOfThis.right = rightOfThis;					
				}				
				
				this.left = rootOfThis;
				this.parent = null;
			}
		}else if( rootOfThis.right == this ){
			//console.log( '--- R I G H T --- Of This' );
			var currentLeft = this.parent.left;
			currentLeft.parent = this;

			if( leftOfThis != null ){
				leftOfThis.parent = rootOfThis;
			}

			if( rightOfThis != null ){
				rightOfThis.parent = rootOfThis;
			}

			if( rootOfThis != null ){
				rootOfThis.parent = this;
				rootOfThis.left = leftOfThis;
				rootOfThis.right = rightOfThis;					
			}				
			
			this.right = rootOfThis;
			this.left = currentLeft;
			this.parent = null;
		}
	}
}

module.exports = Node;
