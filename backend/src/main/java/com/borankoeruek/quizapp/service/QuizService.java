package com.borankoeruek.quizapp.service;

import com.borankoeruek.quizapp.model.Quiz;
import com.borankoeruek.quizapp.model.Valid;
import com.borankoeruek.quizapp.repository.QuizRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class QuizService {

	private final QuizRepository quizRepository;

	public QuizService(QuizRepository quizRepository) {
		this.quizRepository = quizRepository;
	}

	public Quiz getQuizById(UUID id) {
		return quizRepository.findById(id).orElse(null);
	}

	public List<Quiz> getAllQuizzes() {
		return quizRepository.findAll();
	}

	public void createQuiz(Quiz quiz) {
		if (quizRepository.findByName(quiz.getName()).isPresent()) {
			throw new IllegalStateException("name taken");
		} else {
			quizRepository.save(quiz);
		}
	}

	public void updateQuiz(Quiz quiz) {
		quizRepository.save(quiz);
	}

	public Valid isQuizNamePossible(String quizName) {
		return new Valid(quizRepository.findByName(quizName).isEmpty());
	}
}
