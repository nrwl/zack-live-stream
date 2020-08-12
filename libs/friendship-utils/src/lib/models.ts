import { WithId, ObjectId } from 'mongodb';

export type MongoFriendship = WithId<{
  requester: ObjectId;
  requestee: ObjectId;
  accepted: boolean;
}>;
