import { User } from '@zack-live-stream/auth-utils';

export interface AuthState {
  loggedIn: 'not attempted' | 'pending' | 'logged in';
  user: User | null;
}
