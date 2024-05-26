package com.borankoeruek.quizapp.service;

import com.borankoeruek.quizapp.model.Quiz;
import com.borankoeruek.quizapp.repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class QuizService {

	@Autowired
	private QuizRepository quizRepository;

	public Quiz get(UUID id) {
		return quizRepository.findById(id).orElse(null);
	}

	public void set(Quiz quiz) {
		if (quizRepository.findByName(quiz.getName()).isPresent()) {
			throw new IllegalStateException("name taken");
		} else {
			quizRepository.save(quiz);
		}
	}

	public List<Quiz> getAll() {
		return quizRepository.findAll();
	}
}
