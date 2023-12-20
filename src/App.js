import React, { useState } from 'react';
import axios from 'axios';
import ProfileSearch from './components/profilesearch';
import UserProfile from './components/userprofile';

function App() {
  const [userData, setUserData] = useState(null);

  const searchProfile = async (username) => {
    try {
      const response = await axios.get(`https://beaded-spotted-helicopter.glitch.me/github-profiles/${username}`);
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setUserData(null);
    }
  };

  return (
    <div
      style={{
        backgroundColor:'peach',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}>
    
    <div className="App">
      <h1>Github Profile Search</h1>
      <ProfileSearch searchProfile={searchProfile} />
      {userData && <UserProfile userData={userData} />}
    </div>
    </div>
  );
}

export default App;
