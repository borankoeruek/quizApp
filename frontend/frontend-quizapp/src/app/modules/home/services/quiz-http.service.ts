import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quiz } from '../../../../backend-model/Quiz';
import { Observable } from 'rxjs';
import { Valid } from '../../../../backend-model/Valid';

@Injectable({
  providedIn: 'root',
})
export class QuizHttpService {
  private BACKEND_URL = '/api';

  constructor(private http: HttpClient) {}

  public fetchAllQuiz(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(`${this.BACKEND_URL}/all-quiz`);
  }

  public createQuiz(quiz: Quiz): Observable<void> {
    return this.http.post<void>(`${this.BACKEND_URL}/create-quiz`, quiz);
  }

  public fetchQuizById(quizId: string): Observable<Quiz> {
    return this.http.get<Quiz>(`${this.BACKEND_URL}/quiz/${quizId}`);
  }

  public isQuizNamePossible(quizName: string): Observable<Valid> {
    return this.http.get<Valid>(
      `${this.BACKEND_URL}/quiz/name-check/${quizName}`,
    );
  }
}
