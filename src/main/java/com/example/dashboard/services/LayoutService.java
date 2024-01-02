package com.example.dashboard.services;

import com.example.dashboard.configuration.AccessPointProperties;
import com.example.dashboard.models.Layout;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;
import org.springframework.web.server.ResponseStatusException;


import java.util.List;

// Service class to handle business logic related to Layout entities.
@Service
public class LayoutService {
    // Autowiring WebClient to make HTTP requests.
    @Autowired
    private WebClient webClient;

    @Autowired
    private AccessPointProperties accessPointProperties;

    // Fetches all layouts from an external service.
    public List<Layout> getAllLayout() {
        String apiUrl = accessPointProperties.getLayoutsApiUrl();
        return this.webClient.get()
                .uri(apiUrl + "/api/layouts/all")
                .retrieve()
                .bodyToMono(new ParameterizedTypeReference<List<Layout>>() {})
                .block();
    }

    // Deletes a layout by its unique identifier.
    public void deleteLayout(Long id) {
        String apiUrl = accessPointProperties.getLayoutsApiUrl();
            this.webClient.delete()
                    .uri(apiUrl + "/api/layouts/delete/{id}", id)
                    .retrieve()
                    .toBodilessEntity()
                    .block();
    }
}
