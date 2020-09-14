import React from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/profile';
import {useAuth0} from '@auth0/auth0-react';

function App() {
  const { isloading } = useAuth0();

  if(isloading) return (<div>Loading...</div>)

  else {
  return (
      <div>
        <LoginButton />
        <LogoutButton/>
        <Profile/>
      </div>
    );
  }
}

export default App;
