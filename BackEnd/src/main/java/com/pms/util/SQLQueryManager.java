package com.pms.util;

import java.sql.Connection;

public class SQLQueryManager {
	
	//Setup Queries
	// Role Management
	private final String INSERT_ROLE = "INSERT INTO usr_Role(id, roleName, roleDesc, isActive) VALUES(0, ?, ?, 1)";
	private final String UPDATE_ROLE = "UPDATE usr_Role SET roleName = ?, roleDesc = ?, isActive = ? WHERE id = ?";
	private final String DELETE_ROLE = "DELETE FROM usr_Role WHERE id = ?";
	private final String ROLE_LIST = "SELECT * FROM usr_Role";
	private final String ROLE_NAME = "SELECT roleName FROM usr_Role WHERE id = ?";
	
	// Login Management
	private final String LOGIN_VERIFY = "SELECT l.userId, l.roleId, u.id, u.fname, l.password, l.isConfirmed, l.confirmationCode FROM usr_Login l, usr_User u WHERE l.email = ? and l.userId = u.id";
	private final String CHANGE_PASSWORD = "UPDATE usr_Login SET password = ? WHERE email = ?";
	private final String VERIFY_PASSWORD = "SELECT password FROM usr_Login WHERE email = ?";
	private final String ID_FROM_EMAIL = "SELECT userId FROM usr_Login WHERE email = ?";
	private final String FORGOT_PASSWORD = "UPDATE usr_Login set password = ? WHERE userId = ?";

	// User Management
	private final String INSERT_USR_USER = "INSERT INTO usr_User(id, fname, lname, initials, dob, phoneNo, gender, address, isActive, isDelete) VALUES(0, ?, ?, ?, ?, ?, ?, ?, 1, 0)";
	private final String INSERT_USR_Login = "INSERT INTO usr_Login(userId, email, password, roleId, isConfirmed, confirmationCode) VALUES((SELECT id FROM usr_User WHERE fname = ? and lname = ? and initials = ?), ?, ?, ?, ?, ?)";
	private final String EMAIL_CONFIRMATION = "UPDATE usr_Login SET isConfirmed = 1 WHERE email = ? and confirmationCode = ?";
	private final String REQUEST_CODE = "UPDATE usr_Login SET confirmationCode = ? WHERE email = ?";
	private final String CONFIRM_REQUEST_CODE = "SELECT * FROM usr_Login WHERE email = ? and confirmationCode = ?";
	private final String UPDATE_USER_DETAILS = "UPDATE usr_User SET firstName = ?, lastName = ?, initials = ?, dob = ?, phoneNo = ?, gender = ?, address = ?, isActive = ? WHERE id = ?";
	private final String DELETE_USR_USER = "UPDATE usr_User set isDelete = 1 WHERE id = ?";
	private final String USER_DUPLICATE_ENTRY_CHECK1 = "SELECT * FROM usr_User WHERE fname = ? and lname = ? and initials = ?";
	private final String USER_DUPLICATE_ENTRY_CHECK2 = "SELECT * FROM usr_Login l, usr_User u WHERE l.email = ?";
	
	//Admin Management
	private final String INSERT_USR_DTL_ADMIN = "INSERT INTO usr_dtl_Admin(id, userId) VALUES(0, ?)";
	
	//Student Management
	private final String INSERT_USR_DTL_STUDENT = "INSERT INTO usr_dtl_Student(id, userId, studentId, gpa, currentYear, currentSemester, facultyGroup, isBackEnd, isFrontEnd) VALUES(0, ?, ?, ?, ?, ?, ?, ?, ?)";
	private final String STUDENT_BASIC_DETAILS = "SELECT * FROM usr_User u, usr_dtl_Student uds where u.id = ? and u.id = uds.userId";
	private final String STUDENT_LIST = "SELECT * FROM usr_User u, usr_dtl_Student uds where u.id = uds.userId";
	private final String FAV_STUDENT_PROGRAMMINGLANGUAGES = "SELECT id, programmingLanguages FROM com_usr_User_z_ProgrammingLanguage WHERE userId = ?";
	private final String FAV_STUDENT_PROGRAMMINGLANGUAGEFRAMEWORKS = "SELECT id, programmingLanguageFrameworks FROM com_usr_User_z_ProgrammingLanguageFramework WHERE userId = ?";
	
	//Lecturer Management
	private final String INSERT_USR_DTL_LECTURER = "INSERT INTO usr_dtl_Lecturer(id, userId, lecturerId, isSupervisor) VALUES(0, ?, ?, 0)";

	//Client Management
	private final String INSERT_USR_DTL_CLIENT = "INSERT INTO usr_dtl_Client(id, userId, companyName) VALUES(0, ?, ?)";
	
	//Programming Languages
	private final String PROGRAMMING_LANGUAGE_BY_ID = "SELECT * FROM z_ProgrammingLanguage WHERE id = ?";
	
	//Programming Language Frameworks
	private final String PROGRAMMING_LANGUAGE_FRAMEWORK_BY_ID = "SELECT * FROM z_ProgrammingLanguageFramework WHERE id = ?";
	
	//usr_User_ProgrammingLanguages
	private final String ADD_PROGRAMMING_LANGUAGES_TO_USER = "UPDATE com_usr_User_z_ProgrammingLanguage SET programmingLanguages = ? WHERE userId = ?";
	
	//usr_User_ProgrammingLanguageFrameworks
	private final String ADD_PROGRAMMING_LANGUAGE_FRAMEWORKS_TO_USER = "UPDATE com_usr_User_z_ProgrammingLanguageFramework SET programmingLanguageFrameworks = ? WHERE userId = ?";
	
	//Procedures
	private final String LAST_INSERTED_USR_USER_USERID = "CALL getLastId_usr_User(@ID);SELECT @ID;";

	public String getINSERT_ROLE() {
		return INSERT_ROLE;
	}

	public String getUPDATE_ROLE() {
		return UPDATE_ROLE;
	}

	public String getDELETE_ROLE() {
		return DELETE_ROLE;
	}

	public String getROLE_LIST() {
		return ROLE_LIST;
	}

	public String getROLE_NAME() {
		return ROLE_NAME;
	}

	public String getLOGIN_VERIFY() {
		return LOGIN_VERIFY;
	}

	public String getCHANGE_PASSWORD() {
		return CHANGE_PASSWORD;
	}

	public String getVERIFY_PASSWORD() {
		return VERIFY_PASSWORD;
	}

	public String getID_FROM_EMAIL() {
		return ID_FROM_EMAIL;
	}

	public String getFORGOT_PASSWORD() {
		return FORGOT_PASSWORD;
	}

	public String getINSERT_USR_USER() {
		return INSERT_USR_USER;
	}

	public String getINSERT_USR_Login() {
		return INSERT_USR_Login;
	}

	public String getEMAIL_CONFIRMATION() {
		return EMAIL_CONFIRMATION;
	}

	public String getREQUEST_CODE() {
		return REQUEST_CODE;
	}

	public String getCONFIRM_REQUEST_CODE() {
		return CONFIRM_REQUEST_CODE;
	}

	public String getUPDATE_USER_DETAILS() {
		return UPDATE_USER_DETAILS;
	}

	public String getDELETE_USR_USER() {
		return DELETE_USR_USER;
	}

	public String getUSER_DUPLICATE_ENTRY_CHECK1() {
		return USER_DUPLICATE_ENTRY_CHECK1;
	}

	public String getUSER_DUPLICATE_ENTRY_CHECK2() {
		return USER_DUPLICATE_ENTRY_CHECK2;
	}

	public String getINSERT_USR_DTL_ADMIN() {
		return INSERT_USR_DTL_ADMIN;
	}

	public String getINSERT_USR_DTL_STUDENT() {
		return INSERT_USR_DTL_STUDENT;
	}

	public String getSTUDENT_BASIC_DETAILS() {
		return STUDENT_BASIC_DETAILS;
	}

	public String getINSERT_USR_DTL_LECTURER() {
		return INSERT_USR_DTL_LECTURER;
	}

	public String getINSERT_USR_DTL_CLIENT() {
		return INSERT_USR_DTL_CLIENT;
	}

	public String getLAST_INSERTED_USR_USER_USERID() {
		return LAST_INSERTED_USR_USER_USERID;
	}

	public static void setInstance(SQLQueryManager instance) {
		SQLQueryManager.instance = instance;
	}

	public String getSTUDENT_LIST() {
		return STUDENT_LIST;
	}
	
	public String get_FAV_STUDENT_PROGRAMMINGLANGUAGES() {
		return FAV_STUDENT_PROGRAMMINGLANGUAGES;
	}
	
	public String get_PROGRAMMING_LANGUAGE_BY_ID() {
		return PROGRAMMING_LANGUAGE_BY_ID;
	}
	
	public String get_FAV_STUDENT_PROGRAMMINGLANGUAGEFRAMEWORKS() {
		return FAV_STUDENT_PROGRAMMINGLANGUAGEFRAMEWORKS;
	}
	
	public String get_PROGRAMMING_LANGUAGE_FRAMEWORK_BY_ID() {
		return PROGRAMMING_LANGUAGE_FRAMEWORK_BY_ID;
	}
	
	public String get_ADD_PROGRAMMING_LANGUAGES_TO_USER() {
		return ADD_PROGRAMMING_LANGUAGES_TO_USER;
	}
	
	public String get_ADD_PROGRAMMING_LANGUAGE_FRAMEWORKS_TO_USER() {
		return ADD_PROGRAMMING_LANGUAGE_FRAMEWORKS_TO_USER;
	}

	private static SQLQueryManager instance;
	private SQLQueryManager() {}
	
	synchronized public static SQLQueryManager getInstance() {
		if (instance == null) {
			//synchronized block to remove overhead
			synchronized (Connection.class) {
				if (instance == null) {
					instance = new SQLQueryManager();
				}
			}
		}
		return instance;
	}

}
