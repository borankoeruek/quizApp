package com.borankoeruek.quizapp.controller;

import com.borankoeruek.quizapp.model.Quiz;
import com.borankoeruek.quizapp.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class QuizController {

    @Autowired
    private QuizService quizService;


    @GetMapping("/quiz/{id}")
    public Quiz get(@PathVariable UUID id) {
        return quizService.get(id);
    }

    @GetMapping("/all-quiz")
    public List<Quiz> getAll() {
        return quizService.getAll();
    }

    @PostMapping("/quiz")
    public void set(@RequestBody Quiz quiz) {
        quizService.set(quiz);
    }
}
