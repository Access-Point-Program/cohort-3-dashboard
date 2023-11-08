package com.example.dashboard.services;

import com.example.dashboard.models.RuleSet;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RuleSetsService {

    public List<RuleSet> getAllRuleSets() {
        RuleSet mock = new RuleSet();
        mock.id = 1L;
        mock.name = "Bilbo";
        mock.creationDate = "10/25/2023";

        return List.of(mock);
    }

    public void deleteRuleSet(Long id) {

    }
}
