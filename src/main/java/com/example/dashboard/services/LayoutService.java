package com.example.dashboard.services;

import com.example.dashboard.models.Layout;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;


import java.util.List;

@Service
public class LayoutService {
    @Autowired
    private WebClient webClient;

    public List<Layout> getAllLayout() {
        return this.webClient.get()
                .uri("http://localhost:9003/layouts/")
                .retrieve()
                .bodyToMono(new ParameterizedTypeReference<List<Layout>>() {})
                .block();
    }

    public void deleteLayout(Long id) {
        this.webClient.delete()
                .uri("http://localhost:9003/layouts/{id}", id)
                .retrieve()
                .toBodilessEntity()
                .block();
    }
}
