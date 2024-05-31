import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizListOverviewComponent } from './components/quiz-list-overview/quiz-list-overview.component';
import { SolveQuizComponent } from './components/solve-quiz/solve-quiz.component';

const routes: Routes = [
  {
    path: '',
    component: QuizListOverviewComponent,
  },
  {
    path: 'solve/:quizId',
    component: SolveQuizComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
