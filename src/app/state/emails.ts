import {Email} from '../models/email';

export interface EmailState {
  ids: number[];
  entities: { [id: number]: Email };
  videos: { [id: number]: number[] }
}


const initialState: EmailState = {
  ids: [],
  entities: null,
  videos: null
};
