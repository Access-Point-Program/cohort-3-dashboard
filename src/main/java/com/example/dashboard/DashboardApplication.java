package com.example.dashboard;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


// Annotation indicating that this class is a Spring Boot application.
@Controller
@SpringBootApplication
public class DashboardApplication implements ErrorController{

    // Main method to start the Spring Boot application.
	public static void main(String[] args) {
		// Launching the application by running the SpringApplication class with the DashboardApplication class and command-line arguments.
		SpringApplication.run(DashboardApplication.class, args);
	}

	private static final String PATH = "/error";
	@RequestMapping(value = PATH)
	public String error() {
		return "forward:/index.html";
	}

}
