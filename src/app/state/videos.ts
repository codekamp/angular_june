import {Video} from '../models/video';
import {PayloadAction} from '../actions/index';
import {VIDEO_DELETE_ACTION, VIDEOS_ADD_ACTION} from '../actions/video';

export interface VideoState {
  ids: number[];
  entities: { [id: number]: Video };
}

const initialState: VideoState = {
  ids: [],
  entities: null,

};

function videoReducer(currentState: VideoState, action: PayloadAction): VideoState {
  switch (action.type) {
    case VIDEOS_ADD_ACTION:
      const videos: Video[] = action.payload;
      const newIds = videos.map(video => video.id);
      const newEntities = {};

      videos.forEach(video => {
        newEntities[video.id] = video;
      });

      return {...currentState, ids: newIds, entities: newEntities};
    case VIDEO_DELETE_ACTION:
      const videoId: number = action.payload;
      return null;
    default:
      return currentState;
  }
}

// const a = {name: 'suresh', email: 'suresh@gmail.com'};
// const b = {hometown: 'meerut', email: 'ramesh@yahoo.com'};
//
// const c = {a, b}; // {a: a, b: b}
// const d = {hello: a, world: b};
// const e = {hello: a, b};
// const f = {...a, b};
// const g = {a, ...b};
// const h = {...b, ...a};
// const i = {...a, hello: 'I Love Angular', name: 'Jignesh'};
//
//
// const a1 = [10, 20, 30];
// const b1 = [1, 2, 3, 4, 5, 30];
//
// const c1 = [a1, b1];
// const d1 = [b1, a1];
// const e1 = [...a1, b1];
// const f1 = [...a1, ...b1];
