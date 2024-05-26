import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Quiz} from "../../../../backend-model/Quiz";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuizHttpService {
  private BACKEND_URL = "http://localhost:8080";

  constructor(private http: HttpClient) {
  }

  public fetchAllQuiz(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(`${this.BACKEND_URL}/all-quiz`);
  }
}
