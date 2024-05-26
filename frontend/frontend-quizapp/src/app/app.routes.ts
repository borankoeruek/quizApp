import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {QuizListOverviewComponent} from "./modules/home/components/quiz-list-overview/quiz-list-overview.component";

export const routes: Routes = [{
  path: "", component: QuizListOverviewComponent
}];
