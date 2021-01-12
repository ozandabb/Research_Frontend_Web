package com.pms.model;

public class Z_ProgrammingLanguageFramework {
	
	private int id;
	private String name;
	private String description;
	private int baseLanguage;
	private int isBackEnd;
	private int isFrontEnd;
	
	public Z_ProgrammingLanguageFramework(int id, String name, String description, int baseLanguage, int isBackEnd,
			int isFrontEnd) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.baseLanguage = baseLanguage;
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

	public int getBaseLanguage() {
		return baseLanguage;
	}

	public int getIsBackEnd() {
		return isBackEnd;
	}

	public int getIsFrontEnd() {
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

	public void setBaseLanguage(int baseLanguage) {
		this.baseLanguage = baseLanguage;
	}

	public void setIsBackEnd(int isBackEnd) {
		this.isBackEnd = isBackEnd;
	}

	public void setIsFrontEnd(int isFrontEnd) {
		this.isFrontEnd = isFrontEnd;
	}
	
}
