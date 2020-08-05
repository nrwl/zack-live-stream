import { WithId, ObjectId } from 'mongodb';

export interface ContentPost {
  id: string;
  content: string;
  authorId: string;
  created: Date;
}

export interface CreateContentPostRequestBody {
  content: string;
}

export type MongoContentPost = WithId<{
  content: string;
  authorId: ObjectId;
  created: Date;
}>;

export const convertToContentPost = (
  mongoContentPost: MongoContentPost
): ContentPost => ({
  id: mongoContentPost._id.toHexString(),
  content: mongoContentPost.content,
  authorId: mongoContentPost.authorId.toHexString(),
  created: mongoContentPost.created,
});
