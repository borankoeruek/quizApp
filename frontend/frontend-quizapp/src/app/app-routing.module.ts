import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolveQuizComponent } from './solve-quiz/solve-quiz.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'solve/:quizId',
    component: SolveQuizComponent,
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
