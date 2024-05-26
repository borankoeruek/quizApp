package com.borankoeruek.quizapp.repository;

import com.borankoeruek.quizapp.model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface QuizRepository extends JpaRepository<Quiz, UUID> {

	@Query("SELECT q FROM Quiz q WHERE q.name = ?1 ")
	Optional<Quiz> findByName(String name);
}
