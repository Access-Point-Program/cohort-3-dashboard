package com.example.dashboard;

// Importing the RuleSet model class for testing.
import com.example.dashboard.models.RuleSet;

// Importing the RuleSetsService for testing business logic related to rule sets.
import com.example.dashboard.services.RuleSetsService;

// Importing ObjectMapper for serializing and deserializing JSON.
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

// Importing RestAssured for making HTTP requests in testing.
import io.restassured.RestAssured;

// Importing classes related to mocking external services in testing.
import okhttp3.mockwebserver.MockResponse;
import okhttp3.mockwebserver.MockWebServer;

// Importing HttpHeaders for setting HTTP headers in requests.
import org.apache.http.HttpHeaders;

// Importing JUnit annotations and classes for testing.
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

// Importing Spring annotations and classes for Spring Boot testing.
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;

// Importing WebClient for making reactive HTTP requests.
import org.springframework.web.reactive.function.client.WebClient;

// Importing IOException for handling IO exceptions.
import java.io.IOException;

// Importing List for handling collections of rule sets in testing.
import java.util.List;

// Importing static methods for RestAssured to use in testing HTTP requests and assertions.
import static io.restassured.RestAssured.given;

// Importing static methods for Hamcrest Matchers to use in test assertions.
import static org.hamcrest.Matchers.*;

// JUnit 4 runner for Spring Boot testing.
@RunWith(SpringRunner.class)
//Spring Boot test and to configure the web environment with a random port.
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class RuleSetsControllerTests {

    // Static MockWebServer instance for mocking external service responses.
	private static MockWebServer mockWebServer;

    // Autowiring the randomly assigned port for testing.
	@LocalServerPort
	private Integer port;

    // Autowiring WebClient for making HTTP requests.
	@Autowired
	private WebClient webClient;

    // Setting up the MockWebServer before each test.
	@Before
	public void beforeEach() throws IOException {
		// Configuring RestAssured for the base URI and port.
		RestAssured.baseURI = "http://localhost";
		RestAssured.port = this.port;
		// Creating a new instance of MockWebServer.
		mockWebServer = new MockWebServer();
		// 8080 is used because that is the port for the rules API
		mockWebServer.start(8080);
	}

    // Shutting down the MockWebServer after each test.
	@After
	public void afterEach() throws IOException {
		mockWebServer.shutdown();
	}
    // Test case to check if the GET request to /ruleset returns status code 200.
	@Test
	public void whenGetAllRuleSets_thenRespondWith200() {
		given()
			.when().get("/ruleset")
			.then().statusCode(200);
	}

    // Test case to check if the GET request to /ruleset returns the expected rule set values.
	@Test
	public void whenGetAllRuleSetsIsCalled_thenItReturnsTheExpectedValues() throws JsonProcessingException {
		// Creating mock RuleSet objects for testing.
		RuleSet mock1 = new RuleSet();
		mock1.id = 1L;
		mock1.name = "Bilbo";
		mock1.creationDate = "10/25/2023";

		RuleSet mock2 = new RuleSet();
		mock2.id = 2L;
		mock2.name = "Carol";
		mock2.creationDate = "10/25/3023";

        // Enqueuing a mock response from the MockWebServer.
		mockWebServer.enqueue(new MockResponse()
				.addHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
				.setBody(new ObjectMapper().writeValueAsString(List.of(mock1, mock2)))
		);

        // Verifying that the response body matches the expected rule set values.
		given()
			.when().get("/ruleset")
			.then()
				.body("[0]", hasEntry("id", 1))
				.body("[0]", hasEntry("name", "Bilbo"))
				.body("[0]", hasEntry("creationDate", "10/25/2023"))
				.body("[1]", hasEntry("id", 2))
				.body("[1]", hasEntry("name", "Carol"))
				.body("[1]", hasEntry("creationDate", "10/25/3023"));
	}
}
