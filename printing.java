import java.util.*;
import java.io.*;

public class printing {
	public static void main(String[] args) throws IOException {

		PrintWriter out = new PrintWriter(new FileWriter("zipEmissions.json"));
	
		for (int i = 27006; i < 28616; i++) {
			out.println("\t\t{\t\"" + i + "\"" + ": {");
			out.println("\t\t\t\"emissions\": \"1080\"");
			out.println("\t\t},");
		}

		for (int i = 28616; i < 28910; i++) {
			out.println("\t\t{\t\"" + i + "\"" + ": { \n");
			out.println("\t\t\t\"emissions\": \"1397\"");
			out.println("\t\t},");
		}

		out.close();
		}
}	
