package com.pms.services;

import java.util.List;
import org.json.JSONArray;
import org.json.JSONObject;

public class RoleServiceImp implements RoleService{
	
	DBManager db = DBManager.getInstance();
	
	@Override
	public JSONArray getRoleList() {
		List<String> roleList = DBManager.UserDBManager.RoleClass.getInstance().getRoleList();
		JSONArray jsonArray = new JSONArray(roleList);
		return jsonArray;
	}
	
	@Override
	public JSONObject insertRole(String roleName, String roleDesc) {
		return DBManager.UserDBManager.RoleClass.getInstance().insertRole(roleName, roleDesc);
	}

	@Override
	public JSONObject updateRole(String roleId, String roleName, String roleDesc, String isActive) {
		return DBManager.UserDBManager.RoleClass.getInstance().updateRole(roleId, roleName, roleDesc, isActive);
	}

	@Override
	public JSONObject deleteRole(String roleId) {
		return DBManager.UserDBManager.RoleClass.getInstance().deleteRole(roleId);
	}

}
