import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { QuizListOverviewComponent } from './components/quiz-list-overview/quiz-list-overview.component';
import { HomeRoutingModule } from './home-routing.module';
import { QuizCreationComponent } from './components/quiz-creation/quiz-creation.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { QuizAnswerCreationDialogComponent } from './components/quiz-answer-creation-dialog/quiz-answer-creation-dialog.component';
import { SingleInputDialogComponent } from './components/single-input-dialog/single-input-dialog.component';

@NgModule({
  declarations: [
    QuizListOverviewComponent,
    QuizCreationComponent,
    QuizAnswerCreationDialogComponent,
    SingleInputDialogComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatInputModule,
    MatStepperModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
  ],
})
export class HomeModule {}
