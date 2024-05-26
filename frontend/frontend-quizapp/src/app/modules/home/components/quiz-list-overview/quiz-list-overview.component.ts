import {Component, Input, OnInit} from '@angular/core';
import {Quiz} from "../../../../../backend-model/Quiz";
import {NgForOf} from "@angular/common";
import {QuizHttpService} from "../../services/quiz-http.service";

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list-overview.component.html',
  styleUrl: './quiz-list-overview.component.css'
})
export class QuizListOverviewComponent implements OnInit{
  constructor(private quizService: QuizHttpService) {
  }

  public quizList: Quiz[];

  ngOnInit(): void {
    this.quizService.fetchAllQuiz().subscribe(quizList => this.quizList = quizList);
  }
}
