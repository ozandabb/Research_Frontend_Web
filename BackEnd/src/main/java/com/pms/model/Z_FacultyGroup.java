package com.pms.model;

public class Z_FacultyGroup {

	private int id;
	private String groupName;
	private int maxCount;
	
	public Z_FacultyGroup(int id, String groupName, int maxCount) {
		super();
		this.id = id;
		this.groupName = groupName;
		this.maxCount = maxCount;
	}
	
	public int getId() {
		return id;
	}
	public String getGroupName() {
		return groupName;
	}
	public int getMaxCount() {
		return maxCount;
	}
	public void setId(int id) {
		this.id = id;
	}
	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}
	public void setMaxCount(int maxCount) {
		this.maxCount = maxCount;
	}
}
