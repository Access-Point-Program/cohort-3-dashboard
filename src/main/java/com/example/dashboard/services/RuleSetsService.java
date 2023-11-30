package com.example.dashboard.services;

import com.example.dashboard.models.RuleSet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;


import java.util.List;

// Service class to handle business logic related to RuleSet entities.
@Service
public class RuleSetsService {
     // Autowiring WebClient to make HTTP requests.
    @Autowired
    private WebClient webClient;

    // Fetches all rule sets from an external service.
    public List<RuleSet> getAllRuleSets() {
        return this.webClient.get()
                .uri("http://localhost:8080/rulesets/")
                .retrieve()
                .bodyToMono(new ParameterizedTypeReference<List<RuleSet>>() {})
                .block();
    }

    // Deletes a rule set by its unique identifier.
    public void deleteRuleSet(Long id) {
        this.webClient.delete()
                .uri("http://localhost:8080/rulesets/{id}", id)
                .retrieve()
                .toBodilessEntity()
                .block();
    }
}
