import React from 'react';
import './App.css';
import UserProfile from './components/UserProfile';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rando User Profiles</h1>
      </header>
        <div className="UserRow">
          <UserProfile />
          <UserProfile />
          <UserProfile />
        </div>
        <div className="UserRow">
          <UserProfile />
          <UserProfile />
          <UserProfile />
        </div>
        <div className="UserRow">
          <UserProfile />
          <UserProfile />
          <UserProfile />
        </div>
    </div>
  );
}

export default App;
