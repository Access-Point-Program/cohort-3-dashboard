package com.example.dashboard;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// Annotation indicating that this class is a Spring Boot application.
@SpringBootApplication
public class DashboardApplication {

    // Main method to start the Spring Boot application.
	public static void main(String[] args) {
		// Launching the application by running the SpringApplication class with the DashboardApplication class and command-line arguments.
		SpringApplication.run(DashboardApplication.class, args);
	}

}
