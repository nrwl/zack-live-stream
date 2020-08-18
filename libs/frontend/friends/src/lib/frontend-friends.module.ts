import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendListComponent } from './friend-list/friend-list.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './state/user.effects';
import { FriendService } from './friend.service';
import { FindFriendsComponent } from './find-friends/find-friends.component';
import { PendingFriendshipsComponent } from './pending-friendships/pending-friendships.component';
import { IncomingRequestsComponent } from './incoming-requests/incoming-requests.component';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('users', reducer),
    EffectsModule.forFeature([UserEffects]),
    ReactiveComponentModule,
  ],
  providers: [FriendService],
  declarations: [
    FriendListComponent,
    FindFriendsComponent,
    PendingFriendshipsComponent,
    IncomingRequestsComponent,
  ],
  exports: [
    FriendListComponent,
    FindFriendsComponent,
    PendingFriendshipsComponent,
    IncomingRequestsComponent,
  ],
})
export class FrontendFriendsModule {}
