package com.pms.model;

public class Z_Mark {

	private int id;
	private String name;
	private int greaterThan;
	private int lessThan;
	
	public Z_Mark(int id, String name, int greaterThan, int lessThan) {
		super();
		this.id = id;
		this.name = name;
		this.greaterThan = greaterThan;
		this.lessThan = lessThan;
	}
	
	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public int getGreaterThan() {
		return greaterThan;
	}

	public int getLessThan() {
		return lessThan;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setGreaterThan(int greaterThan) {
		this.greaterThan = greaterThan;
	}

	public void setLessThan(int lessThan) {
		this.lessThan = lessThan;
	}
}
