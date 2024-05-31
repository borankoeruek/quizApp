import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Question } from '../../../../../backend-model/Question';
import { MatDialog } from '@angular/material/dialog';
import { SingleInputDialogComponent } from '../single-input-dialog/single-input-dialog.component';
import { QuizAnswerCreationDialogComponent } from '../quiz-answer-creation-dialog/quiz-answer-creation-dialog.component';
import { QuizHttpService } from '../../services/quiz-http.service';
import { Quiz } from '../../../../../backend-model/Quiz';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-quiz-creation',
  templateUrl: './quiz-creation.component.html',
  styleUrl: './quiz-creation.component.css',
})
export class QuizCreationComponent implements OnInit {
  @Output()
  public createdQuiz: EventEmitter<void> = new EventEmitter<void>();
  public formGroup: FormGroup;
  @ViewChild('stepper')
  private stepper: MatStepper;

  constructor(
    private dialog: MatDialog,
    private quizHttpService: QuizHttpService,
  ) {}

  get questionList(): Question[] {
    return this.formGroup.get('questions')?.value as Question[];
  }

  public ngOnInit(): void {
    this.initFormGroup();
  }

  public openAnswerCreationDialog(question: Question): void {
    this.dialog.open(QuizAnswerCreationDialogComponent, {
      data: {
        question,
      },
    });
  }

  public openAddQuestionDialog(): void {
    const dialogRef = this.dialog.open(SingleInputDialogComponent, {
      data: {
        title: 'Add question',
        inputLabel: 'Name',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.createNewQuestion(result);
      }
    });
  }

  public createNewQuestion(name: string): void {
    const question = new Question();
    question.name = name;
    question.answers = [];
    this.formGroup.get('questions')?.value.push(question);
  }

  public saveCreatedQuiz(): void {
    const name = this.formGroup.get('name')?.value;
    const questions = this.questionList;

    const quiz = new Quiz();
    quiz.name = name;
    quiz.questions = questions;
    this.quizHttpService.createQuiz(quiz).subscribe({
      next: () => {
        this.createdQuiz.emit();
        this.stepper.reset();
      },
      error: (err) => {
        console.log('Got a error while creating a new quiz', err);
      },
    });
  }

  public atLeastTwoQuestionsCreated(): boolean {
    if (this.questionList?.length === 0) {
      return false;
    }
    return this.questionList.every(
      (question: Question) => question.answers.length >= 2,
    );
  }

  private initFormGroup(): void {
    // TODO: It should be an form array but to keep it simple i continue it like this and add a custom validation
    this.formGroup = new FormGroup({
      name: new FormControl<string>('', Validators.required),
      questions: new FormControl<Question[]>([]),
    });
  }
}
