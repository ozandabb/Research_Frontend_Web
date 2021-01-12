package com.pms.servlets;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.DELETE;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.pms.services.RoleService;
import com.pms.services.RoleServiceImp;
import com.pms.util.CorsFilter;

@Path("api/role")
public class RoleManagementAPI {

	RoleService roleService = new RoleServiceImp();

	@POST
	@Path("/insertRole")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces(MediaType.APPLICATION_JSON)
	public Response insertRole(@FormParam("roleName") String roleName, @FormParam("roleDesc") String roleDesc) {
		return CorsFilter.send(roleService.insertRole(roleName, roleDesc).toString());
	}
	
	@GET
	@Path("")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getRoleList() {
		return CorsFilter.send(roleService.getRoleList().toString());
	}

	@PUT
	@Path("/updateRole")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	@Produces(MediaType.APPLICATION_JSON)
	public Response updateRole(@FormParam("roleId") String roleId, @FormParam("roleName") String roleName, @FormParam("roleDesc") String roleDesc, @FormParam("isActive") String isActive) {
		return CorsFilter.send(roleService.updateRole(roleId, roleName, roleDesc, isActive).toString());
	}
	
	@DELETE
	@Path("/deleteRole/{roleId}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response deleteRole(@PathParam("roleId") String roleId) {
		return CorsFilter.send(roleService.deleteRole(roleId).toString());
	}
}
