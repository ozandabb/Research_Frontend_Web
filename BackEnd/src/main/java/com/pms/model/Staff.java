package com.pms.model;

public class Staff extends User{

	private String staffId;
	private boolean isSupervisor;
	
	public Staff(String staffId, boolean isSupervisor) {
		super();
		this.staffId = staffId;
		this.isSupervisor = isSupervisor;
	}
	
	public String getStaffId() {
		return staffId;
	}

	public boolean isSupervisor() {
		return isSupervisor;
	}

	public void setStaffId(String staffId) {
		this.staffId = staffId;
	}

	public void setSupervisor(boolean isSupervisor) {
		this.isSupervisor = isSupervisor;
	}
	
}
