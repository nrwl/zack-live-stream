import { WithId, ObjectId } from 'mongodb';

export interface User {
  id: string;
  name: string;
  // profilePictureUrl: string;
  // bio: string;
}

export type MongoUser = WithId<{
  name: string;
  username: string;
  password: string;
}>;

export type MongoAccessToken = WithId<{
  userId: ObjectId;
  accessToken: string;
  createdAt: Date;
}>;

export interface LoginRequestBody {
  username: string;
  password: string;
}

export type LoginResponseBody =
  | {
      result: 'error';
      reason: string;
    }
  | {
      result: 'success';
      accessToken: string;
      user: User;
    };
