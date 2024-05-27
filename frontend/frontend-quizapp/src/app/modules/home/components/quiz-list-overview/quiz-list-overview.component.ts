import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../../../../backend-model/Quiz';
import { QuizHttpService } from '../../services/quiz-http.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list-overview.component.html',
  styleUrl: './quiz-list-overview.component.css',
})
export class QuizListOverviewComponent implements OnInit {
  public quizList: Quiz[];

  constructor(private quizHttpService: QuizHttpService) {}

  ngOnInit(): void {
    this.quizHttpService
      .fetchAllQuiz()
      .subscribe((quizList) => (this.quizList = quizList));
  }

  public test(l: any) {
    console.log(l);
  }
}
