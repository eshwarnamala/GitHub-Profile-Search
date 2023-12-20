import React from 'react';

const UserProfile = ({ userData }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <img src={userData.avatar_url} alt="User Avatar" style={{ width: '100px' }} />
        <h3>{userData.name}</h3>
        <p>Username: {userData.login}</p>
        <p>Followers: {userData.followers}</p>
        <p>Following: {userData.following}</p>
        <p>Public Repositories: {userData.public_repos}</p>
        <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
          View Profile
        </a>
      </div>
    </div>
  );
};

export default UserProfile;
