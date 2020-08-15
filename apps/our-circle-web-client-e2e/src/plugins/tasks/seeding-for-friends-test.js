const { mongo } = require('./mongo');

module.exports.seedingForFriendsTest = async function seedingForFriendsTest() {
  const userId = (
    await mongo.collection('users').insertOne({
      username: 'test username',
      name: 'test name',
      password: 'test password',
    })
  ).insertedId;
  const friendId = (
    await mongo.collection('users').insertOne({
      name: 'test friend',
      username: 'Test Friend',
      password: 'password',
    })
  ).insertedId;
  const nonFriendId = (
    await mongo.collection('users').insertOne({
      name: 'test non-friend',
      username: 'Not A Friend',
      password: 'password',
    })
  ).insertedId;
  await mongo.collection('friendships').insertOne({
    requester: userId,
    requestee: friendId,
    accepted: 'accepted',
  });
  await mongo.collection('content-posts').insertOne({
    content: 'this should be visible',
    authorId: friendId,
    created: new Date(),
  });
  await mongo.collection('content-posts').insertOne({
    content: 'this should also be visible',
    authorId: userId,
    created: new Date(),
  });
  await mongo.collection('content-posts').insertOne({
    content: 'this should not be visible',
    authorId: nonFriendId,
    created: new Date(),
  });
  return null;
};
