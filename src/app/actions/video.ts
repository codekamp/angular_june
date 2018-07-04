import {PayloadAction} from './index';
import {Video} from '../models/video';

export const VIDEOS_ADD_ACTION = '[Video] add action';
export const VIDEOS_APPEND_ACTION = '[Video] append action';
export const VIDEO_DELETE_ACTION = '[Video] delete action';

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

export class DeleteVideoAction implements PayloadAction {
  readonly type = VIDEO_DELETE_ACTION;

  constructor(public payload: number) {

  }
}
