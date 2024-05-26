import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizListOverviewComponent } from './quiz-list-overview.component';

describe('QuizListComponent', () => {
  let component: QuizListOverviewComponent;
  let fixture: ComponentFixture<QuizListOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizListOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizListOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
