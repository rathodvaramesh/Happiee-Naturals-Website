import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}

  userRegistration(user: object): Observable<any> {
    return this.http.post(`/api/signup`, user).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
