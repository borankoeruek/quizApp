import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizListOverviewComponent } from './components/quiz-list-overview/quiz-list-overview.component';

const routes: Routes = [
  {
    path: '',
    component: QuizListOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
