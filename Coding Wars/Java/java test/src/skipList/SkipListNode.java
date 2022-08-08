package skipList;

class SkipListNode<T> implements Comparable {
	
	/**
	 * links to the next nodes
	 */
	SkipListNode<T>[] links;
	
	/**
	 * the data that this node holds
	 */
	T data;
	
	// Basic constuctor
	SkipListNode(int amountOfLinks, T data){
		this.links = (SkipListNode<T>[])new SkipListNode[amountOfLinks];
		this.data = data;
	}

	@Override
	public int compareTo(Object o) {
		if(o.getClass() == this.getClass()) {
			if (this.data.toString().toLowerCase().equals(((SkipListNode<T>)o).data.toString().toLowerCase())) {
				return 0;
			}
			else if(this.data.toString().compareToIgnoreCase(o.toString()) < 0)
				return -1;
			else {
				return 1;
			}
		}
		else if (o.getClass() == this.data.getClass()){
			if (this.data.toString().toLowerCase().equals(o.toString().toLowerCase())) {
				return 0;
			}
			else if(this.data.toString().compareToIgnoreCase(o.toString()) < 0)
				return -1;
			else {
				return 1;
			}
		}
		else {
			return Integer.MAX_VALUE; 
		}
	}
	
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "Node {Amount of Levels:" + links.length + 
				"Data: " + this.data.toString() + "}";
	}
}
