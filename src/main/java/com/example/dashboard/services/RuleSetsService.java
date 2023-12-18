package com.example.dashboard.services;

import com.example.dashboard.configuration.AccessPointProperties;
import com.example.dashboard.models.RuleSet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;


import java.util.List;

// Service class to handle business logic related to RuleSet entities.
@Service
public class RuleSetsService {
     // Autowiring WebClient to make HTTP requests.
    @Autowired
    private WebClient webClient;

    @Autowired
    private AccessPointProperties accessPointProperties;

    // Fetches all rule sets from an external service.
    public List<RuleSet> getAllRuleSets() {
        String apiUrl = accessPointProperties.getRulesApiUrl();
        return this.webClient.get()
                .uri(apiUrl + "/ruleset")
                .retrieve()
                .bodyToMono(new ParameterizedTypeReference<List<RuleSet>>() {})
                .block();
    }

    // Deletes a rule set by its unique identifier.
    public void deleteRuleSet(Long id) {
        String apiUrl = accessPointProperties.getRulesApiUrl();
           this.webClient.delete()
                   .uri(apiUrl + "/ruleset/{id}", id)
                   .retrieve()
                   .toBodilessEntity()
                   .block();


    }
}
