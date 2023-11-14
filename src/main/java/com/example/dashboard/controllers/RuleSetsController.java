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
    @Autowired
    RuleSetsService ruleSetsService;

    @GetMapping
    public ResponseEntity<List<RuleSet>> getAllRuleSets() {
        return ResponseEntity.ok()
                .body(this.ruleSetsService.getAllRuleSets());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteRuleSet(@PathVariable Long id) {
        this.ruleSetsService.deleteRuleSet(id);
        return ResponseEntity.noContent().build();
    }
}
