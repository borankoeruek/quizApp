import { Component, OnInit, ViewChild } from '@angular/core';
import { Quiz } from '../../../../../backend-model/Quiz';
import { QuizHttpService } from '../../services/quiz-http.service';
import { ActivatedRoute } from '@angular/router';
import { MatStepper } from '@angular/material/stepper';
import { Answer } from '../../../../../backend-model/Answer';

@Component({
  selector: 'app-solve-quiz',
  templateUrl: './solve-quiz.component.html',
  styleUrl: './solve-quiz.component.css',
})
export class SolveQuizComponent implements OnInit {
  public currentStepCorrectAnswers: Answer[] = [];
  public resettedQuiz: Quiz;
  private originalQuiz: Quiz;
  @ViewChild('stepper')
  private stepper: MatStepper;

  constructor(
    private quizHttpService: QuizHttpService,
    private activatedRoute: ActivatedRoute,
  ) {}

  get shouldShowResults(): boolean {
    return this.currentStepCorrectAnswers.length > 0;
  }

  public resetShowedResults(): void {
    this.currentStepCorrectAnswers = [];
  }

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const quizId = params['quizId'];

      this.quizHttpService.fetchQuizById(quizId).subscribe((quiz) => {
        this.resettedQuiz = quiz;
        this.removeAnswers(this.resettedQuiz);
        this.originalQuiz = structuredClone(quiz);
      });
    });
  }

  public showResult(): void {
    const currentQuestion =
      this.resettedQuiz.questions[this.stepper.selectedIndex];
    const currentQuestionOriginal =
      this.originalQuiz.questions[this.stepper.selectedIndex];

    // determine correct answers
    currentQuestion.answers.forEach((answer: Answer, index: number) => {
      if (answer.isValid === currentQuestionOriginal.answers[index].isValid) {
        this.currentStepCorrectAnswers.push(answer);
      }
    });
  }

  public isAnswerCorrect(answer: Answer): boolean {
    return (
      this.currentStepCorrectAnswers.findIndex((a) => a.id === answer.id) >= 0
    );
  }

  private removeAnswers(quiz: Quiz): void {
    quiz.questions.forEach((question) => {
      question.answers.forEach((answer) => {
        answer.isValid = false;
      });
    });
  }
}
