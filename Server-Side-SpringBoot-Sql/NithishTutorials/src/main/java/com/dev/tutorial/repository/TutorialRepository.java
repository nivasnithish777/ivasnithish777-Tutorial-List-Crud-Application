package com.dev.tutorial.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dev.tutorial.model.Tutorial;



@Repository
public interface TutorialRepository extends JpaRepository<Tutorial, Long> {
	
  List<Tutorial> findByPublished(boolean published);

  List<Tutorial> findByTitleContainingIgnoreCase(String title);
}
