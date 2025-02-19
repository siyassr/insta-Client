import React from 'react';
import { useLocation } from 'react-router-dom';
import LeftSide from './LeftSide';
import MiddleSide from './MiddleSide';
import RightSide from './RightSide';
import Chat from './Chat';
import Profile from './Profile';

function Home() {
  const location = useLocation();

  return (
    <div className='h-screen flex'>
      <div className='leftSide'>
        <LeftSide />
      </div>

      {location.pathname === "/chat" ? (
        <div className='flex justify-center w-full'>
          <Chat />
        </div>
      ) : location.pathname === "/profile" ? (
        <div className='flex justify-center w-full'>
          <Profile />
        </div>
      ) : (
        <>
          <div className='middleside'>
            <MiddleSide />
          </div>
          <div className='rightside'>
            <RightSide />
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
