package com.pms.services;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;

import com.pms.model.Role;
import com.pms.model.Student;
import com.pms.model.Z_ProgrammingLanguage;
import com.pms.model.Z_ProgrammingLanguageFramework;
import com.pms.util.Crypt;
import com.pms.util.DBConnection;
import com.pms.util.RandomCode;
import com.pms.util.SQLQueryManager;
import com.pms.util.SendMail;
import com.pms.util.lambdaworks.crypto.SCryptUtil;

public class DBManager {

	private static SQLQueryManager sqlObject;
	private static DBManager dbObject;
	private static Crypt crypt;

	private DBManager() {
	}

	public static DBManager getInstance() {
		if (dbObject == null) {
			synchronized (DBManager.class) {
				if (dbObject == null) {
					dbObject = new DBManager();
					sqlObject = SQLQueryManager.getInstance();
					crypt = new Crypt();
				}
			}
		}
		return dbObject;
	}

	static class UserDBManager {

		/*
		 * private static UserDBManager dbObject;
		 * 
		 * private UserDBManager() { }
		 * 
		 * public static UserDBManager getInstance() { if (dbObject == null) {
		 * synchronized (UserDBManager.class) { if (dbObject == null) { dbObject = new
		 * UserDBManager(); } } } return dbObject; }
		 */

		// Role Management Class
		static class RoleClass {

			private static RoleClass dbObject;

			private RoleClass() {
			}

			public static RoleClass getInstance() {
				if (dbObject == null) {
					synchronized (RoleClass.class) {
						if (dbObject == null) {
							dbObject = new RoleClass();
						}
					}
				}
				return dbObject;
			}

			// Role Management Section
			public JSONObject insertRole(String roleName, String roleDesc) {
				JSONObject j = new JSONObject();

				Connection con = null;
				PreparedStatement ps_insertRole = null;

				try {

					con = DBConnection.connect();
					ps_insertRole = con.prepareStatement(sqlObject.getINSERT_ROLE());
					ps_insertRole.setString(1, roleName);
					ps_insertRole.setString(2, roleDesc);

					if (ps_insertRole.executeUpdate() < 0) {
						j.put("status", "error");
					} else {
						j.put("status", "success");
					}

				} catch (Exception e) {
					e.printStackTrace();
				} finally {
					if (ps_insertRole != null) {
						try {
							ps_insertRole.close();
						} catch (Exception e) {
							/* ignored */}
					}
				}

				return j;
			}

			public JSONObject updateRole(String roleId, String roleName, String roleDesc, String isActive) {
				JSONObject j = new JSONObject();

				Connection con = null;
				PreparedStatement ps_updateRole = null;

				try {

					con = DBConnection.connect();
					ps_updateRole = con.prepareStatement(sqlObject.getUPDATE_ROLE());
					ps_updateRole.setString(1, roleName);
					ps_updateRole.setString(2, roleDesc);
					ps_updateRole.setInt(3, Integer.parseInt(isActive));
					ps_updateRole.setInt(4, Integer.parseInt(roleId));

					if (ps_updateRole.executeUpdate() < 0) {
						j.put("status", "error");
					} else {
						j.put("status", "success");
					}

				} catch (Exception e) {
					e.printStackTrace();
				}

				return j;
			}

			public JSONObject deleteRole(String roleId) {
				JSONObject j = new JSONObject();

				Connection con = null;
				PreparedStatement ps_deleteRole = null;

				try {

					con = DBConnection.connect();
					ps_deleteRole = con.prepareStatement(sqlObject.getDELETE_ROLE());
					ps_deleteRole.setInt(1, Integer.parseInt(roleId));

					if (ps_deleteRole.executeUpdate() < 0) {
						j.put("status", "error");
					} else {
						j.put("status", "success");
					}

				} catch (Exception e) {
					e.printStackTrace();
				}

				return j;
			}

			public List<String> getRoleList() {
				List<String> roleList = new ArrayList<>();

				PreparedStatement ps_getRoleList = null;
				ResultSet rs_getRoleList = null;
				Connection con = null;

				try {

					con = DBConnection.connect();
					ps_getRoleList = con.prepareStatement(sqlObject.getROLE_LIST());

					rs_getRoleList = ps_getRoleList.executeQuery();

					if (rs_getRoleList != null) {
						while (rs_getRoleList.next()) {
							Role r = new Role(rs_getRoleList.getInt(1), rs_getRoleList.getString(2),
									rs_getRoleList.getString(3));
							roleList.add(r.createRoleJsonObject().toString());
						}
					}

				} catch (Exception e) {
					e.printStackTrace();
				}

				return roleList;
			}

		}

		// User Management Class
		static class UserClass {

			private static UserClass dbObject;

			private UserClass() {
			}

			public static UserClass getInstance() {
				if (dbObject == null) {
					synchronized (UserClass.class) {
						if (dbObject == null) {
							dbObject = new UserClass();
						}
					}
				}
				return dbObject;
			}

			public JSONObject userDuplicateEntryCheck(String firstName, String lastName, String initials,
					String email) {

				JSONObject j = new JSONObject();

				Connection con = null;
				PreparedStatement ps_userDuplicateEntryCheck1 = null;
				PreparedStatement ps_userDuplicateEntryCheck2 = null;
				ResultSet rs_chk1 = null;
				ResultSet rs_chk2 = null;

				try {
					con = DBConnection.connect();
					ps_userDuplicateEntryCheck1 = con.prepareStatement(sqlObject.getUSER_DUPLICATE_ENTRY_CHECK1());
					ps_userDuplicateEntryCheck1.setString(1, firstName);
					ps_userDuplicateEntryCheck1.setString(2, lastName);
					ps_userDuplicateEntryCheck1.setString(3, initials);

					rs_chk1 = ps_userDuplicateEntryCheck1.executeQuery();

					ps_userDuplicateEntryCheck2 = con.prepareStatement(sqlObject.getUSER_DUPLICATE_ENTRY_CHECK2());
					ps_userDuplicateEntryCheck2.setString(1, email);

					rs_chk2 = ps_userDuplicateEntryCheck2.executeQuery();

					if (rs_chk1.first() || rs_chk2.first()) {
						j.put("status", "true");
					} else {
						j.put("status", "false");
					}

				} catch (Exception e) {
					e.printStackTrace();
				} finally {
					if (rs_chk1 != null) {
						try {
							rs_chk1.close();
						} catch (Exception e) {
							/* ignored */}
					}
					if (rs_chk2 != null) {
						try {
							rs_chk2.close();
						} catch (Exception e) {
							/* ignored */}
					}
					if (ps_userDuplicateEntryCheck1 != null) {
						try {
							ps_userDuplicateEntryCheck1.close();
						} catch (Exception e) {
							/* ignored */}
					}
					if (ps_userDuplicateEntryCheck2 != null) {
						try {
							ps_userDuplicateEntryCheck2.close();
						} catch (Exception e) {
							/* ignored */}
					}
				}
				return j;
			}

			public JSONObject registerUser(String firstName, String lastName, String initials, String dob,
					String phoneNo, String gender, String address) {

				JSONObject j = new JSONObject();

				Connection con = null;
				PreparedStatement ps_userReg = null;

				try {

					con = DBConnection.connect();
					ps_userReg = con.prepareStatement(sqlObject.getINSERT_USR_USER());
					ps_userReg.setString(1, firstName);
					ps_userReg.setString(2, lastName);
					ps_userReg.setString(3, initials);
					ps_userReg.setString(4, dob);
					ps_userReg.setString(5, phoneNo);
					ps_userReg.setString(6, gender);
					ps_userReg.setString(7, address);

					int i = ps_userReg.executeUpdate();

					if (i > 0) {
						j.put("status", "success");
					} else {
						j.put("status", "error");
					}

				} catch (Exception e) {
					e.printStackTrace();
				} finally {
					if (ps_userReg != null) {
						try {
							ps_userReg.close();
						} catch (Exception e) {
							/* ignored */}
					}
				}

				return j;
			}

			public JSONObject insertLogin(String firstName, String lastName, String initials, String email,
					String password, int roleId, int isConfirmed, String code) {

				JSONObject j = new JSONObject();

				Connection con = null;
				PreparedStatement ps_insertLogin = null;

				try {

					String generatedSecuredPasswordHash = SCryptUtil.scrypt(password, 16, 16, 16);

					con = DBConnection.connect();
					ps_insertLogin = con.prepareStatement(sqlObject.getINSERT_USR_Login());
					ps_insertLogin.setString(1, firstName);
					ps_insertLogin.setString(2, lastName);
					ps_insertLogin.setString(3, initials);
					ps_insertLogin.setString(4, email);
					ps_insertLogin.setString(5, generatedSecuredPasswordHash);
					ps_insertLogin.setInt(6, roleId);
					ps_insertLogin.setInt(7, isConfirmed);
					ps_insertLogin.setString(8, code);

					int i = ps_insertLogin.executeUpdate();

					if (i > 0) {
						j.put("status", "success");
					} else {
						j.put("status", "error");
					}

				} catch (Exception e) {
					e.printStackTrace();
				} finally {
					if (ps_insertLogin != null) {
						try {
							ps_insertLogin.close();
						} catch (Exception e) {
							/* ignored */}
					}
				}

				return j;
			}

			public JSONObject userRegistration(String firstName, String lastName, String initials, String dob,
					String phoneNo, String gender, String address, String email, String password, String roleId) {

				JSONObject j = new JSONObject();
				try {
					String code = RandomCode.GenCode();
					if (userDuplicateEntryCheck(firstName, lastName, initials, email).get("status").equals("false")) {

						JSONObject ru = registerUser(firstName, lastName, initials, dob, phoneNo, gender, address);

						if (ru.getString("status").equalsIgnoreCase("success")) {

							JSONObject il = insertLogin(firstName, lastName, initials, email, password,
									Integer.parseInt(roleId), 0, code);
							if (il.getString("status").equalsIgnoreCase("success")) {
								j.put("status", "success");
								SendMail.sendConfirmationCode(email, code, "Confirmation code for new account");
							} else {
								j.put("status", "error");
								j.put("reason", "Login insertion Error");
							}
						} else {
							j.put("status", "error");
							j.put("reason", "User insertion Error");
						}
					} else {
						j.put("status", "error");
						j.put("status", "error");
						j.put("reason", "Duplicate Entry.");
					}
				} catch (Exception e) {
					e.printStackTrace();
				}
				return j;
			}

			public JSONObject updateUserDetails(String uid, String firstName, String lastName, String dob,
					String phoneNo, String gender, String address, String isActive) {
				JSONObject j = new JSONObject();

				Connection con = null;
				PreparedStatement ps_updateUserDetails = null;

				try {

					con = DBConnection.connect();
					ps_updateUserDetails = con.prepareStatement(sqlObject.getUPDATE_USER_DETAILS());
					ps_updateUserDetails.setString(1, firstName);
					ps_updateUserDetails.setString(2, lastName);
					ps_updateUserDetails.setString(3, dob);
					ps_updateUserDetails.setString(4, phoneNo);
					ps_updateUserDetails.setString(5, gender);
					ps_updateUserDetails.setString(6, address);
					ps_updateUserDetails.setInt(7, Integer.parseInt(isActive));
					ps_updateUserDetails.setInt(8, Integer.parseInt(uid));

					if (ps_updateUserDetails.executeUpdate() < 0) {
						j.put("status", "error");
					} else {
						j.put("status", "success");
					}

				} catch (Exception e) {
					e.printStackTrace();
				} finally {
					if (ps_updateUserDetails != null) {
						try {
							ps_updateUserDetails.close();
						} catch (Exception e) {
							/* ignored */}
					}
				}

				return j;
			}

			public JSONObject deleteUser(String uid) {
				JSONObject j = new JSONObject();

				Connection con = null;
				PreparedStatement ps_deleteUser = null;

				try {

					con = DBConnection.connect();
					ps_deleteUser = con.prepareStatement(sqlObject.getDELETE_USR_USER());
					ps_deleteUser.setInt(1, Integer.parseInt(uid));

					if (ps_deleteUser.executeUpdate() < 0) {
						j.put("status", "error");
					} else {
						j.put("status", "success");
					}

				} catch (Exception e) {
					e.printStackTrace();
				} finally {
					if (ps_deleteUser != null) {
						try {
							ps_deleteUser.close();
						} catch (Exception e) {
							/* ignored */}
					}
				}

				return j;
			}

			public JSONObject insertStudentDetails(String email, String studentId, String gpa, String currentYear,
					String currentSemester, String facultyGroup, String isBackEnd, String isFrontEnd) {
				JSONObject j = new JSONObject();

				Connection con = null;
				PreparedStatement ps_insertStudentDetails = null;

				try {

					con = DBConnection.connect();
					ps_insertStudentDetails = con.prepareStatement(sqlObject.getINSERT_USR_DTL_STUDENT());
					ps_insertStudentDetails.setInt(1, LoginClass.getInstance().getUserIdByEmail(email));
					ps_insertStudentDetails.setString(2, studentId);
					ps_insertStudentDetails.setDouble(3, Double.parseDouble(gpa));
					ps_insertStudentDetails.setInt(4, Integer.parseInt(currentYear));
					ps_insertStudentDetails.setInt(5, Integer.parseInt(currentSemester));
					ps_insertStudentDetails.setInt(6, Integer.parseInt(facultyGroup));
					ps_insertStudentDetails.setInt(7, Integer.parseInt(isBackEnd));
					ps_insertStudentDetails.setInt(8, Integer.parseInt(isFrontEnd));

					int i = ps_insertStudentDetails.executeUpdate();

					if (i > 0) {
						j.put("status", "success");
					} else {
						j.put("status", "error");
					}

				} catch (Exception e) {
					e.printStackTrace();
					j.put("status", "error");
				}

				return j;
			}

			public JSONObject insertLecturerDetails(String email, String lecturerId) {

				JSONObject j = new JSONObject();

				Connection con = null;
				PreparedStatement ps_insertLecturerDetails = null;

				try {

					con = DBConnection.connect();
					ps_insertLecturerDetails = con.prepareStatement(sqlObject.getINSERT_USR_DTL_LECTURER());
					ps_insertLecturerDetails.setInt(1, LoginClass.getInstance().getUserIdByEmail(email));
					ps_insertLecturerDetails.setString(2, lecturerId);

					int i = ps_insertLecturerDetails.executeUpdate();

					if (i > 0) {
						j.put("status", "success");
					} else {
						j.put("status", "error");
					}

				} catch (Exception e) {
					e.printStackTrace();
					j.put("status", "error");
				}

				return j;

			}

			public JSONObject insertClientDetails(String email, String companyName) {

				JSONObject j = new JSONObject();

				Connection con = null;
				PreparedStatement ps_insertClientDetails = null;

				try {

					con = DBConnection.connect();
					ps_insertClientDetails = con.prepareStatement(sqlObject.getINSERT_USR_DTL_CLIENT());
					ps_insertClientDetails.setInt(1, LoginClass.getInstance().getUserIdByEmail(email));
					ps_insertClientDetails.setString(2, companyName);

					int i = ps_insertClientDetails.executeUpdate();

					if (i > 0) {
						j.put("status", "success");
					} else {
						j.put("status", "error");
					}

				} catch (Exception e) {
					e.printStackTrace();
					j.put("status", "error");
				}

				return j;

			}
		}

		// Login Management Class
		static class LoginClass {

			private static LoginClass dbObject;

			private LoginClass() {
			}

			public static LoginClass getInstance() {
				if (dbObject == null) {
					synchronized (LoginClass.class) {
						if (dbObject == null) {
							dbObject = new LoginClass();
						}
					}
				}
				return dbObject;
			}

			public JSONObject login(String email, String password) {

				JSONObject j = new JSONObject();

				PreparedStatement ps_verifyLogin = null;
				ResultSet rs_verifyLogin = null;
				Connection con = null;

				try {
					con = DBConnection.connect();
					ps_verifyLogin = con.prepareStatement(sqlObject.getLOGIN_VERIFY());
					ps_verifyLogin.setString(1, email);

					rs_verifyLogin = ps_verifyLogin.executeQuery();
					if (rs_verifyLogin.first() != false && SCryptUtil.check(password, rs_verifyLogin.getString(5))) {
						if (rs_verifyLogin.getInt(6) == 1) {

							Crypt ed = new Crypt(rs_verifyLogin.getString(7), rs_verifyLogin.getInt(3),
									rs_verifyLogin.getInt(2), email);
							String authString = ed.encode();

							// hash creation

							j.put("status", "success");
							j.put("loginId", rs_verifyLogin.getInt(1));
							j.put("loginRole", rs_verifyLogin.getInt(2));
							j.put("userId", rs_verifyLogin.getInt(3));
							j.put("firstName", rs_verifyLogin.getString(4));
							j.put("authString", authString);
						} else {
							j.put("status", "error");
							j.put("reason", "Email Confirmation is not validated");
						}
					} else {
						j.put("status", "error");
						j.put("userId", 0);
						j.put("authString", "");
					}
				} catch (Exception e) {
					e.printStackTrace();
				} finally {
					if (rs_verifyLogin != null) {
						try {
							rs_verifyLogin.close();
						} catch (Exception e) {
							/* ignored */}
					}
					if (ps_verifyLogin != null) {
						try {
							ps_verifyLogin.close();
						} catch (Exception e) {
							/* ignored */}
					}
				}

				return j;
			}

			public JSONObject resetPassword(String email, String currentPassword, String newPassword) {
				JSONObject j = new JSONObject();

				Connection con = null;
				PreparedStatement ps_changePassword = null;
				try {
					con = DBConnection.connect();
					JSONObject passwordVerification = verifyPassword(email, currentPassword);

					if (passwordVerification.getString("status").equalsIgnoreCase("success")) {

						ps_changePassword = con.prepareStatement(sqlObject.getCHANGE_PASSWORD());
						ps_changePassword.setString(1, SCryptUtil.scrypt(newPassword, 16, 16, 16));
						ps_changePassword.setString(2, email);
						if (ps_changePassword.executeUpdate() > 0) {
							j.put("status", "success");
						} else {
							j.put("status", "error");
						}
					}

				} catch (Exception e) {
					e.printStackTrace();
				} finally {
					if (ps_changePassword != null) {
						try {
							ps_changePassword.close();
						} catch (Exception e) {
							/* ignored */}
					}
				}

				return j;
			}

			public JSONObject forgotPassword(String email) {
				String code = RandomCode.GenCode();
				JSONObject j = new JSONObject();
				Connection con = null;
				PreparedStatement ps_forgetPassword = null;
				PreparedStatement ps_getIdFromEmail = null;

				ResultSet rs_getIdFromEmail = null;

				try {
					con = DBConnection.connect();
					ps_getIdFromEmail = con.prepareStatement(sqlObject.getID_FROM_EMAIL());
					ps_getIdFromEmail.setString(1, email);
					rs_getIdFromEmail = ps_getIdFromEmail.executeQuery();
					if (rs_getIdFromEmail.first() != false) {
						ps_forgetPassword = con.prepareStatement(sqlObject.getFORGOT_PASSWORD());
						ps_forgetPassword.setString(1, SCryptUtil.scrypt(code, 16, 16, 16));
						ps_forgetPassword.setInt(2, rs_getIdFromEmail.getInt(1));

						if (ps_forgetPassword.executeUpdate() > 0) {
							j.put("status", "success");
							SendMail.sendNewPassword(email, code, "New Password for the User");
						} else {
							j.put("status", "error");
						}
					}
				} catch (Exception e) {
					e.printStackTrace();
				} finally {
					if (ps_forgetPassword != null) {
						try {
							ps_forgetPassword.close();
						} catch (Exception e) {
							/* ignored */}
					}
				}
				return j;
			}

			public JSONObject verifyPassword(String email, String currentPassword) {

				JSONObject j = new JSONObject();

				Connection con = null;
				PreparedStatement ps_verifyPassword = null;

				try {

					con = DBConnection.connect();
					ps_verifyPassword = con.prepareStatement(sqlObject.getVERIFY_PASSWORD());
					ps_verifyPassword.setString(1, email);

					ResultSet rs_verifyPassword = ps_verifyPassword.executeQuery();

					if (rs_verifyPassword.first() != false
							&& SCryptUtil.check(currentPassword, rs_verifyPassword.getString(1))) {
						j.put("status", "success");
					} else {
						j.put("status", "error");
					}

				} catch (Exception e) {
					e.printStackTrace();
				} finally {
					if (ps_verifyPassword != null) {
						try {
							ps_verifyPassword.close();
						} catch (Exception e) {
							/* ignored */}
					}
				}

				return j;
			}

			public JSONObject getRoleName(String roleId) {

				JSONObject j = new JSONObject();

				Connection con = null;
				PreparedStatement ps_getroleName = null;
				ResultSet rs_getroleName = null;

				try {
					con = DBConnection.connect();
					ps_getroleName = con.prepareStatement(sqlObject.getROLE_NAME());
					ps_getroleName.setInt(1, Integer.parseInt(roleId));
					rs_getroleName = ps_getroleName.executeQuery();
					if (rs_getroleName != null) {
						while (rs_getroleName.next()) {
							j.put("status", "success");
							j.put("roleName", rs_getroleName.getString(1));
						}
					} else {
						j.put("status", "error");
					}

				} catch (Exception e) {
					e.printStackTrace();
				} finally {
					if (rs_getroleName != null) {
						try {
							rs_getroleName.close();
						} catch (Exception e) {
							/* ignored */}
					}
					if (ps_getroleName != null) {
						try {
							ps_getroleName.close();
						} catch (Exception e) {
							/* ignored */}
					}
				}

				return j;
			}

			private int getUserIdByEmail(String email) {
				Connection con = null;
				PreparedStatement ps_getIdFromEmail = null;
				ResultSet rs_getIdFromEmail = null;

				try {
					con = DBConnection.connect();
					ps_getIdFromEmail = con.prepareStatement(sqlObject.getID_FROM_EMAIL());
					ps_getIdFromEmail.setString(1, email);
					rs_getIdFromEmail = ps_getIdFromEmail.executeQuery();
					if (rs_getIdFromEmail.first() != false) {
						return rs_getIdFromEmail.getInt(1);
					} else {
						return 0;
					}
				} catch (Exception e) {
					return 0;
				}

			}

			public JSONObject emailConfirmation(String email, String confirmationCode) {
				JSONObject j = new JSONObject();

				Connection con = null;
				PreparedStatement ps_emailConfirmation = null;

				try {

					con = DBConnection.connect();
					ps_emailConfirmation = con.prepareStatement(sqlObject.getEMAIL_CONFIRMATION());
					ps_emailConfirmation.setString(1, email);
					ps_emailConfirmation.setString(2, confirmationCode);

					if (ps_emailConfirmation.executeUpdate() < 0) {
						j.put("status", "error");
					} else {
						j.put("status", "success");
					}

				} catch (Exception e) {
					e.printStackTrace();
				} finally {
					if (ps_emailConfirmation != null) {
						try {
							ps_emailConfirmation.close();
						} catch (Exception e) {
							/* ignored */}
					}
				}

				return j;
			}

			public JSONObject requestConfirmationCode(String email) {
				JSONObject j = new JSONObject();

				Connection con = null;
				PreparedStatement ps_requestCode = null;

				try {
					String code = RandomCode.GenCode();
					con = DBConnection.connect();
					ps_requestCode = con.prepareStatement(sqlObject.getREQUEST_CODE());
					ps_requestCode.setString(1, code);
					ps_requestCode.setString(2, email);

					if (ps_requestCode.executeUpdate() < 0) {
						j.put("status", "error");
					} else {
						j.put("status", "success");
						SendMail.sendConfirmationCode(email, code, "Request Confirmation Code.");
					}

				} catch (Exception e) {
					e.printStackTrace();
				} finally {
					if (ps_requestCode != null) {
						try {
							ps_requestCode.close();
						} catch (Exception e) {
							/* ignored */}
					}
				}
				return j;
			}

			public JSONObject requestResetCode(String email) {
				JSONObject j = new JSONObject();

				Connection con = null;
				PreparedStatement ps_requestResetCode = null;

				try {
					String code = RandomCode.GenCode();
					con = DBConnection.connect();
					ps_requestResetCode = con.prepareStatement(sqlObject.getREQUEST_CODE());
					ps_requestResetCode.setString(1, code);
					ps_requestResetCode.setString(2, email);

					if (ps_requestResetCode.executeUpdate() < 0) {
						j.put("status", "error");
					} else {
						j.put("status", "success");
						SendMail.sendConfirmationCode(email, code, "Request Confirmation code for password reset.");
					}

				} catch (Exception e) {
					e.printStackTrace();
				} finally {
					if (ps_requestResetCode != null) {
						try {
							ps_requestResetCode.close();
						} catch (Exception e) {
							/* ignored */}
					}
				}
				return j;
			}

			public JSONObject confirmRequestResetCode(String email, String confirmationCode) {
				JSONObject j = new JSONObject();

				Connection con = null;
				PreparedStatement ps_confirmRequestResetCode = null;

				try {

					con = DBConnection.connect();
					ps_confirmRequestResetCode = con.prepareStatement(sqlObject.getCONFIRM_REQUEST_CODE());
					ps_confirmRequestResetCode.setString(1, email);
					ps_confirmRequestResetCode.setString(2, confirmationCode);

					if (ps_confirmRequestResetCode.executeQuery().first()) {
						j.put("status", "success");
					} else {
						j.put("status", "error");
					}

				} catch (Exception e) {
					e.printStackTrace();
				} finally {
					if (ps_confirmRequestResetCode != null) {
						try {
							ps_confirmRequestResetCode.close();
						} catch (Exception e) {
							/* ignored */}
					}
				}

				return j;
			}
		}

	}

	static class StudentDBManager {

		public static JSONObject getStudentBasicDetails(String id) {
			JSONObject j = new JSONObject();

			Connection con = null;
			PreparedStatement ps_getStudentBasicDetails = null;
			ResultSet rs_getStudentBasicDetails = null;

			try {
				con = DBConnection.connect();
				ps_getStudentBasicDetails = con.prepareStatement(sqlObject.getSTUDENT_BASIC_DETAILS());
				ps_getStudentBasicDetails.setInt(1, Integer.parseInt(id));
				rs_getStudentBasicDetails = ps_getStudentBasicDetails.executeQuery();
				if (rs_getStudentBasicDetails != null) {
					while (rs_getStudentBasicDetails.next()) {
						j.put("firstName", rs_getStudentBasicDetails.getString(2));
						j.put("lastName", rs_getStudentBasicDetails.getString(3));
						j.put("initials", rs_getStudentBasicDetails.getString(4));
						j.put("dob", rs_getStudentBasicDetails.getString(5));
						j.put("phoneNo", rs_getStudentBasicDetails.getString(6));
						j.put("gender", rs_getStudentBasicDetails.getString(7));
						j.put("address", rs_getStudentBasicDetails.getString(8));
						j.put("studentId", rs_getStudentBasicDetails.getString(13));
						j.put("gpa", rs_getStudentBasicDetails.getString(14));
						j.put("currentYear", rs_getStudentBasicDetails.getString(15));
						j.put("currentSemester", rs_getStudentBasicDetails.getString(16));
						j.put("facultyGroup", rs_getStudentBasicDetails.getString(17));
						j.put("isBackEnd", rs_getStudentBasicDetails.getString(18));
						j.put("isFrontEnd", rs_getStudentBasicDetails.getString(19));
					}
				} else {
					j.put("status", "error");
				}

			} catch (Exception e) {
				e.printStackTrace();
			} finally {
				if (rs_getStudentBasicDetails != null) {
					try {
						rs_getStudentBasicDetails.close();
					} catch (Exception e) {
						/* ignored */}
				}
				if (ps_getStudentBasicDetails != null) {
					try {
						ps_getStudentBasicDetails.close();
					} catch (Exception e) {
						/* ignored */}
				}
			}
			return j;
		}

		public static JSONArray getStudentList() {
			JSONArray j = null;

			Connection con = null;
			PreparedStatement ps = null;
			ResultSet rs = null;
			ArrayList<Student> studentList = new ArrayList<Student>();

			try {
				con = DBConnection.connect();
				ps = con.prepareStatement(sqlObject.getSTUDENT_LIST());
				rs = ps.executeQuery();
				if (rs != null) {
					while (rs.next()) {
						Student s = new Student(Integer.parseInt(rs.getString(1)), rs.getString(2), rs.getString(3),
								rs.getString(4), rs.getString(5), rs.getString(6), rs.getString(7).toCharArray()[0],
								rs.getString(8), rs.getString(13), Double.parseDouble(rs.getString(14)),
								Integer.parseInt(rs.getString(15)), Integer.parseInt(rs.getString(16)),
								Integer.parseInt(rs.getString(17)), Integer.parseInt(rs.getString(18)),
								Integer.parseInt(rs.getString(19)));
						studentList.add(s);
					}
					j = new JSONArray(studentList);
				} else {
					j = null;
				}

			} catch (Exception e) {
				e.printStackTrace();
			} finally {
				if (rs != null) {
					try {
						rs.close();
					} catch (Exception e) {
						/* ignored */}
				}
				if (ps != null) {
					try {
						ps.close();
					} catch (Exception e) {
						/* ignored */}
				}
			}
			return j;
		}

		public static JSONArray getFavStudentProgrammingLanguageList(String authString) {
			JSONArray jarr = new JSONArray();
			Connection con = null;
			PreparedStatement ps = null;
			ResultSet rs = null;
			

			try {
				con = DBConnection.connect();
				ps = con.prepareStatement(sqlObject.get_FAV_STUDENT_PROGRAMMINGLANGUAGES());
				ps.setInt(1, crypt.decode(authString).getInt("userId"));
				rs = ps.executeQuery();
				if (rs != null) {
					while (rs.next()) {
						if (rs.getInt(1) > 0) {
							String[] languages = rs.getString(2).split(",");
							for (String x : languages) {
								jarr.put(ProgrammingLanguageDBManager.getProgrammingLanguageById(Integer.parseInt(x.trim())));
							}
						}

					}
				} else {
					jarr = null;
				}

			} catch (Exception e) {
				e.printStackTrace();
			}

			return jarr;
		}

		public static JSONArray getFavStudentProgrammingLanguageFrameworkList(String authString) {
			JSONArray jarr = new JSONArray();
			Connection con = null;
			PreparedStatement ps = null;
			ResultSet rs = null;

			try {
				con = DBConnection.connect();
				ps = con.prepareStatement(sqlObject.get_FAV_STUDENT_PROGRAMMINGLANGUAGEFRAMEWORKS());
				ps.setInt(1, crypt.decode(authString).getInt("userId"));
				rs = ps.executeQuery();
				if (rs != null) {
					while (rs.next()) {
						if (rs.getInt(1) > 0) {
							String[] languages = rs.getString(2).split(",");
							for (String x : languages) {
								jarr.put(ProgrammingLanguageFrameworkDBManager.getProgrammingLanguageFrameworkById(Integer.parseInt(x.trim())));
							}
						}

					}
				} else {
					jarr = null;
				}

			} catch (Exception e) {
				e.printStackTrace();
			}

			return jarr;
		}

		public static JSONObject addFavStudentProgrammingLanguages(String languages, String authString) {
			JSONObject j = new JSONObject();
			JSONArray jarr = null;
			Connection con = null;
			PreparedStatement ps1 = null;
			ArrayList<Integer> newLanguageList = new ArrayList<Integer>();
			String output = "";

			try {
				jarr = getFavStudentProgrammingLanguageList(authString);
				for (int i = 0; i < jarr.length(); i++) {
					JSONObject object = jarr.getJSONObject(i);
					newLanguageList.add(object.getInt("id"));
				}
				for(String x : languages.split(",")) {
					newLanguageList.add(Integer.parseInt(x.trim()));
				}
				for(int y : newLanguageList) {
					output += String.valueOf(y) + ",";
				}
				output = output.replaceAll("[,]$", "");
				con = DBConnection.connect();
				ps1 = con.prepareStatement(sqlObject.get_ADD_PROGRAMMING_LANGUAGES_TO_USER());
				ps1.setString(1, output);
				ps1.setInt(2, crypt.decode(authString).getInt("userId"));
				int i = ps1.executeUpdate();
				if (i > 0) {
					j.put("status", "success");
				} else {
					j.put("status", "error");
				}
				
			} catch (Exception e) {
				e.printStackTrace();
			}

			return j;
		}

		public static JSONObject addFavStudentProgrammingLanguageFrameworks(String frameworks, String authString) {
			JSONObject j = new JSONObject();
			JSONArray jarr = null;
			Connection con = null;
			PreparedStatement ps1 = null;
			ArrayList<Integer> newFrameworkList = new ArrayList<Integer>();
			String output = "";

			try {
				jarr = getFavStudentProgrammingLanguageFrameworkList(authString);
				for (int i = 0; i < jarr.length(); i++) {
					JSONObject object = jarr.getJSONObject(i);
					newFrameworkList.add(object.getInt("id"));
				}
				for(String x : frameworks.split(",")) {
					newFrameworkList.add(Integer.parseInt(x.trim()));
				}
				for(int y : newFrameworkList) {
					output += String.valueOf(y) + ",";
				}
				output = output.replaceAll("[,]$", "");
				con = DBConnection.connect();
				ps1 = con.prepareStatement(sqlObject.get_ADD_PROGRAMMING_LANGUAGE_FRAMEWORKS_TO_USER());
				ps1.setString(1, output);
				ps1.setInt(2, crypt.decode(authString).getInt("userId"));
				int i = ps1.executeUpdate();
				if (i > 0) {
					j.put("status", "success");
				} else {
					j.put("status", "error");
				}
				
			} catch (Exception e) {
				e.printStackTrace();
			}

			return j;
		}
	}

	static class StaffDBManager {

		private static StaffDBManager dbObject;

		private StaffDBManager() {
		}

		public static StaffDBManager getInstance() {
			if (dbObject == null) {
				synchronized (StaffDBManager.class) {
					if (dbObject == null) {
						dbObject = new StaffDBManager();
					}
				}
			}
			return dbObject;
		}

	}

	static class ProgrammingLanguageDBManager{
		
		public static JSONObject getProgrammingLanguageById(int id) {
			JSONObject j = new JSONObject();
			Connection con = null;
			PreparedStatement ps = null;
			ResultSet rs = null;
			try {
				con = DBConnection.connect();
				ps = con.prepareStatement(sqlObject.get_PROGRAMMING_LANGUAGE_BY_ID());
				ps.setInt(1, id);
				rs = ps.executeQuery();
				while (rs.next()) {
					Z_ProgrammingLanguage lang = new Z_ProgrammingLanguage(rs.getInt(1),
							rs.getString(2), rs.getString(3), rs.getInt(4), rs.getInt(5));
					j = new JSONObject(lang);
				}
			}catch (Exception e) {
				e.printStackTrace();
			}
			
			return j;
		}
	}
	
	static class ProgrammingLanguageFrameworkDBManager{
		
		public static JSONObject getProgrammingLanguageFrameworkById(int id) {
			JSONObject j = new JSONObject();
			Connection con = null;
			PreparedStatement ps = null;
			ResultSet rs = null;
			try {
				con = DBConnection.connect();
				ps = con.prepareStatement(sqlObject.get_PROGRAMMING_LANGUAGE_FRAMEWORK_BY_ID());
				ps.setInt(1, id);
				rs = ps.executeQuery();
				while (rs.next()) {
					Z_ProgrammingLanguageFramework langFramework = new Z_ProgrammingLanguageFramework(
							rs.getInt(1), rs.getString(2), rs.getString(3), rs.getInt(4),
							rs.getInt(5), rs.getInt(6));
					j = new JSONObject(langFramework);
				}
			}catch (Exception e) {
				e.printStackTrace();
			}
			
			return j;
		}
		
	}
}
