package com.pms.model;

public class Z_Period {

	private int id;
	private String name;
	private String startDate;
	private String endDate;
	private boolean isActive;
	
	public Z_Period(int id, String name, String startDate, String endDate, boolean isActive) {
		super();
		this.id = id;
		this.name = name;
		this.startDate = startDate;
		this.endDate = endDate;
		this.isActive = isActive;
	}
	
	public int getId() {
		return id;
	}
	public String getName() {
		return name;
	}
	public String getStartDate() {
		return startDate;
	}
	public String getEndDate() {
		return endDate;
	}
	public boolean isActive() {
		return isActive;
	}
	public void setId(int id) {
		this.id = id;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}
	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}
}
