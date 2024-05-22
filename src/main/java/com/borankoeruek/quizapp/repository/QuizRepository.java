package com.borankoeruek.quizapp.repository;

import com.borankoeruek.quizapp.model.Quiz;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface QuizRepository extends CrudRepository<Quiz, UUID> {
}
