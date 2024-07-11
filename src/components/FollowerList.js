import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FollowerList = ({ username, onSelectFollower }) => {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}/followers`);
        setFollowers(response.data);
      } catch (error) {
        console.error('Error fetching followers:', error);
      }
    };

    fetchFollowers();
  }, [username]);

  return (
    <div>
      <h3>Followers</h3>
      <ul>
        {followers.map((follower) => (
          <li key={follower.id}>
            <button onClick={() => onSelectFollower(follower.login)}>{follower.login}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowerList;
