import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div>
      <img src={user.avatar_url} alt={`${user.username}'s avatar`} />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <p>Location: {user.location}</p>
      <p>Public Repos: {user.public_repos}</p>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
    </div>
  );
};

export default UserProfile;
