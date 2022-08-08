import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class Main {

	public static void main(String[] args) {
		
		skipList.SkipList<String> list = new skipList.SkipList<String>("None");
	
		// Tried to make it relative to current folder i.e. ./.. but did not work.
		// Need to use absolute file path name. Sorry I cant figure it out, 
		// I spent too long with no results. 
		File file = new File("C:\\Users\\dalib\\source\\repos\\SkipListPrac.zip_expanded\\SkipListPrac/wordsForSkipList.txt");
		
		try {
			BufferedReader br = new BufferedReader(new FileReader(file));
			
			String st;
			while ((st = br.readLine()) != null) {
				list.insert(st);
			}
			
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		System.out.println(list.toString());
		
	}

}
