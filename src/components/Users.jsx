import React, { useEffect, useContext } from 'react';
import { StateContext } from '../state';
import { getUsers } from '../services';
import User from './User';
import { padded, row } from '../scss/layout.module.scss';

const Users = () => {
  const [{ loading, users }, dispatch] = useContext(StateContext);
  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  return (
    <div className={padded}>
      <div className={row}>
        <h1>Users</h1>
      </div>
      {loading
        ? 'Loading...'
        : users.map(user => {
            return <User user={user} key={user.id}></User>;
          })}
    </div>
  );
};

export default Users;
