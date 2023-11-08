package com.example.dashboard.controllers;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="/ruleset")
public class RuleSetsController {

    @GetMapping
    public void getAllRuleSets() {

    }

    @DeleteMapping("/{id}")
    public void deleteRuleSet(@PathVariable Long id) {

    }
}
