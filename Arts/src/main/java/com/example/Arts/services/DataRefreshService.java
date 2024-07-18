package com.example.Arts.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.example.Arts.entity.Show;
import com.example.Arts.entity.Images;;

@Service
public class DataRefreshService {
    @Autowired
    private ShowService showService;

    @Scheduled(fixedRate = 24*3600*1000)
    public void refreshData() {
        Show newShow = new Show();
        // Images img=new Images();
        // img.setImageUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/1200px-Walking_tiger_female.jpg");
        
        
        newShow.setTitle("New Show");
        newShow.setPrice(29.99);
        newShow.setRating(4.5);
        newShow.setPlatform_name("Netflix");
        showService.saveShow(newShow);

        System.out.println("Data refreshed at " + System.currentTimeMillis());
    }
}
