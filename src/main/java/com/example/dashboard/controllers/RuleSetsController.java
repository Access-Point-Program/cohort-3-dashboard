package com.example.dashboard.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/ruleset")
public class RuleSetsController {

    @GetMapping
    public ResponseEntity<?> getAllRuleSets() {
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteRuleSet(@PathVariable Long id) {
        return ResponseEntity.noContent().build();
    }
}
