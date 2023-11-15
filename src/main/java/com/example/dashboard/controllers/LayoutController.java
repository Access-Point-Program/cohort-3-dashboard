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
    @Autowired
    LayoutService LayoutService;

    @GetMapping
    public ResponseEntity<List<Layout>> getAllLayouts() {
        return ResponseEntity.ok()
                .body(this.LayoutService.getAllLayout());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteLayout(@PathVariable Long id) {
        this.LayoutService.deleteLayout(id);
        return ResponseEntity.noContent().build();
    }
}
