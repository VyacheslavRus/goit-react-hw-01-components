import React from "react";
import { FriendsListItemStyled } from "./FriendListItemStyles";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendsListItemStyled isOnline={isOnline}>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </FriendsListItemStyled>
  );
};

export default FriendListItem;
