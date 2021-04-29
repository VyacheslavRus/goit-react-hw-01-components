import React from 'react'
import { friends } from '../data/friends';
import { statistics } from '../data/statistics';
import { transaction } from '../data/transaction';
import { user } from '../data/user';
import FriendList from './friend/FriendList';
import Profile from './profile/Profile';
import StatisticsList from './statistics/StatisticsList';
import TransactionList from './transaction/TransactionList';


const App = () => {
    return (
        <>
            <Profile user={user} />,
            <StatisticsList statistics={statistics} />,
            <FriendList friends={friends} />,
            <TransactionList transaction={transaction} />
        </>
    );
}

export default App;
