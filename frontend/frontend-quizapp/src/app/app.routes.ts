import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {QuizListComponent} from "../quiz-list/quiz-list.component";

export const routes: Routes = [{
  path: "", component: QuizListComponent
}];
