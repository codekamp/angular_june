import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {Video} from '../models/video';

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

  videos: Video[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.videos = this.apiService.videos;
    if (!this.videos) {
      this.apiService.getVideos().subscribe(videos => {
        this.videos = videos;
        localStorage.setItem('saved_videos', JSON.stringify(videos));
      });
    }
  }

}
