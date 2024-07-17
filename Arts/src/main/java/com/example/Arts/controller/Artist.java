package com.example.Arts.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping()
public class Artist {
    @GetMapping("/p")
    public String hello(){
        return "hello";
    }
}
