class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if( this.left == null ){
			if( this.left ){
				this.left.parent = null;
			}

			this.left = node;

			if( this.left ){
				this.left.parent = this;
			}			
			console.log('left');
		}else if( this.right == null ){
			if( this.right ){
				this.right.parent = null;
			}

			this.right = node;

			if( node ){
				this.right.parent = this;
			}		
			console.log('right');	
		}else{
			return;
		}
	}

	removeChild(node) {
		//console.log( this );
		if( this.left == node ){
			this.left = null;
		}else if( this.right == node ){
			this.right = null;
		}else if( this.parent == node ){
			//this.parent = null;
		}else{
			throw Error(error);
		}
		//this.left = null;
	}

	remove() {
		if( this.parent != null ){
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		//console.log( this.parent.right  );
        if( this.parent == null ){
            return;
        }
        if( this.parent.left != null && this.parent.parent == null ){
            this.parent.parent = this;
            //console.log( this );          
        }else if( this.parent.parent != null && this.right == null ){
            //console.log( '---------------------------------------------' );
            //console.log( this );
            //this.parent.left = null;
            //this.parent.parent = this;
            //this.parent.parent.parent = this.parent;
            //this.left = this.parent.parent;
            //this.parent.parent.left = null;
            //this.parent.parent.left = this;
            //this.parent.parent.parent.left = this;
            //this.left = this.parent;
            var root = this.parent.parent;
            root.left = null;
            var child = this.parent;
            child.parent = this;
            child.left = null;
            //child.parent.left = 
            child.parent.parent = root;
            this.left = child;
            //root.appendChild(child);
			//console.log( this.left );
		} 
		if( this.parent.right != null ){
			console.log(this);
			//this.right = this.parent;
			//this.parent = this;
			//this.parent.parent = this.parent.right;
			console.log('----------------------------------');
			//console.log(this.parent.parent);
		}
	}
}

module.exports = Node;
