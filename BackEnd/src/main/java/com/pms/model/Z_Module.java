package com.pms.model;

public class Z_Module {

	private int id;
	private String name;
	private String description;
	private int specialization;
	private int year;
	private int semester;
	private double maxGPA;
	
	public Z_Module(int id, String name, String description, int specialization, int year, int semester,
			double maxGPA) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.specialization = specialization;
		this.year = year;
		this.semester = semester;
		this.maxGPA = maxGPA;
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

	public int getSpecialization() {
		return specialization;
	}

	public int getYear() {
		return year;
	}

	public int getSemester() {
		return semester;
	}

	public double getMaxGPA() {
		return maxGPA;
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

	public void setSpecialization(int specialization) {
		this.specialization = specialization;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public void setSemester(int semester) {
		this.semester = semester;
	}

	public void setMaxGPA(double maxGPA) {
		this.maxGPA = maxGPA;
	}
}
