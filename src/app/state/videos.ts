import {Video} from '../models/video';
import {PayloadAction} from '../actions/index';
import {
  VIDEO_DELETE_ACTION, VIDEO_UPDATE_ACTION, VIDEOS_ADD_ACTION, VIDEOS_APPEND_ACTION,
  VIDEOS_SET_LOADING_ACTION
} from '../actions/video';
import {createEntityAdapter, EntityState} from '@ngrx/entity';

export interface VideoState extends EntityState<Video> {
  loaded: boolean;
  loading: boolean;
  //
  // messagesLoading: {[id:number]: boolean} // {10: false, 20:true}
  // messagePagesLoaded: {[id:number]: number} // {10: 3, 20: 5}
  // messages: {[id:number]: number[]} // {10: [5, 7, 9], 20: [3, 11]}
}

export const videoAdapter = createEntityAdapter<Video>({
  selectId: video => video.id
});

const initialState: VideoState = videoAdapter.getInitialState({
  loaded: false,
  loading: false
});

export function videoReducer(currentState: VideoState = initialState, action: PayloadAction): VideoState {
  switch (action.type) {
    case VIDEOS_ADD_ACTION:
      // const videos: Video[] = action.payload;
      // const newIds = videos.map(video => video.id);
      // const newEntities = {};
      //
      // videos.forEach(video => {
      //   newEntities[video.id] = video;
      // });
      //
      // return {...currentState, ids: newIds, entities: newEntities};

      return videoAdapter.addAll(action.payload, {...currentState, loading: false, loaded: true});

    case VIDEOS_APPEND_ACTION: {
      // const videos: Video[] = action.payload;
      // const newIds = videos.map(video => video.id);
      // const newEntities = {};
      //
      // videos.forEach(video => {
      //   newEntities[video.id] = video;
      // });
      //
      // return {
      //   ...currentState,
      //   ids: [...currentState.ids, ...newIds],
      //   entities: {...currentState.entities, ...newEntities}
      // };

      return videoAdapter.addMany(action.payload, currentState);
    }
    case VIDEO_DELETE_ACTION: {
      return videoAdapter.removeOne(action.payload, currentState);
    }
    case VIDEOS_SET_LOADING_ACTION: {
      return {...currentState, loading: action.payload};
    }
    case VIDEO_UPDATE_ACTION: {
      return videoAdapter.updateOne({id: action.payload.id, changes: action.payload}, currentState);
    }
    default:
      return currentState;
  }
}

export const _areVideosLoading = (state: VideoState) => state.loading;
export const _areVideosLoaded = (state: VideoState) => state.loaded;

const a = {name: 'suresh', email: 'suresh@gmail.com'};
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
