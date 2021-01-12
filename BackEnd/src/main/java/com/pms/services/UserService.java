package com.pms.services;
import org.json.JSONObject;
public interface UserService {

	public JSONObject registerStudent(String firstName, String lastName, String initials, String dob, String phoneNo, String gender,String address, String studentId, String currentYear, String currentSemester, String facultyGroup, String email, String password);
	public JSONObject registerLecturer(String firstName, String lastName, String initials, String dob, String phoneNo, String gender,String address, String lecturerId, String email, String password);
	public JSONObject registerClient(String firstName, String lastName, String initials, String dob, String phoneNo, String gender,String address, String companyName, String email, String password);
	public JSONObject login(String email, String password);
	public JSONObject getRoleName(String roleId);
	public JSONObject resetPassword(String email, String currentPassword, String newPassword);
	public JSONObject forgotPassword(String email);
	public JSONObject verifyPassword(String uid, String currentPassword);
	public JSONObject emailConfirmation(String email, String confirmationCode);
	public JSONObject requestCode(String email);
	public JSONObject requestResetPassword(String email);
	public JSONObject confirmRequestResetPassword(String email, String confirmationCode);
	public JSONObject updateUserDetails(String uid, String firstName, String lastName, String dob, String phoneNo, String gender, String address, String isActive);
	public JSONObject deleteUser(String uid);
	public JSONObject authorizeUser(String authKey);

}