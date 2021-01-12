package com.pms.model;

public class Z_ProgrammingLanguage {

	private int id;
	private String name;
	private String description;
	private int isBackEnd;
	private int isFrontEnd;
	
	public Z_ProgrammingLanguage(int id, String name, String description, int isBackEnd, int isFrontEnd) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.isBackEnd = isBackEnd;
		this.isFrontEnd = isFrontEnd;
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

	public int isBackEnd() {
		return isBackEnd;
	}
	
	public int isFrontEnd() {
		return isFrontEnd;
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

	public void setBackEnd(int isBackEnd) {
		this.isBackEnd = isBackEnd;
	}

	public void setFrontEnd(int isFrontEnd) {
		this.isFrontEnd = isFrontEnd;
	}
}
