package com.example.dashboard;

import io.restassured.RestAssured;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.test.context.junit4.SpringRunner;

import static io.restassured.RestAssured.given;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class RuleSetsControllerTests {

	@LocalServerPort
	private Integer port;

	@Before
	public void beforeEach() {
		RestAssured.baseURI = "http://localhost";
		RestAssured.port = this.port;
	}

	@Test
	public void whenGetAllRuleSets_thenRespondWith200() {
		given()
			.when().get("/ruleset")
			.then().statusCode(200);
	}
}
