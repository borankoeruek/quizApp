import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAnswerCreationDialogComponent } from './quiz-answer-creation-dialog.component';

describe('QuizAnswerCreationDialogComponent', () => {
  let component: QuizAnswerCreationDialogComponent;
  let fixture: ComponentFixture<QuizAnswerCreationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizAnswerCreationDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizAnswerCreationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
