import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { QuizListOverviewComponent } from './components/quiz-list-overview/quiz-list-overview.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [QuizListOverviewComponent],
  imports: [HomeRoutingModule, MatListModule, CommonModule],
})
export class HomeModule {}
