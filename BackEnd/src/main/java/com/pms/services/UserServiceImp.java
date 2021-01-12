package com.pms.services;
import org.json.JSONObject;

import com.pms.util.Crypt;

public class UserServiceImp implements UserService {

	DBManager db = DBManager.getInstance();
	
	@Override
	public JSONObject registerStudent(String firstName, String lastName, String initials, String dob, String phoneNo, String gender,
			String address, String studentId, String currentYear, String currentSemester, String facultyGroup, String email, String password) {
		JSONObject j = DBManager.UserDBManager.UserClass.getInstance().userRegistration(firstName, lastName, initials, dob, phoneNo, gender, address, email, password, String.valueOf(1));	
		if(j.getString("status") != "error") {
			return DBManager.UserDBManager.UserClass.getInstance().insertStudentDetails(email, studentId, String.valueOf(0), currentYear, currentSemester, facultyGroup, String.valueOf(0), String.valueOf(0));
		}else {
			return j;
		}
	}

	@Override
	public JSONObject registerLecturer(String firstName, String lastName, String initials, String dob, String phoneNo, String gender,
			String address, String lecturerId, String email, String password) {
		JSONObject j = DBManager.UserDBManager.UserClass.getInstance().userRegistration(firstName, lastName, initials, dob, phoneNo, gender, address, email, password, String.valueOf(2));
		if(j.getString("status") != "error") {
			return DBManager.UserDBManager.UserClass.getInstance().insertLecturerDetails(email, lecturerId);
		}else {
			return j;
		}
	}

	@Override
	public JSONObject registerClient(String firstName, String lastName, String initials, String dob, String phoneNo, String gender,
			String address, String companyName, String email, String password) {
		JSONObject j = DBManager.UserDBManager.UserClass.getInstance().userRegistration(firstName, lastName, initials, dob, phoneNo, gender, address, email, password, String.valueOf(3));
		if(j.getString("status") != "error") {
			return DBManager.UserDBManager.UserClass.getInstance().insertClientDetails(email, companyName);
		}else {
			return j;
		}
	}
	
	@Override
	public JSONObject login(String email, String password) {
		return DBManager.UserDBManager.LoginClass.getInstance().login(email, password);
	}

	@Override
	public JSONObject resetPassword(String email, String currentPassword, String newPassword) {
		return DBManager.UserDBManager.LoginClass.getInstance().resetPassword(email, currentPassword, newPassword);
	}
	
	@Override
	public JSONObject forgotPassword(String email) {
		return DBManager.UserDBManager.LoginClass.getInstance().forgotPassword(email);
	}

	@Override
	public JSONObject verifyPassword(String uid, String currentPassword) {
		return DBManager.UserDBManager.LoginClass.getInstance().verifyPassword(uid, currentPassword);
	}

	@Override
	public JSONObject getRoleName(String roleId) {
		return DBManager.UserDBManager.LoginClass.getInstance().getRoleName(roleId);
	}

	@Override
	public JSONObject emailConfirmation(String email, String confirmationCode) {
		return DBManager.UserDBManager.LoginClass.getInstance().emailConfirmation(email, confirmationCode);
	}

	@Override
	public JSONObject requestCode(String email) {
		return DBManager.UserDBManager.LoginClass.getInstance().requestConfirmationCode(email);
	}

	@Override
	public JSONObject requestResetPassword(String email) {
		return DBManager.UserDBManager.LoginClass.getInstance().requestResetCode(email);
	}

	@Override
	public JSONObject confirmRequestResetPassword(String email, String confirmationCode) {
		return DBManager.UserDBManager.LoginClass.getInstance().confirmRequestResetCode(email, confirmationCode);
	}
	
	public JSONObject updateUserDetails(String uid, String firstName, String lastName, String dob, String phoneNo, String gender, String address, String isActive) {
		return DBManager.UserDBManager.UserClass.getInstance().updateUserDetails(uid, firstName, lastName, dob, phoneNo, gender, address, isActive);
	}

	@Override
	public JSONObject deleteUser(String uid) {
		return DBManager.UserDBManager.UserClass.getInstance().deleteUser(uid);
	}
	
	@Override
	public JSONObject authorizeUser(String authKey) {
		Crypt ed = new Crypt();
		return ed.decode(authKey);
	}

}
