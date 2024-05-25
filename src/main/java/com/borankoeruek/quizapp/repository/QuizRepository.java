package com.borankoeruek.quizapp.repository;

import com.borankoeruek.quizapp.model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface QuizRepository extends JpaRepository<Quiz, UUID> {

}

