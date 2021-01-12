package com.pms.services;

import org.json.JSONArray;
import org.json.JSONObject;

public interface RoleService {

	public JSONArray getRoleList();
	public JSONObject insertRole(String roleName, String roleDesc);
	public JSONObject updateRole(String roleId, String roleName, String roleDesc, String isActive);
	public JSONObject deleteRole(String roleId);
	
}
