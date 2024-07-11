import React, { useState } from 'react';
import axios from 'axios';

const UserSearch = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users', { username });
      onSearch(response.data);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          required
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default UserSearch;
