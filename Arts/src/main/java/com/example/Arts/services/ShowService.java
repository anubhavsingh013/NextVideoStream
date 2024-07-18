package com.example.Arts.services;

import com.example.Arts.entity.Images;
import com.example.Arts.entity.Show;

import java.util.List;

public interface ShowService {
    List<Show> getAllShows();
    List<Show> getShowsByPlatformName(String platformName);
    Show saveShow(Show show);
    // Images saveImages(Images img);
    Show getShowsByShowId(Long id);
    // List<Show> getShowByTitle(String title);
}
