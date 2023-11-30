package com.example.dashboard.controllers;

import com.example.dashboard.models.RuleSet;
import com.example.dashboard.services.RuleSetsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/ruleset")
public class RuleSetsController {
    // Autowiring RuleSetsService to handle business logic related to rule sets.
    @Autowired
    RuleSetsService ruleSetsService;

    // Handling HTTP GET request to retrieve all rule sets.
    @GetMapping
    public ResponseEntity<List<RuleSet>> getAllRuleSets() {
        // Returning a ResponseEntity with the list of rule sets and HTTP status OK.
        return ResponseEntity.ok()
                .body(this.ruleSetsService.getAllRuleSets());
    }

    // Handling HTTP DELETE request to delete a rule set by ID.
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteRuleSet(@PathVariable Long id) {
        // Deleting the rule set using RuleSetsService.
        this.ruleSetsService.deleteRuleSet(id);
        // Returning a ResponseEntity with no content and HTTP status NO_CONTENT.
        return ResponseEntity.noContent().build();
    }
}
