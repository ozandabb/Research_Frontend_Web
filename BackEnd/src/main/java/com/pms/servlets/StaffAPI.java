package com.pms.servlets;

import java.io.IOException;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.pms.services.StaffService;
import com.pms.services.StaffServiceImp;
import com.pms.util.CorsFilter;
import com.pms.util.Pyrunner;

@Path("api/staff")
public class StaffAPI {

	StaffService staffServiceObj = new StaffServiceImp();
	
	@GET
	@Path("/test")
	@Produces(MediaType.TEXT_PLAIN)
	public Response test() throws IOException {
		String output = Pyrunner.runScript("PythonScripts/test.py");
		//return Response.ok(output).build();
		return CorsFilter.send(output);
	}
}
