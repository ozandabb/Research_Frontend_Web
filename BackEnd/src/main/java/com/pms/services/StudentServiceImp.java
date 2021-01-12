package com.pms.services;

import org.json.JSONArray;
import org.json.JSONObject;

public class StudentServiceImp implements StudentService{
	
	DBManager db = DBManager.getInstance();
	
	@Override
	public JSONObject getStudentBasicDetails(String id) {
		JSONObject j = DBManager.StudentDBManager.getStudentBasicDetails(id);
		return j;
	}

	@Override
	public JSONArray getStudentList() {
		JSONArray j = DBManager.StudentDBManager.getStudentList();
		return j;
	}

	@Override
	public JSONArray getFavStudentLanguages(String authString) {
		JSONArray j = DBManager.StudentDBManager.getFavStudentProgrammingLanguageList(authString);
		return j;
	}

	@Override
	public JSONArray getFavStudentLanguageFrameworks(String authString) {
		JSONArray j = DBManager.StudentDBManager.getFavStudentProgrammingLanguageFrameworkList(authString);
		return j;
	}

	@Override
	public JSONObject addFavStudentLanguages(String languages, String authString) {
		JSONObject j = DBManager.StudentDBManager.addFavStudentProgrammingLanguages(languages, authString);
		return j;
	}

	@Override
	public JSONObject addFavStudentLanguageFrameworks(String frameworks, String authString) {
		JSONObject j = DBManager.StudentDBManager.addFavStudentProgrammingLanguageFrameworks(frameworks, authString);
		return j;
	}

}
