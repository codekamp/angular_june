import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Video} from '../models/video';
import {Store} from '@ngrx/store';
import {areVideosLoaded, areVideosLoading, getVideos, State} from '../state/index';
import {ApiService} from '../services/api.service';
import {AddVideosAction, VideosSetLoadingAction} from '../actions/video';

@Injectable()
export class VideoManager {

  constructor(private store: Store<State>, private apiService: ApiService) {

  }

  public getVideos(): Observable<Video[]> {
    const loading$ = this.store.select(areVideosLoading);
    const loaded$ = this.store.select(areVideosLoaded);

    loading$.combineLatest(loaded$, (loading, loaded) => !loading && !loaded)
      .take(1).filter(v => v).subscribe(() => {
      this.store.dispatch(new VideosSetLoadingAction(true));
      this.apiService.getVideos().subscribe(videos => {
        this.store.dispatch(new AddVideosAction(videos));
      }, () => {
        this.store.dispatch(new VideosSetLoadingAction(false))
      });
    });

    return this.store.select(getVideos);
  }

  public areVideosLoading(): Observable<boolean> {
    return this.store.select(areVideosLoading);
  }
}
