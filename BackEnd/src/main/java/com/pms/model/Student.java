package com.pms.model;

public class Student extends User{

	private String studentId;
	private double gpa;
	private int currentYear;
	private int currentSemester;
	private int facultyGroup;
	private int isBackEnd;
	private int isFrontEnd;
	
	
	
	public Student(int id, String firstName, String lastName, String initials, String dob, String phoneNo, char gender, String address, String studentId, double gpa, int currentYear, int currentSemester, int facultyGroup,
			int isBackEnd, int isFrontEnd) {
		super(id, firstName, lastName, initials, dob, phoneNo, gender, address);
		this.studentId = studentId;
		this.gpa = gpa;
		this.currentYear = currentYear;
		this.currentSemester = currentSemester;
		this.facultyGroup = facultyGroup;
		this.isBackEnd = isBackEnd;
		this.isFrontEnd = isFrontEnd;
	}
	
	public String getStudentId() {
		return studentId;
	}
	public double getGpa() {
		return gpa;
	}
	public int getCurrentYear() {
		return currentYear;
	}
	public int getCurrentSemester() {
		return currentSemester;
	}
	public int getFacultyGroup() {
		return facultyGroup;
	}
	public int isBackEnd() {
		return isBackEnd;
	}
	public int isFrontEnd() {
		return isFrontEnd;
	}
	public void setStudentId(String studentId) {
		this.studentId = studentId;
	}
	public void setGpa(double gpa) {
		this.gpa = gpa;
	}
	public void setCurrentYear(int currentYear) {
		this.currentYear = currentYear;
	}
	public void setCurrentSemester(int currentSemester) {
		this.currentSemester = currentSemester;
	}
	public void setFacultyGroup(int facultyGroup) {
		this.facultyGroup = facultyGroup;
	}
	public void setBackEnd(int isBackEnd) {
		this.isBackEnd = isBackEnd;
	}
	public void setFrontEnd(int isFrontEnd) {
		this.isFrontEnd = isFrontEnd;
	}
	
}
