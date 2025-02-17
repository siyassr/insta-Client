import React, { useState } from 'react'
import LeftSide from './LeftSide'
import MiddleSide from './MiddleSide'
import RightSide from './RightSide'

function Home() {

  return (
    <div className='h-screen flex'>
        <div className='leftSide'>
            <LeftSide/>
        </div>

        {/* <div className='flex justify-around'> */}
        <div className='middleside'>
            <MiddleSide/>
        </div>
        <div className='rightside'>
            <RightSide/>
        </div>
        {/* </div> */}
        
    </div>
  )
}

export default Home