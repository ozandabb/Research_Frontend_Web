package com.pms.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnection {

	private static final String DB_HOST = "localhost:3306";
	private static final String DB_NAME = "spms_db";
	
	private static String DBDriver = "com.mysql.cj.jdbc.Driver";
	private static String DBUrl = "jdbc:mysql://" + DB_HOST + "/" + DB_NAME + "?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC";
	private static String DBUser = "root";
	private static String DBPassword = "1234";
	
	private static Connection connection;

	private DBConnection() {
	}

	synchronized public static Connection connect() throws SQLException, ClassNotFoundException {
		if (connection == null) {
			//synchronized block to remove overhead
			synchronized (Connection.class) {
				if (connection == null) {
					//if connection is null, initialize
					Class.forName(DBDriver);
					connection = DriverManager.getConnection(DBUrl, DBUser, DBPassword);
				}
			}
		}
		return connection;
	}

}