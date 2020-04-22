import React from 'react';
import { padded } from '../scss/layout.module.scss';
const Comment = ({ comment }) => {
  const { name, email, body } = comment;
  return (
    <div className={padded}>
      <div>
        <h4>{name}</h4>
      </div>
      <div>{email}</div>
      <div>{body}</div>
    </div>
  );
};

export default Comment;
