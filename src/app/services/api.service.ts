import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LoginResponse} from '../models/login-response';
import {Video} from '../models/video';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {

  }

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.get<LoginResponse>(
      'https://api.invidz.com/api/authenticate',
      {
        params: {
          email: username,
          password: password
        }
      });
  }

  getVideos(): Observable<Video[]> {
    const token = localStorage.getItem('USER_TOKEN');
    return this.http.get<{data: Video[]}>('https://api.invidz.com/api/videos', {
      headers: {Authorization: 'bearer ' + token}
    }).map(res => res.data);
  }
}
