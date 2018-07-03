import {VideoState} from './videos';
import {EmailState} from './emails';
import {AppState} from './app';
import {createSelector} from '@ngrx/store';

export interface State {
  videos: VideoState;
  emails: EmailState;
  app: AppState;
}


// naye objects can have purana data, but purane objects can't have new data.


export const getVideoState = (state: State) => state.videos;
export const getEmailState = (state: State) => state.emails;

export const getVideoIds = createSelector(getVideoState,
  (videoState: VideoState) => videoState.ids);


export const getVideoEntities = createSelector(getVideoState, state => state.entities);

export const getEmails = createSelector(getEmailState,
  (emailState: EmailState) =>
    emailState.ids.map(id => emailState.entities[id])
);

export const getEmailVideoIds = createSelector(getEmailState, state => state.videos)

export const getEmailVideos = createSelector(
  getVideoEntities, getEmailVideoIds,
  (videoEntities, emailVideoIds) => {
    // Object.keys(emailVideoIds).map(id => emailVideoIds)
  }
)
