import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListItem, MatListModule} from "@angular/material/list";
import {QuizListOverviewComponent} from "./components/quiz-list-overview/quiz-list-overview.component";



@NgModule({
  declarations: [
    QuizListOverviewComponent
  ],
  imports: [
    MatListModule,
    CommonModule,
  ]
})
export class HomeModule { }
