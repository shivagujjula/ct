package ct;

import java.util.Arrays;

public class Test {
	  
	 
	public static void main(String[] args) {
		String[] colors = {"blue","red", "green", "yellow", "orange"};
		Arrays.sort(colors);
		int s1 = Arrays.binarySearch(colors, "orange");
		int s2 = Arrays.binarySearch(colors, "green");
		System.out.println(s1 + " "+ s2);
	}
}
