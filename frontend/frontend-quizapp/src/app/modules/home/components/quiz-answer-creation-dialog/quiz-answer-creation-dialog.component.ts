import { Component, Input } from '@angular/core';
import { Question } from '../../../../../backend-model/Question';

@Component({
  selector: 'app-quiz-answer-creation-dialog',
  templateUrl: './quiz-answer-creation-dialog.component.html',
  styleUrl: './quiz-answer-creation-dialog.component.css',
})
export class QuizAnswerCreationDialogComponent {
  @Input()
  public question: Question;
}
