package com.pms.util;

import java.util.HashMap;

public class Main {
	
	public static final HashMap<String, String> APIURL = new HashMap<String, String>();
	
	//URLS
	public static final String BAST_URL = "http://localhost:8080/SPMS_API/api/";
	public static final String SITE_HOST = "http://localhost:8080";
	
	//Mail
	public static final String[] EMAIL_LOGIN = {"spmsystemSL@gmail.com","gpwdyfmkichabvth"};
	public static final String MAIL_HOST = "smtp.gmail.com";
	public static final String MAIL_PORT = "465";
	
	//Data Mining Model Path
	public static final String MODEL_PATH = "PythonScripts/";
	
	//Get URL method
	public static HashMap<String, String> getAPIURL(){
		APIURL.put("emailConfirmationDirect", BAST_URL + "user/emailConfirmationDirect/");
		return APIURL;
	}
}
