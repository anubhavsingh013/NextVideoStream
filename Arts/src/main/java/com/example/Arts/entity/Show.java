package com.example.Arts.entity;

import java.util.List;

import com.mysql.cj.protocol.a.NativeConstants.IntegerDataType;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import scala.annotation.meta.getter;

@Entity
@Table(name="shows")
public class Show {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    private String title;
    private double price;
    @OneToMany(mappedBy = "show", cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Images>imagelist;
    private double rating;

    @Column(name="platform_name")
    private String platformName;

    public Long getId() {
        return id;
    }

    public List<Images> getImagelist() {
        return imagelist;
    }
    public void setImagelist(List<Images> imagelist) {
        this.imagelist = imagelist;
    }
    public double getPrice() {
        return price;
    }
    public double getRating() {
        return rating;
    }
    public String getTitle() {
        return title;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public void setPrice(double price) {
        this.price = price;
    }
    public void setRating(double rating) {
        this.rating = rating;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getPlatformName() {
        return platformName;
    }
    public void setPlatform_name(String platformName) {
        this.platformName = platformName;
    }
    
}
