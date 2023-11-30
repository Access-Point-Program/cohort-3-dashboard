package com.example.dashboard.controllers;

import com.example.dashboard.models.Layout;
import com.example.dashboard.services.LayoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/layout")
public class LayoutController {

     // Autowiring LayoutService to handle business logic related to layouts.
    @Autowired
    LayoutService LayoutService;

    // Handling HTTP GET request to retrieve all layouts.
    @GetMapping
    public ResponseEntity<List<Layout>> getAllLayouts() {
        // Returning a ResponseEntity with the list of layouts and HTTP status OK.
        return ResponseEntity.ok()
                .body(this.LayoutService.getAllLayout());
    }

    // Handling HTTP DELETE request to delete a layout by ID.
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteLayout(@PathVariable Long id) {
        // Deleting the layout using LayoutService.
        this.LayoutService.deleteLayout(id);
        // Returning a ResponseEntity with no content and HTTP status NO_CONTENT.
        return ResponseEntity.noContent().build();
    }
}
