import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Video} from '../models/video';
import {VideoManager} from '../managers/video.manager';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

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
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideosComponent implements OnInit {


  videos: Video[];

  searchControl: FormControl;

  constructor(private videoManager: VideoManager, private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit() {
    const videos$ = this.videoManager.getVideos();

    const search$ = this.searchControl.valueChanges.debounceTime(100).distinctUntilChanged() as Observable<string>;

    videos$.combineLatest(search$, (videos: Video[], keyword: string) =>
      videos.filter(video => video.title.indexOf(keyword) !== -1)
    ).subsribe(videos => this.videos = videos);
  }

  hello() {

  }

}
