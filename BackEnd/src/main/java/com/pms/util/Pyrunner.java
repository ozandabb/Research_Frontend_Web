package com.pms.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Pyrunner {
	
	public static String runScript(String filePath)
	{
		String s = "";
		String output = "";

        try {
            Process p = Runtime.getRuntime().exec("python3 " + filePath);
            
            BufferedReader stdInput = new BufferedReader(new 
                 InputStreamReader(p.getInputStream()));

            BufferedReader stdError = new BufferedReader(new 
                 InputStreamReader(p.getErrorStream()));

            // read the output from the command
            while ((s = stdInput.readLine()) != null) {
                if(s != null)
                	output += s + "\n";
            }
            
            // read any errors from the attempted command
            while ((s = stdError.readLine()) != null) {
                if(s != null)
                	output += s + "\n";
            }
            
            return output;
        }
        catch (IOException e) {
            e.printStackTrace();
            return e.getMessage();
        }
	}

}
