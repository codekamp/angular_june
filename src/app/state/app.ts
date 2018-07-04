import {User} from '../models/user';
import {PayloadAction} from '../actions/index';

export interface AppState {
  user: User;
  sidebarOpen: boolean;
}


const initialState: AppState = {
  user: null,
  sidebarOpen: true
};

export function appReducer(currentState: AppState, action: PayloadAction): AppState {
  return currentState;
}
