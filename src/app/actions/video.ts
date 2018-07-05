import {PayloadAction} from './index';
import {Video} from '../models/video';

export const VIDEOS_SET_LOADING_ACTION = '[Video] set loading action';
export const VIDEOS_ADD_ACTION = '[Video] add action';
export const VIDEOS_APPEND_ACTION = '[Video] append action';
export const VIDEO_DELETE_ACTION = '[Video] delete action';
export const VIDEO_UPDATE_ACTION = '[Video] update action';

export class AddVideosAction implements PayloadAction {
  readonly type = VIDEOS_ADD_ACTION;

  constructor(public payload: Video[]) {

  }
}

export class AppendVideosAction implements PayloadAction {
  readonly type = VIDEOS_APPEND_ACTION;

  constructor(public payload: Video[]) {

  }
}

export class VideosSetLoadingAction implements PayloadAction {
  readonly type = VIDEOS_SET_LOADING_ACTION;

  constructor(public payload: boolean) {

  }
}

// export class MessagesSetLoadingAction implements PayloadAction {
//   readonly type = MESSAGESS_SET_LOADING_ACTION;
//
//   constructor(public payload: {status: boolean, convesationId: number}) {
//
//   }
// }
//
// export class MessagesLoadedAction implements PayloadAction {
//   readonly type = MESSAGESS_SET_LOADING_ACTION;
//
//   constructor(public payload: {messages: Message[], convesationId: number}) {
//
//   }
// }

export class DeleteVideoAction implements PayloadAction {
  readonly type = VIDEO_DELETE_ACTION;

  constructor(public payload: number) {

  }
}

export class VideoUpdateAction {
  readonly type = VIDEO_UPDATE_ACTION;

  constructor(public payload: Video) {

  }
}
