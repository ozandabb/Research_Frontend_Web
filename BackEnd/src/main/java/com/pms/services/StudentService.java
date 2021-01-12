package com.pms.services;

import org.json.JSONArray;
import org.json.JSONObject;

public interface StudentService {

	//GET
	public JSONObject getStudentBasicDetails(String id);
	public JSONArray getStudentList();
	public JSONArray getFavStudentLanguages(String authString);
	public JSONArray getFavStudentLanguageFrameworks(String authString);
	
	//ADD
	public JSONObject addFavStudentLanguages(String languages, String authString);
	public JSONObject addFavStudentLanguageFrameworks(String frameworks, String authString);
}
