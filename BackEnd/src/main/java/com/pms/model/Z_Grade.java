package com.pms.model;

public class Z_Grade {

	private int id;
	private String grade;
	
	public Z_Grade(int id, String grade) {
		super();
		this.id = id;
		this.grade = grade;
	}
	
	public int getId() {
		return id;
	}

	public String getGrade() {
		return grade;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setGrade(String grade) {
		this.grade = grade;
	}
}
