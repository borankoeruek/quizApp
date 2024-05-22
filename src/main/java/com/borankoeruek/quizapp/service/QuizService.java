package com.borankoeruek.quizapp.service;

import com.borankoeruek.quizapp.model.Question;
import com.borankoeruek.quizapp.model.Quiz;
import com.borankoeruek.quizapp.repository.QuizRepository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

public class QuizService {

    private final QuizRepository quizRepository;

    public QuizService(QuizRepository quizRepository) {
        this.quizRepository = quizRepository;
    }

    public Quiz get(UUID id) {  
        return quizRepository.findById(id).orElse(null);
    }
}
