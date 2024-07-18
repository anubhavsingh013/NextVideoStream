package com.example.Arts.controller;

import com.example.Arts.entity.Show;
import com.example.Arts.services.ShowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/shows")
public class ShowController {

    @Autowired
    private ShowService showService;

    @GetMapping
    public List<Show> getAllShows() {
        return showService.getAllShows();
    }

    @GetMapping("/platform/{platformName}")
    public List<Show> getShowsByPlatformName(@PathVariable String platformName) {
        return showService.getShowsByPlatformName(platformName);
    }
    @GetMapping("/{id}")
    public Show getShowsByShowId(@PathVariable Long id) {
        return showService.getShowsByShowId(id);
    }
    // @GetMapping("/s/{search}")
    // public List<Show> getShowByTitle(@PathVariable String title) {
    //     return showService.getShowByTitle(title);
    // }
    
    @PostMapping
    public Show saveShow(@RequestBody Show show) {
        return showService.saveShow(show);
    }
    
}
