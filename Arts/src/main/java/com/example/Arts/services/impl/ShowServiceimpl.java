package com.example.Arts.services.impl;

import com.example.Arts.entity.Images;
import com.example.Arts.entity.Show;
import com.example.Arts.repository.ShowRepository;
import com.example.Arts.services.ShowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.origin.SystemEnvironmentOrigin;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class ShowServiceimpl implements ShowService {

    @Autowired
    private ShowRepository showRepository;

    
    @Override
    public List<Show> getAllShows() {
        ArrayList<Show> shows = new ArrayList<>();
        showRepository.findAll().forEach(shows::add);
        filterShowsPrice(shows);
        showPrice_to_ConsumerPrice(shows);
        return shows;
    }

    @Override
    public List<Show> getShowsByPlatformName(String platformName) {
        ArrayList<Show>shows=new ArrayList<>();
         showRepository.findByPlatformName(platformName).forEach(shows::add);
         return shows;
    }

    @Override
    public Show getShowsByShowId(Long id) {
        Show show=showRepository.findById(id).get();
        // filterShowsPrice(show);
        // showPrice_to_ConsumerPrice(show);
        return show;
    }

    // @Override
    // public List<Show> getShowByTitle(String title){
    //     return showRepository.findShowByTitle(title); 
    // }
    
    @Override
    public Show saveShow(Show show) {
        return showRepository.save(show);
    }

    // @Override
    // public Show saveImage(Images img) {
    //     return showRepository.save(img);
    // }

    private void showPrice_to_ConsumerPrice(List<Show> shows) {
        for (Show show : shows) {
            
            double customerPrice = (show.getPrice()+(show.getPrice()*(show.getRating()*0.1)));
            show.setPrice(customerPrice);
        }
    }

    private void filterShowsPrice(List<Show> shows) {
        HashMap<String,Show>mp=new HashMap<>(); 
        for(Show show:shows){
            String title=show.getTitle();
            if(mp.containsKey(title)){
                if(show.getPrice()<mp.get(title).getPrice()){
                    mp.put(title, show);
                }
            }
            else{
                mp.put(title, show);
            }
        }
        shows.clear();
        for(Show s:mp.values()){
            shows.add(s);
        }
    }
}
