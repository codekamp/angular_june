import {User} from '../models/user';

export interface AppState {
  user: User;
  sidebarOpen: boolean;
}


const initialState: AppState = {
  user: null,
  sidebarOpen: true
};
