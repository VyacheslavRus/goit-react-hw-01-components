import React from 'react'
import FriendListItem from './FriendListItem';
import { FriendListStyled } from './FriendListStyles';

const FriendList = ({ friends }) => {
    return (
        <FriendListStyled>
            {friends.map((friend) => (
                <FriendListItem {...friend} key={friend.id} />
            ))}
        </FriendListStyled>
    );
}

export default FriendList;