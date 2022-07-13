public class AbbreviateTwoWords {
  public static void main(String[] args) {

  String abc = remove("John John");

  System.out.println(abc);
  }

  public static String remove(String str) {
    String retString = "";

    for (int i = 0; i < str.length(); i++) {
      if ((i != 0) || (i != str.length() - 1)) {
        retString += str.charAt(i);
      }
    }
    return retString;
  }

}