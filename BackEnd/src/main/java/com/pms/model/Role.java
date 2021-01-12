package com.pms.model;

import org.json.JSONObject;

public class Role {

	private int roleId;
	private String roleName;
	private String roleDesc;
	
	public Role(int roleId, String roleName, String roleDesc) {
		super();
		this.roleId = roleId;
		this.roleName = roleName;
		this.roleDesc = roleDesc;
	}

	public int getRoleId() {
		return roleId;
	}

	public String getRoleName() {
		return roleName;
	}

	public String getRoleDesc() {
		return roleDesc;
	}

	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public void setRoleDesc(String roleDesc) {
		this.roleDesc = roleDesc;
	}
	
	public JSONObject createRoleJsonObject() {
		JSONObject role = new JSONObject();
		role.put("roleId", this.roleId);
		role.put("roleName", this.roleName);
		role.put("roleDesc", this.roleDesc);
		return role;
	}
	
}
