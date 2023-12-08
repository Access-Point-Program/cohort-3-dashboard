package com.example.dashboard.services;

import com.example.dashboard.models.Layout;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;


import java.util.List;

// Service class to handle business logic related to Layout entities.
@Service
public class LayoutService {
    // Autowiring WebClient to make HTTP requests.
    @Autowired
    private WebClient webClient;

    // Fetches all layouts from an external service.
    public List<Layout> getAllLayout() {
        return this.webClient.get()
                .uri("http://localhost:9003/api/layouts/all")
                .retrieve()
                .bodyToMono(new ParameterizedTypeReference<List<Layout>>() {})
                .block();
    }

    // Deletes a layout by its unique identifier.
    public void deleteLayout(Long id) {
        this.webClient.delete()
                .uri("http://localhost:9003/api/layouts/delete/{id}", id)
                .retrieve()
                .toBodilessEntity()
                .block();
    }
}
