package com.pms.util;

import javax.ws.rs.core.Response;

public class CorsFilter{

	public static Response send(String output) {
		return Response.ok(output)
	      .status(200)
	      .header("Access-Control-Allow-Origin", "*")
	      .header("Access-Control-Allow-Credentials", "true")
	      .header("Access-Control-Allow-Headers",
	        "origin, content-type, accept, authorization")
	      .header("Access-Control-Allow-Methods", 
	        "GET, POST, PUT, DELETE, OPTIONS, HEAD")
	      .build();
	}

}
