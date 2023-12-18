package com.example.dashboard.configuration;


import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties("access-point")
public class AccessPointProperties {
    private String rulesApiUrl;
    private String layoutsApiUrl;

    public String getRulesApiUrl() {
        return rulesApiUrl;
    }

    public String getLayoutsApiUrl(){
        return layoutsApiUrl;
    }


    public void setRulesApiUrl(String rulesApiUrl) {
        this.rulesApiUrl = rulesApiUrl;
    }

    public void setLayoutsApiUrl(String layoutsApiUrl) {
        this.layoutsApiUrl = layoutsApiUrl;
    }
}

