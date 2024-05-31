import { Component, OnInit, ViewChild } from '@angular/core';
import { Quiz } from '../../backend-model/Quiz';
import { QuizHttpService } from '../modules/home/services/quiz-http.service';
import { ActivatedRoute } from '@angular/router';
import { MatStepper } from '@angular/material/stepper';
import { Answer } from '../../backend-model/Answer';

@Component({
  selector: 'app-solve-quiz',
  templateUrl: './solve-quiz.component.html',
  styleUrl: './solve-quiz.component.css',
})
export class SolveQuizComponent implements OnInit {
  public currentStepCorrectAnswers: Answer[] = [];
  public shouldShowCurrentStepResults: boolean = false;
  public correctQuestionsCounter: number = 0;
  public quizWithAnswersRemoved: Quiz;
  private originalQuiz: Quiz;
  @ViewChild('stepper')
  private stepper: MatStepper;

  constructor(
    private quizHttpService: QuizHttpService,
    private activatedRoute: ActivatedRoute,
  ) {}

  public resetCurrentStepResults(): void {
    this.currentStepCorrectAnswers = [];
    this.shouldShowCurrentStepResults = false;
  }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const quizId = params['quizId'];

      this.quizHttpService.fetchQuizById(quizId).subscribe((quiz) => {
        this.originalQuiz = structuredClone(quiz);

        this.quizWithAnswersRemoved = quiz;
        this.removeAnswers(this.quizWithAnswersRemoved);
      });
    });
  }

  public showCurrentStepResult(): void {
    const currentQuestion =
      this.quizWithAnswersRemoved.questions[this.stepper.selectedIndex];
    const currentQuestionOriginal =
      this.originalQuiz.questions[this.stepper.selectedIndex];

    console.log(currentQuestionOriginal);

    // determine correct answers
    currentQuestion.answers.forEach((answer: Answer, index: number) => {
      if (answer.valid === currentQuestionOriginal.answers[index].valid) {
        this.currentStepCorrectAnswers.push(answer);
      }
    });

    if (
      currentQuestion.answers.length === this.currentStepCorrectAnswers.length
    ) {
      this.correctQuestionsCounter++;
    }

    this.shouldShowCurrentStepResults = true;
  }

  public isAnswerCorrect(answer: Answer): boolean {
    return (
      this.currentStepCorrectAnswers.findIndex((a) => a.id === answer.id) >= 0
    );
  }

  private removeAnswers(quiz: Quiz): void {
    quiz.questions.forEach((question) => {
      question.answers.forEach((answer) => {
        answer.valid = false;
      });
    });
  }
}
