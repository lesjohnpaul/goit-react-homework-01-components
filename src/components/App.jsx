import React from 'react';
import { Profile } from './Profile/Profile';

import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json'; //IT IS THE DOWNLOADED JSON FORM THE TASK

import user from '../data/user.json';
import avatar from '../images/lespaul.png';

import { FriendList } from './FriendList/FriendList';
import friends from '../data/friends.json'; //IT IS THE DOWNLOADED JSON FORM THE TASK

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json'; //IT IS THE DOWNLOADED JSON FORM THE TASK

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
      <FriendList friends={friends} />
      <Statistics title="Upload Stats" stats={data} />
      <TransactionHistory items={transactions} />
    </>
  );
};
