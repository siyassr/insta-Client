import React from 'react'
import UserPage from './UserPage'
import ChatPage from './ChatPage'


function Chat() {
  return (
    <div className='flex'>
        
        <div className='userPage'>

        <UserPage/>
        </div>
        <div className='Chatpage'>

        <ChatPage/>
        </div>
    </div>
  )
}

export default Chat