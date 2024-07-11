import React, { useState } from 'react';
import UserSearch from './components/UserSearch';
import UserProfile from './components/UserProfile';
import RepoList from './components/RepoList';
import FollowerList from './components/FollowerList';

const App = () => {
  const [user, setUser] = useState(null);
  const [selectedFollower, setSelectedFollower] = useState(null);

  const handleSearch = (userData) => {
    setUser(userData);
    setSelectedFollower(null); // Reset selected follower on new search
  };

  const handleSelectFollower = (followerUsername) => {
    setSelectedFollower(followerUsername);
  };

  return (
    <div>
      <UserSearch onSearch={handleSearch} />
      {user && !selectedFollower && (
        <div>
          <UserProfile user={user} />
          <RepoList username={user.username} />
          <FollowerList username={user.username} onSelectFollower={handleSelectFollower} />
        </div>
      )}
      {selectedFollower && (
        <div>
          <UserSearch onSearch={handleSearch} />
          <RepoList username={selectedFollower} />
        </div>
      )}
    </div>
  );
};

export default App;

