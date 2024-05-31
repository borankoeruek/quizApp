package com.borankoeruek.quizapp.controller;

import com.borankoeruek.quizapp.model.Quiz;
import com.borankoeruek.quizapp.model.Valid;
import com.borankoeruek.quizapp.service.QuizService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
public class QuizController {

	private final QuizService quizService;

	public QuizController(QuizService quizService) {
		this.quizService = quizService;
	}

	@GetMapping("/api/quiz/{id}")
	public Quiz get(@PathVariable UUID id) {
		return quizService.getQuizById(id);
	}

	@GetMapping("/api/quiz/name-check/{quizName}")
	public Valid get(@PathVariable String quizName) {
		return quizService.isQuizNamePossible(quizName);
	}

	@GetMapping("/api/all-quiz")
	public List<Quiz> getAll() {
		return quizService.getAllQuizzes();
	}

	@PostMapping("/api/create-quiz")
	public void set(@RequestBody Quiz quiz) {
		quizService.createQuiz(quiz);
	}

	@PutMapping("/api/quiz")
	public void update(@RequestBody Quiz quiz) {
		quizService.updateQuiz(quiz);
	}
}
