package skipList;

import java.util.Arrays;
import java.util.Random;

public class SkipList<T> {
	
	/**
	 * log2 as a double already calucated so it dosn't need to be done again
	 */
	private static double log2 = Math.log(2.0);
	
	/**
	 * the root node of the list
	 */
	private SkipListNode<T> root;
	
	/**
	 * the highest level anything in the list can be
	 */
	private int maxLevel;
	
	/**
	 * a random number generator since it is needed for each insert
	 */
	private Random rand;
	
	/**
	 * the size of the the array will be stored here
	 */
	private int size;
	
	/**
	 * Builds a skip list
	 * @param defualtObject this object will be held held in the root node and should be used to determine 
	 * The rest of the object moving forward
	 */
	public SkipList(T defualtObject){
		root = new SkipListNode<T>(1, defualtObject);
		maxLevel = 1;
		log2 = Math.log(2.0);
		rand = new Random();
		size = 0;
	}
	
	/**
	 * Search though the list for a object of note and return the closest match to it.
	 * @param target the object you are looking for
	 * @return A array of nodes for that location.
	 */
	private SkipListNode<T>[] search (T target){
		SkipListNode<T>[] prev = (SkipListNode<T>[])new SkipListNode[maxLevel];
		SkipListNode<T> current = root;
		
		for(int index = current.links.length -1; index >= 0; index--) {
			while (current.links[index] != null && current.links[index].compareTo(target) <= 0) {
				current = current.links[index];
			}
			// store the previous spot
			prev[index] = current;
		}
		//return the search
		return prev;
	}
	
	/**
	 * gets the object held in the list otherwise returns null
	 * @param target the object found at your targets position
	 * @return null if the object is not in the list, or else 
	 * 	it will return the other object that is equal to the target
	 */
	public T find(T target) {
		SkipListNode<T>[] prev = search(target);
		if (prev[0] != null && prev[0].compareTo(target) == 0) {
			return prev[0].data;
		}
		else {
			return null;
		}
	}
	
	/**
	 * the object to be added to the Skip list
	 * @param entry the object that you wish to be added
	 */
	public void insert(T entry) {
		//
		// Implement this
		//
		
		// First do the search for the two nodes its going between.
		
//		Then do this
		// Assign a random depth to the linked list extra dimensino node. Ycoord
		int randomLevel = this.randomLevel();
		
		// Create the new Skipped list node with depth
		SkipListNode<T> newEntry = new SkipListNode<T>(randomLevel, entry);
		
		
		// Returns a SkipListNode<T> array which is the element before insertion.
		// Eg if we were inserting 6 it would be the 5 element up to level 4.
		SkipListNode<T>[] prev = this.search(entry);
		
		/**
		 *  | 4 | --------------> |___| --------------------------------------> |   |
		 *  | 3 | --------------> |___| --------------------------------------> |   |
		 *  | 2 | --------------> |___| --------------> |____|----------------> |   |
		 *  | 1 | --------------> |___| --------------> |____|----------------> |   |
		 *  | 0 | ---> | 3 | ---> | 5 | ---> | 7 | ---> | 12 | ---> | 13 | ---> |   |
		 *
		 *
		 */
		
		// Empty test, return nothing. 
		if (prev[0].compareTo(newEntry) == 0) { return; }
		
		// Iterate across each element of the returned SkipListNode<T>[]. i.e. 
		
		/**
		 *  |   | 
		 *  |   | 
		 *  |___| 
		 *  |___| 
		 *  | 5 | 
		 */
		for (int i=0; i < prev.length; i++) {
			
			// Iterate across the new random length insertion SkipListNode<T> 3 in this instance
			
			/**
			 *  |___| 
			 *  |___| 
			 *  | 6 | 
			 */
			if (i < randomLevel) {
//				System.out.println(this.toString());
//				System.out.println("New entry" + newEntry.toString());
				System.out.println("Prev: " + prev);
//				System.out.println("I: " + i);

				/**
				 *  |   |--------------> |____|----------------> |   |
				 *  |   |--------------> |____|----------------> |   |
				 *  | 6 |---> | 7 | ---> | 12 | ---> | 13 | ---> |   |
				 */
				
				// Put the old links into the new Node links
				// Nod new node points to what old node did. Up to its new random height
				
				newEntry.links[i] = prev[i].links[i];
				
				/**
				 *  | 4 | --------------> |___| --------------------------------------> |   |
				 *  | 3 | --------------> |___| --------------------------------------> |   |
				 *  | 2 | --------------> |___| ---> |___| --------------> |____|
				 *  | 1 | --------------> |___| ---> |___| --------------> |____|
				 *  | 0 | ---> | 3 | ---> | 5 | ---> | 6 | ---> | 7 | ---> | 12 |
				 *
				 *
				 */
				
				prev[i].links[i] = newEntry;
//				System.out.println(this.toString());
			}
		}
		
		// Calculate if the size needs to be increased, if yes
		// Copies array and then increases link depth. 
		if (this.size >= this.calculateMaxCap()) {
			maxLevel++;
			root.links = Arrays.copyOf(root.links, maxLevel);
		}
		this.size++;
		
	}
	
	/**
	 * Returns the next max cap before this list needs to increase its size
	 * @return a integer that represents the next cap
	 */
	public int calculateMaxCap() {
		return pow2roundup(size);
	}
	
	/**
	 * Returns a logrithmic random number
	 * @return a integer between level and max level.
	 */
	private int randomLevel() {
		int level = (int) (Math.log(rand.nextInt(maxLevel) + 1) / log2);
		if (level > maxLevel -1) {
			level = maxLevel -1;
		}
		return maxLevel - level;
	}
	
	@Override
	public String toString() {
		String output = "**Split List Object** \n";
		output += "Size : " + this.size + "\n";
		output += "Max Level : " + this.maxLevel + "\n";
		output += "Next Cap : " + this.calculateMaxCap() + "\n";
		
		SkipListNode<T> current = root;
		while (current.links[0] != null) {
			current = current.links[0];
			output += current.toString() + "\n";
		}
		
		return output;
	}
	
	/**
	 * @return a integer primitive of all the items in the list
	 */
	public int Size() {
		return size;
	}
	
	/**
	 * rounds a integer to the nearest power of two 
	 * that is greater or equal to it.
	 * @param x the inital int
	 * @return the next power of two
	 */
	private int pow2roundup (int x)
	{
	    if (x < 0)
	        return 0;
	    --x;
	    x |= x >> 1;
	    x |= x >> 2;
	    x |= x >> 4;
	    x |= x >> 8;
	    x |= x >> 16;
	    return x+1;
	}
}
