import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {Video} from '../models/video';
import {Store} from '@ngrx/store';
import {getVideos, State} from '../state/index';
import {Observable} from 'rxjs/Observable';
import {AddVideosAction} from '../actions/video';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styles: [`
    :host {
      padding: 10px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }

    app-video-card, span {
      width: 200px;
      margin: 5px;
    }
  `]
})
export class VideosComponent implements OnInit {

  videos: Video[];

  constructor(private apiService: ApiService, private store: Store<State>) {
  }

  ngOnInit() {
    const videos$ = this.store.select(getVideos);

    videos$.take(1).subscribe(videos => {
      console.log('videos in store', videos);
      if (videos.length === 0) {
        this.apiService.getVideos().subscribe(videos => {
          this.store.dispatch(new AddVideosAction(videos));
        });
      }
    });

    videos$.subscribe(videos => this.videos = videos);
  }

}
