import React from "react";
import { ProfyleStyles } from "./ProfileStyles";
import PropTypes from 'prop-types'

const Profile = ({ user }) => {
  const {
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user;
  return (
    <ProfyleStyles>
      <div className="description">
        <img src={avatar} alt={name} className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
        <ul className="stats">
          <li>
            <span className="label">Followers</span>
            <span className="quantity">{followers}</span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="quantity">{views}</span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="quantity">{likes}</span>
          </li>
        </ul>
      </div>
    </ProfyleStyles>
  );
};

export default Profile;

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.shape({
      avatar: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    })
  }).isRequired
};