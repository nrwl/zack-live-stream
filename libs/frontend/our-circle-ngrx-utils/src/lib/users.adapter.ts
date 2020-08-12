import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { User } from '@zack-live-stream/auth-utils';

export const usersEntityAdapter = createEntityAdapter<User>({
  selectId: (user) => user.id,
});

export const usersInitialState: EntityState<User> = usersEntityAdapter.getInitialState();
