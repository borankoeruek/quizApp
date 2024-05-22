package com.borankoeruek.quizapp.controller;

import com.borankoeruek.quizapp.model.Question;
import com.borankoeruek.quizapp.model.Quiz;
import com.borankoeruek.quizapp.service.QuizService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
public class QuizController {

    private final QuizService quizService;

    public QuizController(QuizService quizService) {
        this.quizService = quizService;
    }

    @GetMapping("/quiz/{id}")
    public Quiz get(@PathVariable String id) {
        return quizService.get(id);
    }
}
