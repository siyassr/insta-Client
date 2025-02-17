import React from 'react'
import LeftSide from './LeftSide'
import MiddleSide from './MiddleSide'
import RightSide from './RightSide'

function Home() {
  
  return (
    <div className='flex h-screen '>
        <div className='leftSide '>
            <LeftSide/>
        </div>
        <div className='middleside'>
            <MiddleSide/>
        </div>
        <div className='rightside'>
            <RightSide/>
        </div>
    </div>
  )
}

export default Home