import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../../../../backend-model/Quiz';
import { QuizHttpService } from '../../services/quiz-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list-overview.component.html',
  styleUrl: './quiz-list-overview.component.css',
})
export class QuizListOverviewComponent implements OnInit {
  public quizList: Quiz[];

  constructor(
    private quizHttpService: QuizHttpService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.fetchQuizList();
  }

  public fetchQuizList(): void {
    this.quizHttpService
      .fetchAllQuiz()
      .subscribe((quizList) => (this.quizList = quizList));
  }

  public openQuizSolver(quiz: Quiz) {
    this.router.navigate(['/solve', quiz.id]);
  }
}
