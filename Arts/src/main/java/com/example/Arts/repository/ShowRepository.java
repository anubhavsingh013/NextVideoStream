package com.example.Arts.repository;

import com.example.Arts.entity.Show;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ShowRepository extends CrudRepository<Show, Long> {
    List<Show> findByPlatformName(String platformName);
}
