import { User } from '@zack-live-stream/content-post-utils';

export interface AuthState {
  loggedIn: 'not attempted' | 'pending' | 'logged in';
  user: User | null;
}
