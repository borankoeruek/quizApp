import { Component, Inject } from '@angular/core';
import { Question } from '../../../../../backend-model/Question';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Answer } from '../../../../../backend-model/Answer';

@Component({
  selector: 'app-quiz-answer-creation-dialog',
  templateUrl: './quiz-answer-creation-dialog.component.html',
  styleUrl: './quiz-answer-creation-dialog.component.css',
})
export class QuizAnswerCreationDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<QuizAnswerCreationDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { question: Question },
  ) {}

  public addNewAnswer(answerName: string): void {
    if (!answerName) {
      return;
    }
    const answer = new Answer();
    answer.name = answerName;
    answer.isValid = false;
    this.data.question.answers.push(answer);
  }

  public onClose(): void {
    this.dialogRef.close();
  }
}
