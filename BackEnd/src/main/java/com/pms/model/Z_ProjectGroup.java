package com.pms.model;

public class Z_ProjectGroup {

	private int id;
	private String name;
	private int teamLeader;
	private String teamMembers;
	
	public Z_ProjectGroup(int id, String name, int teamLeader, String teamMembers) {
		super();
		this.id = id;
		this.name = name;
		this.teamLeader = teamLeader;
		this.teamMembers = teamMembers;
	}
	
	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public int getTeamLeader() {
		return teamLeader;
	}

	public String getTeamMembers() {
		return teamMembers;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setTeamLeader(int teamLeader) {
		this.teamLeader = teamLeader;
	}

	public void setTeamMembers(String teamMembers) {
		this.teamMembers = teamMembers;
	}
}
