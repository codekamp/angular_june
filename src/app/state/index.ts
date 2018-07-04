import {_getVideos, videoReducer, VideoState} from './videos';
import {emailReducer, EmailState} from './emails';
import {appReducer, AppState} from './app';
import {ActionReducerMap, createSelector} from '@ngrx/store';

export interface State {
  videos: VideoState;
  emails: EmailState;
  app: AppState;
}


// naye objects can have purana data, but purane objects can't have new data.

export const reducers: ActionReducerMap<State> = {
  videos: videoReducer,
  emails: emailReducer,
  app: appReducer
};

export const getVideoState = (state: State) => state.videos;

export const getVideos = createSelector(getVideoState, _getVideos);



// GET - /conversations - list of converations. pagination. limit=10, offset/page
// POST - /conversations - data to create new converastion
// GET - /conversations/{convId} - return individual conversation data
// DELETE - /conversations/{convId} - Delete convId conversation
// PUT/PATCH - /conversations/{convId} - update convId conversation



// GET - conversations/{convId}/messages - list of messages
// POST - conversations/{convId}/messages - Add new message
// GET - /message/{msgId} - return individual message
// DELETE - /message/{msgId} - Delete msgId message
// PUT/PATCH - /message/{msgId} - Update msgId message
