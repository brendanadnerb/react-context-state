import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { StateContext } from '../state';
import { getPosts, getComments } from '../services';
import Post from './Post';
import { row, padded } from '../scss/layout.module.scss';
const Posts = ({ match }) => {
  const [{ loading, posts }, dispatch] = useContext(StateContext);
  const onGetComments = id => {
    getComments(dispatch, id);
  };
  useEffect(() => {
    getPosts(dispatch, match.params.id);
  }, [dispatch, match]);
  return (
    <div className={padded}>
      <div>
        <Link to={'/'}>{'< '}Users</Link>
      </div>
      <div className={row}>
        <h1>Posts</h1>
      </div>
      {loading
        ? 'Loading...'
        : posts.map(post => {
            return <Post post={post} key={post.id} comments={post.comments} onGetComments={id => onGetComments(id)} />;
          })}
    </div>
  );
};

export default Posts;
