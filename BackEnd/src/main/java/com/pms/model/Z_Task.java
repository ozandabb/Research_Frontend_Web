package com.pms.model;

public class Z_Task {

	private int id;
	private int project;
	private String duration_start;
	private String duration_end;
	private int difficultyRate;
	private boolean isBackEnd;
	private boolean isActive;
	
	public Z_Task(int id, int project, String duration_start, String duration_end, int difficultyRate,
			boolean isBackEnd, boolean isActive) {
		super();
		this.id = id;
		this.project = project;
		this.duration_start = duration_start;
		this.duration_end = duration_end;
		this.difficultyRate = difficultyRate;
		this.isBackEnd = isBackEnd;
		this.isActive = isActive;
	}
	
	public int getId() {
		return id;
	}
	public int getProject() {
		return project;
	}
	public String getDuration_start() {
		return duration_start;
	}
	public String getDuration_end() {
		return duration_end;
	}
	public int getDifficultyRate() {
		return difficultyRate;
	}
	public boolean isBackEnd() {
		return isBackEnd;
	}
	public boolean isActive() {
		return isActive;
	}
	public void setId(int id) {
		this.id = id;
	}
	public void setProject(int project) {
		this.project = project;
	}
	public void setDuration_start(String duration_start) {
		this.duration_start = duration_start;
	}
	public void setDuration_end(String duration_end) {
		this.duration_end = duration_end;
	}
	public void setDifficultyRate(int difficultyRate) {
		this.difficultyRate = difficultyRate;
	}
	public void setBackEnd(boolean isBackEnd) {
		this.isBackEnd = isBackEnd;
	}
	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}
}
