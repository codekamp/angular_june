import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {

  }

  login(username: string, password: string): Observable<Object> {
    return this.http.get(
      'https://api.invidz.com/api/authenticate',
      {
        params: {
          email: username,
          password: password
        }
      })
  }

  getVideos(): Observable<Object> {
    const token = localStorage.getItem('USER_TOKEN');
    return this.http.get('https://api.invidz.com/api/videos', {
      headers: {Authorization: 'bearer ' + token}
    })
  }
}
