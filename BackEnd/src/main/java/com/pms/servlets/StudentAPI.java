package com.pms.servlets;

import java.io.IOException;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.json.JSONArray;
import org.json.JSONObject;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.pms.services.StudentService;
import com.pms.services.StudentServiceImp;
import com.pms.util.CorsFilter;
import com.pms.util.Crypt;
import com.pms.util.Pyrunner;

@Path("api/student")
public class StudentAPI {

	StudentService studentServiceObj = new StudentServiceImp();
	Crypt crypt = new Crypt();
	
	@GET
	@Path("/test")
	@Produces(MediaType.TEXT_PLAIN)
	public Response test() throws IOException {
		String output = Pyrunner.runScript("PythonScripts/test.py");
		//return Response.ok(output).build();
		return CorsFilter.send(output);
	}
	
	@GET
	@Path("/getStudentBasicDetails")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getStudentBasicDetailsCurrent(@HeaderParam(value = "authString") String authString) {
		JSONObject j = new JSONObject();
		j = studentServiceObj.getStudentBasicDetails(String.valueOf(crypt.decode(authString).getInt("userId")));
		return CorsFilter.send(j.toString());
	}
	
	@GET
	@Path("/getStudentBasicDetails/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getStudentBasicDetails(@PathParam(value = "id") String id, @HeaderParam(value = "authString") String authString){
		JSONObject j = new JSONObject();
		j = studentServiceObj.getStudentBasicDetails(id);
		//return Response.ok(j.toString()).build();
		return CorsFilter.send(j.toString());
	}
	
	@GET
	@Path("/getStudentList")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getStudentList(@HeaderParam(value = "authString") String authString){
		JSONArray j = new JSONArray();
		j = studentServiceObj.getStudentList();
		//return Response.ok(j.toString()).build();
		return CorsFilter.send(j.toString());
	}
	
	@GET
	@Path("/getProgrammingLanguages")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getFavStudentProgrammingLanguages(@HeaderParam(value = "authString") String authString) {
		JSONArray output = studentServiceObj.getFavStudentLanguages(authString);
		return CorsFilter.send(output.toString());
	}
	
	@GET
	@Path("/getProgrammingLanguageFrameworks")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getFavStudentProgrammingLanguageFrameworks(@HeaderParam(value = "authString") String authString) {
		JSONArray output = studentServiceObj.getFavStudentLanguageFrameworks(authString);
		return CorsFilter.send(output.toString());
	}
	
	@POST
	@Path("addProgrammingLanguages")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response addFavStudentProgrammingLanguages(String data, @HeaderParam(value = "authString") String authString) {
		JsonObject j = new JsonParser().parse(data).getAsJsonObject();
		JSONObject output = studentServiceObj.addFavStudentLanguages(j.get("languages").getAsString(), authString);
		return CorsFilter.send(output.toString());
	}
	
	@POST
	@Path("addProgrammingLanguageFrameworks")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response addFavStudentProgrammingLanguageFrameworks(String data, @HeaderParam(value = "authString") String authString) {
		JsonObject j = new JsonParser().parse(data).getAsJsonObject();
		JSONObject output = studentServiceObj.addFavStudentLanguageFrameworks(j.get("frameworks").getAsString(), authString);
		return CorsFilter.send(output.toString());
	}
}
