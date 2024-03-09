import React from 'react';
import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import avatar from '../images/lespaul.png';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={avatar}
        stats={user.stats}
      />
    </>
  );
};
