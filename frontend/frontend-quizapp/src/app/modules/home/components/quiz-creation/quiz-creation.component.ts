import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Question } from '../../../../../backend-model/Question';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-quiz-creation',
  templateUrl: './quiz-creation.component.html',
  styleUrl: './quiz-creation.component.css',
})
export class QuizCreationComponent implements OnInit {
  public formGroup: FormGroup;
  public selectedQuestion: Question;
  @ViewChild('addQuestionDialog')
  private addQuestionDialog: TemplateRef<any>;

  constructor(private dialog: MatDialog) {}

  get questionList() {
    return this.formGroup.get('questions')?.value;
  }

  public ngOnInit(): void {
    this.initFormGroup();
  }

  public loadQuestionToSidebar(question: Question): void {
    console.log('load question to sidebar');
  }

  public toggleAddQuestionDialog(show: boolean): void {
    if (show) {
      this.dialog.open(this.addQuestionDialog);
    } else {
      this.dialog.closeAll();
    }
  }

  public createNewQuestion(name: string): void {
    const question = new Question();
    question.name = name;
    this.formGroup.get('questions')?.value.push(question);

    this.toggleAddQuestionDialog(false);
  }

  private initFormGroup(): void {
    this.formGroup = new FormGroup({
      name: new FormControl<string>(''),
      questions: new FormControl<Question[]>([]),
    });
  }
}
