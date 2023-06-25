import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${searchQuery}`
      );
      setUserData(response.data);
    } catch (error) {
      console.error(error);
      setUserData(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a GitHub username"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {userData && (
        <div>
          <h2>{userData.login}</h2>
          <img src={userData.avatar_url} alt="User Avatar" />
          <p>Followers: {userData.followers}</p>
          <p>Repositories: {userData.public_repos}</p>
        </div>
      )}
    </div>
  );
}

export default App;
