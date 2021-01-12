package com.pms.model;

public class Z_Project {

	private int id;
	private String name;
	private String description;
	private int module;
	private int projectGroup;
	private int client;
	private int period;
	private boolean isActive;
	private boolean isAccepted;
	
	public Z_Project(int id, String name, String description, int module, int projectGroup, int client, int period,
			boolean isActive, boolean isAccepted) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.module = module;
		this.projectGroup = projectGroup;
		this.client = client;
		this.period = period;
		this.isActive = isActive;
		this.isAccepted = isAccepted;
	}
	
	public int getId() {
		return id;
	}
	public String getName() {
		return name;
	}
	public String getDescription() {
		return description;
	}
	public int getModule() {
		return module;
	}
	public int getProjectGroup() {
		return projectGroup;
	}
	public int getClient() {
		return client;
	}
	public int getPeriod() {
		return period;
	}
	public boolean isActive() {
		return isActive;
	}
	public boolean isAccepted() {
		return isAccepted;
	}
	public void setId(int id) {
		this.id = id;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public void setModule(int module) {
		this.module = module;
	}
	public void setProjectGroup(int projectGroup) {
		this.projectGroup = projectGroup;
	}
	public void setClient(int client) {
		this.client = client;
	}
	public void setPeriod(int period) {
		this.period = period;
	}
	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}
	public void setAccepted(boolean isAccepted) {
		this.isAccepted = isAccepted;
	}
}
