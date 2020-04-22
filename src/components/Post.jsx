import React from 'react';
import classNames from 'classnames';
import { padded } from '../scss/layout.module.scss';
import { CommentButton } from './Post.module.scss';
import Comment from './Comment';
const Post = ({ post, comments, onGetComments }) => {
  const content = post.loading
    ? 'Loading...'
    : comments && comments.map(comment => <Comment comment={comment} key={comment.id} />);

  return (
    <div className={classNames(padded)}>
      <div>
        <h2>{post.title}</h2>
      </div>
      <div>{post.body}</div>
      {!comments && !post.loading && (
        <div
          className={CommentButton}
          onClick={e => {
            onGetComments(post.id);
          }}
        >
          Comments
        </div>
      )}
      <div>{content}</div>
    </div>
  );
};

export default Post;
