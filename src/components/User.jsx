import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { UserContainer } from './User.module.scss';
import { row, column } from '../scss/layout.module.scss';
const User = ({ user }) => {
  const { address, company, email, id, name, phone, username, website } = user;
  return (
    <div className={classNames(UserContainer, row)}>
      <div className={column}>
        <h2>
          <div>{username}</div>
        </h2>
        <Link to={`/posts/${encodeURIComponent(id)}`}>Posts</Link>
      </div>
      <div className={column}>
        <h4>Details</h4>
        <div>{name}</div>
        <div>{phone}</div>
        <div>{website}</div>
        <div>{`${address.city}, ${address.zipcode}`}</div>
        <div>{email}</div>
      </div>
      <div className={column}>
        <h4>Company</h4>
        <div>{company.name}</div>
        <div>{company.catchPhrase}</div>
      </div>
    </div>
  );
};

export default User;
