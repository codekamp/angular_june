import {AfterViewChecked, Component, DoCheck, OnInit} from '@angular/core';
import {Video} from '../models/video';
import {VideoManager} from '../managers/video.manager';

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
export class VideosComponent implements OnInit, DoCheck {

  ngDoCheck(): void {
    console.log('VideosComponent checking');
  }

  videos: Video[];

  constructor(private videoManager: VideoManager) {
  }

  ngOnInit() {
    this.videoManager.getVideos().subscribe(videos => this.videos = videos);
  }

  hello() {

  }

}
