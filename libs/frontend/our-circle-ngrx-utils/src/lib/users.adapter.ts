import { createEntityAdapter, EntityState, Dictionary } from '@ngrx/entity';
import { User } from '@zack-live-stream/auth-utils';

export const usersEntityAdapter = createEntityAdapter<User>({
  selectId: (user) => user.id,
});

export interface UserState extends EntityState<User> {
  // additional entity state properties
  friendIds: Dictionary<boolean>;
  findableFriendIds: Dictionary<boolean>;
  pendingRequestIds: Dictionary<boolean>;
  incomingRequestIds: Dictionary<boolean>;
}

export const usersInitialState: UserState = usersEntityAdapter.getInitialState({
  friendIds: {},
  findableFriendIds: {},
  pendingRequestIds: {},
  incomingRequestIds: {},
});
