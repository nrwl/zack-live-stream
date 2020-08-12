import { RequestHandler } from 'express';
import { mongo } from '@zack-live-stream/backend/mongo';
import { ObjectId } from 'mongodb';
import {
  MongoContentPost,
  convertToContentPost,
} from '@zack-live-stream/content-post-utils';
import { MongoUser } from '@zack-live-stream/auth-utils';

export const getPostById: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const user = (req as any).user as MongoUser;
  const friends = (req as any).friends as MongoUser[];
  const acceptableAuthorIds = [user].concat(friends).map((user) => user._id);
  const matchingPost = await mongo
    .collection<MongoContentPost>('content-posts')
    .findOne({
      $and: [
        { _id: new ObjectId(id) },
        { $or: acceptableAuthorIds.map((id) => ({ authorId: id })) },
      ],
    });
  if (matchingPost) {
    res.send(convertToContentPost(matchingPost));
  } else {
    res.status(404).send();
  }
};
