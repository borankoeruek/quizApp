package com.borankoeruek.quizapp;

import com.borankoeruek.quizapp.scheduler.Scheduler;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class QuizAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuizAppApplication.class, args);

		Scheduler scheduler = new Scheduler();

		// Example usage with a lambda expression
		scheduler.scheduleTask(() -> System.out.println("Task executed"), 1000, 2000);
	}
}
