import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  authenticateUser(user: object): Observable<any> {
    return this.http
      .post(`/api/login`, user)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}
