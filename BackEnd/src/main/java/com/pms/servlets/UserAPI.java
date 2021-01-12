package com.pms.servlets;

import java.io.IOException;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.pms.services.UserService;
import com.pms.services.UserServiceImp;
import com.pms.util.CorsFilter;
import com.pms.util.Main;
import com.pms.util.Pyrunner;

@Path("api/user")
public class UserAPI {

	UserService userServiceObj = new UserServiceImp();
	
	@GET
	@Path("/test")
	@Produces(MediaType.TEXT_PLAIN)
	public Response test() throws IOException {
		String output = Pyrunner.runScript(Main.MODEL_PATH + "test.py");
		return CorsFilter.send(output);
	}

	@POST
	@Path("/register/student")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response registerStudent(String data) {
		JsonObject j = new JsonParser().parse(data).getAsJsonObject();
		return CorsFilter.send(userServiceObj.registerStudent(j.get("firstName").getAsString(),
				j.get("lastName").getAsString(), j.get("initials").getAsString(), j.get("dob").getAsString(),
				j.get("phoneNo").getAsString(), j.get("gender").getAsString(), j.get("address").getAsString(),
				j.get("studentId").getAsString(), j.get("currentYear").getAsString(),
				j.get("currentSemester").getAsString(), j.get("facultyGroup").getAsString(),
				j.get("email").getAsString(), j.get("password").getAsString()).toString());
	}

	@POST
	@Path("/register/lecturer")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response registerLecturer(String data) {
		JsonObject j = new JsonParser().parse(data).getAsJsonObject();
		return CorsFilter.send(userServiceObj.registerLecturer(j.get("firstName").getAsString(),
				j.get("lastName").getAsString(), j.get("initials").getAsString(), j.get("dob").getAsString(),
				j.get("phoneNo").getAsString(), j.get("gender").getAsString(), j.get("address").getAsString(),
				j.get("lecturerId").getAsString(), j.get("email").getAsString(), j.get("password").getAsString())
				.toString());
	}

	@POST
	@Path("/register/client")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response registerClient(String data) {
		JsonObject j = new JsonParser().parse(data).getAsJsonObject();
		return CorsFilter.send(userServiceObj.registerClient(j.get("firstName").getAsString(),
				j.get("lastName").getAsString(), j.get("initials").getAsString(), j.get("dob").getAsString(),
				j.get("phoneNo").getAsString(), j.get("gender").getAsString(), j.get("address").getAsString(),
				j.get("companyName").getAsString(), j.get("email").getAsString(), j.get("password").getAsString())
				.toString());
	}

	@POST
	@Path("/login")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response login(String data) {
		JsonObject j = new JsonParser().parse(data).getAsJsonObject();
		return CorsFilter.send(userServiceObj.login(j.get("email").getAsString(), j.get("password").getAsString()).toString());
	}

	@PUT
	@Path("/resetPassword")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response resetPassword(String data) {
		JsonObject j = new JsonParser().parse(data).getAsJsonObject();
		return CorsFilter.send(userServiceObj.resetPassword(j.get("email").getAsString(),
				j.get("currentPassword").getAsString(), j.get("newPassword").getAsString()).toString());
	}

	@PUT
	@Path("/forgotPassword")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response forgotPassword(String data) {
		JsonObject j = new JsonParser().parse(data).getAsJsonObject();
		return CorsFilter.send(userServiceObj.forgotPassword(j.get("email").getAsString()).toString());
	}

	@POST
	@Path("/verifyPassword")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response verifyPassword(String data) {
		JsonObject j = new JsonParser().parse(data).getAsJsonObject();
		return CorsFilter.send(userServiceObj
				.verifyPassword(j.get("userId").getAsString(), j.get("currentPassword").getAsString()).toString());
	}

	@GET
	@Path("/getRoleName/{roleId}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getRoleName(@PathParam("roleId") String roleId) {
		return CorsFilter.send(userServiceObj.getRoleName(roleId).toString());
	}

	@POST
	@Path("/emailConfirmation")
	@Produces(MediaType.APPLICATION_JSON)
	public Response emailConfirmation(String data) {
		JsonObject j = new JsonParser().parse(data).getAsJsonObject();
		return CorsFilter.send(userServiceObj
				.emailConfirmation(j.get("email").getAsString(), j.get("confirmationCode").getAsString()).toString());
	}

	@GET
	@Path("/emailConfirmationDirect/{data}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response emailConfirmationDirect(@PathParam("data") String data) {
		return CorsFilter.send(userServiceObj.emailConfirmation(data.split("-")[0], data.split("-")[1]).toString());
	}

	@POST
	@Path("/requestConfirmationCode")
	@Produces(MediaType.APPLICATION_JSON)
	public Response requestEmailConfirmation(String data) {
		JsonObject j = new JsonParser().parse(data).getAsJsonObject();
		return CorsFilter.send(userServiceObj.requestCode(j.get("email").getAsString()).toString());
	}

	@POST
	@Path("/requestResetPassword")
	@Produces(MediaType.APPLICATION_JSON)
	public Response requestResetPassword(String data) {
		JsonObject j = new JsonParser().parse(data).getAsJsonObject();
		return CorsFilter.send(userServiceObj.requestResetPassword(j.get("email").getAsString()).toString());
	}

	@POST
	@Path("/confirmRequestResetPassword")
	@Produces(MediaType.APPLICATION_JSON)
	public Response confirmRequestResetPassword(String data) {
		JsonObject j = new JsonParser().parse(data).getAsJsonObject();
		return CorsFilter.send(userServiceObj
				.confirmRequestResetPassword(j.get("email").getAsString(), j.get("confirmationCode").getAsString())
				.toString());
	}

	@PUT
	@Path("/updateUser")
	@Produces(MediaType.APPLICATION_JSON)
	public Response updateUser(String data) {
		JsonObject j = new JsonParser().parse(data).getAsJsonObject();
		return CorsFilter.send(userServiceObj
				.updateUserDetails(j.get("userId").getAsString(), j.get("firstName").getAsString(),
						j.get("lastName").getAsString(), j.get("dob").getAsString(), j.get("phoneNo").getAsString(),
						j.get("gender").getAsString(), j.get("address").getAsString(), j.get("isActive").getAsString())
				.toString());
	}

	@DELETE
	@Path("/deleteUser/{uid}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response deleteUser(@PathParam("uid") String uid) {
		return CorsFilter.send(userServiceObj.deleteUser(uid).toString());
	}

	@POST
	@Path("/authorizeUser")
	@Produces(MediaType.APPLICATION_JSON)
	public Response authorizeUser(String data) {
		JsonObject j = new JsonParser().parse(data).getAsJsonObject();
		return CorsFilter.send(userServiceObj.authorizeUser(j.get("authKey").getAsString()).toString());
	}

}
