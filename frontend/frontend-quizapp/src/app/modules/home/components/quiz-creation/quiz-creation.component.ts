import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  get questionList() {
    return this.formGroup.get('questions')?.value;
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
    const questions = this.formGroup.get('questions')?.value;

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

  private initFormGroup(): void {
    this.formGroup = new FormGroup({
      name: new FormControl<string>(''),
      questions: new FormControl<Question[]>([]),
    });
  }
}
