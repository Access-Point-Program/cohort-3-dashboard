package com.example.dashboard.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class RestConfiguration {
     // Creating a bean for WebClient, which is used for making HTTP requests.
    @Bean
    public WebClient webClient() {
        // Creating and returning a new instance of WebClient.
        return WebClient.create();
    }
}
