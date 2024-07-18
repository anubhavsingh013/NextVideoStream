package com.example.Arts.entity;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonBackReference;
@Entity
@Table(name="images")
public class Images {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long imageId;
    private String imageUrl;
    

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="id",nullable=false)
    @JsonBackReference
    private Show show;


    public Long getImageId() {
        return imageId;
    }
    public String getImageUrl() {
        return imageUrl;
    }
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
    public void setImageId(Long imageId) {
        this.imageId = imageId;
    }
    // public Long getShowId() {
    //     return showId;
    // }
    // public void setShowId(Long showId) {
    //     this.showId = showId;
    // }
}
