import { UserData } from '../models/user-data';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: "root"
})
export class UserService {
  url = environment.url;
  constructor(private router: Router, private http: HttpClient) { }
  userLogin(user: UserData): Observable<UserData> {
    return this.http
      .post<any>(this.url + "userLogin", user)
      .pipe(catchError(this.handleErrorObservable));
  }

  getAllDetails(): Observable<any> {
    return this.http.get<any>(this.url + 'getAllDetails')
        .pipe(
            catchError(this.handleErrorObservable)
          );
  }


  get userSensorDetailInfo() {
    const user = JSON.parse(localStorage.getItem('machine_data'));
    if (user) {
      debugger
      return user;
    } else {

      return false;
    }

  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return throwError(error);
  }
}
