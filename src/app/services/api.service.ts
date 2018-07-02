import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LoginResponse} from '../models/login-response';
import {Video} from '../models/video';

@Injectable()
export class ApiService {

  videos: Video[];

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
    }).map(res => res.data).do(videos => this.videos = videos);
  }

  // state - big json object which stores all the data that need to be presisted
  // ... in one central location. we define the structure of state by
  // ... defining an interface

  // store - manages state. we will never touch state directly. Instead we will
  // ... use store to read and write data from state. This comes from ngrx lib.

  // actions - classes whose objects are given to store to update the state.
  // contains payload?:any and type:string. Whenever you want to change the state
  // ... make and object of appropriate action and dispatch it to store.
  // store.dispatch(action);

  // selectors - functions used to retrieve data from state. takes whole
  // ... state object in param and return appropriate data from it.
  // ... we define selector functions but never call/execute them.
  // store.select(getVideos); Observable<Video[]>
  // store.select(isSidebarOpen); Observable<boolean>


  // reducers - a function used to map actions to state changes. We give
  // ... reducer to Store in the begining. Whenever any action is
  // ... dispatched Store calls the reuducer with current
  // ... state and dispatched action in parameter. Reducer returns new state.
  // reducer is a pure and immutating function.

  // https://egghead.io/courses/getting-started-with-redux
  // https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0



}

const getVideos = state => state.videos;
const isSidebarOpen = state => state.sidebarOpen;
