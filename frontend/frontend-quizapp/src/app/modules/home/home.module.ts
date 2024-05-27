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
import { MatDialogActions, MatDialogContent } from '@angular/material/dialog';

@NgModule({
  declarations: [QuizListOverviewComponent, QuizCreationComponent],
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
  ],
})
export class HomeModule {}
